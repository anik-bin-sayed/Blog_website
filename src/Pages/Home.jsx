import React from 'react'
import HeroSection from '../Components/HeroSection/HeroSection'
import { js } from '@eslint/js';
import FeatureBlog from '../Components/FeatureBlogs/FeatureBlog';


const Home = () => {
    return (
        <>
            <HeroSection />
            <FeatureBlog />
        </>
    )
}

export default Home