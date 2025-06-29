
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { HiOutlineArrowRight } from "react-icons/hi2";
import { ImPhone } from 'react-icons/im';

function Navbar() {
    return (
        <div className="relative text-black pt-5">


            <section className="flex items-center justify-between p-4 relative z-10">
                <div>
                    <h1 className="font-bold text-4xl">DEVLOP.ME</h1>
                </div>
                <div className="flex items-center gap-12">
                    <div>
                        <ul className="flex gap-6 font-medium">
                            <li>Home</li>
                            <li>About</li>
                            <li>Portfolio</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <button className="flex items-center gap-2 border border-black rounded-full px-4 py-2 text-black font-medium hover:bg-black hover:text-white transition">
                        <span className="flex items-center justify-center h-10 w-10 border -ml-4 border-black hover:border-white rounded-full text-xl">
                            <HiOutlineArrowRight />
                        </span>
                        Start Project
                    </button>
                </div>
            </section>


            <section className="mt-40 relative z-10">
                <div>
                    <h1 className="text-6xl font-bold leading-relaxed">
                        Trusted <span className="bg-black text-white p-2 rounded-md">Partner</span> for <br className='mt-10'></br>Your Website <span className="bg-black text-white p-2 rounded-md ">Develope.</span>
                    </h1>

                </div>
            </section>

            <section className='mt-20 relative z-10 flex items-center justify-between'>
                <div className="flex items-center">
                    <div className="rotate-270"> @Williamrey </div>
                    <div className="rotate-360 flex flex-col items-center space-y-2">
                        <div className='rotate-270 text-2xl'><FaTwitter /></div>
                        <div className='rotate-270 text-2xl'><FaInstagram /></div>
                        <div className='rotate-270 text-2xl'><FaFacebook /></div>
                    </div>
                </div>


                <section className=' max-w-2/5 mx-auto'>

                    <div>
                        <p className='font-medium'>Building the world best marketing website for over a decade. <br></br> Your trusted partner, design and dev.</p>
                    </div>

                    <button className="flex mt-10 items-center gap-2 border border-black rounded-full px-4 py-2 text-black font-medium hover:bg-black hover:text-white transition">
                        <span className="flex items-center justify-center h-10 w-10 border -ml-4 border-black hover:border-white rounded-full text-xl">
                            <ImPhone />
                        </span>
                        Schedule a Call
                    </button>



                </section>
            </section>

        </div>
    );
}

export default Navbar;
