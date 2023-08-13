import React from 'react'
import Navs from '../components/Navs'
import HeroSection from '../components/HeroSection'
import DiffCategories from '../components/DiffCategories'
import { Toaster } from 'react-hot-toast'

function Home() {
    return (
        <>
            <Toaster />
            <HeroSection />
            <DiffCategories />
        </>
    )
}

export default Home