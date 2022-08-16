import {Navbar , Sidebar, BigHorizontalCard} from "../../components/index";
import "./likes.css";
import { useLikedVideos } from "../../contexts";

export function LikedVideos(){
    const { likedVideos} = useLikedVideos();
    
    return(
        <>
            <div className="container">
                <Navbar />
                <div className="likes-page">
                    <Sidebar />
                    <div className="liked-videos-container">
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