import axios from "axios";

export const getSinglePlaylists =async(playlistId,token)=>{
    try{

        const response = await axios.get(`/api/user/playlists/${playlistId}`,{
            headers:{
                authorization: token}
        })
        return response
    }
    catch(error){
        console.log(error);
    }

}