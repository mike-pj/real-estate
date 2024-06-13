import { useState } from 'react'
import logo2 from '../assets/logo-2.png'
import payment from '../assets/payment-4.png'
import { CiLocationOn } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn, FaLocationArrow, FaTwitter } from 'react-icons/fa';
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Footer() {
    const [formMail, setformMail] = useState({
        name: "",
    })

    function updateForm(e) {
        const { name, value } = e.target

        setformMail(prev => {
            return { ...prev, [name]: value }
        })
    }


    return (
        <section >
            <div className='relative bg-[#171b2a] text-white py-[90px]'>
                <div className='absolute flex justify-between items-center bg-orange-600 w-[86%] top-[-80px] h-[150px] left-[100px] px-[50px]'>
                    <div>
                        <h1 className='text-[40px] font-bold'>Looking for a dream home?</h1>
                        <p>
                            We can help you realize your dream of a new home
                        </p>
                    </div>

                    <Link to="">
                        <button className='flex items-center text-xl border h-[60px] px-[50px] text-black bg-white'>Explore Properties<span className=''><IoIosArrowRoundForward /></span></button>
                    </Link>
                </div>

                <div className='flex justify-between mx-8 mt-[80px]'>
                    <div className='w-1/3 pl-3'>
                        <img className='mb-5' src={logo2} alt="logo" />
                        <p className='mb-5'>
                            Lorem ipsum dolor sit amet consectetur. Corrupti doloribus natus unde quis!
                        </p>
                        <p className='flex items-center gap-3 mb-4'><i className='mt-[-25px]'><CiLocationOn /></i> Brooklyn, New York, United States</p>
                        <div className='flex items-center gap-3 mb-4'>
                            <i><LuPhoneCall /></i>
                            <p className='cursor-pointer hover:text-orange-600'> +0123-456789</p>
                        </div>
                        <div className='flex items-center gap-3 mb-9'>
                            <i><IoIosMail /></i>
                            <p className='cursor-pointer hover:text-orange-600'> example@example.com</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <i className='cursor-pointer'><FaFacebookF /></i>
                            <i className='cursor-pointer'><FaTwitter /></i>
                            <i className='cursor-pointer'><FaLinkedinIn /></i>
                            <i className='cursor-pointer'><FaYoutube /></i>
                        </div>
                    </div>

                    <div className='w-1/3 pl-3'>
                        <h1 className='text-[30px] mb-4'> Company</h1>
                        <ul>
                            <li className='mb-4 hover:text-orange-600'>
                                <Link to="">About</Link>
                            </li>
                            <li className='mb-4 hover:text-orange-600'>
                                <Link to="">Blog</Link>
                            </li>
                            <li className='mb-4 hover:text-orange-600'>
                                <Link to="">All Products</Link>
                            </li>
                            <li className='mb-4 hover:text-orange-600'>
                                <Link to="">Locations Map</Link>
                            </li>
                            <li className='mb-4 hover:text-orange-600'>
                                <Link to="">FAQ</Link>
                            </li>
                            <li className='mb-4 hover:text-orange-600'>
                                <Link to="">Contact us</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='w-1/3 pl-3'>
                        <h1 className='text-[30px] mb-4'> Services</h1>
                        <ul>
                            <li className='mb-4 hover:text-orange-600'>
                                <Link to="">Order tracking</Link>
                            </li>
                            <li className='mb-4 hover:text-orange-600'>
                                <Link to="">Wish List</Link>
                            </li>
                            <li className='mb-4 hover:text-orange-600'>
                                <Link to="">Login</Link>
                            </li>
                            <li className='mb-4 hover:text-orange-600'>
                                <Link to="">My account</Link>
                            </li>
                            <li className='mb-4 hover:text-orange-600'>
                                <Link to="">Terms & Conditions</Link>
                            </li>
                            <li className='mb-4 hover:text-orange-600'>
                                <Link to="">Promotional Offers</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='w-1/3 pl-3'>
                        <h1 className='text-[30px] mb-4'> Customer Care</h1>
                        <ul>
                            <li className='mb-4 hover:text-orange-600'>
                                <Link to="">Login</Link>
                            </li>
                            <li className='mb-4 hover:text-orange-600'>
                                <Link to="">My account</Link>
                            </li>
                            <li className='mb-4 hover:text-orange-600'>
                                <Link to="">Wish List</Link>
                            </li>
                            <li className='mb-4 hover:text-orange-600'>
                                <Link to="">Order tracking</Link>
                            </li>
                            <li className='mb-4 hover:text-orange-600'>
                                <Link to="">FAQ</Link>
                            </li>
                            <li className='mb-4 hover:text-orange-600'>
                                <Link to="">Contact us</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='w-1/3 pl-3'>
                        <h1 className='text-[30px] mb-4'> News Letter</h1>
                        <p className='mb-3'>
                            Subscribe to our weekly Newsletter and receive updates via email.
                        </p>
                        <div className='flex '>
                            <input
                                type="text"
                                name="email"
                                id=""
                                placeholder=" Email*"
                                value={formMail.email}
                                className='p-2 border-2 border-[grey] bg-white block w-fit h-[60px] mt-2'
                                onChange={updateForm}
                            />
                            <div className='flex justify-center items-center h-[60px] mt-2 px-4 bg-orange-600 cursor-pointer mb-3'>
                                <i><FaLocationArrow /></i>
                            </div>
                        </div>
                        <p className='text-[19px] mb-2'>We Accept</p>
                        <img src={payment} alt="payment" />
                    </div>
                </div>
            </div>

            <div className='flex justify-between items-centerh-[20px] w-full bg-gray-700 px-8 py-6 text-white'>
                <p>All Rights Reserved @ Company 2024</p>
                <ul className='flex items-center gap-8'>
                    <li className='hover:text-orange-600 cursor-pointer'>
                        <Link to="">Terms & Conditions </Link>
                    </li>
                    <li className='hover:text-orange-600 cursor-pointer'>
                        <Link to="">Claim</Link>
                    </li>
                    <li className='hover:text-orange-600 cursor-pointer'>
                        <Link to="">Privacy & Policy</Link>
                    </li>
                </ul>
            </div>

        </section>
    )
}

export default Footer