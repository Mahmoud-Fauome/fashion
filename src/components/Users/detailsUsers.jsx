import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";

const DetailsUsers=()=>{
const[userDetails,setDetailsUser]=useState({})
const{userId}=useParams()

useEffect(()=>{
axios({
    method:"get",
    url:`http://localhost:9000/users/${userId}`
}).then(res=> setDetailsUser(res.data))

},[])

return(
    <div className="mt-5 d-flex flex-column align-items-center">
<div className="pe-5 ps-5 bg-secondary p-2 rounded-3 text-white d-flex flex-column align-items-center">
<img className="mb-3 rounded-circle" style={{width:"10em"}} src={userDetails.image}/>
<h4 className="mb-3">UserName : {userDetails.userName}</h4>
<h4 className="mb-3">SecondName : {userDetails.secondName}</h4>
<h4 className="mb-3">UserName : {userDetails.userName}</h4>
<h4 className="mb-3">Email : {userDetails.email}</h4>
<h4 className="mb-3">Gender : {userDetails.gender}</h4>
<h4 className="mb-3">City : {userDetails.city}</h4>
<h4 className="mb-3">Role : {userDetails.role}</h4>
<h4 className="mb-3">PhoneNumber : {userDetails.phoneNumber}</h4>
<h4 className="mb-3">Password : {userDetails.password}</h4>
{/* <h4 className="mb-3">Category : {userDetails.sort}</h4>

<h4 className="mb-4">Price : {userDetails.price} :USD</h4> */}





<Link to={"/admin/users"}><button className="btn btn-success">Back To Users</button></Link>
</div>
</div>
)
}
export default DetailsUsers;