import {Navbar , Sidebar, PlayListCard} from "../../components/index";
import { useEffect } from "react";
import { useAuth,usePlaylist} from "../../contexts"
import {getPlaylists, createPlaylist} from "../../services/playList service"
import "./playlist.css"

export function Playlist(){
    const { stateAuth:{isLoggedIn, token}}= useAuth();
    const {playlistState:{playlists}, playlistDispatch} = usePlaylist();

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
            <div className="main-container">
                <Navbar />
                <div className="history-page">
                    <div className="sidebar-container"><Sidebar /></div>
                    <div className="cards-container ">
                        { playlists && playlists.map(playlist=>{
                            return(
                                <PlayListCard playlist={playlist} key={playlist._id}/>
                            )
                        })}
                    </div>
                </div>              
            </div>
        </>
    )
}

