import { useState, useContext, createContext, useEffect} from "react";
import  axios from "axios";

const VideosContext = createContext();

const useVideos = ()=>useContext(VideosContext);

const VideosProvider =({children})=>{

    const [ videos, setVideos] = useState([]);

    useEffect(()=>{

        const getVideos = async ()=>{
            const response = await axios.get("/api/videos");
            setVideos(response.data.videos);

        }
        getVideos();
    },[])

    return(
        <VideosContext.Provider value ={{videos}}>
            {children}
        </VideosContext.Provider>
    )

}

export {useVideos, VideosProvider}