import React, { useState } from 'react';
import { FaFacebook, FaGlobe, FaInstagram, FaLocationArrow, FaMailBulk, FaSearch, FaTwitter, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { FaCartShopping } from 'react-icons/fa6';
import Menus from './Navbar-dropMenu/User'
import Sidebar from './Sidebar';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    const toggling = () => setIsOpen(!isOpen);

    return (
        <header className='text-white'>
            <div className="flex justify-between bg-[#071c1f] #133236 h-[45px] px-[60px]">
                <div className="flex items-center gap-6">
                    <p className="flex items-center gap-2 cursor-pointer hover:text-orange-500"><i><FaMailBulk /></i> info@webmail.com</p>
                    <p className="flex items-center gap-2 cursor-pointer hover:text-orange-500"><i><FaLocationArrow /></i> 15/A, Nest Tower, NYC</p>
                </div>

                <div className="flex items-center gap-3">
                    <i className='cursor-pointer'><FaFacebook /></i>
                    <i className='cursor-pointer'><FaTwitter /></i>
                    <i className='cursor-pointer'><FaInstagram /></i>
                    <i className='cursor-pointer'><FaGlobe /></i>
                    <button className='bg-orange-500 h-full px-4'>Add Listing</button>
                </div>
            </div>

            <nav className="flex bg-white text-black h-[100px] justify-between px-[50px]">
                <div className="flex items-center">
                    <img src={logo} alt="" />
                </div>
                <div className="flex items-center">
                    <ul className='flex gap-5 text-[18px]'>
                        <li>
                            <Link to="/">Home+</Link>
                        </li>
                        <li>
                            <Link to="/about">About+</Link>
                        </li>
                        <li>
                            <Link to="/property">Property+</Link>
                        </li>
                        {/* <li>
                        <Link to="/news">News+</Link>
                    </li>
                    <li>
                        <Link to="/pages">Pages+</Link>
                    </li> */}
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                    <button className='bg-white h-[50px] w-[50px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white'><FaSearch /></button>
                    <div className='relative group'>
                        <button className='bg-white h-[50px] w-[50px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white'>
                            <FaUser />
                        </button>
                        <div className='absolute top-[50px] bg-white w-[150px] shadow-lg -left-[100px] py-4 px-4 hidden group-hover:block'>
                            <Menus />
                        </div>
                    </div>
                    <div className='relative hover:text-white'>
                        {!isOpen ?
                            (
                                <button onClick={toggling} className='bg-white h-[50px] w-[50px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white'>
                                    <FaCartShopping />
                                    <div className='absolute top-1/2 -translate-y-6 right-1 cursor-pointer hover:bg-orange-500'>2</div>
                                </button>
                            ) :

                            (
                                <div onClick={toggling} className='fixed z-20'>
                                    <Sidebar />
                                </div>
                            )
                        }
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar