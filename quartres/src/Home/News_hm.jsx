import React from 'react'
import stairs from '../assets/stairs.jpeg'
import bed from '../assets/bed.jpeg'
import house from '../assets/house01.jpeg'
import balcony from '../assets/balcony.jpeg'
import highrise from '../assets/highrise.jpeg'
import { FaUser, FaTag, FaCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function News_hm() {
    return (
        <section className='bg-[#f8f8fc] py-[110px]  px-[50px]'>
            <div className='w-full flex justify-center items-center'>
                <div>
                    <h6 className='border rounded-[50px] w-fit px-5 bg-orange-100 mb-8 text-[red] ml-[150px]'> News & Blogs</h6>
                    <h1 className='text-[50px] font-bold mb-9'> Latest News Feeds</h1>
                </div>
            </div>

            <div className='flex flex-wrap justify-center gap-7 mb-[90px]'>
                <div className='w-[30%] border-2 h-fit bg-white shadow-lg rounded-lg'>

                    <Link to="">
                        <img src={stairs} alt="stairs" />
                    </Link>

                    <div className='px-8'>
                        <div className='flex items-center gap-7 mt-6 mb-3'>
                            <Link to="">
                                <p className='flex items-center gap-2 text-[#6c808a] hover:text-[#fb5940]'><i className='text-[#fb5940]'><FaUser /></i> by: Admin</p>
                            </Link>

                            <Link to="">
                                <p className='flex items-center gap-2 text-[#6c808a] hover:text-[#fb5940]'><i className='text-[#fb5940]'><FaTag /></i> Decorate</p>
                            </Link>
                        </div>

                        <Link>
                            <h1 className='text-[20px] font-bold mb-6 hover:text-[#fb5940]'> 10 Brilliant Ways To
                                <br></br> Decorate Your Home</h1>
                        </Link>

                        <div className='flex justify-between gap-4 border-t-2 py-5'>
                            <p className='flex items-center gap-2 text-[rgb(108,128,138)]'><i className='text-[#fb5940]'><FaCalendarAlt /></i> May 20, 2024</p>

                            <Link>
                                <p className='text-[#fb5940]'>READ MORE</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='w-[30%] border-2 h-fit bg-white shadow-lg rounded-lg'>

                    <Link to="">
                        <img src={bed} alt="bed" />
                    </Link>

                    <div className='px-8'>
                        <div className='flex items-center gap-7 mt-6 mb-3'>
                            <Link to="">
                                <p className='flex items-center gap-2 text-[#6c808a] hover:text-[#fb5940]'><i className='text-[#fb5940]'><FaUser /></i> by: Admin</p>
                            </Link>

                            <Link to="">
                                <p className='flex items-center gap-2 text-[#6c808a] hover:text-[#fb5940]'><i className='text-[#fb5940]'><FaTag /></i> Interior</p>
                            </Link>
                        </div>

                        <Link>
                            <h1 className='text-[20px] font-bold mb-6 hover:text-[#fb5940]'> The Most Inspiring Interior
                                <br></br> Design Of 2024</h1>
                        </Link>

                        <div className='flex justify-between gap-4 border-t-2 py-5'>
                            <p className='flex items-center gap-2 text-[rgb(108,128,138)]'><i className='text-[#fb5940]'><FaCalendarAlt /></i> July 21, 2024</p>

                            <Link>
                                <p className='text-[#fb5940]'>READ MORE</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='w-[30%] border-2 h-fit bg-white shadow-lg rounded-lg'>

                    <Link to="">
                        <img src={house} alt="house" />
                    </Link>

                    <div className='px-8'>
                        <div className='flex items-center gap-7 mt-6 mb-3'>
                            <Link to="">
                                <p className='flex items-center gap-2 text-[#6c808a] hover:text-[#fb5940]'><i className='text-[#fb5940]'><FaUser /></i> by: Admin</p>
                            </Link>

                            <Link to="">
                                <p className='flex items-center gap-2 text-[#6c808a] hover:text-[#fb5940]'><i className='text-[#fb5940]'><FaTag /></i> Estate</p>
                            </Link>
                        </div>

                        <Link>
                            <h1 className='text-[20px] font-bold mb-6 hover:text-[#fb5940]'> Recent Commercial Real
                                <br></br> Estate Transactions</h1>
                        </Link>

                        <div className='flex justify-between gap-4 border-t-2 py-5'>
                            <p className='flex items-center gap-2 text-[rgb(108,128,138)]'><i className='text-[#fb5940]'><FaCalendarAlt /></i> June 24, 2024</p>

                            <Link>
                                <p className='text-[#fb5940]'>READ MORE</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='w-[30%] border-2 h-fit bg-white shadow-lg rounded-lg'>

                    <Link to="">
                        <img src={balcony} alt="balcony" />
                    </Link>

                    <div className='px-8'>
                        <div className='flex items-center gap-7 mt-6 mb-3'>
                            <Link to="">
                                <p className='flex items-center gap-2 text-[#6c808a] hover:text-[#fb5940]'><i className='text-[#fb5940]'><FaUser /></i> by: Admin</p>
                            </Link>

                            <Link to="">
                                <p className='flex items-center gap-2 text-[#6c808a] hover:text-[#fb5940]'><i className='text-[#fb5940]'><FaTag /></i> Room</p>
                            </Link>
                        </div>

                        <Link>
                            <h1 className='text-[20px] font-bold mb-6 hover:text-[#fb5940]'> Renovating a Living Room
                                <br></br> Experts Share Their Secrets</h1>
                        </Link>

                        <div className='flex justify-between gap-4 border-t-2 py-5'>
                            <p className='flex items-center gap-2 text-[rgb(108,128,138)]'><i className='text-[#fb5940]'><FaCalendarAlt /></i> June 24, 2024</p>

                            <Link>
                                <p className='text-[#fb5940]'>READ MORE</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='w-[30%] border-2 h-fit bg-white shadow-lg rounded-lg'>

                    <Link to="">
                        <img src={highrise} alt="highrise" />
                    </Link>

                    <div className='px-8'>
                        <div className='flex items-center gap-7 mt-6 mb-3'>
                            <Link to="">
                                <p className='flex items-center gap-2 text-[#6c808a] hover:text-[#fb5940]'><i className='text-[#fb5940]'><FaUser /></i> by: Admin</p>
                            </Link>

                            <Link to="">
                                <p className='flex items-center gap-2 text-[#6c808a] hover:text-[#fb5940]'><i className='text-[#fb5940]'><FaTag /></i> Trends</p>
                            </Link>
                        </div>

                        <Link>
                            <h1 className='text-[20px] font-bold mb-6 hover:text-[#fb5940]'> 7 home trends that will
                                <br></br> shape your house in 2024</h1>
                        </Link>

                        <div className='flex justify-between gap-4 border-t-2 py-5'>
                            <p className='flex items-center gap-2 text-[rgb(108,128,138)]'><i className='text-[#fb5940]'><FaCalendarAlt /></i> July 22, 2024</p>

                            <Link>
                                <p className='text-[#fb5940]'>READ MORE</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default News_hm