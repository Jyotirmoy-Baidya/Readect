import React from 'react'
import { NavLink } from 'react-router-dom'

function DiffCategories() {
    return (
        <>
            <div className='diffcategories'>
                <div className='container'>
                    <div className='row'>
                        <h1 className='col-md-10 col-10 text-center mx-auto'>You Can Browse</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="box">
                                <NavLink to="/articles">
                                    <div class="our-category articles">
                                        <div class="icon mx-auto d-flex justify-content-center align-items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20   "
                                                fill="currentColor" class="bi bi-journal-richtext" viewBox="0 0 16 16">
                                                <path
                                                    d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                                <path
                                                    d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                                                <path
                                                    d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                                            </svg>
                                        </div>
                                        <h4>Articles</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum</p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div class="col-md-6 col-12">
                            <div class="box">
                                <NavLink to="/poems">
                                    <div class="our-category poems">
                                        <div class="icon">

                                        </div>
                                        <h4>Poems</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum</p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-5 col-10 mx-auto">
                            <div class="box categories-box">
                                <NavLink to="/shortstories">
                                    <div class="our-category shortstories">
                                        <div class="icon mx-auto d-flex justify-content-center align-items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                                class="bi bi-book" viewBox="0 0 16 16">
                                                <path
                                                    d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                                            </svg>
                                        </div>
                                        <h4>Short Story</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum</p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div class="col-md-5 col-10 mx-auto">
                            <div class="box">
                                <NavLink to="/books">
                                    <div class="our-category books">
                                        <div class="icon mx-auto d-flex justify-content-center align-items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                                class="bi bi-bookmark-heart" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
                                                <path
                                                    d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                            </svg>
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