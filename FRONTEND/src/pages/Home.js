import React from 'react'
import Navs from '../components/HomePage/Navs'
import HeroSection from '../components/HomePage/HeroSection'
import DiffCategories from '../components/HomePage/DiffCategories'
import "../style/HomePage.css"

function Home() {
    return (
        <>
            <HeroSection />
            <DiffCategories />
        </>
    )
}

export default Home