import React from 'react'
import About from '../assets/about-hm.png'
import { FaHome } from 'react-icons/fa'
import { GiGreatPyramid } from 'react-icons/gi'
import { IoMdFitness } from 'react-icons/io'
import { GrShieldSecurity } from 'react-icons/gr'
import { Link } from 'react-router-dom'

function About_hm() {
  return (
    <section className='bg-zinc-50'>
        <div className="flex pl-12 pr-7 justify-between py-14">
            <div className="relative max-h-[600px] border">
                <img src={About} alt="" className='h-full w-full'/>
                <iframe className='absolute -left-5 bottom-12' src="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&amp;showinfo=0" frameborder="0"></iframe>
            </div>

            <div className='w-1/2 text-zinc-500'>
                <h5 className='text-orange-600 bg-orange-200 w-fit px-4 py-1 mb-4 rounded-2xl'>About Us</h5>
                <h1 className='text-[45px] text-black w-[600px] leading-[60px] font-bold mb-6'>The Leading Real Estate Rental Marketplace <span>.</span></h1>
                <p className='mb-6 w-9/12 leading-[30px]'>Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services</p>
                <div className="flex flex-wrap gap-y-4 mb-5">
                    <div className='w-2/4 flex items-center gap-2'>
                        <span className='bg-orange-300 w-[40px] h-[40px] rounded-full flex items-center justify-center'><FaHome /></span>
                        Smart Home Design
                    </div>
                    <div className='w-2/4 flex items-center gap-2'>
                        <span className='bg-orange-300 w-[40px] h-[40px] rounded-full flex items-center justify-center'><GiGreatPyramid /></span>
                        Beautiful Scene Around
                    </div>
                    <div className='w-2/4 flex items-center gap-2'>
                        <span className='bg-orange-300 w-[40px] h-[40px] rounded-full flex items-center justify-center'><IoMdFitness /></span>
                        Exceptional Lifestyle
                    </div>
                    <div className='w-2/4 flex items-center gap-2'>
                        <span className='bg-orange-300 w-[40px] h-[40px] rounded-full flex items-center justify-center'><GrShieldSecurity /></span>
                        Complete 24/7 Security
                    </div>
                </div>

                <div className='border-l-4 border-red-500 py-6 px-2 mb-4 bg-orange-200 mr-14'>
                    <p className='w-3/4'>"Enimad minim veniam quis nostrud exercitation llamco laboris. Lorem ipsum dolor sit amet"</p>
                </div>

                <Link to="">
                    <button className='h-[50px] w-[150px] text-white cursor-pointer bg-orange-400'>OUR SERVICES</button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default About_hm