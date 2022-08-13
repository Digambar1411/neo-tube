import { useState, useContext, createContext, useEffect} from "react";
import  axios from "axios";
import { useAuth } from "./auth-context";


const LikesContext = createContext();

const useLikedVideos = ()=>useContext(LikesContext);

const LikedVideosProvider =({children})=>{
    const { stateAuth:{isLoggedIn, token} } = useAuth();

    const [ likedVideos, setLikedVideos] = useState([]);

    useEffect(()=>{
        if(isLoggedIn){
            const getLikedVideos = async ()=>{
                try{
                    const response = await axios.get("/api/user/likes",{
                        headers: { authorization: token },
                    });
                    if(response.status===200){
                        setLikedVideos(response.data.likes)
                    }
                }
                catch(error){
                    console.error(error)
                }
              
            }
            getLikedVideos();
        }
        

    },[isLoggedIn])   

    return(
        <LikesContext.Provider value ={{likedVideos, setLikedVideos}}>
            {children}
        </LikesContext.Provider>
    )

}

export {useLikedVideos, LikedVideosProvider}