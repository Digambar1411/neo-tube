import axios from "axios"

export const deleteFromPlaylist =async(playlistId,videoId,token)=>{
    try{
        const response = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`,
           {
                headers:
                {authorization:token}
            }
        )
        return response
    }
    catch(error){
        console.log(error);
    }
}