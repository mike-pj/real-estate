import React from 'react'
import { FaArrowCircleRight, FaCar, FaStethoscope, FaSwimmingPool } from 'react-icons/fa'
import { GrShieldSecurity } from "react-icons/gr";
import { IoLibraryOutline } from "react-icons/io5";
import { MdKingBed } from "react-icons/md";
import { FcHome } from "react-icons/fc";
import { GiKidSlide } from "react-icons/gi";

function OurAmenities_hm() {
  return (
    <section className='bg-[#ffffff] #fff py-[110px]  px-[50px]'>
        <div className='w-full flex justify-center items-center'>
            <div>
                <h6 className='border rounded-[50px] w-fit p-2 bg-orange-100 mb-8 text-[red] ml-[150px]'> Our Aminities</h6>
                <h1 className='text-[50px] font-bold mb-9'> Building Aminities</h1>
            </div>
        </div>

        <div className='flex flex-wrap'>
            <div className='w-1/4 flex justify-center items-center mb-[50px]'>
                <div className='border rounded-[20px] shadow-lg bg-white cursor-pointer hover:bg-orange-400 w-[290px] h-[290px] flex justify-center items-center'>
                    <div className='relative'>
                        <span className='flex justify-center items-center rounded-full h-[130px] bg-orange-100 mb-5'><i className='text-[50px] text-[red]'><FaCar /></i></span>
                        <p className='text-[20px] font-bold'> Parking Space</p>
                        <span className='absolute top-[216px] left-[50px] text-4xl text-[red]'><FaArrowCircleRight /></span>
                    </div>
                </div>
            </div>

            <div className='w-1/4 flex justify-center items-center mb-[50px]'>
                <div className='border rounded-[20px] shadow-lg bg-white cursor-pointer hover:bg-orange-400 w-[290px] h-[290px] flex justify-center items-center'>
                    <div className='relative'>
                        <span className='flex justify-center items-center rounded-full h-[130px] bg-orange-100 mb-5'><i className='text-[50px] text-[red]'><FaSwimmingPool /></i></span>
                        <p className='text-[20px] font-bold'> Swimming Pool</p>
                        <span className='absolute top-[216px] left-[50px] text-4xl text-[red]'><FaArrowCircleRight /></span>
                    </div>
                </div>
            </div>

            <div className='w-1/4 flex justify-center items-center mb-[50px]'>
                <div className='border rounded-[20px] shadow-lg bg-white cursor-pointer hover:bg-orange-400 w-[290px] h-[290px] flex justify-center items-center'>
                    <div className='relative'>
                        <span className='flex justify-center items-center rounded-full h-[140px] bg-orange-100 mb-5'><i className='text-[50px] text-[red]'><GrShieldSecurity /></i></span>
                        <p className='text-[20px] font-bold'> Private Security</p>
                        <span className='absolute top-[216px] left-[50px] text-4xl text-[red]'><FaArrowCircleRight /></span>
                    </div>
                </div>
            </div>

            <div className='w-1/4 flex justify-center items-center mb-[50px]'>
                <div className='border rounded-[20px] shadow-lg bg-white cursor-pointer hover:bg-orange-400 w-[290px] h-[290px] flex justify-center items-center'>
                    <div className='relative'>
                        <span className='flex justify-center items-center rounded-full h-[130px] bg-orange-100 mb-5'><i className='text-[50px] text-[red]'><FaStethoscope /></i></span>
                        <p className='text-[20px] font-bold'> Medical Center</p>
                        <span className='absolute top-[216px] left-[50px] text-4xl text-[red]'><FaArrowCircleRight /></span>
                    </div>
                </div>
            </div>

            <div className='w-1/4 flex justify-center items-center mb-[50px]'>
                <div className='border rounded-[20px] shadow-lg bg-white cursor-pointer hover:bg-orange-400 w-[290px] h-[290px] flex justify-center items-center'>
                    <div className='relative'>
                        <span className='flex justify-center items-center rounded-full h-[130px] w-[140px] bg-orange-100 mb-5'><i className='text-[50px] text-[red]'><IoLibraryOutline /></i></span>
                        <p className='text-[20px] font-bold'> Library Area</p>
                        <span className='absolute top-[216px] left-[50px] text-4xl text-[red]'><FaArrowCircleRight /></span>
                    </div>
                </div>
            </div>

            <div className='w-1/4 flex justify-center items-center mb-[50px]'>
                <div className='border rounded-[20px] shadow-lg bg-white cursor-pointer hover:bg-orange-400 w-[290px] h-[290px] flex justify-center items-center'>
                    <div className='relative'>
                        <span className='flex justify-center items-center rounded-full h-[130px] bg-orange-100 mb-5'><i className='text-[50px] text-[red]'><MdKingBed /></i></span>
                        <p className='text-[20px] font-bold'> King Size Beds</p>
                        <span className='absolute top-[216px] left-[50px] text-4xl text-[red]'><FaArrowCircleRight /></span>
                    </div>
                </div>
            </div>

            <div className='w-1/4 flex justify-center items-center mb-[50px]'>
                <div className='border rounded-[20px] shadow-lg bg-white cursor-pointer hover:bg-orange-400 w-[290px] h-[290px] flex justify-center items-center'>
                    <div className='relative'>
                        <span className='flex justify-center items-center rounded-full h-[130px] bg-orange-100 mb-5'><i className='text-[50px] text-[red]'><FcHome /></i></span>
                        <p className='text-[20px] font-bold'> Smart Homes</p>
                        <span className='absolute top-[216px] left-[50px] text-4xl text-[red]'><FaArrowCircleRight /></span>
                    </div>
                </div>
            </div>

            <div className='w-1/4 flex justify-center items-center mb-[50px]'>
                <div className='border rounded-[20px] shadow-lg bg-white cursor-pointer hover:bg-orange-400 w-[290px] h-[290px] flex justify-center items-center'>
                    <div className='relative'>
                        <span className='flex justify-center items-center rounded-full h-[130px] bg-orange-100 mb-5'><i className='text-[50px] text-[red]'><GiKidSlide /></i></span>
                        <p className='text-[20px] font-bold'> Kid's Playland</p>
                        <span className='absolute top-[216px] left-[50px] text-4xl text-[red]'><FaArrowCircleRight /></span>
                    </div>
                </div>
            </div>
        </div>
      
    </section>
    
  )
}

export default OurAmenities_hm