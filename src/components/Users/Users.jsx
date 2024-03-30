import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const [users, setUsers] = useState([]);
  // const [changeRole, setChangeRole] = useState("admin");

  const delteObj = (user) => {
    Swal.fire({
      title: `Are you sure to Delete ${user.userName}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
        axios({
          method: "delete",
          url: `https://data-pfz0.onrender.com/users/${user.id}`,
        });
      }
    });
  };

  // const changRole=(user)=>{
  //   axios({
  //     method:"put",
  //     url:`http://localhost:9000/users/${user.id}`,
  //     data:{
  //      role:user.role
  //     }
  //  })
  // }

  useEffect(() => {
    axios({
      method: "get",
      url: "https://data-pfz0.onrender.com/users",
    }).then((data) => setUsers(data.data));
  }, [delteObj]);

  return (
    <div className="text-center container">
      <div className="mb-4">
        <h1>Users</h1>
        <Link to={"/admin/users/addUser"}>
          <Button variant="outline-success">add new Product</Button>
        </Link>
      </div>
      <Table striped bordered hover variant="secondary">
        <thead>
          <tr>
            <th>UserName</th>
            <th>Role</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.userName}</td>
              <td>{user.role}</td>
              <td>
                <div className="d-flex justify-content-evenly">
                  <Link to={`/admin/users/detailsUser/${user.id}`}>
                    {" "}
                    <Button variant="primary">View</Button>
                  </Link>
                  <Link to={`/admin/editProduct/${user.id}`}>
                    <Button variant="warning">Edit</Button>
                  </Link>
                  <Button onClick={() => delteObj(user)} variant="danger">
                    Delet
                  </Button>
                  {/* <Button onClick={()=> changRole(user)} variant="success">Make Admin</Button> */}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
