import React from 'react'
import { stepsData } from '../assets/assets'
import { div } from 'motion/react-client'
import {delay,motion} from 'motion/react'

const Steps = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center space-y-10'
    initial={{opacity:0.2,y:100}}
    transiton={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}>

      <h1 className='text-3xl text-black-700 font-bold text-center rounded-full border px-28 py-4 hover:scale-105 transition-all duration-700'>How AI Magic Works</h1>
      <p className='text-lg text-gray-600 mb-8'>Transform Texts Into Stunning Images</p>
      <div className='space-y-4 w-full max-w-3xl text-sm'>{stepsData.map((item,index)=>(
        <div className='flex flex-center p-5 px-8 gap-4 bg-white/20 shadow-md  cursor-pointer hover:scale-[1.02]
        tansition-all duration-300  rounded-lg' key={index}>
        <img src={item.icon} width={40}alt="" />
        <h2 className='text-xl font-medium'>{item.title}</h2>
        <p className='text-orange-500'>{item.description}</p>
      </div>))}
      </div>
    </motion.div>
  )
}

export default Steps
