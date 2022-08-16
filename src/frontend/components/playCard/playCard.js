import ReactPlayer from 'react-player/youtube'
import { addToLikeService , removeFromLikeService, addToWatch, removeFromWatch} from "../../services/"
import { useLikedVideos, useAuth ,useWatchLaterVideos} from "../../contexts";
import "./playCard.css";


const PlayCard=({video})=>{

    const { stateAuth:{token}}=useAuth();
    const { likedVideos, setLikedVideos} = useLikedVideos();
    const { watchLaterVideos,setWatchLaterVideos }= useWatchLaterVideos();

    const isInWatchLater = watchLaterVideos.find(watchLaterVideo=>watchLaterVideo._id===video._id ? true : false)
    const isInLikedVideos = likedVideos.find(likedVideo=>likedVideo._id===video._id ? true : false)

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

    return(
        <>
            <div className="play-card">
                <ReactPlayer 
                    className="ReactPlayer"
                    url={`https://www.youtube.com/watch?v=${video._id}`}
                    controls={true}
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

                        <div className='center dynamic-menu'>
                            <span className="material-icons-outlined md-20">
                                playlist_play
                            </span>
                            <span className='mg-left-4px'>Add to Playlist</span>
                        </div>                 
                    </section>
                    <section className='video-description'><strong>Description :</strong>
                        {video.description}
                    </section>
                </div>
            </div>
        </>
    )
}

export { PlayCard}