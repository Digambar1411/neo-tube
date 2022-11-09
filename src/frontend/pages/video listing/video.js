import { useParams } from "react-router-dom";
import {
	SmallHorizontalVideoCard,
	PlayCard,
} from "../../components";
import "./video.css";
import { useEffect, useState } from "react";
import axios from "axios";

export function VideoListing() {
	const { id } = useParams();

	const [selectedVideo, setSelectedVideo] = useState([]);
	const [suggestionVideos, setSuggestionVideos] = useState([]);

	useEffect(() => {
		const getSingleVideo = async () => {
			try {
				const response = await axios.get(`/api/video/${id}`);
				setSelectedVideo(response.data.video);
			} catch (error) {
				console.log(error);
			}
		};
		getSingleVideo();
	}, [id]);

	useEffect(() => {
		const getSuggestionVideos = async () => {
			try {
				const response = await axios.get("/api/videos");
				setSuggestionVideos(
					response.data.videos.filter(
						(video) =>
							video._id !== id && video.creator === selectedVideo.creator
					)
				);
			} catch (error) {
				console.log(error);
			}
		};
		getSuggestionVideos();
	}, [selectedVideo, suggestionVideos]);

	return (
		<>
			<div className="single-video-page">
				<PlayCard video={selectedVideo} />

				<div className="suggested-videos-container flex-col">
					<div>videos you may like..</div>
					{suggestionVideos &&
						suggestionVideos.map((video) => (
							<SmallHorizontalVideoCard key={video._id} video={video} />
						))}
				</div>
			</div>
		</>
	);
}
