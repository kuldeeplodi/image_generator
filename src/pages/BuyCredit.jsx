import { div } from "motion/react-client";
import React from "react";

import {assets,plans }from "../assets/assets";
// import plans from "../assets/assets";
import Footer from "../components/Footer";
import { motion } from "motion/react";

const BuyCredit = () => {
  return (
    <motion.div className='min-h-[80vh] text-center pt-14 mb-10'
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}>

      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>Our Subscription </button>
      <h1 className='text-center text-3xl font-bold mb-6 sm:mb-10'>Choose the Subscription</h1>
      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item, index) => (
          <div className='bg-pink-50 drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all
          duration-500' key={index}>
            <img src={assets.logo_icon} alt="" className="h-20"/>
            <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
            <p>{item.desc}</p>
            <p><span>{item.id}</span>/{item.credits}</p>
            <button className='w-full bg-blue-600 text-white mt-8 text-sm rounded-full py-2.5 min-w-52'>Purchase</button>
          </div>
        ))}
      </div>
      <Footer />
    </motion.div>
  );
};

export default BuyCredit;
