import React, { useEffect, useState } from "react";
import "./sign.css";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const SignIn = () => {
  const navi = useNavigate();
  const [dataSignIn, setDataSignIn] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [CheckEmail, setChekEmail] = useState(true);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://data-pfz0.onrender.com/users",
    }).then((data) => {
      setDataSignIn(data.data);
    });
  }, []);

  const handelSignIn = (e) => {
    e.preventDefault();
    dataSignIn.filter((user) => {
      if (user.email === email && user.password === password) {
        localStorage.role = `${user.role}`;
        navi("/");
        localStorage.user = `${user.email}`;
        localStorage.imge = `${user.image}`;
      } else {
        setChekEmail(!CheckEmail);
      }
      return dataSignIn;
    });
  };
  document.body.style.backgroundColor = "#bec0c8";
  return (
    <div
      style={{ paddingBottom: "7em", paddingTop: "7em" }}
      className="mt-1 fw-bolder d-flex flex-column align-items-center"
    >
      <form onSubmit={handelSignIn}>
        <div className="mb-2 d-flex flex-column">
          <label className={CheckEmail ? "mb-2 text-dark" : "mb-2 text-danger"}>
            {CheckEmail ? "Email address" : "Invalid Email"}
          </label>
          <input
            value={email}
            onChange={(s) => setEmail(s.target.value)}
            placeholder="enter email"
            className="form-control"
            type="text"
          />
          <p className="text-secondary ">
            we `ll never share your email with anyone else.
          </p>
        </div>
        <div className="mb-2 d-flex flex-column">
          <label className="mb-2">Password</label>
          <input
            value={password}
            onChange={(s) => setPassword(s.target.value)}
            placeholder="enter password"
            className=" form-control"
            type="password"
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="Remember Me"
            required
          />
          <label className="form-check-label">Checked checkbox</label>
        </div>

        <Button variant="primary" className="mt-3 me-2" type="submit">
          Login
        </Button>
        <Link to={"/signUp"}>
          <Button variant="primary" className="mt-3">
            Create New Account
          </Button>
        </Link>
      </form>
    </div>
  );
};
export default SignIn;
