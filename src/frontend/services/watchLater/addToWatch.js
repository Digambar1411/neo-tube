import axios from "axios";

export const addToWatch=(video, token)=>{
    try{
        const response = axios.post("/api/user/watchlater",{
            video,
        },
        {headers:{
            authorization:token
            }
        })
        return response

    }catch(error){
        console.log(error)
    }
}