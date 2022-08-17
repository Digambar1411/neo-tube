import axios from "axios"

export const addToHistory =async(video,token)=>{
    try{
        const response = await axios.post("/api/user/history",
            {
                video
            },{
                headers:
                {authorization:token}
            }
        )
        return response
    }
    catch(error){
    }
}