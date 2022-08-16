import {Navbar , Sidebar, BigHorizontalCard} from "../../components";
import { useHistory, useAuth} from "../../contexts"
import { getHistory, removeAllHistory } from "../../services/historyService";
import { useEffect } from "react";
import "./history.css";

export function History(){
    const { historyState:{history},historyDispatch} = useHistory();
    const { stateAuth:{isLoggedIn, token}}= useAuth();

    useEffect(()=>{
        const getHistoryVideos = async ()=>{
            try{
                const response = await getHistory(token)
                if(response!==undefined){
                    historyDispatch({type:"UPDATE_HISTORY", payload: response.data.history})
                }
            }catch(error){
                console.log(error);
            }
        } 
        getHistoryVideos();
    },[isLoggedIn])

    const removeAllVideosFromHistory =async()=>{
        if(isLoggedIn){
            try{
                const response = await removeAllHistory(token)
                if(response!==undefined){
                    historyDispatch({type:"UPDATE_HISTORY", payload:response.data.history})
                }
            }catch(error){
                console.log(error)
            }
        }
    }

    return(
        <>
            <div className="main-container">
                <Navbar />
                <div className="history-page">
                    <div className="sidebar-container">  <Sidebar /></div>
                    <div className="cards-container flex-col-no-wrap">
                        { history.length>=2 && <button className="solid-btn" onClick={removeAllVideosFromHistory}>Clear All</button>}
                        { history.length ? history.map(video=>{
                            return(
                            <BigHorizontalCard video={video} key={video._id}/>
                            )
                        })
                            : 
                            <p>history seems empty, lets explore videos</p>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}