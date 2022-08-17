import axios from "axios";

export const getHistory =async(token)=>{
    try{

        const response = await axios.get("/api/user/history",{
            headers:{
                authorization: token}
        })
        return response
    }
    catch(error){

    }

}