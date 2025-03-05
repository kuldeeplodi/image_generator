import React from 'react'
import assets from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center my-20'> 
      <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border hover:scale-105 border-neutral-500 transition-all duration-700 '>
        <p>Best Transform Words into Art </p>
        <img src={assets.favicon} style={{}}alt="" />
      
      </div>
    </div>
  )
}

export default Header
