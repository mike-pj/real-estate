import React from 'react'
import { Link } from 'react-router-dom'
import plan_view from '../assets/plan_view.png'


function Apartments_hm() {
    return (

        <section className='bg-[#f8f8fc] py-[110px]  xl:px-[100px]'>
            <div className='w-full flex justify-center items-center'>
                <div className=''>
                    <h6 className='border rounded-[50px] w-fit mx-auto px-5 bg-orange-100 mb-8 text-[red]'> Apartment Sketch</h6>
                    <h1 className='text-2xl md:text-4xl lg:text-[50px] text-center font-bold mb-9'> Apartments Plan</h1>
                </div>
            </div>

            <ul className='flex justify-evenly items-center flex-wrap xl:text-xl mb-14'>

                <Link to="">
                    <li>The Studio</li>
                </Link>

                <Link to="">
                    <li className='text-orange-500 border-orange-400 border-b-2 border-dashed'>Deluxe Portion</li>
                </Link>

                <Link to="">
                    <li>Penthouse</li>
                </Link>

                <Link to="">
                    <li>Top Garden</li>
                </Link>

                <Link to="">
                    <li>Double Height</li>
                </Link>

            </ul>

            <div className='flex flex-col lg:flex-row gap-[50px]'>
                <div className='text-sm lg:w-1/2 bg-[#ff5a3c] text-white px-10 lg:px-[80px] py-[80px]'>
                    <h1 className='font-bold text-2xl mb-5'>Deluxe Portion</h1>
                    <p className='font-light leading-8 mb-9'>
                        Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.
                    </p>
                    <div className='flex gap-3 mb-3'>
                        <p>Total Area</p>
                        <p className='border-b border-dashed w-[100px] lg:w-[200px] h-3 '></p>
                        <p>2800Sq. Ft</p>
                    </div>

                    <div className='flex gap-3 mb-3'>
                        <p>Bedroom</p>
                        <p className='border-b-2 border-dashed w-[100px] lg:w-[212px] h-3 '></p>
                        <p>150 Sq. Ft</p>
                    </div>

                    <div className='flex gap-3 mb-3'>
                        <p>Bathroom</p>
                        <p className='border-b-2 border-dashed w-[100px] lg:w-[213px] h-3 '></p>
                        <p> 45 Sq. Ft</p>
                    </div>

                    <div className='flex gap-3 mb-3'>
                        <p>Balcony/Pets</p>
                        <p className='border-b-2 border-dashed w-[100px] lg:w-[200px] h-3 '></p>
                        <p>Allowed</p>
                    </div>

                    <div className='flex gap-3'>
                        <p>Lounge</p>
                        <p className='border-b-2 border-dashed w-[100px] lg:w-[220px] h-3 '></p>
                        <p>650 Sq. Ft</p>
                    </div>
                </div>

                <div className='w-1/2 m-auto  lg:m-0'>
                    <img src={plan_view} alt="plan_view" />
                </div>
            </div>

        </section >
    )
}

export default Apartments_hm