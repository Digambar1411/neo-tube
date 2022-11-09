import { useContext, createContext, useReducer, useState} from "react";
import { useNavigate } from "react-router-dom";
import { AuthReducer } from "../reducers/authReducer";

const AuthContext = createContext()

const useAuth =()=> useContext(AuthContext);

const AuthProvider =({children})=>{
    const navigate = useNavigate();
    const [isDefaultUser, setIsDefaultUser]=useState(false);
      
    const initialValue ={
        isLoggedIn:localStorage.getItem("auth_token")? true : false,
        user:JSON.parse(localStorage.getItem("auth_user")) || [],
        token:localStorage.getItem("auth_token"),
        defaultUser:localStorage.getItem("default_user") ? true : false,
    }

    const [stateAuth, dispatchAuth] = useReducer(AuthReducer, initialValue)
   
    const logoutHandler =()=>{
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_user")
        localStorage.removeItem("default_user")
        dispatchAuth({type:"LOGOUT"})
        navigate("/login")
    }
    
    return(
        <AuthContext.Provider value={{stateAuth,setIsDefaultUser,isDefaultUser, dispatchAuth,logoutHandler}}>{children}
        </AuthContext.Provider>
    )
}

export {useAuth, AuthProvider}
