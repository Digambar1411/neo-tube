import axios from "axios"

export const removeFromHistory =async(videoId, token)=>{
    try{
        const response = await axios.delete(`/api/user/history/${videoId}`,
        {
            headers:{
                authorization:token
            }
        })
        return response
    }
    catch(error){
    }
}