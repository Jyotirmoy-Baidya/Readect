import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import NavLink from 'react-bootstrap/esm/NavLink';
import { NavLink, useNavigate } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { useProfileContext } from "../../context/ProfileContext";
import toast, { Toaster } from "react-hot-toast";

const LogoutAPI = "/api/v1/reader/logout";
const LoggedCheckAPI = "/api/v1/reader/ifLoggedIn";

const Navs = () => {
  const { logout, checkLogin, loggedInStatus } = useProfileContext();
  const DoLogout = async () => {
    const check = await logout(LogoutAPI);
    await checkLogin(LoggedCheckAPI);
    toast.success("Logout Succesfully");
  };
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <NavLink className="nav-link nav-title" to="/">
          Readect
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-items">
            <NavLink className="nav-item" to="/">
              Home
            </NavLink>
            <NavLink className="nav-item" to="/aboutus">
              About us
            </NavLink>
            <a className="nav-item" href="#typesid">
              Explore
            </a>
            {loggedInStatus ?
              <>
                <NavLink to="/profile">
                  <VscAccount className="aluu" />
                </NavLink>
              </> :
              <>
                <NavLink className="nav-link nav-login" to="/login">
                  Login
                </NavLink>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
