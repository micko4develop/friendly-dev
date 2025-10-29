import React from 'react'
import { Link } from 'react-router-dom'

function Hero({name = '[NAME]', text = 'I build friendly web expiriences and help others become, modern developers.'}) {
  return (
    <header className='text-center py-20 px-4 bg-gray-800 text-white'>
        <h2 className='text-4xl font-bold mb-4'>Hey I'm {name}👋</h2>
        <p className='text-lg text-gray-300 max-w-2xl mx-auto mb-6'>{text}</p>
        <div className='flex justify-center gap-4'>
            <Link 
              to='/projects' 
              className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium  duration-300  shadow-lg hover:shadow-xl'
            >
              View Projects
            </Link>
            <Link 
              to='/contact' 
              className='border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md font-medium  duration-300 '
            >
              Contact Me
            </Link>
        </div>
    </header>
  )
}

export default Hero