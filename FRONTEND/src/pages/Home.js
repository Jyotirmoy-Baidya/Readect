import React from 'react'
import Navs from '../components/HomePage/Navs'
import HeroSection from '../components/HomePage/HeroSection'
import DiffCategories from '../components/HomePage/DiffCategories'
import { Toaster } from 'react-hot-toast';
import "../style/HomePage.css"

function Home() {
    return (
        <>
            {/* <Toaster /> */}
            <Navs />
            <HeroSection />
            <DiffCategories />
        </>
    )
}

export default Home