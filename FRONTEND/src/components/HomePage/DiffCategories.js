import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { RiArticleLine } from "react-icons/ri";
import { SiStorybook } from "react-icons/si";
import { MdHistoryEdu } from "react-icons/md";
import { TbBooks } from "react-icons/tb";


function DiffCategories() {
    return (
        <>
            <div className='diffcategories'>
                <div className='container'>
                    <div className='row'>
                        <h1 className='col-md-10 col-10 text-center mx-auto'>You Can Browse</h1>
                    </div>
                    <div className="row">
                        {/* Articles s */}
                        <div className="col-md-5 col-12 mx-auto">
                            <div className="box categories-box">
                                <NavLink to="/articles">
                                    <div className="our-category articles">
                                        <div className="icon mx-auto d-flex justify-content-center align-items-center">
                                            <RiArticleLine />
                                        </div>
                                        <h4>Articles</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum</p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>

                        {/* Poems  */}
                        <div className="col-md-5 col-12 mx-auto">
                            <div className="box categories-box">
                                <NavLink to="/poems">
                                    <div className="our-category poems">
                                        <div className="icon mx-auto d-flex justify-content-center align-items-center">
                                            <MdHistoryEdu />
                                        </div>
                                        <h4>Poems</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum</p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        {/* ShortStories  */}
                        <div className="col-md-5 col-12 mx-auto">
                            <div className="box categories-box">
                                <NavLink to="/shortstories">
                                    <div className="our-category shortstories">
                                        <div className="icon mx-auto d-flex justify-content-center align-items-center">
                                            <SiStorybook />
                                        </div>
                                        <h4>Short Story</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum</p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>

                        {/* Books  */}
                        <div className="col-md-5 col-12 mx-auto">
                            <div className="box categories-box">
                                <NavLink to="/books">
                                    <div className="our-category books">
                                        <div className="icon mx-auto d-flex justify-content-center align-items-center">
                                            <TbBooks />
                                        </div>
                                        <h4>Books</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum</p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DiffCategories