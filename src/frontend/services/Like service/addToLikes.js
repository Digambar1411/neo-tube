import axios from "axios"

const addToLikeService=async(video,token)=>{
    try{
        const response = await axios.post("/api/user/likes",
        {
            video
        },
        
        {headers:{authorization:token}},
        )
        return response;
    }catch(error){
        console.log(error);
    }

}

export { addToLikeService}