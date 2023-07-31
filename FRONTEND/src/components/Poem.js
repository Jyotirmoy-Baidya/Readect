import React from 'react'
import Container from 'react-bootstrap/Container';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Poem({ poem }) {
    console.log(poem);
    return (
        <NavLink className='col-md-2 col-5 text-center poem-item ms-3' to={`/singlepoem/${poem.id}`}>
            <figure><img src={poem.coverImage} alt="" /></figure>
            {/* <p>{poem.poems.coverImage}</p> */}
            <p>{poem.title}</p>
        </NavLink>
    )
}


export default Poem