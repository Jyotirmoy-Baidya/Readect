import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from 'react-router-dom';

function HeroSection() {
    return (
        <div className='main-part'>
            <div className='container herosection'>
                <div className='row'>
                    <div className='col-md-6 col-10 order-md-0 order-1 hero-text mx-auto'>
                        <h1>Best Place To Increase Your <span>Imagination</span></h1>
                        <div>
                            <NavLink to="/typesid"><button>Explore</button></NavLink>
                            <NavLink to="/upload"><button>Start Writting</button></NavLink>
                        </div>
                    </div>
                    <div className='col-md-6 col-10 order-md-1 order-0 hero-img mx-auto'>
                        <figure>
                            <img src="./images/laptop.png" alt="laptopimg" className='laptop-hero' />
                            <img src="./images/mobile.png" alt="mobileimg" className='mobile-hero' />
                        </figure>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection