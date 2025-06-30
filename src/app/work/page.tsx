'use client'

import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { HiOutlineArrowDown } from 'react-icons/hi2'
import { motion } from 'framer-motion'

function Work() {
    return (
        <div className="bg-[#141414] rounded-2xl">
            <div className='flex flex-row items-center py-12 px-10  '>
                <div className='flex flex-start'>
                    <div className="flex items-center justify-center h-10 w-10 border rounded-full border-white text-white text-xl hover:bg-white hover:text-black transition">
                        <HiOutlineArrowDown />
                    </div>
                    <button className="flex items-center gap-2 border border-white rounded-full px-4 py-2 text-white font-medium hover:bg-white hover:text-black transition">
                        Work Process
                    </button>
                </div>

                <h1 className='mx-auto font-bold text-5xl'>My Work Process</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 py-12 px-10'>
                <motion.div 
                    className='bg-black p-10 rounded-2xl hover:bg-[#c5ff41] transition'
                    whileHover={{ x: 5, y: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <div className='flex flex-row items-center justify-between '>
                        <div className='flex items-center '>
                            <button className="flex justify-center items-center gap-2 border border-white rounded-full bg-[#c5ffee] px-5 py-2 text-black hover:bg-black hover:text-white transition leading-snug font-semibold">Discovery</button>
                        </div>
                        <div className='flex flex-row items-center text-white  border-white  hover:text-black'>
                            <BsArrowRight /><u>Read More</u>
                        </div>
                    </div>
                    <div className='my-8'>
                        <p className='text-[#929090f6] hover:text-black text-opacity-80 leading-relaxed'>
                            We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                    className='bg-black p-10 rounded-2xl hover:bg-[#c5ff41] transition hover:text-black'
                    whileHover={{ x: 5, y: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <div className='flex flex-row items-center justify-between '>
                        <div className='flex items-center'>
                            <button className="flex justify-center items-center gap-2 border border-white rounded-full bg-[#c5ffee] px-5 py-2 text-black hover:bg-black hover:text-white transition leading-snug font-semibold">Design</button>
                        </div>
                        <div className='flex flex-row items-center text-white  border-white hover:text-black'>
                            <BsArrowRight /><u>Read More</u>
                        </div>
                    </div>
                    <div className='my-8'>
                        <p className='text-[#929090f6] hover:text-black text-opacity-80 leading-relaxed'>
                            After we have a comprehensive understanding of your brand, we&apos;ll be ready to move onto design. Each page will be designed, reviewed, and given your stamp of approval.
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                    className='bg-black p-10 rounded-2xl  hover:bg-[#c5ff41] transition'
                    whileHover={{ x: 5, y: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <div className='flex flex-row items-center justify-between '>
                        <div className='flex items-center '>
                            <button className="flex justify-center items-center gap-2 border border-white rounded-full bg-[#c5ffee] px-5 py-2 text-black hover:bg-black hover:text-white transition leading-snug font-semibold">Strategy</button>
                        </div>
                        <div className='flex flex-row items-center text-white  border-white  hover:text-black'>
                            <BsArrowRight /><u>Read More</u>
                        </div>
                    </div>
                    <div className='my-8'>
                        <p className='text-[#929090f6] hover:text-black text-opacity-80 leading-relaxed'>
                            Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth reviews, we&apos;re here to set the stage for success.
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                    className='bg-black p-10 rounded-2xl  hover:bg-[#c5ff41] transition'
                    whileHover={{ x: 5, y: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <div className='flex flex-row items-center justify-between '>
                        <div className='flex items-center'>
                            <button className="flex justify-center items-center gap-2 border border-white rounded-full bg-[#c5ffee] px-5 py-2 text-black hover:bg-black hover:text-white transition leading-snug font-semibold">Build</button>
                        </div>
                        <div className='flex flex-row items-center text-white  border-white  hover:text-black'>
                            <BsArrowRight /><u>Read More</u>
                        </div>
                    </div>
                    <div className='my-8'>
                        <p className='text-[#929090f6] text-opacity-80 leading-relaxed hover:text-black'>
                            Whether we&apos;ve just finished designing your new site or you&apos;re handing off a finished design for us to develop in Webflow, we&apos;re here to apply our trusted development process to your project.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Work
