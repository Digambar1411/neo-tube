import { BigHorizontalCard } from "../../components/index";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts";
import { getSinglePlaylists } from "../../services/playList service";
import "./playlistDetails.css";
import { useParams } from "react-router-dom";

export const PlaylistDetails = () => {
	const { selectedPlaylistId } = useParams();
	const {
		stateAuth: { token, isLoggedIn },
	} = useAuth();
	const [playlist, setPlaylist] = useState([]);

	useEffect(() => {
		console.log(selectedPlaylistId);
		getVideosFromSelectedPlaylist();
	}, []);

	const getVideosFromSelectedPlaylist = async () => {
		try {
			const response = await getSinglePlaylists(selectedPlaylistId, token);
			console.log(response);
			if (response !== undefined) {
				setPlaylist(response.data.playlist);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="playlist-title">{playlist.title}</div>
			{playlist &&
				playlist.videos?.map((video) => {
					return <BigHorizontalCard video={video} key={video._id} />;
				})}
		</>
	);
};