import React from 'react'

// css
import './Passion.css'
import { passion } from '../../../data/Passion'
import { Link } from 'react-router-dom'

const Passion = () => {
    return (
        <div className="passion_section">
            <div className='w-[80%] mx-auto py-20 text-center'>
                <h1 className='text-4xl font-semibold'>
                    Explore My <span className='focused-text italic'>Passions</span>
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20'>
                    {
                        passion && passion.map(({ id, icon: Icon, title, description }) => (
                            <div key={id} className='passion-item border-2 border-gray-300 rounded-lg p-5 my-5 cursor-default'>
                                <div className="relative flex justify-center text-5xl text-gray-600 mb-3">
                                    <div className="absolute -mt-16 border-2 border-gray-300 bg-white rounded-full p-4 ">
                                        <Icon />
                                    </div>
                                </div>

                                <h2 className='text-xl mt-6 font-semibold'>{title}</h2>
                                <p className='text-gray-500 mt-2'>{description}</p>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <Link to="/blog" className='btn uppercase inline-block mt-10 px-6 py-3  tracking-[0.3cap]'>
                        View All Blogs
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Passion
