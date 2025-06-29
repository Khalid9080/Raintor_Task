import React from 'react'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import { HiOutlineArrowDown } from 'react-icons/hi2'

function Stack() {
    return (
        <div className='text-white bg-black rounded-2xl relative z-10 mt-10 py-16 px-10'>
            <div className='flex items-center'>
                <div className="flex items-center justify-center h-10 w-10 border border-white  rounded-full text-xl">   
                    <HiOutlineArrowDown />
                </div>
                <button className="flex items-center gap-2 border border-white rounded-full px-4 py-2 text-white font-medium">
                    Why Choose Me?
                </button>
            </div>

            <section className='flex flex-row items-center justify-between '>
                
                    <h1 className='text-6xl font-bold leading-relaxed'>My Extensive <br />List of Skills</h1>
                

                <div className='my-5'>
                   <h1 className='text-xl leading-relaxed'>Building the wrolds best marketing your <br />trusted partner for strategy, design and dev.</h1>
                    <div><hr className='text-stone-700 mt-5'></hr></div>
                    <div className='gap-2 flex flex-row items-center justify-end mt-10'>
                        <div  className="flex items-center justify-center h-10 w-10 border border-white  rounded-full text-xl" ><GoArrowLeft /> </div>
                        <div  className="flex items-center justify-center h-10 w-10 border border-white  rounded-full text-xl"> <GoArrowRight /></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Stack