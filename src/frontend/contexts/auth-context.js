import { useState, useContext, createContext, useReducer} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthReducer } from "../reducers/authReducer";

const AuthContext = createContext()

const useAuth =()=> useContext(AuthContext);

const AuthProvider =({children})=>{
    const navigate = useNavigate();
  
    const initialValue ={isLoggedIn:localStorage.getItem("auth_token")? true : false,
                        user:localStorage.getItem("auth_user"),
                        token:localStorage.getItem("auth_token")
                        }

    const [user, setUser] = useState([])
    const [isLoggedIn, setIgLoggedIn] =  useState(false)

    const [stateAuth, dispatchAuth] = useReducer(AuthReducer, initialValue)

    const LoginHandler= async (email, password)=>{
        try{
            const response = await axios.post("/api/auth/login",{
                email:email,
                password:password,
            })
            console.log(response);
            if(response.status===200){
                localStorage.setItem("auth_token", response.data.encodedToken)
                dispatchAuth({type:"LOGIN"})
                navigate("/");
            }           
            // setUser(response.data.foundUser)
        }

        catch(error){
             console.error(error)
        }
    }

    const SignUpHandler= async(fname, lname, email, password)=>{
        preventDefault();
        try{
            const response = await axios.post("/api/auth/signup",{
                firstName:fname,
                lastName:lname,
                email:email,
                password:password,
            })
            console.log(response);
            if(response.status===201){
                localStorage.setItem("auth_token", response.data.encodedToken);
                setUser(response.data.foundUser)
                setIgLoggedIn(true);
              
                // dispatchAuth({type:"SIGNUP"})
                navigate("/");                                                                                                     
            }
           
        }

        catch(error){
             console.error(error)
        }
       
    }
   
    const logoutHandler =()=>{
        localStorage.removeItem("auth_token");
        dispatchAuth({type:"LOGOUT"})
        navigate("/login")
    }
    
    return(
        <AuthContext.Provider value={{stateAuth, dispatchAuth, logoutHandler,LoginHandler,SignUpHandler}}>{children}
        </AuthContext.Provider>
    )
}

export {useAuth, AuthProvider}
