import axios from "axios";

const SignupService = async (firstName, lastName, email, password)=>{
    try{
        const response = await axios.post("/api/auth/signup",{
            firstName,
            lastName,
            email,
            password,
        })

        return response;
    }
    
    catch(error){
        console.log(error)
    }
}

export { SignupService }