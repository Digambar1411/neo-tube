import { useNavigate, useParams} from "react-router-dom"
import { useAuth, usePlaylist} from "../../contexts"
import "./playListCard.css";
import {getPlaylists, createPlaylist, deletePlaylist, addToPlaylist, deleteFromPlaylist, getSinglePlaylists} from "../../services/playList service"


const PlayListCard =({playlist})=>{

    const { stateAuth:{token, isLoggedIn}}= useAuth();
    const {playlistDispatch} = usePlaylist();
    const navigate = useNavigate();

    const deleteSelectedPlaylist=async()=>{
        try{
            const response = await deletePlaylist(playlist._id,token)
            if(response!==undefined){
                playlistDispatch({type:"UPDATE_PLAYLIST", payload:response.data.playlists})
            }
        }catch(error){
            console.log(error)
        }
    }

    

    return(
        <div className="playList-card" onClick={()=>navigate(`/play-list/${playlist._id}`)}>
            <div className='playList-card-image'></div>
            <div className='playList-card-title center'>{playlist.title}</div>
            <span className="material-icons-outlined md-28 delete-icon" onClick={(deleteSelectedPlaylist)}>
                delete
            </span>
        </div>
    )
}

export { PlayListCard }