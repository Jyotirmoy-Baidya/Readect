import React from 'react'
import Container from 'react-bootstrap/Container';
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SingleUnit = ({ content }) => {
    console.log(content);
    return (
        <NavLink className='col-md-2 col-5 text-center poem-item mx-auto' to={`/single/${content.id}`}>
            <figure><img src={content.coverImage} alt="" /></figure>
            {/* <p>{poem.poems.coverImage}</p> */}
            <p>{content.title}</p>
        </NavLink>
    )
}


export default SingleUnit;