import React from "react";
import { Navigate } from "react-router-dom";

const AdminAuth=({children})=>{
if (localStorage.role!=="admin") {
     return <Navigate to={"/signIn"}/>
}
    return children;
}
export default AdminAuth;
