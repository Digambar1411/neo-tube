import { BigHorizontalCard } from "../../components/index";
import { useLikedVideos } from "../../contexts";

export function LikedVideos() {
	const { likedVideos } = useLikedVideos();

	return (
		<>
			{likedVideos.length ? (
				likedVideos.map((video) => {
					return <BigHorizontalCard video={video} key={video._id} />;
				})
			) : (
				<p>you haven't liked any video's yet</p>
			)}
		</>
	);
}