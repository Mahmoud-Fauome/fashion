import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import axios from "axios"
import {Link} from "react-router-dom"
import Swal from 'sweetalert2'

const Dashboard =()=>{
const[products,setproducts]=useState([])
const delteObj=(prod)=>{

  Swal.fire({
    title: `Are you sure to Delete ${prod.name}?`,
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor:'#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your product has been deleted.',
        'success'
      )
      axios({
        method:"delete",
        url:`http://localhost:9000/products/${prod.id}`,
      })
    }
  })
}
useEffect(()=>{
axios({
method:"get",
url:"http://localhost:9000/products",
}).then(data=>setproducts(data.data))
},[delteObj])

return(
    <div className="text-center container">
        <div className="mb-4">
            <h1>Products</h1>
        <Link to={"/admin/addProducts"}><Button variant="outline-success">add new Product</Button></Link>
        </div>
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>id</th>
        <th>Product</th>
        <th>Product Price</th>
        <th>Operations</th>
      </tr>
    </thead>
    <tbody>
    {products.map((prod)=>(
  
  <tr key={prod.id}>
    <td>{prod.id}</td>
    <td><img src={prod.img} style={{width:"2em"}}/></td>
    <td>{prod.price} :USD</td>
    <td>
    <div className="d-flex justify-content-evenly">
       <Link to={`/admin/details/${prod.id}`}> <Button variant="primary">View</Button></Link>
       <Link to={`/admin/editProduct/${prod.id}`}><Button variant="warning">Edit</Button></Link>
        <Button onClick={()=> delteObj(prod)} variant="danger">Delet</Button>
  </div>
  </td>
  </tr>

))}
</tbody>
  </Table>
  </div>
)
}
export default Dashboard;