import React from 'react'
import Pagination from './Pagination'

function SinglePoemImage({ image = "", name }) {
    return (
        <div className='col-md-12 col-12 poem-image-area'>
            <figure className='text-center'>
                <img src={image} alt="book cover" className='img-fluid' style={{ height: "20rem", width: "13rem" }} />
            </figure>
        </div>
    )
}

export default SinglePoemImage