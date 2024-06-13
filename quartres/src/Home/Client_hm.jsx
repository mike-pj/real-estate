import React from 'react'
import Jacob from '../assets/img01.jpeg'
import Kelian from '../assets/img02.jpeg'
import Adam from '../assets/img03.jpeg'
import James from '../assets/img04.jpeg'
import { FaQuoteLeft } from "react-icons/fa";

function Client_hm() {
    return (
        <section className='bg-[#f8f8fc] pt-[110px]  px-[50px]'>
            <div className='w-full flex justify-center items-center'>
                <div>
                    <h6 className='border rounded-[50px] w-fit px-5 bg-orange-100 mb-8 text-[red] ml-[120px]'> Our Testimonial</h6>
                    <h1 className='text-[50px] font-bold mb-9'> Clients Feedback</h1>
                </div>
            </div>

            <div className='flex flex-wrap justify-center gap-7'>
                <div className='w-[30%] border-2 h-[400px] bg-white shadow-lg rounded-lg px-5 pt-[40px]'>
                    {/* <p className='flex gap-1 leading-9 text-lg text-[#6c808a] mb-7'><span className='mt-2'><FaQuoteLeft /></span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia quam incidunt repudiandae commodi cum officiis dolorum vel numquam eligendi maxime. Perspiciatis nemo aspernatur necessitatibus</p> */}

                    <div className='flex items-center gap-1 text-lg text-[#6c808a] mb-2'>
                        <i className='mt-3'><FaQuoteLeft /></i>
                        <p className='mb-[-15px]'>Lorem ipsum dolor sit, amet</p>
                    </div>
                    <p className='leading-9 text-lg text-[#6c808a] mb-7'> consectetur adipisicing elitMollitia quam incidunt repudiandae commodi cum officiis dolorum vel numquam eligendi maxime. Perspiciatis nemo aspernatur commodi cum officiis</p>

                    <div className='flex items-center gap-3'>
                        <img className="w-[60px] border rounded-full" src={Jacob} alt="jacob" />

                        <div>
                            <p className='font-bold text-[20px]'>Jacob William</p>
                            <p className='text-[#6c808a] text-[15px] '>SELLING AGENTS</p>
                        </div>
                    </div>
                </div>

                <div className='w-[30%] border-2 h-[400px] bg-white shadow-lg rounded-lg px-9 pt-[40px]'>
                    <div className='flex items-center gap-1 text-lg text-[#6c808a] mb-2'>
                        <i className='mt-3'><FaQuoteLeft /></i>
                        <p className='mb-[-15px]'>Lorem ipsum dolor sit, amet</p>
                    </div>
                    <p className='leading-9 text-lg text-[#6c808a] mb-7'> consectetur adipisicing elitMollitia quam incidunt repudiandae commodi cum officiis dolorum vel numquam eligendi maxime. Perspiciatis nemo aspernatur commodi cum officiis</p>

                    <div className='flex items-center gap-3'>
                        <img className="w-[60px] border rounded-full" src={Kelian} alt="kelian" />

                        <div>
                            <p className='font-bold text-[20px]'>Kelian Anderson</p>
                            <p className='text-[#6c808a] text-[15px] '>SELLING AGENTS</p>
                        </div>
                    </div>
                </div>

                <div className='w-[30%] border-2 h-[400px] bg-white shadow-lg rounded-lg px-9 pt-[40px]'>
                    <div className='flex items-center gap-1 text-lg text-[#6c808a] mb-2'>
                        <i className='mt-3'><FaQuoteLeft /></i>
                        <p className='mb-[-15px]'>Lorem ipsum dolor sit, amet</p>
                    </div>
                    <p className='leading-9 text-lg text-[#6c808a] mb-7'> consectetur adipisicing elitMollitia quam incidunt repudiandae commodi cum officiis dolorum vel numquam eligendi maxime. Perspiciatis nemo aspernatur commodi cum officiis</p>

                    <div className='flex items-center gap-3'>
                        <img className="w-[60px] border rounded-full" src={Adam} alt="adam" />

                        <div>
                            <p className='font-bold text-[20px]'>Adam Joseph</p>
                            <p className='text-[#6c808a] text-[15px] '>SELLING AGENTS</p>
                        </div>
                    </div>
                </div>

                <div className='w-[30%] border-2 h-[400px] bg-white shadow-lg rounded-lg px-9 pt-[40px]'>
                    <div className='flex items-center gap-1 text-lg text-[#6c808a] mb-2'>
                        <i className='mt-3'><FaQuoteLeft /></i>
                        <p className='mb-[-15px]'>Lorem ipsum dolor sit, amet</p>
                    </div>
                    <p className='leading-9 text-lg text-[#6c808a] mb-7'> consectetur adipisicing elitMollitia quam incidunt repudiandae commodi cum officiis dolorum vel numquam eligendi maxime. Perspiciatis nemo aspernatur commodi cum officiis</p>

                    <div className='flex items-center gap-3'>
                        <img className="w-[60px] border rounded-full" src={James} alt="james" />

                        <div>
                            <p className='font-bold text-[20px]'>James Carter</p>
                            <p className='text-[#6c808a] text-[15px] '>SELLING AGENTS</p>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Client_hm