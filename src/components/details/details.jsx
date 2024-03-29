import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";

const Details=()=>{
const[prodDetails,setProdDetails]=useState({})
const{productId}=useParams()

useEffect(()=>{
axios({
    method:"get",
    url:`http://localhost:9000/products/${productId}`
}).then(res=> setProdDetails(res.data))

},[])

return(
    <div className="mt-5 d-flex flex-column align-items-center">
<div className="bg-secondary p-2 rounded-3 text-white d-flex flex-column align-items-center">
<img className="mb-3" style={{width:"10em"}} src={prodDetails.img}/>
<h4 className="mb-3">Name : {prodDetails.name}</h4>
<h4 className="mb-3">Category : {prodDetails.sort}</h4>

<h4 className="mb-4">Price : {prodDetails.price} :USD</h4>





<Link to={"/admin/dashbord"}><button className="btn btn-success">Back To Products</button></Link>
</div>
</div>
)
}
export default Details;