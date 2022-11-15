import { useNavigate, useLocation, useParams} from "react-router-dom";
import { useEffect, useState } from 'react';
import "./bigHorizontalVideoCard.css";
import { addToLikeService , removeFromLikeService, addToWatch, removeFromWatch} from "../../services/"
import { removeFromHistory} from "../../services/historyService"
import { deleteFromPlaylist, getPlaylists} from "../../services/playList service";
import { useLikedVideos , useAuth, useWatchLaterVideos , usePlaylist, useHistory} from "../../contexts"
import { PlaylistModal } from "../playlistModal/playlistModal";

const BigHorizontalCard =({video})=>{

    const navigate= useNavigate();
    const location = useLocation();
    const { playlistId} = useParams()
    const { stateAuth:{token, isLoggedIn}}= useAuth();
    const { likedVideos, setLikedVideos} = useLikedVideos();
    const { watchLaterVideos,setWatchLaterVideos }= useWatchLaterVideos();
    const { playlistDispatch, playlistState:{playlists}} = usePlaylist();
    const { historyDispatch, historyState:{history}} = useHistory();

     const [showModal, setShowModal] = useState(false);
     const [showPlaylistModal, setShowPlaylistModal] = useState(false)

    const toggleModal=()=>{
        setShowModal((showModal)=>!showModal)
    }

    const togglePlaylistModal=()=>{
        setShowPlaylistModal(()=>!showPlaylistModal)
    }

    const isInWatchLater = watchLaterVideos.find(watchLaterVideo=>watchLaterVideo._id===video._id ? true : false)
    const isInLikedVideos = likedVideos.find(likedVideo=>likedVideo._id===video._id ? true : false)

    
    const addToWatchLaterVideos = async()=>{
        if(isLoggedIn){
            try{
                const response = await addToWatch(video,token)
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

    const removeVideoFromHistory =async()=>{
        if(isLoggedIn){
            try{
                const response = await removeFromHistory(video._id,token)
                if(response!==undefined){
                    historyDispatch({type:"UPDATE_HISTORY", payload:response.data.history})
                }
            }catch(error){
                console.log(error)
            }
        }
        
    }

    const deleteVideoFromPlaylist = async()=>{
        try{
            const response = await deleteFromPlaylist(playlistId, video._id, token)
            console.log(response)
            const playlistResponse = await getPlaylists(token)
            console.log(playlistResponse)
                if(playlistResponse!==undefined){
                    playlistDispatch({type:"UPDATE_PLAYLIST", payload:playlistResponse.data.playlists})
                }
        }catch(error){
        }
    }
  
    return(
        <div className='big-hz-video-card' >
                <img className='big-card-thumbnail' src={`https://img.youtube.com/vi/${video._id}/maxresdefault.jpg`}
                    onClick={()=>navigate(`/video-listing/${video._id}`)}/>
                <div className="flex-row flex-space-btwn">
                    <div className='big-card-video-details flex-col mg-left-8px'>
                        <div className="sm-card-title">{video.title}</div>
                        <div className='sm-card-creator light-font'>{video.creator}</div>
                    </div>
                    
                    <span className="material-icons-outlined ml-auto" onClick={toggleModal}>
                        more_vert
                    </span>
                </div>

                { showModal && 
                    location.pathname==="/liked-videos" && 
                        <div className="modal" onMouseLeave={()=>setShowModal(false)}>
                            <div className="menu-item" onClick={removeFromLikedVideos}>
                                <span className="material-icons fs-28">
                                    delete
                                </span>
                                <div>Remove from Liked videos</div>
                            </div>

                            <div className="menu-item" onClick={togglePlaylistModal}>
                                <span className="material-icons-outlined fs-28">
                                    playlist_add
                                </span>
                                <div>Add to Playlist</div>
                            </div>
                        </div>
                }

                { showModal && 
                    location.pathname==="/watch-later" && 
                        <div className="modal">
                            <div className="menu-item" onClick={removeFromWatchLaterVideos}>
                                <span className="material-icons fs-28">
                                    watch_later
                                </span>
                                <div>Remove from Watch Later</div>
                            </div>
                            <div className="menu-item" onClick={togglePlaylistModal}>
                                <span className="material-icons-outlined fs-28">
                                    playlist_add
                                </span>
                                <div>Add to Playlist</div>
                            </div>
                        </div>
                }

                { showModal && 
                    location.pathname==="/history" && 
                        <div className="modal">
                            <div className="menu-item" onClick={removeVideoFromHistory}>
                                <span className="material-icons fs-28">
                                    history
                                </span>
                                <div>Remove from History</div>
                            </div>

                            { isInLikedVideos ? 
                                <div className="menu-item" onClick={removeFromLikedVideos}>
                                    <span className="material-icons fs-28">
                                        thumb_up
                                    </span>
                                    <div>Remove from Liked Videos</div>
                                </div> 
                                : 
                                <div className="menu-item" onClick={addToLikedVideos}>
                                    <span className="material-icons-outlined fs-28">
                                        thumb_up
                                    </span>
                                    <div>Add to Liked Videos</div>
                                </div>
                            }

                            <div className="menu-item" onClick={togglePlaylistModal}>
                                <span className="material-icons-outlined fs-28">
                                    playlist_add
                                </span>
                                <div>Add to Playlist</div>
                            </div>
                        </div>
                }

                { showModal && 
                    location.pathname===`/play-list/${playlistId}` && 
                        <div className="modal">
                            <div className="menu-item" onClick={deleteVideoFromPlaylist}>
                                <span className="material-icons fs-28">
                                    playlist_play
                                </span>
                                <div>Remove from Playlist</div>
                            </div>

                            {isInWatchLater ? 
                                <div className="menu-item" onClick={removeFromWatchLaterVideos}>
                                    <span className="material-icons fs-28">
                                        watch_later
                                    </span>
                                    <div>Remove from Watch Later</div>
                                </div>: 
                                
                                <div className="menu-item" onClick={addToWatchLaterVideos}>
                                    <span className="material-icons-outlined fs-28">
                                        watch_later
                                    </span>
                                    <div>Add to Watch Later</div>
                                </div>
                            }

                            { isInLikedVideos ? 
                                <div className="menu-item" onClick={removeFromLikedVideos}>
                                    <span className="material-icons fs-28">
                                        thumb_up
                                    </span>
                                    <div>Remove from Liked Videos</div>
                                </div> 
                                : 
                                <div className="menu-item" onClick={addToLikedVideos}>
                                    <span className="material-icons-outlined fs-28">
                                        thumb_up
                                    </span>
                                    <div>Add to Liked Videos</div>
                                </div>
                            }
                                                        
                        </div>
                }
                {showPlaylistModal && <PlaylistModal />}
        </div>  
    )
}

export {BigHorizontalCard}