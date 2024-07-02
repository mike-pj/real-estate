import React from 'react'
import House3 from '../assets/house03.jpeg'
import Wheels from '../assets/wheels.png'
import Retainer from '../assets/retainer.png'

function Cart_hm() {
    return (
        <section>
            <div className='h-[150svh]'>
                <div>
                    <div className='flex justify-around items-center px-[10px] border-b-2 w-[1250px] mx-auto mt-[100px] py-5'>
                        <p className='hover:text-orange-500 cursor-pointer'>x</p>
                        <img className='w-[120px] cursor-pointer' src={House3} alt="house3" />
                        <h1 className='text-xl font-bold hover:text-orange-500 cursor-pointer'>3 Rooms Manhattan</h1>
                        <p className='text-[#919193] font-bold'>$149.00</p>
                        <div className='flex justify-center items-center gap-3 border w-[120px] h-[50px]'>
                            <p>-</p>
                            <p className='border-r-2 border-l-2 h-full w-fit pt-3 px-3 text-[#919193]'>02</p>
                            <p>+</p>
                        </div>
                        <p className='font-bold'>$298.00</p>
                    </div>

                    <div className='flex justify-around items-center px-[10px] border-b-2 w-[1250px] mx-auto py-5'>
                        <p className='hover:text-orange-500 cursor-pointer'>x</p>
                        <img className='w-[120px] cursor-pointer' src={Wheels} alt="wheels" />
                        <h1 className='text-xl font-bold hover:text-orange-500 cursor-pointer'>OE Replica Wheels</h1>
                        <p className='text-[#919193] font-bold'>$85.00</p>
                        <div className='flex justify-center items-center gap-3 border w-[120px] h-[50px]'>
                            <p>-</p>
                            <p className='border-r-2 border-l-2 h-full w-fit pt-3 px-3 text-[#919193]'>02</p>
                            <p>+</p>
                        </div>
                        <p className='font-bold'>$170.00</p>
                    </div>

                    <div className='flex justify-around items-center px-[10px] border-b-2 w-[1250px] mx-auto py-5'>
                        <p className='hover:text-orange-500 cursor-pointer'>x</p>
                        <img className='w-[120px] cursor-pointer ml-3' src={Retainer} alt="retainer" />
                        <h1 className='text-xl font-bold hover:text-orange-500 cursor-pointer'>
                            Wheel Bearing Retainer</h1>
                        <p className='text-[#919193] font-bold'>$75.00</p>
                        <div className='flex justify-center items-center gap-3 border w-[120px] h-[50px]'>
                            <p>-</p>
                            <p className='border-r-2 border-l-2 h-full w-fit pt-3 px-3 text-[#919193]'>02</p>
                            <p>+</p>
                        </div>
                        <p className='font-bold'>$150.00</p>
                    </div>

                    <div className='flex justify-between items-center px-[10px] border-b-2 w-[1250px] mx-auto py-5'>
                        <div className='flex justify-center items-center'>
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Coupon code"
                                    className="w-[300px] block border-2 border-gray-300 px-3 py-5"
                                />
                            </div>
                            <button className=' bg-black h-[60px] w-[200px] px-4 text-white hover:bg-white hover:text-black hover:border-red-400 border'>
                                Apply Coupon
                            </button>
                        </div>

                        <div>
                            <button className=' bg-black h-[60px] w-[200px] px-4 text-white'>
                                Update Cart
                            </button>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className='text-right mr-[428px] mt-[100px]'>
                        <h1 className="text-2xl font-bold h-9 mb-5">Cart Totals</h1>
                    </div>
                    <div className='flex justify-end items-center mx-[98px]'>
                        <div className="">
                            <div className="space-x-3 w-[450px] h-[40px] border-2 border-l-0 border-r-0">
                                <div className="flex justify-between items-center bg-gray-100">
                                    <p className="flex justify-center h-[5vh] items-center tracking-wider pl-[15px] text-gray-500">Cart Subtotal</p>
                                    <p className="pr-[40px] text-gray-500">	$618.00</p>
                                </div>
                            </div>
                            <div className="space-x-3 w-[450px] h-[40px] border-2 border-l-0 border-r-0">
                                <div className="flex justify-between items-center bg-gray-50">
                                    <p className="flex justify-center h-[5vh] items-center tracking-wider pl-[15px] text-gray-500">Shipping and Handling</p>
                                    <p className="pr-[40px] text-gray-500">$15.00</p>
                                </div>
                            </div>
                            <div className="space-x-3 w-[450px] h-[40px] border-2 border-l-0 border-r-0">
                                <div className="flex justify-between items-center bg-gray-100">
                                    <p className="flex justify-center h-[5vh] items-center tracking-wider pl-[15px] text-gray-500">Vat</p>
                                    <p className="pr-[40px] text-gray-500">$00.00</p>
                                </div>
                            </div>
                            <div className="space-x-3 w-[450px] h-[40px] border-2 border-l-0 border-r-0">
                                <div className="flex justify-between items-center bg-gray-50 text-black font-bold">
                                    <p className="flex justify-center h-[5vh] items-center tracking-wider pl-[15px]">Order Total</p>
                                    <p className="pr-[40px]">$633.00</p>
                                </div>
                            </div>
                            <button className=' bg-orange-500 h-[60px] w-[450px] px-4 text-white hover:bg-white hover:text-black hover:border-black border'>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart_hm