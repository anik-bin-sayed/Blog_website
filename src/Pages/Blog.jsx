import React from 'react'

import BlogHeroImage from '../Components/Blog/BlogHeroImage/BlogHeroImage'
import Blogs from '../Components/Blog/Blogs/Blogs'
import Title from '../utils/Title'

const BlogPage = () => {
    return (
        <>
            <Title value="Blog - Lifestyle blogger" />
            <BlogHeroImage />
            <Blogs />
        </>
    )
}

export default BlogPage