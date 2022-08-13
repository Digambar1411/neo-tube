import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import "./bigHorizontalVideoCard.css";
import { addToLikeService , removeFromLikeService, addToWatch, removeFromWatch} from "../../services/"
import { useLikedVideos , useAuth, useWatchLaterVideos} from "../../contexts"

const BigHorizontalCard =({video})=>{

    const navigate= useNavigate();
    const { stateAuth:{token, isLoggedIn}}= useAuth();
    const { likedVideos, setLikedVideos} = useLikedVideos();
    const { watchLaterVideos,setWatchLaterVideos }= useWatchLaterVideos();

     const [showModal, setShowModal] = useState(false);

    const toggleModal=()=>{
        setShowModal((showModal)=>!showModal)
    }

    const isInWatchLater = watchLaterVideos.find(watchLaterVideo=>watchLaterVideo._id===video._id ? true : false)
    const isInLikedVideos = likedVideos.find(likedVideo=>likedVideo._id===video._id ? true : false)

    
    const addToWatchLaterVideos = async()=>{
        if(isLoggedIn){
            try{
                const response = await addToWatch(video,token)
                console.log(response)
                if(response.status===201){
                    setWatchLaterVideos(response.data.watchlater)
                }
        
            }catch(error){
                console.log(error);
            }

        }else{
            navigate("/login")
        }
           
    }

    const addToLikedVideos = async()=>{

        try{
            const response = await addToLikeService(video, token)
            if(response.status===201){
                setLikedVideos(response.data.likes)
            }
        }
        catch(error){
            console.error(error)
        }
    }

    const removeFromLikedVideos =async()=>{
        try{
            const response = await removeFromLikeService(video._id, token) 
            if(response.status===200){
                setLikedVideos(response.data.likes)
            }
        }
        catch(error){
            console.error(error)
        }
    };

    const removeFromWatchLaterVideos = async()=>{
        if(isLoggedIn){
            try{
                const response = await removeFromWatch(video._id, token)
                if(response.status===200){
                    setWatchLaterVideos(response.data.watchlater)
                }
            }catch(error){
                console.error(error)
            }

        }else{
            navigate("/login")
        }
        
    }
    
    return(
        <div className='big-hz-video-card flex-row' >
                <img className='big-card-thumbnail' src={`https://img.youtube.com/vi/${video._id}/maxresdefault.jpg`}
                    onClick={()=>navigate(`/video-listing/${video._id}`)}/>
                <div className='big-card-video-details flex-col mg-left-8px'>
                    <div className="sm-card-title">{video.title}</div>
                    <div className='sm-card-creator light-font'>{video.creator}</div>
                </div>
                
                <span className="material-icons-outlined" onClick={toggleModal}>
                    more_vert
                </span>

        
        { showModal && 
            <div className="modal">
                <div className="menu-item">
                    <span className="material-icons-outlined md-28">
                        playlist_play
                    </span>
                    <div>Add to playlist</div>
                </div>

                {isInLikedVideos ?
                    <div className="menu-item" onClick={removeFromLikedVideos}>
                        <span className="material-icons-outlined md-28">
                            delete
                        </span>
                        <div>Remove from Liked videos</div>
                    </div> : 

                    <div className="menu-item" onClick={addToLikedVideos}>
                        <span className="material-icons-outlined md-28">
                            thumb_up
                        </span>
                        <div>Add to Liked videos</div>
                    </div>

                }

                {isInWatchLater ?
                    <div className="menu-item" onClick={removeFromWatchLaterVideos}>
                        <span className="material-icons md-28">
                            watch_later
                        </span>
                        <div>Remove from Watch Later</div>
                    </div>
                    :
                    <div className="menu-item" onClick={addToWatchLaterVideos}>
                        <span className="material-icons-outlined md-28">
                            watch_later
                        </span>
                        <div>Save to Watch Later</div>
                    </div>
                }
                
            </div>  
        }

        </div>
    )
}

export {BigHorizontalCard}