import { useState, useContext, createContext, useEffect} from "react";
import { useAuth } from "./auth-context";
import { getWatchLater } from "../services";

const WatchLaterContext = createContext();

const useWatchLaterVideos = ()=>useContext(WatchLaterContext);

const WatchLaterVideosProvider =({children})=>{
    const { stateAuth:{isLoggedIn, token} }= useAuth();

    const [ watchLaterVideos, setWatchLaterVideos] = useState([]);

    useEffect(()=>{
        if(isLoggedIn){
            const getWatchLaterVideos = async ()=>{
                try{
                    const response = await getWatchLater(token)
                    if(response.status===200){
                        setWatchLaterVideos(response.data.watchlater)
                    }
                }
                catch(error){
                    console.error(error)
                }
              
            }
            getWatchLaterVideos();
        }
        
    },[isLoggedIn])

    
    return(
        <WatchLaterContext.Provider value ={{watchLaterVideos, setWatchLaterVideos}}>
            {children}
        </WatchLaterContext.Provider>
    )

}

export {useWatchLaterVideos, WatchLaterVideosProvider}