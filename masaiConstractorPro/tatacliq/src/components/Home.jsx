import React from 'react'
import Navbar from './Navbar'
import Slider from '../pages/Slider'
import MultiImageSlider from '../pages/MultiImageSlider'
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <MultiImageSlider />
            <Footer />
        </div>
    )
}

export default Home
