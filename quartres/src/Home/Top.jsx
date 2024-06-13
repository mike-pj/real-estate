import React from 'react'
import blank from '../assets/21.png'
import { FaHome } from 'react-icons/fa'

function Top() {
  return (
    <section className='bg-[#F2F6F7] flex justify-between pt-[120px] pb-[70px] pl-[200px] pr-[100px] items-center'>
        <img src={blank} alt="" className='w-[500px]' />

        <div className="text-right flex flex-col w-[500px] items-end">
            <h4 className='w-fit flex items-center gap-2 mb-3'><i className='text-orange-500'><FaHome/></i>Real Estate Agency</h4>
            <h1 className='text-[50px] font-extrabold leading-[60px] mb-6'>The Right Place of House Finding</h1>
            <p className='mb-8 pr-[25px] border-r py-1 leading-7 border-r-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quibusdam?</p>
            <div className="flex items-center gap-4">
                <button className="h-[55px] bg-orange-500 w-[180px]">OUR SERVICES</button>
                <button className="h-[55px] bg-zinc-50 shadow-2xl w-[180px]">LEARN MORE</button>
            </div>
        </div>
    </section>
  )
}

export default Top