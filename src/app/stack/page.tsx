'use client'

import React from 'react'
import { FaReact } from 'react-icons/fa'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import { HiOutlineArrowDown } from 'react-icons/hi2'
import { motion } from 'framer-motion'

function Stack() {
  return (
    <div className='text-white bg-black rounded-2xl relative z-10 mt-40 py-16 px-10'>
      <div className='flex items-center'>
        <div className="flex items-center justify-center h-10 w-10 border border-white hover:bg-white hover:text-black transition rounded-full text-xl">
          <HiOutlineArrowDown />
        </div>
        <button className="flex items-center gap-2 border border-white rounded-full px-4 py-2 text-white font-medium hover:bg-white hover:text-black transition">
          Why Choose Me
        </button>
      </div>

      <section className='flex flex-row items-center justify-between '>

        <h1 className='text-6xl font-bold leading-relaxed'>My Extensive <br />List of Skills</h1>

        <div className='my-5'>
          <h1 className='text-xl leading-relaxed'>Building the worlds best marketing your <br />trusted partner for strategy, design and dev.</h1>
          <div><hr className='text-stone-700 mt-5'></hr></div>
          <div className='gap-2 flex flex-row items-center justify-end mt-10'>
            <div className="flex items-center justify-center h-10 w-10 border border-white hover:bg-white hover:text-black transition rounded-full text-xl" ><GoArrowLeft /> </div>
            <div className="flex items-center justify-center h-10 w-10 border border-white hover:bg-white hover:text-black transition rounded-full text-xl"> <GoArrowRight /></div>
          </div>
        </div>
      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
        <motion.div
          className='bg-[rgba(255,_255,_255,_0.08)] rounded-2xl p-10 my-5'
          whileHover={{ rotate: 10, x: 5, y: 5 }} // Add rotation on hover
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="icon-wrapper">
            <FaReact className="react-icon" />
          </div>
          <h1 className='my-8 text-5xl'>HTML & CSS</h1>
          <div className='w-72 text-white opacity-70'>Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis</div>
        </motion.div>

        <motion.div
          className='bg-[rgba(255,_255,_255,_0.08)] rounded-2xl p-10 my-5'
          whileHover={{ rotate: 10, x: 5, y: 5 }} // Add rotation on hover
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="icon-wrapper">
            <FaReact className="react-icon" />
          </div>
          <h1 className='my-8 text-5xl'>Javascript</h1>
          <div className='w-72 text-white opacity-70'>Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis</div>
        </motion.div>

        <motion.div
          className='bg-[rgba(255,_255,_255,_0.08)] rounded-2xl p-10 my-5'
          whileHover={{ rotate: 10, x: 5, y: 5 }} // Add rotation on hover
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="icon-wrapper">
            <FaReact className="react-icon" />
          </div>
          <h1 className='my-8 text-5xl'>Webflow</h1>
          <div className='w-72 text-white opacity-70'>Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis</div>
        </motion.div>

      </section>
    </div>
  )
}

export default Stack
