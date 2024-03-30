import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./admin.css";

const Admin = () => {
  const [productsData, setProductsData] = useState([]);
  const [usersData, setuUersData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://data-pfz0.onrender.com/products",
    }).then((data) => setProductsData(data.data));

    axios({
      method: "get",
      url: "https://data-pfz0.onrender.com/users",
    }).then((data) => setuUersData(data.data));
  }, []);

  let lastProduct = productsData.slice(-1);
  let lastUser = usersData.slice(-1);
  document.body.style.backgroundColor = "white";
  return (
    <div className=" flex-wrap my-5 py-2 d-flex justify-content-evenly">
      <div className="admin rounded-5 text-center p-5 bg-secondary">
        <h1 className="mb-4 text-primary">Users</h1>
        <h3 className="mb-4 text-light">
          Number of Users : {usersData.length}
        </h3>
        <h3 className="mb-4 text-light">
          Last User Registered is: {lastUser[0] && lastUser[0].userName}
        </h3>
        <Link to={"/admin/users"}>
          <button className="btn btn-primary">Show Users</button>
        </Link>
      </div>
      <div className="rounded-5 text-center p-5 bg-secondary">
        <h1 className="mb-4 text-primary">Products</h1>
        <h3 className="mb-4 text-light">
          Number of Products : {productsData.length}
        </h3>
        <h3 className="mb-4 text-light">
          Last Products Added is: {lastProduct[0] && lastProduct[0].sort}
        </h3>
        <Link to={"/admin/dashbord"}>
          <button className="btn btn-primary">Show Products</button>
        </Link>
      </div>
    </div>
  );
};
export default Admin;
