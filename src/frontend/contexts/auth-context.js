import { useContext, createContext, useReducer} from "react";
import { useNavigate } from "react-router-dom";
import { AuthReducer } from "../reducers/authReducer";

const AuthContext = createContext()

const useAuth =()=> useContext(AuthContext);

const AuthProvider =({children})=>{
    const navigate = useNavigate();
      
    const initialValue ={
        isLoggedIn:localStorage.getItem("auth_token")? true : false,
        user:JSON.parse(localStorage.getItem("auth_user")) || [],
        token:localStorage.getItem("auth_token")
    }

    const [stateAuth, dispatchAuth] = useReducer(AuthReducer, initialValue)
   
    const logoutHandler =()=>{
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_user")
        dispatchAuth({type:"LOGOUT"})
        navigate("/login")
    }
    
    return(
        <AuthContext.Provider value={{stateAuth, dispatchAuth,logoutHandler}}>{children}
        </AuthContext.Provider>
    )
}

export {useAuth, AuthProvider}
