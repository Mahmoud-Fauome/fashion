import "./profile.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [dataProfile, setDataProfile] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://data-pfz0.onrender.com/users",
    }).then((data) => {
      setDataProfile(data.data);
    });
  }, []);
  let data = dataProfile.filter((prof) => {
    return prof.email === localStorage.user;
  });
  const profileCompar = { ...data[0] };
  document.body.style.backgroundColor = "rgb(102 102 102)";

  return (
    <div className="container fontFamily  d-flex flex-column	justify-content-between  text-white mt-3">
      <div style={{ width: "16em" }} className=" mb-2 text-center ">
        <img className="w-75 rounded-circle" src={profileCompar.image} alt="" />
      </div>
      <div className="pt-3 border-top">
        <div className="d-flex justify-content-between">
          <div>
            <h3 className="mb-5">FirstName : {profileCompar.firstName}</h3>
            <h3 className="mb-5">Gender : {profileCompar.gender}</h3>
            <h3 className="mb-5">Email : {profileCompar.email}</h3>
            <h3 className="mb-5">PhoneNumber : {profileCompar.phoneNumber}</h3>
          </div>
          <div>
            <h3 className="mb-5">UserName : {profileCompar.userName}</h3>
            <h3 className="mb-5">LastName : {profileCompar.lastName}</h3>
            <h3 className="mb-5">Password : {profileCompar.password}</h3>
            <h3 className="mb-5">City : {profileCompar.city}</h3>
          </div>
        </div>
        <div className="d-flex align-items-center flex-column">
          <h3 className="mb-5">Role : {profileCompar.role}</h3>
          <Link to={`/profile/editUser/${profileCompar.id}`}>
            <button className="btn btn-success">Edit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Profile;
