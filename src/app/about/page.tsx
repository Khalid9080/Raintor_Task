'use client';

import React from 'react';
import { HiOutlineArrowDown } from 'react-icons/hi2';
import { SiAutodesk, SiCssdesignawards } from 'react-icons/si';
import { motion } from 'framer-motion';


function About() {
  return (
    <div>
      <div className='flex flex-row justify-end mr-52 relative z-10'>
        <div className='mt-40 flex'>
          <div className="flex items-center justify-center h-10 w-10 border border-black text-black rounded-full text-xl hover:bg-black hover:text-white transition">
            <HiOutlineArrowDown />
          </div>
          <button className="flex items-center gap-2 border border-black rounded-full px-4 py-2 text-black font-medium hover:bg-black hover:text-white transition">
            About
          </button>
        </div>
      </div>

      <div className='my-16'>
        <h1 className='flex flex-row justify-center text-black items-center text-8xl leading-snug font-bold'>
          I&rsquo;ve been <span className='text-white bg-black rounded-xl p-2'>Developing </span> 
        </h1>
        <h1 className='flex flex-row justify-center text-black items-center text-8xl leading-snug font-bold mt-3'>
          Websites since <span className='text-white bg-black rounded-xl p-2'>2013</span>
        </h1>
      </div>

      <div className="mx-auto max-w-2xl flex items-center justify-center">
        <p className="text-black text-center leading-relaxed font-medium">
          We start every new client interaction with an in-depth discovery call where we get to know each other and recommend the best course of action.
        </p>
      </div>

      <section className='flex flex-row justify-center items-center mt-20 mb-10 relative z-10 gap-x-44'>
        <div>
          <h1 className='text-black font-bold text-4xl'>PREVIOUSLY <br /> WORKED ON</h1>
        </div>
        <div className='grid grid-cols-3 gap-x-4 gap-y-2'>
          {/* Animating buttons using framer-motion */}
          <motion.button
            className="flex items-center justify-center gap-2 border border-black rounded-full px-5 py-4 text-black bg-white font-bold hover:bg-black hover:text-white transition"
            whileHover={{ x: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Awwwards.
          </motion.button>

          <motion.button
            className="flex items-center justify-center gap-2 border border-black rounded-full px-5 py-4 text-black font-light hover:bg-black hover:text-white transition"
            whileHover={{ x: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            CSSVINNER
          </motion.button>

          <motion.button
            className="flex items-center gap-0 border border-black rounded-full px-6 py-4 text-black font-medium text-xl hover:bg-black hover:text-white transition"
            whileHover={{ y: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <span className='font-bold'>/</span>thoughtworks
          </motion.button>

          <motion.button
            className="flex items-center justify-center border border-black rounded-full px-5 py-4 text-black font-light text-2xl hover:bg-black hover:text-white transition"
            whileHover={{ x: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            facebook
          </motion.button>

          <motion.button
            className="flex items-center justify-center gap-1 border border-black rounded-full px-5 py-4 text-black font-bold hover:bg-black hover:text-white transition"
            whileHover={{ x: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <SiAutodesk /> AUTODESK
          </motion.button>

          <motion.button
            className="flex items-center justify-center border gap-1 border-black rounded-full px-5 py-4 text-black font-medium hover:bg-black hover:text-white transition"
            whileHover={{ x: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <SiCssdesignawards /> <span> CSS<span className='font-bold'>Designe</span>Awards</span>
          </motion.button>
        </div>
      </section>
    </div>
  );
}

export default About;
