import axios from "axios"

export const removeAllHistory =async(token)=>{
    try{
        const response = await axios.delete("/api/user/history/all",
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