import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Store from "../../Contexts/globalContext";
import "./editUser.css";

const EditUser = () => {
  const { usersData } = useContext(Store);
  const { editUser } = useParams();
  const regEmail = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  const [fName, setfName] = useState("");
  const [SName, setSName] = useState("");
  const [usName, setUseName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();
  const [CheckFname, setChekFname] = useState(true);
  const [CheckSname, setChekSname] = useState(true);
  const [ChekUsName, setChekUsName] = useState(true);
  const [CheckEmail, setChekEmail] = useState(true);
  const [CheckNumber, setChekNumber] = useState(true);
  const [CheckPassword, setChekPassword] = useState(true);
  const [CkekImage, setCkekImage] = useState(true);
  const [CheckCity, setCheckCity] = useState(true);
  const [CheckGender, setCheckGender] = useState(true);
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

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:9000/users/${editUser}`,
    }).then((res) => {
      setfName(res.data.firstName);
      setSName(res.data.lastName);
      setImage(res.data.image);
    });
  }, []);

  const handelForm = (e) => {
    e.preventDefault();
    if (
      fName === "" ||
      !isNaN(fName) ||
      fName.length < 3 ||
      fName.indexOf(" ") !== -1
    ) {
      setChekFname(false);
    } else if (
      SName === "" ||
      !isNaN(SName) ||
      SName.includes(" ") ||
      SName.length < 3
    ) {
      restAllInputs();
      setChekSname(false);
    } else if (
      usName === "" ||
      usName.length < 3 ||
      usName.indexOf(" ") !== -1
    ) {
      restAllInputs();
      setChekUsName(false);
    } else if (!regEmail.test(email)) {
      restAllInputs();
      setChekEmail(false);
    } else if (password === "" || password.indexOf(" ") !== -1) {
      restAllInputs();
      setChekPassword(false);
    } else if (image === "") {
      restAllInputs();
      setCkekImage(false);
    } else if (city === "") {
      restAllInputs();
      setCheckCity(false);
    } else if (gender !== "Male" && gender !== "Female") {
      restAllInputs();
      setCheckGender(false);
    } else if (
      number === "" ||
      isNaN(number) ||
      number.length !== 11 ||
      !number.startsWith("01")
    ) {
      restAllInputs();
      setChekNumber(false);
    } else {
      restAllInputs();
      // let v=signData.map((userMatch)=>{
      //   return userMatch
      // })
      // console.log(v);

      axios({
        method: "put",
        url: `http://localhost:9000/users/${editUser}`,
        data: {
          firstName: fName,
          lastName: SName,
          userName: usName,
          email: email,
          password: password,
          phoneNumber: number,
          image: image,
          gender: gender,
          city: city,
          role: "admin",
        },
      });

      navigate("/profile");
    }
  };

  // useEffect(()=>{
  //   axios({
  //     method:"get",
  //     url:"http://localhost:9000/users",
  //   }).then((e)=>{setSignData(e.data);})
  // },[])

  // document.body.style.backgroundColor = "rgb(102 102 102)";

  return (
    <div
      // style={{ width: "48em" }}
      className="formWidth  flex-column mt-4 d-flex justify-content-between"
    >
      <div style={{ width: "18em" }} className="mb-3 text-center">
        <img className="w-75 rounded-circle" src={image} />
      </div>
      <form
        className="border-top pt-3 fw-bolder "
        // style={{ marginRight: "17em" }}
        onSubmit={handelForm}
      >
        {/* //////////////////////////////firstName && secondName && userName//////////////////////////////////// */}
        <div className="mb-2 d-flex justify-content-between ">
          <div className="d-flex flex-column">
            <label
              className={CheckFname ? "mb-2 text-dark" : "mb-2 text-danger"}
            >
              {CheckFname ? "First Name" : "Invalid Name"}
            </label>
            <input
              className="form-control pe-5"
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
              className="form-control pe-5"
              placeholder="enter last name"
              type="text"
              value={SName}
              onChange={(e) => setSName(e.target.value)}
            />
          </div>
          <div className="mb-2 d-flex flex-column">
            <label
              className={ChekUsName ? "mb-2 text-dark" : "mb-2 text-danger"}
            >
              {ChekUsName ? "User Name" : "Invalid UserName"}
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="enter first user name"
              value={usName}
              onChange={(e) => setUseName(e.target.value)}
            />
          </div>
        </div>
        {/* /////////////////////////////////email//////////////////////////////////// */}
        <div className="mb-2 d-flex flex-column">
          <label className={CheckEmail ? "mb-2 text-dark" : "mb-2 text-danger"}>
            {CheckEmail ? "E-mail" : "Invalid Email"}
          </label>
          <input
            placeholder="enter emil"
            className="form-control"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* //////////////////////////////password//////////////////////////////////// */}
        <div className="mb-2 d-flex flex-column">
          <label
            className={CheckPassword ? "mb-2 text-dark" : "mb-2 text-danger"}
          >
            {CheckPassword ? "password" : "Invalid Password"}
          </label>
          <input
            placeholder="enter password"
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* /////////////////////////////////Image//////////////////////////////////// */}
        <div className="mb-2 d-flex flex-column">
          <label className={CkekImage ? "mb-2 text-dark" : "mb-2 text-danger"}>
            {CkekImage ? "Image" : "Invalid Image"}
          </label>
          <input
            placeholder="enter image"
            className="form-control"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        {/* //////////////////////////////city && gender && phoneNumber//////////////////////////////////// */}
        <div className="mb-3 d-flex justify-content-between ">
          <div className="d-flex flex-column">
            <label
              className={CheckCity ? "mb-2 text-dark" : "mb-2 text-danger"}
            >
              {CheckCity ? "City" : "Invalid City"}
            </label>
            <input
              placeholder="enter city"
              className="form-control"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className=" d-flex flex-column">
            <label
              className={CheckGender ? "mb-2 text-dark" : "mb-2 text-danger"}
            >
              {CheckGender ? "Gender" : "Choose Gender"}
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              aria-label="Default select example"
              className="pe-5 ps-5 form-select"
            >
              <option>Choose</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="d-flex flex-column">
            <label
              className={CheckNumber ? "mb-2 text-dark" : "mb-2 text-danger"}
            >
              {CheckNumber ? "Phone Number" : "Invalid Number"}
            </label>
            <input
              className="form-control"
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
        </div>

        <Button variant="primary" className="mt-3" type="submit">
          Edit
        </Button>
      </form>
    </div>
  );
};
export default EditUser;
