
import { Navigate, useLocation} from "react-router-dom";
import { useAuth } from "../contexts"


const PrivateRoutes =({children})=>{

    const { stateAuth:{isLoggedIn}} = useAuth();
    const { pathname } = useLocation()

    return(
        <>{isLoggedIn ? children : <Navigate to="/login" state={{from:pathname}} replace/>}</>
    )
    
}

export { PrivateRoutes}