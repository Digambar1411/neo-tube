import axios from "axios"

export const createPlaylist =async(title,token)=>{
    try{
        const response = await axios.post("/api/user/playlists",
        {
            playlist:{
                title
            }
        },
        {
            headers:{
                authorization:token
            }
        })
        return response
    }
    catch(error){
        console.log(error)
    }
}