import React from 'react'
import { AwesomeButton } from 'react-awesome-button'
import { NavLink } from 'react-router-dom'

function UploadArea() {
    return (
        <>
            <div className='content-upload-area'>
                <NavLink to="/upload">
                    <AwesomeButton className='upload-btn' type='secondary'>Upload</AwesomeButton>
                </NavLink>
            </div>
        </>
    )
}

export default UploadArea