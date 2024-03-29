import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import imag from "../../img/logo.png";
import { AiOutlineLock } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import Store from "../../Contexts/globalContext";
import Swal from "sweetalert2";
import { getDefaultNormalizer } from "@testing-library/react";
import "./header.css";
import Profile from "../profile/profile";

const Header = () => {
  const navi = useNavigate();
  const navigate = useNavigate();
  const goToShoppingCart = () => {
    navigate("/products/shoppingCart");
  };
  let { addToShoping } = useContext(Store);

  const goToLogin = () => {
    localStorage.clear();

    Swal.fire({
      title: "Logged Out",
      color: "#FF0000",
      showConfirmButton: false,
      timer: 1800,
    });
    setTimeout(() => {
      navi("/signIn");
    }, 2000);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg" className="fw-bolder bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src={imag} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link as={NavLink} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/products"}>
                Shop
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/about"}>
                About Us
              </Nav.Link>
            </Nav>
            <div className="d-flex">
              {" "}
              <AiOutlineLock className=" fs-4" onClick={goToShoppingCart} />
              <h6
                className={
                  addToShoping.length > 0
                    ? "rounded-circle ps-1 pe-1 text-light bg-success"
                    : "rounded-4  ps-1 pe-1 text-light bg-danger"
                }
              >
                {addToShoping.length}
              </h6>
            </div>

            {localStorage.role !== "admin" && localStorage.role !== "member" ? (
              <Link to={"/SignIn"}>
                <FiLogIn className="fs-4 ms-3" />
              </Link>
            ) : (
              <div className="d-flex flex-row">
                <img
                  className="ms-4 rounded-circle"
                  style={{ width: "2.5em" }}
                  src={localStorage.imge}
                />
                <NavDropdown className="fs-6  me-5" id="basic-nav-dropdown">
                  {localStorage.role === "admin" && (
                    <NavDropdown.Item as={Link} to={"/admin"}>
                      Control
                    </NavDropdown.Item>
                  )}

                  <NavDropdown.Item as={Link} to={"/profile"}>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />

                  <NavDropdown.Item href="#action/3.4" onClick={goToLogin}>
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
