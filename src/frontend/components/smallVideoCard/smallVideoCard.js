import Moment from "react-moment";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { removeFromWatch, addToWatch } from "../../services/";
import { useWatchLaterVideos, useAuth } from "../../contexts";
import "./smallVideoCard.css";
import { PlaylistModal } from "../playlistModal/playlistModal";

const SmallVideoCard = ({ video }) => {
	const { _id, title, views, creator, channelProfile, uploadedAt, thumbnail } =
		video;
	const { watchLaterVideos, setWatchLaterVideos } = useWatchLaterVideos();
	const {
		stateAuth: { token, isLoggedIn },
	} = useAuth();
	const navigate = useNavigate();

	const [showModal, setShowModal] = useState(false);
	const isInWatchLater = watchLaterVideos.find((watchLaterVideo) =>
		watchLaterVideo._id === video._id ? true : false
	);
	const [playlistModal, setPlaylistModal] = useState(false);

	const toggleModal = () => {
		setShowModal((showModal) => !showModal);
	};

	const togglePlaylistModal = () => {
		setPlaylistModal((playlistModal) => !playlistModal);
	};

	const addToWatchLaterVideos = async () => {
		if (isLoggedIn) {
			try {
				const response = await addToWatch(video, token);
				console.log(response);
				if (response.status === 201) {
					setWatchLaterVideos(response.data.watchlater);
				}
			} catch (error) {
				console.log(error);
			}
		} else {
			navigate("/login");
		}
	};

	const removeFromWatchLaterVideos = async () => {
		if (isLoggedIn) {
			try {
				const response = await removeFromWatch(video._id, token);
				if (response.status === 200) {
					setWatchLaterVideos(response.data.watchlater);
				}
			} catch (error) {
				console.error(error);
			}
		} else {
			navigate("/login");
		}
	};

	return (
		<>
			<div className="video-card flex-col">
				<div
					className="card-image"
					onClick={() => navigate(`/video-listing/${_id}`)}
				>
					<img className="thumbnail-img" src={thumbnail} />
				</div>

				<section className="video-info-container">
					<div>
						<img
							className="owner-profile"
							src={`https://yt3.ggpht.com/${channelProfile}`}
						/>
					</div>

					<div className="video-details">
						<div className="title">{title}</div>
						<section className="sub-details">
							<div className="owner-name gray-500">{creator}</div>
							{/* <section className="other-details"> */}
								<span className="gray-500 views">
									<span className="material-icons separator gray-500">
										fiber_manual_record
									</span>
									{views} views
								</span>
								<span className="validity">
									<span className="material-icons separator gray-500 ">
										fiber_manual_record
									</span>
									<Moment fromNow className="gray-500">
										{uploadedAt}
									</Moment>
								</span>
							{/* </section> */}
						</section>
					</div>

					{showModal && (
						<div className="modal" onMouseLeave={() => setShowModal(false)}>
							{isLoggedIn && isInWatchLater ? (
								<div className="menu-item" onClick={removeFromWatchLaterVideos}>
									<span className="material-icons md-24">watch_later</span>
									<div>Remove from Watch Later</div>
								</div>
							) : (
								<div className="menu-item" onClick={addToWatchLaterVideos}>
									<span className="material-icons-outlined md-24">
										watch_later
									</span>
									<div>Save to Watch Later</div>
								</div>
							)}

							<div
								className="menu-item"
								onMouseLeave={() => setShowPlaylistModal(false)}
								onClick={() =>
									isLoggedIn ? togglePlaylistModal() : navigate("/login")
								}
							>
								<span className="material-icons-outlined md-28">
									playlist_play
								</span>
								<div>Add to playlist</div>
							</div>
						</div>
					)}

					<span className="material-icons-outlined more-icon" onClick={toggleModal}>
						more_vert
					</span>

					{playlistModal && <PlaylistModal video={video} />}
				</section>
			</div>
		</>
	);
};

export { SmallVideoCard };
