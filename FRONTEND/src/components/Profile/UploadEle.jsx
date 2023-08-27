import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

function UploadEle({ title, type, id }) {
    //To delete function

    return (
        <NavLink to={`/single/${type}/${id}`} className="upload-element">
            <div className="upload-name">{title}</div>
            <div className="upload-delete" ><AiFillDelete /></div>
        </NavLink>
    )
}

export default UploadEle