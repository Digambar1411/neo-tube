import {Navbar , Sidebar, BigHorizontalCard} from "../../components/index";
import "./likes.css";
import { useLikedVideos } from "../../contexts";

export function LikedVideos(){
    const { likedVideos} = useLikedVideos();
    
    return(
        <>
            <div className="main-container">
                <Navbar />
                <div className="likes-page">
                    <div className="sidebar-container">
                        <Sidebar />
                    </div>
                    <div className="cards-container flex-col-no-wrap">
                    { likedVideos.length ? likedVideos.map(video=>{
                        return(
                        <BigHorizontalCard video={video} key={video._id}/>  
                        )
                        })
                        : 
                        <p>you haven't liked any video's yet</p>
                    }
                    </div>
                </div>
            </div>
        </>
    )
}