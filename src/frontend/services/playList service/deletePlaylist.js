import axios from "axios"

export const deletePlaylist =async(playlistId, token)=>{
    try{
        const response = await axios.delete(`/api/user/playlists/${playlistId}`,
        {
            headers:{
                authorization:token
            }
        })
        return response
    }
    catch(error){
        console.log(error);
    }
}