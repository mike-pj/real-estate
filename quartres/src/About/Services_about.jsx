import React from 'react'
import home from '../assets/services01.png'
import home_02 from '../assets/services02.png'
import home_03 from '../assets/services03.png'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'



function Services_about() {
    return (

        <section className='bg-[#f2f6f7] pt-[110px]  px-[50px]'>
            <div className='w-full flex justify-center items-center'>
                <div>
                    <h6 className='border rounded-[50px] w-fit px-5 bg-orange-100 mb-8 text-[red] ml-[120px]'> Our Services</h6>
                    <h1 className='text-[50px] font-bold mb-9'> Our Main Focus</h1>
                </div>
            </div>

            <div className='flex gap-y-6 flex-wrap justify-between pb-[120px]'>
                <div className='w-[100%] md:w-[44%] lg:w-[31%] border-2 h-[400px] bg-white shadow-lg rounded-lg'>

                    <div className='text-lg text-[#6c808a] mb-2'>
                        <div className='flex justify-center items-center pt-9'>
                            <img src={home} alt="services01" />
                        </div>

                        <Link to="">
                            <h3 className='text-center text-2xl font-bold text-black mb-5 hover:text-orange-600'> Buy a home</h3>
                        </Link>

                        <p className='text-center leading-7 px-9 text-sm text-[#6c808a] mb-7'> over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>

                        <Link className='' to="">
                            <p className='flex justify-center items-center text-sm text-[#6c808a] hover:text-orange-600'>Find A Home<span><FaArrowRight /></span></p>
                        </Link>

                    </div>


                </div>

                <div className='w-[100%] md:w-[44%] lg:w-[31%] border-2 h-[400px] bg-white shadow-lg rounded-lg'>

                    <div className='text-lg text-[#6c808a] mb-2'>
                        <div className='flex justify-center items-center pt-9'>
                            <img src={home_02} alt="services02" />
                        </div>

                        <Link to="">
                            <h3 className='text-center text-2xl font-bold text-black mb-5 hover:text-orange-600'> Rent a home</h3>
                        </Link>

                        <p className='text-center leading-7 px-9 text-sm text-[#6c808a] mb-7'> over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>

                        <Link className='' to="">
                            <p className='flex justify-center items-center text-sm text-[#6c808a] hover:text-orange-600'>Find A Home<span><FaArrowRight /></span></p>
                        </Link>

                    </div>


                </div>
                <div className='w-[100%] md:w-[44%] lg:w-[31%] border-2 h-[400px] bg-white shadow-lg rounded-lg'>

                    <div className='text-lg text-[#6c808a] mb-2'>
                        <div className='flex justify-center items-center pt-9'>
                            <img src={home_03} alt="services03" />
                        </div>

                        <Link to="">
                            <h3 className='text-center text-2xl font-bold text-black mb-5 hover:text-orange-600'> Sell a home
                            </h3>
                        </Link>

                        <p className='text-center leading-7 px-9 text-sm text-[#6c808a] mb-7'> over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>

                        <Link className='' to="">
                            <p className='flex justify-center items-center text-sm text-[#6c808a] hover:text-orange-600'>Find A Home<span><FaArrowRight /></span></p>
                        </Link>

                    </div>


                </div>

            </div>

        </section>
    )
}

export default Services_about;