import React from 'react'
import Stars from './Stars'

function SinglePoemContent({ name, description, author, stars }) {
    const content = description?.split('\n');
    console.log(content);
    return (
        <>

            <div className='row'>
                <div className='col-md-6 col-8 mx-auto'>
                    <h1 className='poem-name'>{name}</h1>
                    <h5 className="authorname" >by {author}</h5>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12 col-12 mx-auto text-center single-poem-content'>
                    <div className='content'>{
                        content?.map((ele, i) => {
                            return (<div key={i}>{ele}</div>)
                        })
                    }</div>
                </div>
            </div>
        </>
    )
}

export default SinglePoemContent