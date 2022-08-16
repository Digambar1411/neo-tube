import axios from "axios"

const removeFromLikeService= async(videoID, token)=>{
    try{
        const response = await axios.delete(`/api/user/likes/${videoID}`,{
            headers:{
                authorization:token
            }
        })
       return response;
    }
    catch(error){
        console.error(error)
    }

}

export { removeFromLikeService}