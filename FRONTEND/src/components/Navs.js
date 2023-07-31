import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import NavLink from 'react-bootstrap/esm/NavLink';
import { NavLink } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";

const Navs = () => {
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

                        {/* login  */}
                        <NavLink to="/login">Login</NavLink>


                        <NavDropdown title={<VscAccount />} id="basic-nav-dropdown" className='dropdown profile'>
                            <NavLink className="nav-link" to="/profile">My Profile</NavLink>
                            <NavDropdown.Divider />
                            <NavLink className="nav-link" to="/profile/library">Library</NavLink>
                            <NavLink className="nav-link" to="/profile/settings">Setting</NavLink>
                            <NavDropdown.Divider />
                            <NavLink className="nav-link" to="/profile/logout">Logout</NavLink>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navs;

//                 <nav className=" navbar navbar-expand-lg navbar-light">
//                     <div className="container-fluid">
//                         <h2 className="my-auto">Readect <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
//                             fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
//                             <path
//                                 d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
//                         </svg>
//                         </h2>
//                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
//                             data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
//                             aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//                                 <li className="nav-item dropdown my-auto">
//                                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
//                                         data-bs-toggle="dropdown" aria-expanded="false">
//                                         Browse
//                                     </a>
//                                     <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                         <li><a className="dropdown-item" href="#">Poems</a></li>
//                                         <li><a className="dropdown-item" href="#">Articles</a></li>
//                                         <li><a className="dropdown-item" href="#">ShortStories</a></li>
//                                     </ul>
//                                 </li>
//                                 <li className="nav-item my-auto">
//                                     <a className="nav-link active" href="#" tabindex="-1" aria-disabled="true">Write</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link active profile" href="/profile" style="color: black">
//                                         <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
//                                             className="bi bi-person-circle" viewBox="0 0 16 16">
//                                             <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
//                                             <path fill-rule="evenodd"
//                                                 d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
//                                         </svg>
//                                         <p>Profile</p>

//                                     </a>
//                                 </li>
//                             </ul>

//                         </div>
//                     </div>
//                 </nav>


//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-8 col-11 mx-auto py-2">

//                             <form className="mx-auto d-flex pe-2" style={{"background-color: var(--main-color); border-radius: "3rem"}}>
//                                 <input className="w-100 py-2 px-2" type="search" placeholder="Search"
//                                     style="border:none; outline: none; border-radius: 3rem; background-image: linear-gradient(to left, var(--main-color), var(--main-orange)); color: var(--main-bg)">
//                                     <button className="mx-2" type="submit"
//                                         style="background-color: rgba(255, 255, 255, 0); border: none"><svg
//                                             xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                                             className="bi bi-search" viewBox="0 0 16 16">
//                                             <path
//                                                 d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
//                                         </svg></button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>

//                 {/* {{!-- main area --}} */}
//                 <div className="main-area container" style="height: 100vh;">
//                     <div className="row">
//                         <div
//                             className="col-md-6 col-10 order-md-0 order-1 d-flex flex-column align-items-start justify-content-center mx-auto">
//                             <h1 style="color: white; font-weight:500">Best Place To Increase Your<span
//                                 style="color: var(--main-color)">
//                                 Imagination</span>
//                             </h1>
//                             <button className="explore-btn"
//                                 style="outline: none; border: none; border-radius: 3rem; height: 2.5rem; width: 8rem"><a
//                                     href="#typesid"
//                                     style="text-decoration: none; font-size: 1rem; font-weight:500; text-transform: uppercase; color: var(--main-bg)">Explore</a></button>
//                         </div>
//                         <div className="col-md-4 col-12 mx-auto order-md-1 order-0">
//                             <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
//                                 <div className="carousel-inner">
//                                     <div className="carousel-item active">
//                                         <img src="images/laptop.png" className="d-block w-100" alt="...">
//                                     </div>
//                                     <div className="carousel-item">
//                                         <img src="images/mobile.png" className="d-block w-100" alt="...">
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Navbar;