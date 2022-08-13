import Moment from 'react-moment';
import { useState } from 'react';
import { useNavigate} from "react-router-dom"
import { removeFromWatch, addToWatch} from "../../services/"
import {useWatchLaterVideos,useAuth} from "../../contexts"
import "./smallVideoCard.css";

const SmallVideoCard =({video})=>{
    const { _id, title, views, creator, channelProfile, uploadedAt} = video;
    const { watchLaterVideos,setWatchLaterVideos }= useWatchLaterVideos();
    const { stateAuth:{token, isLoggedIn}}= useAuth();
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);

    const isInWatchLater = watchLaterVideos.find(watchLaterVideo=>watchLaterVideo._id===video._id ? true : false)

    const toggleModal=()=>{
        setShowModal((showModal)=>!showModal)
    }

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
        <>
            <div className="video-card flex-col">
                <div className="card-image" onClick={()=>navigate(`/video-listing/${_id}`)}>
                    <img className="thumbnail-img" src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`} />
                </div>

                <section className="video-info-container">
                    <div>
                        <img className="owner-profile" src={`https://yt3.ggpht.com/${channelProfile}`}/>
                    </div>

                    <div className="video-details">
                        <div className="title">{title}</div>
                        <section className="sub-details">
                            <div className="owner-name">{creator}</div>
                            <section className="other-details">
                                <div className="views">{views} views</div>
                                <div className="validity">
                                    <span className="material-icons separator">
                                        fiber_manual_record
                                    </span>
                                    <Moment fromNow>{uploadedAt}</Moment>
                                </div>
                            </section>
                        </section>
                    </div>

                    { showModal && 
                        <div className="modal">
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

                            <div className="menu-item">
                                <span className="material-icons-outlined md-28">
                                    playlist_play
                                </span>
                                <div>Add to playlist</div>
                            </div>
                        </div>  
                    }

                    <span className="material-icons-outlined" onClick={toggleModal}>
                        more_vert
                    </span>

                </section>
            </div>
        </>
    )
    
}

export { SmallVideoCard}