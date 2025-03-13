import React from 'react'
import { useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets'

const GenerateBtn = () => {
  const navigate=useNavigate()
  
  return (
    <div className='pb-16 text-center'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold py-6 md:py-16  '>See the Magic. Try Now</h1>
      <button className="inline-flex items-center gap-2 px-12 py-3 rounded-full bg-blue-500  text-white hover:scale-105 transition-all duration-500"onClick={()=>navigate("/buyCredit")}>Subscription<img src="" alt="" />
      <img src={assets.star_group} alt="" className='h-4'/></button>
    </div>
  )
}

export default GenerateBtn
