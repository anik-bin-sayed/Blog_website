import React from 'react'

import HeroSection from '../Components/HomeSection/HeroSection/HeroSection'
import FeatureBlog from '../Components/HomeSection/FeatureBlogs/FeatureBlog'
import Passion from '../Components/HomeSection/Passion/Passion'
import LatestBlog from '../Components/HomeSection/LatestBlog/LatestBlog'
import Comments from '../Components/HomeSection/Comments/Commnet'
import Introduce from '../Components/HomeSection/Introduce/Introduce'
import Title from '../utils/Title'


const Home = () => {
    return (
        <>
            <Title value="Home - Lifestyle blogger" />
            <HeroSection />
            <FeatureBlog />
            <Passion />
            <LatestBlog />
            <Comments />
            <Introduce />
        </>
    )
}

export default Home