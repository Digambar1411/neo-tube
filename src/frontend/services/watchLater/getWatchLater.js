import axios from "axios";

export const getWatchLater = async(token)=>{
    try{
        const response = await axios.get("/api/user/watchlater",{
            headers:{
                authorization:token
            },
        })
        return response;

    }catch(error){
        console.error(error)
    }

}