import React, { useEffect, useRef, useState } from "react";
import "./sign.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const SignIn = () => {
  const [signData, setSignData] = useState([]);
  const regEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  const [fName, setfName] = useState("");
  const SName = useRef("");
  const usName = useRef("");
  const email = useRef("");
  const number = useRef("");
  const password = useRef("");
  const image = useRef("");
  const city = useRef("");
  const gender = useRef("");
  const [CheckFname, setChekFname] = useState(true);
  const [CheckSname, setChekSname] = useState(true);
  const [ChekUsName, setChekUsName] = useState(true);
  const [CheckEmail, setChekEmail] = useState(true);
  const [CheckNumber, setChekNumber] = useState(true);
  const [CheckPassword, setChekPassword] = useState(true);
  const [CkekImage, setCkekImage] = useState(true);
  const [CheckCity, setCheckCity] = useState(true);
  const [CheckGender, setCheckGender] = useState(true);
  const navigate = useNavigate();
  function restAllInputs() {
    setChekFname(true);
    setChekSname(true);
    setChekUsName(true);
    setChekEmail(true);
    setChekNumber(true);
    setChekPassword(true);
    setCkekImage(true);
    setCheckCity(true);
    setCheckCity(true);
    setCheckGender(true);
  }

  const handelForm = (e) => {
    const secondName = SName.current.value;
    const userName = usName.current.value;
    const Email = email.current.value;
    const phoneNumber = number.current.value;
    const Password = password.current.value;
    const Image = image.current.value;
    const City = city.current.value;
    const Gender = gender.current.value;

    e.preventDefault();

    let usersMatch = signData.some((Match) => {
      return Match.email === Email;
    });

    if (
      fName === "" ||
      !isNaN(fName) ||
      fName.length < 3 ||
      fName.indexOf(" ") !== -1
    ) {
      setChekFname(false);
    } else if (
      secondName === "" ||
      !isNaN(secondName) ||
      secondName.includes(" ") ||
      secondName.length < 3
    ) {
      restAllInputs();
      setChekSname(false);
    } else if (
      userName === "" ||
      userName.length < 3 ||
      userName.indexOf(" ") !== -1
    ) {
      restAllInputs();
      setChekUsName(false);
    } else if (!regEmail.test(Email)) {
      restAllInputs();
      setChekEmail(false);
    } else if (Password === "" || Password.indexOf(" ") !== -1) {
      restAllInputs();
      setChekPassword(false);
    } else if (Image === "") {
      restAllInputs();
      setCkekImage(false);
    } else if (City === "") {
      restAllInputs();
      setCheckCity(false);
    } else if (Gender !== "Male" && Gender !== "Female") {
      restAllInputs();
      setCheckGender(false);
    } else if (
      phoneNumber === "" ||
      isNaN(phoneNumber) ||
      phoneNumber.length !== 11 ||
      !phoneNumber.startsWith("01")
    ) {
      restAllInputs();
      setChekNumber(false);
    } else if (usersMatch) {
      alert("matching");
    } else {
      restAllInputs();

      axios({
        method: "post",
        url: "https://data-pfz0.onrender.com/users",
        data: {
          firstName: fName,
          lastName: secondName,
          userName: userName,
          email: Email,
          password: Password,
          phoneNumber: phoneNumber,
          image: Image,
          gender: Gender,
          city: City,
          role: "member",
        },
      });
      navigate("/signIn");
    }
  };
  useEffect(() => {
    axios({
      method: "get",
      url: "https://data-pfz0.onrender.com/users",
    }).then((e) => {
      setSignData(e.data);
    });
  }, []);

  document.body.style.backgroundColor = "#bec0c8";

  return (
    <form
      className="fw-bolder d-flex align-items-center flex-column "
      onSubmit={handelForm}
    >
      <div className=" p-4 rounded-3 mt-5">
        {/* //////////////////////////////firstName && secondName//////////////////////////////////// */}
        <div className="mb-2 d-flex justify-content-between">
          <div className="d-flex flex-column">
            <label
              className={CheckFname ? "mb-2 text-dark" : "mb-2 text-danger"}
            >
              {CheckFname ? "First Name" : "Invalid Name"}
            </label>
            <input
              className="ps-4 form-control pe-5"
              placeholder="enter first name"
              type="text"
              value={fName}
              onChange={(e) => setfName(e.target.value)}
            />
          </div>
          <div className="mb-2 d-flex flex-column">
            <label
              className={CheckSname ? "mb-2 text-dark" : "mb-2 text-danger"}
            >
              {CheckSname ? "Last Name" : "Invalid Name"}
            </label>
            <input
              className="ps-4 form-control pe-5"
              placeholder="enter last name"
              type="text"
              ref={SName}
            />
          </div>
        </div>
        {/* //////////////////////////////userName//////////////////////////////////// */}
        <label className={ChekUsName ? "mb-2 text-dark" : "mb-2 text-danger"}>
          {ChekUsName ? "User Name" : "Invalid UserName"}
        </label>
        <input
          className="mb-3 form-control"
          type="text"
          placeholder="enter first user name"
          ref={usName}
        />
        {/* /////////////////////////////////email//////////////////////////////////// */}
        <label className={CheckEmail ? "mb-2 text-dark" : "mb-2 text-danger"}>
          {CheckEmail ? "E-mail" : "Invalid Email"}
        </label>
        <input
          placeholder="enter emil"
          className="mb-3 form-control"
          type="text"
          ref={email}
        />
        {/* //////////////////////////////password//////////////////////////////////// */}
        <label
          className={CheckPassword ? "mb-2 text-dark" : "mb-2 text-danger"}
        >
          {CheckPassword ? "password" : "Invalid Password"}
        </label>
        <input
          placeholder="enter password"
          className="mb-3 form-control"
          type="password"
          ref={password}
        />
        {/* /////////////////////////////////Image//////////////////////////////////// */}
        <label className={CkekImage ? "mb-2 text-dark" : "mb-2 text-danger"}>
          {CkekImage ? "Image" : "Invalid Image"}
        </label>
        <input
          placeholder="enter image"
          className="mb-3 form-control"
          type="text"
          ref={image}
        />
        {/* //////////////////////////////city && gender && phoneNumber//////////////////////////////////// */}
        <div className="mb-3 d-flex">
          <div className=" d-flex flex-column">
            <label
              className={CheckCity ? "mb-2 text-dark" : "mb-2 text-danger"}
            >
              {CheckCity ? "City" : "Invalid City"}
            </label>
            <input
              placeholder="enter city"
              className="form-control"
              type="text"
              ref={city}
            />
          </div>
          <div className="ms-4 d-flex flex-column">
            <label
              className={CheckGender ? "mb-2 text-dark" : "mb-2 text-danger"}
            >
              {CheckGender ? "Gender" : "Choose Gender"}
            </label>
            <select
              ref={gender}
              aria-label="Default select example"
              className="form-select"
            >
              <option>Choose</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="ms-4 d-flex flex-column">
            <label
              className={CheckNumber ? "mb-2 text-dark" : "mb-2 text-danger"}
            >
              {CheckNumber ? "Phone Number" : "Invalid Number"}
            </label>
            <input className="form-control" type="text" ref={number} />
          </div>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="Remember Me"
            required
          />
          <label className="form-check-label">Apply Rules and Conditions</label>
        </div>
        <Button variant="primary" className="mt-3" type="submit">
          Create Account
        </Button>
      </div>
    </form>
  );
};
export default SignIn;
