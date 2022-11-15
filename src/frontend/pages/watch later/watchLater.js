import { BigHorizontalCard } from "../../components/index";
import { useWatchLaterVideos } from "../../contexts";

export function WatchLater() {
	const { watchLaterVideos } = useWatchLaterVideos();

	return (
		<>
			{watchLaterVideos.length ? (
				watchLaterVideos.map((video) => {
					return <BigHorizontalCard video={video} key={video._id} />;
				})
			) : (
				<p>you haven't added any videos yet</p>
			)}
		</>
	);
}
