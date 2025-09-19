import React from 'react'

import About from '../Components/About/AboutHero/About'
import StorySection from '../Components/About/StorySection/StorySection'
import BlogMission from '../Components/About/BlogMission/BlogMission'
import Journey from '../Components/About/Journey/Journey'
import Travel from '../Components/About/Travel/Travel'
import Title from '../utils/Title'

const AboutPage = () => {
    return (
        <>
            <Title value="About - Lifestyle blogger" />

            <About />
            <StorySection />
            <BlogMission />
            <Journey />
            <Travel />
        </>
    )
}

export default AboutPage