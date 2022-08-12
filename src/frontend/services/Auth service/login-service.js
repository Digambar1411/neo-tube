import axios from "axios";

const LoginService = async (email, password)=>{
    try{
        const response = await axios.post("/api/auth/login",{
            email,
            password,
        })
        return response;
    }
    
    catch(error){
        console.log(error)
    }
}

export { LoginService }