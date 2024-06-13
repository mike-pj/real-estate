import React from 'react'
import stairs from '../assets/stairs.jpeg'
import bed from '../assets/bed.jpeg'
import house_03 from '../assets/house03.jpeg'
import house_04 from '../assets/house04.jpeg'
import highrise_02 from '../assets/highrise02.jpeg'
import william from '../assets/william.jpeg'
import { FaCamera, FaFilm, FaBed, FaShower, } from 'react-icons/fa'
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { FaMapMarkerAlt, FaVectorSquare } from "react-icons/fa";
import { Link } from 'react-router-dom'



function Properties_hm() {
    return (

        <section className='bg-[white] py-[110px]  px-[50px]'>
            <div className='w-full flex justify-center items-center'>
                <div>
                    <h6 className='border rounded-[50px] w-fit px-5 bg-orange-100 mb-8 text-[red] ml-[150px]'> Properties</h6>
                    <h1 className='text-[50px] font-bold mb-9'> Featured Listings</h1>
                </div>
            </div>

            <div className='flex flex-wrap justify-center gap-7 mb-[90px]'>
                <div className='relative w-[30%] border-2 h-fit bg-white shadow-lg rounded-lg'>

                    <Link to="">
                        <div className='relative'>
                            <img className='h-[42svh]' src={stairs} alt="stairs" />
                            <Link to="">
                                <div className='flex items-center gap-10 absolute top-[230px] left-4 z-10 text-white text-sm'>
                                    <p className='flex items-center gap-2   hover:text-orange-500'><i><FaMapMarkerAlt /></i>Belmont Garden, Chicago</p>
                                    <div>
                                        <div className='flex gap-3'>
                                            <p className='flex items-center gap-2 h-8 bg-[#6c6b73] px-2'><i className=' hover:text-orange-500'><FaCamera /></i>4</p>
                                            <p className='flex items-center gap-2 h-8 bg-[#6c6b73] px-2'><i className=' hover:text-orange-500'><FaFilm /></i>2</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </Link>

                    <div className='absolute top-[10px] right-[20px] text-white bg-[#16d616] px-2 cursor-default'>
                        <p>FOR RENT</p>
                    </div>

                    <div className='px-8'>
                        <p className='text-lg text-red-600 font-bold mt-8'>$34,900<span className='text-red-400 font-light'>/Month</span></p>
                        <h1 className='text-[20px] cursor-pointer font-bold mb-4 hover:text-[#fb5940]'> Comfortable Apartment</h1>

                        <p className=' text-[#6c808a] text-sm leading-6 mb-8'> Beautiful Huge 1 Family House Of Westbury. Newly Renovated With New Wood</p>

                        <div className='flex text-[#6c808a] mb-6'>
                            <div className='w-fit border-r-2 pr-4'>
                                <i className='flex items-center gap-2'><p> 3</p><FaBed /></i>
                                <p>Bedrooms</p>
                            </div>
                            <div className='w-fit border-r-2 pl-4 pr-4'>
                                <i className='flex items-center gap-2'><p> 2</p><FaShower /></i>
                                <p>Bathrooms</p>
                            </div>
                            <div className='w-fit pl-4 pr-4 '>
                                <i className='flex items-center gap-2'><p> 3450</p><FaVectorSquare /></i>
                                <p>Square Ft</p>
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-between items-center border-t-2 px-7 py-7'>
                        <div className='flex gap-2'>
                            <img className='w-[50px] rounded-full' src={william} alt="william" />
                            <div className='leading-7'>
                                <p className='font-bold'>William Seklo</p>
                                <p className='text-sm text-[#6c808a]'>Estate Agents</p>
                            </div>
                        </div>
                        <Link to="">
                            <div className="flex items-center gap-2">
                                <button className='bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white'><AiOutlineArrowsAlt /></button>
                                <button className='bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white'><CiHeart /></button>
                                <button className='bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white'><CiCirclePlus /></button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='relative w-[30%] border-2 h-fit bg-white shadow-lg rounded-lg'>

                    <Link to="">
                        <div className='relative'>
                            <img className='h-[42svh]' src={house_04} alt="stairs" />
                            <Link to="">
                                <div className='flex items-center gap-10 absolute top-[230px] left-4 z-10 text-white text-sm'>
                                    <p className='flex items-center gap-2   hover:text-orange-500'><i><FaMapMarkerAlt /></i>Belmont Garden, Chicago</p>
                                    <div>
                                        <div className='flex gap-3'>
                                            <p className='flex items-center gap-2 h-8 bg-[#6c6b73] px-2'><i className=' hover:text-orange-500'><FaCamera /></i>4</p>
                                            <p className='flex items-center gap-2 h-8 bg-[#6c6b73] px-2'><i className=' hover:text-orange-500'><FaFilm /></i>2</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </Link>

                    <div className='absolute top-[10px] right-[20px] text-white bg-[#16d616] px-2 cursor-default'>
                        <p>FOR RENT</p>
                    </div>

                    <div className='px-8'>
                        <p className='text-lg text-red-600 font-bold mt-8'>$34,900<span className='text-red-400 font-light'>/Month</span></p>
                        <h1 className='text-[20px] cursor-pointer font-bold mb-4 hover:text-[#fb5940]'> Luxury villa in Rego Park</h1>

                        <p className=' text-[#6c808a] text-sm leading-6 mb-8'> Beautiful Huge 1 Family House Of Westbury. Newly Renovated With New Wood</p>

                        <div className='flex text-[#6c808a] mb-6'>
                            <div className='w-fit border-r-2 pr-4'>
                                <i className='flex items-center gap-2'><p> 3</p><FaBed /></i>
                                <p>Bedrooms</p>
                            </div>
                            <div className='w-fit border-r-2 pl-4 pr-4'>
                                <i className='flex items-center gap-2'><p> 2</p><FaShower /></i>
                                <p>Bathrooms</p>
                            </div>
                            <div className='w-fit pl-4 pr-4 '>
                                <i className='flex items-center gap-2'><p> 3450</p><FaVectorSquare /></i>
                                <p>Square Ft</p>
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-between items-center border-t-2 px-7 py-7'>
                        <div className='flex gap-2'>
                            <img className='w-[50px] rounded-full' src={william} alt="william" />
                            <div className='leading-7'>
                                <p className='font-bold'>William Seklo</p>
                                <p className='text-sm text-[#6c808a]'>Estate Agents</p>
                            </div>
                        </div>
                        <Link to="">
                            <div className="flex items-center gap-2">
                                <button className='bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white'><AiOutlineArrowsAlt /></button>
                                <button className='bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white'><CiHeart /></button>
                                <button className='bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white'><CiCirclePlus /></button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='relative w-[30%] border-2 h-fit bg-white shadow-lg rounded-lg'>

                    <Link to="">
                        <div className='relative'>
                            <img className='h-[42svh]' src={highrise_02} alt="highrise02" />
                            <Link to="">
                                <div className='flex items-center gap-10 absolute top-[230px] left-4 z-10 text-white text-sm'>
                                    <p className='flex items-center gap-2   hover:text-orange-500'><i><FaMapMarkerAlt /></i>Belmont Garden, Chicago</p>
                                    <div>
                                        <div className='flex gap-3'>
                                            <p className='flex items-center gap-2 h-8 bg-[#6c6b73] px-2'><i className=' hover:text-orange-500'><FaCamera /></i>4</p>
                                            <p className='flex items-center gap-2 h-8 bg-[#6c6b73] px-2'><i className=' hover:text-orange-500'><FaFilm /></i>2</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </Link>

                    <div className='absolute top-[10px] right-[20px] text-white bg-[#16d616] px-2 cursor-default'>
                        <p>FOR RENT</p>
                    </div>

                    <div className='px-8'>
                        <p className='text-lg text-red-600 font-bold mt-8'>$34,900<span className='text-red-400 font-light'>/Month</span></p>
                        <h1 className='text-[20px] cursor-pointer font-bold mb-4 hover:text-[#fb5940]'> Beautiful Flat in Manhattan</h1>

                        <p className=' text-[#6c808a] text-sm leading-6 mb-8'> Beautiful Huge 1 Family House Of Westbury. Newly Renovated With New Wood</p>

                        <div className='flex text-[#6c808a] mb-6'>
                            <div className='w-fit border-r-2 pr-4'>
                                <i className='flex items-center gap-2'><p> 3</p><FaBed /></i>
                                <p>Bedrooms</p>
                            </div>
                            <div className='w-fit border-r-2 pl-4 pr-4'>
                                <i className='flex items-center gap-2'><p> 2</p><FaShower /></i>
                                <p>Bathrooms</p>
                            </div>
                            <div className='w-fit pl-4 pr-4 '>
                                <i className='flex items-center gap-2'><p> 3450</p><FaVectorSquare /></i>
                                <p>Square Ft</p>
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-between items-center border-t-2 px-7 py-7'>
                        <div className='flex gap-2'>
                            <img className='w-[50px] rounded-full' src={william} alt="william" />
                            <div className='leading-7'>
                                <p className='font-bold'>William Seklo</p>
                                <p className='text-sm text-[#6c808a]'>Estate Agents</p>
                            </div>
                        </div>
                        <Link to="">
                            <div className="flex items-center gap-2">
                                <button className='bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white'><AiOutlineArrowsAlt /></button>
                                <button className='bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white'><CiHeart /></button>
                                <button className='bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white'><CiCirclePlus /></button>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='relative w-[30%] border-2 h-fit bg-white shadow-lg rounded-lg'>

                    <Link to="">
                        <div className='relative'>
                            <img className='h-[42svh]' src={house_03} alt="house03" />
                            <Link to="">
                                <div className='flex items-center gap-10 absolute top-[230px] left-4 z-10 text-white text-sm'>
                                    <p className='flex items-center gap-2   hover:text-orange-500'><i><FaMapMarkerAlt /></i>Belmont Garden, Chicago</p>
                                    <div>
                                        <div className='flex gap-3'>
                                            <p className='flex items-center gap-2 h-8 bg-[#6c6b73] px-2'><i className=' hover:text-orange-500'><FaCamera /></i>4</p>
                                            <p className='flex items-center gap-2 h-8 bg-[#6c6b73] px-2'><i className=' hover:text-orange-500'><FaFilm /></i>2</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </Link>

                    <div className='absolute top-[10px] right-[20px] text-white bg-[#16d616] px-2 cursor-default'>
                        <p>FOR RENT</p>
                    </div>

                    <div className='px-8'>
                        <p className='text-lg text-red-600 font-bold mt-8'>$34,900<span className='text-red-400 font-light'>/Month</span></p>
                        <h1 className='text-[20px] cursor-pointer font-bold mb-4 hover:text-[#fb5940]'> New Apartment Nice View</h1>

                        <p className=' text-[#6c808a] text-sm leading-6 mb-8'> Beautiful Huge 1 Family House Of Westbury. Newly Renovated With New Wood</p>

                        <div className='flex text-[#6c808a] mb-6'>
                            <div className='w-fit border-r-2 pr-4'>
                                <i className='flex items-center gap-2'><p> 3</p><FaBed /></i>
                                <p>Bedrooms</p>
                            </div>
                            <div className='w-fit border-r-2 pl-4 pr-4'>
                                <i className='flex items-center gap-2'><p> 2</p><FaShower /></i>
                                <p>Bathrooms</p>
                            </div>
                            <div className='w-fit pl-4 pr-4 '>
                                <i className='flex items-center gap-2'><p> 3450</p><FaVectorSquare /></i>
                                <p>Square Ft</p>
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-between items-center border-t-2 px-7 py-7'>
                        <div className='flex gap-2'>
                            <img className='w-[50px] rounded-full' src={william} alt="william" />
                            <div className='leading-7'>
                                <p className='font-bold'>William Seklo</p>
                                <p className='text-sm text-[#6c808a]'>Estate Agents</p>
                            </div>
                        </div>
                        <Link to="">
                            <div className="flex items-center gap-2">
                                <button className='bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white'><AiOutlineArrowsAlt /></button>
                                <button className='bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white'><CiHeart /></button>
                                <button className='bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white'><CiCirclePlus /></button>
                            </div>
                        </Link>
                    </div>

                </div>

                <div className='relative w-[30%] border-2 h-fit bg-white shadow-lg rounded-lg'>

                    <Link to="">
                        <div className='relative'>
                            <img className='h-[42svh]' src={bed} alt="bed" />
                            <Link to="">
                                <div className='flex items-center gap-10 absolute top-[230px] left-4 z-10 text-white text-sm'>
                                    <p className='flex items-center gap-2   hover:text-orange-500'><i><FaMapMarkerAlt /></i>Belmont Garden, Chicago</p>
                                    <div>
                                        <div className='flex gap-3'>
                                            <p className='flex items-center gap-2 h-8 bg-[#6c6b73] px-2'><i className=' hover:text-orange-500'><FaCamera /></i>4</p>
                                            <p className='flex items-center gap-2 h-8 bg-[#6c6b73] px-2'><i className=' hover:text-orange-500'><FaFilm /></i>2</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </Link>

                    <div className='absolute top-[10px] right-[20px] text-white bg-red-600 px-2 cursor-default'>
                        <p>FOR SALE</p>
                    </div>

                    <div className='px-8'>
                        <p className='text-lg text-red-600 font-bold mt-8'>$34,900<span className='text-red-400 font-light'>/Month</span></p>
                        <h1 className='text-[20px] cursor-pointer font-bold mb-4 hover:text-[#fb5940]'> Modern Apartments</h1>

                        <p className=' text-[#6c808a] text-sm leading-6 mb-8'> Beautiful Huge 1 Family House Of Westbury. Newly Renovated With New Wood</p>

                        <div className='flex text-[#6c808a] mb-6'>
                            <div className='w-fit border-r-2 pr-4'>
                                <i className='flex items-center gap-2'><p> 3</p><FaBed /></i>
                                <p>Bedrooms</p>
                            </div>
                            <div className='w-fit border-r-2 pl-4 pr-4'>
                                <i className='flex items-center gap-2'><p> 2</p><FaShower /></i>
                                <p>Bathrooms</p>
                            </div>
                            <div className='w-fit pl-4 pr-4 '>
                                <i className='flex items-center gap-2'><p> 3450</p><FaVectorSquare /></i>
                                <p>Square Ft</p>
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-between items-center border-t-2 px-7 py-7'>
                        <div className='flex gap-2'>
                            <img className='w-[50px] rounded-full' src={william} alt="william" />
                            <div className='leading-7'>
                                <p className='font-bold'>William Seklo</p>
                                <p className='text-sm text-[#6c808a]'>Estate Agents</p>
                            </div>
                        </div>
                        <Link to="">
                            <div className="flex items-center gap-2">
                                <button className='bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white'><AiOutlineArrowsAlt /></button>
                                <button className='bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white'><CiHeart /></button>
                                <button className='bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white'><CiCirclePlus /></button>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>

        </section >
    )
}

export default Properties_hm