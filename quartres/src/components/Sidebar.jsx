import React from 'react'
import { RxCross2 } from "react-icons/rx";
import House03 from '../assets/house03.jpeg'
import Wheels from '../assets/wheels.png'
import Retainer from '../assets/retainer.png'
import House04 from '../assets/house04.jpeg'
import { Link } from 'react-router-dom';

function Sidebar() {
   
    return (
        <section>
            <div className='relative'>
                <div className='absolute top-[-100px] -right-[50px] w-[400px] bg-white text-black px-8 py-12'>
                    <div className='flex justify-between items-center border-b-2 pb-7 mb-12'>
                        <p className='text-[#79797a]'>Cart</p>
                        <i className='text-2xl cursor-pointer'><RxCross2 /></i>
                    </div>

                    <div className='px-2 flex justify-start items-center gap-4 border-b-2 pb-5 mb-5'>
                        <div className='w-[90px] relative'>
                            <img src={House03} alt="house03" />
                            <div className='absolute top-[-8px] -left-2 rounded-full bg-white  hover:bg-red-500 cursor-pointer shadow-lg'>
                                <i className='text-xl font-extralight hover:text-white'><RxCross2 /></i>
                            </div>
                        </div>
                        <div className='text-[#9e9e9f]'>
                            <p className='text-black -mt-6 leading-10 hover:text-red-500 cursor-pointer'>Wheel Bearing Retainer</p>
                            <p>1 x $65.00</p>
                        </div>
                    </div>

                    <div className='px-2 flex justify-start items-center gap-4 border-b-2 pb-5 mb-5'>
                        <div className='w-[90px] relative'>
                            <img src={Wheels} alt="wheels" />
                            <div className='absolute top-[-8px] -left-2 rounded-full bg-white  hover:bg-red-500 cursor-pointer shadow-lg'>
                                <i className='text-xl font-extralight hover:text-white'><RxCross2 /></i>
                            </div>
                        </div>
                        <div className='text-[#9e9e9f]'>
                            <p className='text-black -mt-6 leading-10 hover:text-red-500 cursor-pointer'>3 Rooms Manhattan</p>
                            <p>1 x $85.00</p>
                        </div>
                    </div>

                    <div className='px-2 flex justify-start items-center gap-4 border-b-2 pb-5 mb-5'>
                        <div className='w-[90px] relative'>
                            <img src={Retainer} alt="retainer" />
                            <div className='absolute top-[-8px] -left-2 rounded-full bg-white  hover:bg-red-500 cursor-pointer shadow-lg'>
                                <i className='text-xl font-extralight hover:text-white'><RxCross2 /></i>
                            </div>
                        </div>
                        <div className='text-[#9e9e9f]'>
                            <p className='text-black -mt-6 leading-10 hover:text-red-500 cursor-pointer'>OE Replica Wheels</p>
                            <p>1 x $92.00</p>
                        </div>
                    </div>

                    <div className='px-2 flex justify-start items-center gap-4 border-b-2 pb-12 mb-5'>
                        <div className='w-[90px] relative'>
                            <img src={House04} alt="house04" />
                            <div className='absolute top-[-8px] -left-2 rounded-full bg-white  hover:bg-red-500 cursor-pointer shadow-lg'>
                                <i className='text-xl font-extralight hover:text-white'><RxCross2 /></i>
                            </div>
                        </div>
                        <div className='text-[#9e9e9f]'>
                            <p className='text-black -mt-6 leading-10 hover:text-red-500 cursor-pointer'>Shock Mount Insulator</p>
                            <p>1 x $68.00</p>
                        </div>
                    </div>

                    <div className='flex justify-between items-center border-b-2 pb-5 mb-6'>
                        <h1 className='text-xl font-bold'>Subtotal:</h1>
                        <p className='text-xl font-bold text-red-500'>$310.00</p>
                    </div>


                    <div className='flex justify-between items-center'>
                        <Link to="/cart">
                            <button className='bg-orange-500 h-[60px] w-[150px] px-4 text-white hover:bg-white hover:text-black hover:border-2'>
                                VIEW CART
                            </button>
                        </Link>
                        <Link to="/cart">
                            <button className='bg-black h-[60px] w-[150px] px-4 text-white hover:bg-white hover:text-black hover:border-2'>
                                CHECKOUT
                            </button>
                        </Link>
                    </div>

                    <p className='text-[#9e9e9f] text-sm mt-5'>Free Shipping on All Orders Over $100!</p>

                </div>
            </div>
        </section>
    )
}

export default Sidebar