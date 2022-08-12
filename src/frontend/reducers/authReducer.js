const AuthReducer =(stateAuth, action)=>{
    switch(action.type){
        case "LOGIN":
            return {
                ...stateAuth,
                isLoggedIn:true,
                user:localStorage.getItem("auth_user"),
                token:localStorage.getItem("auth_token")
            }
        case "SIGNUP":
            return{
                ...stateAuth,  
                isLoggedIn:true, 
                user:localStorage.getItem("auth_user"),
                token:localStorage.getItem("auth_token")
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