import React from 'react'
import { NavLink } from "react-router-dom"

function Pagination({ name = "" }) {
    return (
        <div style={{ position: "absolute" }}>
            <NavLink to="/poems">Poems</NavLink>/{name}

        </div>
    )
}

export default Pagination