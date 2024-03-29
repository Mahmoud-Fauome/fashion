import React from "react";
import { Navigate } from "react-router-dom";

const AuthProfile=({children})=>{
if (localStorage.role!=="admin"&&localStorage.role!=="member") {
   return <Navigate to={"/signIn"}/>
}
return children
}
export default AuthProfile;