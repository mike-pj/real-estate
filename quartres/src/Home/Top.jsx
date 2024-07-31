import React from 'react'
import blank from '../assets/21.png'
import { FaHome } from 'react-icons/fa'

function Top() {
  return (
    <section className='bg-[#F2F6F7] flex flex-col lg:flex-row justify-between pt-[40px] px-[15px] lg:pt-[120px] pb-[70px] lg:pl-[200px] lg:pr-[100px] items-center'>
      <img src={blank} alt="" className='w-[500px]' />

      <div className="w-full mx:auto lg:text-right flex flex-col lg:w-[500px] items-end">
        <h4
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-duration="700"
          data-aos-delay="300"
          className='w-fit flex items-center gap-2 mb-3'><i className='text-orange-500'><FaHome /></i>
          Real Estate Agency
        </h4>
        <h1
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-duration="800"
          data-aos-delay="500"
          className='text-[50px] font-extrabold leading-[60px] mb-6'>
          The Right Place of House Finding
        </h1>
        <p
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-duration="900"
          data-aos-delay="700"
          className='mb-8 pr-[25px] border-r py-1 leading-7 border-r-black'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quibusdam?
        </p>
        <div
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-duration="1000"
          data-aos-delay="900"
          className="flex items-center gap-4">
          <button className="h-[55px] bg-orange-500 w-[180px]">OUR SERVICES</button>
          <button className="h-[55px] bg-zinc-50 shadow-2xl w-[180px]">LEARN MORE</button>
        </div>
      </div>
    </section>
  )
}

export default Top