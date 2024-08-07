import React from 'react'
import img05 from '../assets/img05.jpeg'
import img06 from '../assets/img06.jpeg'
import img07 from '../assets/img07.jpeg'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';



function Teams_about() {
    return (
        <section className='pb-[100px]'>
            <div className='w-full flex justify-center items-center pt-[100px]'>
                <div>
                    <h6 className='border rounded-[50px] w-fit mx-auto px-5 bg-orange-100 mb-8 text-[red]'>Teams</h6>
                    <h1 className='text-2xl lg:text-[50px] font-bold mb-9'> Property Agents</h1>
                </div>
            </div>

            <div className='flex flex-wrap gap-y-5 justify-between items-center px-3 lg:px-[95px]'>
                <div className='w-full md:w-[44%] lg:w-[30%] border-2 h-fit bg-white hover:shadow-lg rounded-lg'>
                    <img src={img05} alt="stairs" />
                    <div className='flex justify-center items-center px-8 py-8'>
                        <div className='w-fit mx-auto'>
                            <h1 className='mb-5 font-bold tracking-normal text-2xl lg:text-3xl'>Rosalina D. William</h1>
                            <p className='mb-5 font-bold text-red-500 text-xl ml-5 lg:text-2xl'>Real Estate Broker</p>
                            <div className='flex items-center gap-7 ml-9 text-[#5c727d]'>
                                <i className='cursor-pointer hover:text-red-500'><FaFacebookF /></i>
                                <i className='cursor-pointer hover:text-red-500'><FaTwitter /></i>
                                <i className='cursor-pointer hover:text-red-500'><FaLinkedinIn /></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-[44%] lg:w-[30%] border-2 h-fit bg-white hover:shadow-lg rounded-lg'>
                    <img src={img06} alt="stairs" />
                    <div className='flex justify-center items-center px-8 py-8'>
                        <div className='w-fit mx-auto'>
                            <h1 className='mb-5 font-bold tracking-normal text-2xl lg:text-3xl'>Kelian Anderson</h1>
                            <p className='mb-5 font-bold text-red-500 text-xl ml-5 lg:text-2xl'>
                                Selling Agents
                            </p>
                            <div className='flex items-center gap-7 ml-9 text-[#5c727d]'>
                                <i className='cursor-pointer hover:text-red-500'><FaFacebookF /></i>
                                <i className='cursor-pointer hover:text-red-500'><FaTwitter /></i>
                                <i className='cursor-pointer hover:text-red-500'><FaLinkedinIn /></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-[44%] lg:w-[30%] border-2 h-fit bg-white hover:shadow-lg rounded-lg'>
                    <img src={img07} alt="stairs" />
                    <div className='flex justify-center items-center px-8 py-8'>
                        <div className='w-fit mx-auto'>
                            <h1 className='mb-5 font-bold tracking-normal text-2xl lg:text-3xl'>Miranda H. Halim</h1>
                            <p className='mb-5 font-bold text-red-500 text-xl ml-5 lg:text-2xl'>Property Seller</p>
                            <div className='flex items-center gap-7 ml-9 text-[#5c727d]'>
                                <i className='cursor-pointer hover:text-red-500'><FaFacebookF /></i>
                                <i className='cursor-pointer hover:text-red-500'><FaTwitter /></i>
                                <i className='cursor-pointer hover:text-red-500'><FaLinkedinIn /></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Teams_about