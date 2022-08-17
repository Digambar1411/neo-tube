import { PlaylistReducer} from "../reducers/playlistReducer"
import { useContext, createContext, useReducer} from "react";

const PalylistContext = createContext()

const usePlaylist =()=> useContext(PalylistContext);

const PlaylistProvider =({children})=>{
      
    const [playlistState, playlistDispatch] = useReducer(PlaylistReducer, {playlists:[]})
       
    return(
        <PalylistContext.Provider value={{playlistState, playlistDispatch}}>{children}
        </PalylistContext.Provider>
    )
}

export {usePlaylist, PlaylistProvider}
