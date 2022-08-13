import {Navbar , Sidebar, BigHorizontalCard} from "../../components/index";
import "./watchLater.css";
import { useWatchLaterVideos } from "../../contexts";

export function WatchLater(){
    const { watchLaterVideos} = useWatchLaterVideos();

    return(
        <>
            <div className="container">
                <Navbar />
                <div className="likes-page">
                    <Sidebar />
                    <div className="liked-videos-container">
                    { watchLaterVideos.length ? watchLaterVideos.map(video=>{
                        return(
                        <BigHorizontalCard video={video} key={video._id}/>
                        )
                        })
                        : 
                        <p>you haven't added any videos yet</p>
                    }
                    </div>
                </div>
            </div>
        </>
    )
}