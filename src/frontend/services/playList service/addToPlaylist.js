import axios from "axios"

export const addToPlaylist =async(playlistId,video,token)=>{
    try{
        const response = await axios.post(`/api/user/playlists/${playlistId}`,
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
        console.log(error);
    }
}