import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import NavLink from 'react-bootstrap/esm/NavLink';
import { NavLink, useNavigate } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";
import { useProfileContext } from '../context/ProfileContext';
import toast, { Toaster } from 'react-hot-toast';

const LogoutAPI = "/api/v1/reader/logout";
const GetProfileAPI = "/api/v1/reader";

const Navs = () => {
    const navigate = useNavigate();
    const { logout, checkLogin, loggedInStatus } = useProfileContext();
    const DoLogout = async () => {
        await logout(LogoutAPI);
        await checkLogin(GetProfileAPI);
        toast.success("Logout");
    }
    return (
        <Navbar expand="lg" className="navbar">
            <Container>
                <NavLink className="nav-link" to="/">Readect</NavLink>
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/aboutus">About us</NavLink>
                        <NavDropdown title="Browse" id="basic-nav-dropdown" className='dropdown'>
                            <NavLink className="nav-link" to="/poems">Poems</NavLink>
                            <NavLink className="nav-link" to="/articles">Articles</NavLink>
                            <NavLink className="nav-link" to="/shortstories">Short Shories</NavLink>
                            <NavLink className="nav-link" to="/books">Books</NavLink>
                        </NavDropdown>

                        {
                            loggedInStatus ?
                                <NavDropdown title={<VscAccount />} id="basic-nav-dropdown" className='dropdown profile'>
                                    <NavLink className="nav-link" to="/profile">My Profile</NavLink>
                                    <NavDropdown.Divider />
                                    <NavLink className="nav-link" to="/profile/library">Read Later</NavLink>
                                    <NavDropdown.Divider />
                                    <NavLink className="nav-link" onClick={() => DoLogout()}>Logout</NavLink>
                                </NavDropdown> :
                                <NavLink className="nav-link" to="/login" >Login</NavLink>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Toaster />
        </Navbar>
    );
}

export default Navs;

