import React from 'react'
import Pagination from './Pagination'
import { useAppContext } from '../../context/AppContext'

function SinglePoemImage() {
    const { singlePoem } = useAppContext();
    return (
        <div className='col-md-12 col-12 poem-image-area'>
            <figure className='text-center'>
                {/* { */}
                {/* singlePoem.coverImage ?
                        <img src={singlePoem.coverImage} alt="cover" className='img-fluid' style={{ height: "20rem", width: "13rem" }} /> : */}
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/contemporary-fiction-night-time-book-cover-design-template-1be47835c3058eb42211574e0c4ed8bf_screen.jpg?ts=1637012564" alt="cover" className='img-fluid' style={{ height: "20rem", width: "13rem" }} />
                {/* } */}
            </figure>
        </div>
    )
}

export default SinglePoemImage