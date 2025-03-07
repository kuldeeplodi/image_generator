import { form } from 'motion/react-client'
import React from 'react'
import { useState } from 'react'
import assets from '../assets/assets'


const Result = () => {
  const [image, setImage] = useState(assets.sample_img_2)
  const [loading, setLoading] = useState(false)
  const [isImageLoaded,setIsImageLoaded]=useState(false)
  const[input,setInput]=useState('')

  const onSubmitHandler=async(e)=>{
e.preventDefault()
setLoading(true)
if(input){
  if(image){
    setIsImageLoaded(true)
    setImage(image)
  }
}
setLoading(false)
  }
  return (
    <form className='flex flex-col min-h-[90vh] items-center justify-center 'onSubmit={onSubmitHandler}>
      <div>
    <div className='relative'>
        <img src={image} alt="" className='max-w-sm rounded'/>
        <span className='absolute bottom-0 left-0 h-1 bg-red-500'></span>
    </div>
    <p>Generating....</p>
    </div>
    </form>
  )
}

export default Result
