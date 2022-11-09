const AuthReducer =(stateAuth, action)=>{
    switch(action.type){
        case "LOGIN":
            return {
                ...stateAuth,
                isLoggedIn:true,
                user:JSON.parse(localStorage.getItem("auth_user") || []),
                token:localStorage.getItem("auth_token"),
                defaultUser:localStorage.getItem("default_user")
            }
        case "SIGNUP":
            return{
                ...stateAuth,  
                isLoggedIn:true, 
                user:JSON.parse(localStorage.getItem("auth_user") || []),
                token:localStorage.getItem("auth_token"),
                defaultUser:localStorage.getItem("default_user")
            }

        case "LOGOUT":
            return{
                ...stateAuth, 
                isLoggedIn:false,
            }
        default: 
            return stateAuth;
    }

}

export { AuthReducer }