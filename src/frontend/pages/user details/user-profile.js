import React from "react";
import { Navbar, Footer } from "../../components";
import { useAuth } from "../../contexts";
import "./user-profile.css";

const UserProfle =()=>{
    const { stateAuth:{user}, logoutHandler}= useAuth();

    return(
    <>
        <div className="container">
        <Navbar />
       <div className="user-profile-page">
       {
            user && 
            <div className="profile-card flex-col center">
                <div className="user-card-heading">User Details</div>
                <p>FirstName : {user.firstName}</p>
                <p>LastName : {user.lastName}</p>
                <p>Email : {user.email}</p>
                <button className="auth-btn logout" onClick={logoutHandler}>Logout</button>
            </div>
        }
       </div>
        <Footer />
        </div>
    </>

    )
}

export { UserProfle}