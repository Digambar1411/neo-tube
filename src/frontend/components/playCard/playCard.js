import ReactPlayer from 'react-player/youtube'
import { addToLikeService , removeFromLikeService, addToWatch, removeFromWatch} from "../../services/"
import {addToHistory} from '../../services/historyService';
import { useLikedVideos, useAuth ,useWatchLaterVideos, useHistory} from "../../contexts";
import "./playCard.css";
import { useState } from 'react';
import { PlaylistModal} from "../../components"


const PlayCard=({video})=>{

    const { stateAuth:{token, isLoggedIn}}=useAuth();
    const { likedVideos, setLikedVideos} = useLikedVideos();
    const { watchLaterVideos,setWatchLaterVideos }= useWatchLaterVideos();
    const { historyDispatch} = useHistory();

    const isInWatchLater = watchLaterVideos.find(watchLaterVideo=>watchLaterVideo._id===video._id ? true : false)
    const isInLikedVideos = likedVideos.find(likedVideo=>likedVideo._id===video._id ? true : false)

    const [playlistModal, setPalylistModal]= useState(false);

    const togglePlaylistModal =()=>{
        setPalylistModal(()=>!playlistModal)
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
 
    const addToWatchLaterVideos = async()=>{
        try{
            const response = await addToWatch(video,token)
            console.log(response)
            if(response.status===201){
                setWatchLaterVideos(response.data.watchlater)
            }
    
        }catch(error){
            console.log(error);
        }
    
    }

    const removeFromWatchLaterVideos = async()=>{
        try{
            const response = await removeFromWatch(video._id, token)
            if(response.status===200){
                setWatchLaterVideos(response.data.watchlater)
            }
        }catch(error){
            console.error(error)
        }

    }

    const addVideoToHistory =async()=>{
        try{
            const response = await addToHistory(video,token)
            console.log(response)
            if(response!==undefined && response.status===201){
                historyDispatch({type:"UPDATE_HISTORY", payload:response.data.history})
            }
            
        }catch(error){
            console.log(error)
        }
    }
    return(
        <>
            <div className="play-card">
                <ReactPlayer 
                    className="ReactPlayer"
                    url={`https://www.youtube.com/watch?v=${video._id}`}
                    controls={true}
                    onStart={ ()=> isLoggedIn && addVideoToHistory()}
                />
                <div className='video-details flex-col'>
                    <section className='video-title'>{video.title}</section>

                    <section className='dynamic-section flex-row'>
                        <div className='center dynamic-menu'
                            onClick={isInLikedVideos ?  removeFromLikedVideos : addToLikedVideos} >
                            {isInLikedVideos ? 
                                <span className="material-icons md-20" >
                                    thumb_up
                                </span>:
                                <span className="material-icons-outlined md-20" >
                                    thumb_up
                                </span>
                            }
                            <span className='mg-left-4px'>Like</span>
                        </div>

                        <div className='center dynamic-menu' 
                            onClick={isInWatchLater ? removeFromWatchLaterVideos : addToWatchLaterVideos }>
                            { isInWatchLater ?
                                <span className="material-icons md-20">
                                    watch_later
                                </span> : 
                                <span className="material-icons-outlined md-20">
                                    watch_later
                                </span>
                            }
                                <span className='mg-left-4px'>Watch later</span>
                        </div>

                        <div className='center dynamic-menu' onClick={togglePlaylistModal}>
                            <span className="material-icons-outlined md-20">
                                playlist_play
                            </span>
                            <span className='mg-left-4px'>Add to Playlist</span>
                        </div>
                                  
                    </section>
                    {playlistModal && <PlaylistModal video={video}/> } 
                    <section className='video-description'><strong>Description :</strong>
                        {video.description}
                    </section>
                   
                </div>
            </div>
        </>
    )
}

export { PlayCard}