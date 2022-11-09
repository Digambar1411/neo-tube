import {Navbar , Sidebar, BigHorizontalCard} from "../../components/index";
import "./watchLater.css";
import { useWatchLaterVideos } from "../../contexts";

export function WatchLater(){
    const { watchLaterVideos} = useWatchLaterVideos();

    return(
        <>
            <div className="main-container">
                <Navbar />
                <div className="likes-page">
                    <div className="sidebar-container"> 
                        <Sidebar />
                     </div>
                    <div className="cards-container flex-col-no-wrap">
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