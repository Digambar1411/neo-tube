import axios from "axios";

export const removeFromWatch=(id, token)=>{
    try{
        const response =axios.delete(`/api/user/watchlater/${id}`,{
            token
        })
        return response;

    }catch(error){
        console.log(error)
    }
    
}