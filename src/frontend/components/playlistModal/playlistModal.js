import { useState , useEffect} from "react"
import "./playlistModal.css"
import { addToPlaylist, createPlaylist, getPlaylists} from "../../services/playList service"
import { useAuth , usePlaylist} from "../../contexts"

export const PlaylistModal =({video})=>{

    const { stateAuth:{token}}= useAuth();
    const {playlistDispatch, playlistState:{playlists}} = usePlaylist();
    const [playlistName, setPlaylistName] = useState("");
    const [playlistModal, setPlaylistModal]= useState(true);

    const createNewPlaylist = async()=>{
        try{
            const response = await createPlaylist(playlistName, token)
            if(response!==undefined){
                playlistDispatch({type:"UPDATE_PLAYLIST", payload:response.data.playlists})
            }
        }catch(error){
            console.log(error)
        }
        setPlaylistName("");
    }
    
    const addVideoToPlaylist = async(playlistId,video,token)=>{
        try{
            const response = await addToPlaylist(playlistId,video,token)
            const playlistResponse = await getPlaylists(token)
            if(playlistResponse!==undefined){
                playlistDispatch({type:"UPDATE_PLAYLIST", payload:playlistResponse.data.playlists})
            }
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        const getAllPlayLists = async ()=>{
            try{
                const response = await getPlaylists(token)
                console.log(response)
                if(response!==undefined && response.status===200){
                    playlistDispatch({type:"UPDATE_PLAYLIST", payload: response.data.playlists})
                }
            }catch(error){
                console.log(error);
            }
        } 
        getAllPlayLists();
    },[])

    return(
        <>
            { playlistModal && 
            <div className='playlist-modal'>
                <div className="save-to-playlist">
                    <p>Save to..</p>
                    <span className="material-icons-outlined md-28" onClick={()=>setPlaylistModal(false)}>
                            close
                    </span>          
                </div>
                <div className="list-container flex-col">
                    { playlists && playlists.map(playlist=>{
                        return(
                            <label className="checkbox-input-label flex-left" htmlFor="playlist" key={playlist._id}>
                                <input className="input-checkbox" type="checkbox" id="playlist" onClick={()=>addVideoToPlaylist(playlist._id,video,token)}/>
                                {playlist.title}
                            </label>
                            
                        )
                    })
                    }            
                </div>
                <div className="create-playlist">
                    <input className="playlist-input" type="text" value={playlistName} onChange={(e)=>setPlaylistName(e.target.value)} />
                    <button className="solid-btn" onClick={()=>playlistName.length>=1 && createNewPlaylist()}>create</button>
                </div>
            </div>
            }
        </>
    )
}