import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

function MyUploads({ profile }) {
    const [categories, setCategories] = useState(0);
    const [uploads, setUploads] = useState(profile.poems);
    const selectCat = () => {
        switch (categories) {
            case 0:
                setUploads(profile.poems);
                break;
            case 1:
                setUploads(profile.shortStories);
                break;
            case 2:
                setUploads(profile.articles);
                break;
            case 3:
                setUploads(profile.books);
                break;
            default:
                break;
        }
    }
    useEffect(() => {
        selectCat()
    }, [categories]);
    const activeSelect = (i) => {
        setCategories(i);
        const all = document.querySelectorAll(".myAll");
        all.forEach(ele => {
            ele.classList.remove("myAllActive");
        });
        all[i].classList.add("myAllActive");
    }
    return (
        <>
            <div className='row my-5'>
                <div className='col-md-8 col-4 mx-auto text-center'>
                    <NavLink to="/uploadpoem">
                        <AwesomeButton type='secondary'>Upload</AwesomeButton>
                    </NavLink>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-8 col-11 mx-auto '>
                    <div className='myAllButtons'>
                        <button className='myAll myAllActive' onClick={(e) => activeSelect(0)}>My Poems</button>
                        <button className='myAll' onClick={(e) => activeSelect(1)}>Stories</button>
                        <button className='myAll' onClick={(e) => activeSelect(2)}>Articles</button>
                        <button className='myAll' onClick={(e) => activeSelect(3)}>Books</button>
                    </div>
                    <div className='myAllPoems'>
                        {
                            uploads?.length ?
                                uploads.map((ele, i) => {
                                    return <div key={ele._id}>
                                        <div className='eachPoem'>
                                            <p>{i + 1}</p>
                                            <NavLink to={`/singlepoem/${ele._id}`} className="title"><p>{ele.title}</p></NavLink>
                                            <NavLink to={`/updatePoem/content/${ele._id}`} className="poem-options"><BiEdit /></NavLink>
                                            <NavLink to={`/deletePoem/${ele._id}`} className="poem-options"><AiFillDelete /></NavLink>
                                        </div>
                                    </div>
                                })
                                : <div>
                                    <h1>No Uploads</h1>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyUploads