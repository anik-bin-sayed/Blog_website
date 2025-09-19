import React from 'react'

// components
import Contact from '../Components/Contact/Contact'
import Follow from '../Components/Contact/Follow'
import Title from '../utils/Title'


const ContactPage = () => {
    return (
        <>
            <Title value="Contact - Lifestyle blogger" />
            <Contact />
            <Follow />
        </>
    )
}

export default ContactPage