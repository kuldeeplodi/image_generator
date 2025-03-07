import { div, form } from 'motion/react-client'
import React from 'react'
import { useState } from 'react'
import {assets} from '../assets/assets'
import { motion } from 'motion/react'

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_2)
  const [loading, setLoading] = useState(false)
  const [isImageLoaded,setIsImageLoaded]=useState(false)
  const[input,setInput]=useState('')

  const onSubmitHandler=async(e)=>{
e.preventDefault()
setLoading(true)
if(input){
  const image = await generateImage(input)
  if(image){
    setIsImageLoaded(true)
    setImage(image)
  }
}
setLoading(false)
  }
  return (
    <motion.form className='flex flex-col min-h-[90vh] items-center justify-center 'onSubmit={onSubmitHandler}
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}>
      <div>
    <div className='relative'>
        <img src={image} alt="" className='max-w-sm rounded'/>
        <span className={`absolute bottom-0 left-0 h-1 bg-red-500 ${loading ? 'w-full transition-all duration-[10s]': 'w-0'}`} />
    </div>
    <p className={!loading?"hidden":""}>Generating....</p>
    </div>
    {!isImageLoaded && 
    <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full '><input type="text" placeholder='Describe your idea and our AI will generate Image' value={input} onChange={(e)=>setInput(e.target.value)} className=' outline-none flex-1 bg-transparent  ml-8 max-sm:w-20 placeholder:color'/>
    <button type='submit' className='bg-pink-500 text-white px-10 sm:px-16 py-3 rounded-full '>Generate</button>
    </div>}
    {isImageLoaded &&
    <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'> <button className='bg-pink-500 text-white px-8 py-3 rounded-full ' onClick={()=>setIsImageLoaded(false)}>Generate New Image</button>
    <a href={image} download className='bg-yellow-900 px-10 py-3 rounded-full cursor-pointer'>Download</a>
    </div>}

    </motion.form>
  )
}

export default Result
