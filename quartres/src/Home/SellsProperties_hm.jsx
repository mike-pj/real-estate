import React from 'react'
import Abouts from '../assets/about02.png'
import houseRight from '../assets/house02.jpeg'
import balcony from '../assets/balcony.jpeg'
import sittingroom from '../assets/sittingroom.jpeg'
import { IoRemoveOutline } from "react-icons/io5";
import { FaBed, FaShower, FaCar } from 'react-icons/fa';
import { FaVectorSquare } from "react-icons/fa6";
import { Link } from 'react-router-dom'



function SellsProperties_hm() {

    return (
        <section className='bg-zinc-50'>
            <div className="flex pl-12 pr-20 justify-between py-14 pb-[120px] gap-10">

                <div className='w-1/2 text-zinc-500'>
                    <h5 className='text-orange-600 bg-orange-200 w-fit px-4 py-1 mb-4 rounded-2xl'>About Us</h5>

                    <h1 className='text-[45px] text-black w-[600px] leading-[60px] font-bold mb-6'>Today Sells Properties <span>.</span></h1>

                    <p className='mb-6 w-9/12 leading-[30px]'>Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information</p>

                    <p className='flex items-center gap-3 mb-5'><i className='text-[red]'><IoRemoveOutline /></i>Live Music Cocerts at Luviana</p>

                    <p className='flex items-center gap-3 mb-5'><i className='text-[red]'><IoRemoveOutline /></i>Our SecretIsland Boat Tour is Just for You</p>

                    <p className='flex items-center gap-3 mb-5'><i className='text-[red]'><IoRemoveOutline /></i>Live Music Cocerts at Luviana</p>

                    <p className='flex items-center gap-3 mb-5'><i className='text-[red]'><IoRemoveOutline /></i>Live Music Cocerts at Luviana</p>

                    <div className='flex '>
                        <div className='w-fit border-r-2 pr-4'>
                            <i className='flex items-center gap-2'><p> 3</p><FaBed /></i>
                            <p>Bedrooms</p>
                        </div>
                        <div className='w-fit border-r-2 pl-4 pr-4'>
                            <i className='flex items-center gap-2'><p> 2</p><FaShower /></i>
                            <p>Bathrooms</p>
                        </div>
                        <div className='w-fit border-r-2 pl-4 pr-4'>
                            <i className='flex items-center gap-2'><p> 3</p><FaCar /></i>
                            <p>Car parking</p>
                        </div>
                        <div className='w-fit border-r-2 pl-4 pr-4'>
                            <i className='flex items-center gap-2'><p> 3450</p><FaVectorSquare /></i>
                            <p>Square Ft</p>
                        </div>
                    </div>

                    <div className='flex gap-4 mt-6'>
                        <Link to="">
                            <img className='w-[150px] h-[100px]' src={houseRight} alt="houseRight" />
                        </Link>

                        <Link to="">
                            <img className='w-[150px] h-[100px]' src={balcony} alt="balcony" />
                        </Link>

                        <Link to="">
                            <img className='w-[150px] h-[100px]' src={sittingroom} alt="sittingroom" />
                        </Link>

                    </div>



                </div>

                <div className="relative max-h-[600px] border">
                    <img src={Abouts} alt="" className='h-full w-full' />
                </div>

            </div>
        </section>
    )
}

export default SellsProperties_hm