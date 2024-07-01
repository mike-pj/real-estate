import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { RxCaretRight } from "react-icons/rx";

function Top() {
  return (
    <section>
         <div className='w-full bg-[#f7f7fa] px-[110px] py-[140px]'>
                <div className='flex flex-col justify-center'>
                    <h1 className='mb-8 font-bold lg:text-[40px] tracking-normal'>Property</h1>
                    <div className='flex items-center items-right gap-3'>
                        <Link className='flex items-center gap-2 group' to='/'>
                            <FaHome className='text-orange-600' />
                            <p className='text-gray-600 group-hover:text-orange-600'>Home</p>
                        </Link>
                        <RxCaretRight />
                        <p className='font-semibold'>Property</p>
                    </div>
                </div>

            </div>
    </section>
  )
}

export default Top