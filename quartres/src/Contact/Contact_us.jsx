import React, { useState } from "react";
import Mail from "../assets/mail.png";
import Telephone from "../assets/telephone.png";
import Location from "../assets/location.png";
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";


const options = [
    "Select Service Type",
    "Property Management",
    "Mortgage Service",
    "Consulting Service",
    "Home Buying",
    "Home Selling",
    "Escrow Services",
];

function Contact_us() {

    const [isOpen, setIsOpen] = useState(false);

    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value) => () => {
        setSelectedOption(value);
        setIsOpen(false);
    };

    return (
        <section>
            <div className="w-full h-full">
                <div className="flex flex-wrap justify-center gap-y-6 gap-x-3 py-[140px] px-[60px]">
                    <div className="w-[400px] border-2 py-[50px] px-5">
                        <div className="flex justify-center items-center">
                            <img src={Mail} alt="mail" className="mb-7" />
                        </div>
                        <h1 className="text-2xl font-bold ml-[90px] tracking-wide mb-4">
                            Email Address
                        </h1>
                        <p className="text-small text-[#9a9ea1] ml-[110px] mb-4">
                            info@webmail.com
                        </p>
                        <p className="text-small text-[#9a9ea1] ml-[90px]">
                            jobs@webexample.com
                        </p>
                    </div>

                    <div className="w-[400px] border-2 py-[50px] px-5">
                        <div className="flex justify-center items-center">
                            <img src={Telephone} alt="mail" className="mb-7" />
                        </div>
                        <h1 className="text-2xl font-bold ml-[90px] tracking-wide mb-4">
                            Phone Number
                        </h1>
                        <p className="text-small text-[#9a9ea1] ml-[110px] mb-4">
                            +0123-456789
                        </p>
                        <p className="text-small text-[#9a9ea1] ml-[110px]">+987-6543210</p>
                    </div>

                    <div className="w-[400px] border-2 py-[50px] px-5">
                        <div className="flex justify-center items-center">
                            <img src={Location} alt="mail" className="mb-7" />
                        </div>
                        <h1 className="text-2xl font-bold ml-[90px] tracking-wide mb-4">
                            Email Address
                        </h1>
                        <p className="text-small text-[#9a9ea1] ml-[80px] mb-4">
                            18/A, New Born Town Hall
                        </p>
                        <p className="text-small text-[#9a9ea1] ml-[130px]">New York, US</p>
                    </div>
                </div>

                <div className="w-[76%] lg:w-[1230px] border-2 mx-auto mb-[150px]">
                    <div className="mt-9 mb-9 ml-5 lg:ml-[96px] border-l-2 border-red-600 px-2">
                        <h1 className="text-xl text-left lg:text-2xl font-bold h-9 ">Get A Quote</h1>
                    </div>

                    <div className="lg:flex flex-wrap justify-center items-center gap-9 mb-11">
                        <div>
                            <div className="relative mb-5">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Enter your name"
                                    className="w-[90%] mx-auto lg:w-[500px] block border-2 border-gray-300 px-3 py-5"
                                />
                                <i className="absolute top-1/2 -translate-y-1/2 right-0 mx-8 text-red-500">
                                    <FaUser />
                                </i>
                            </div>
                        </div>

                        <div>
                            <div className="relative mb-5">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Enter email address"
                                    className="w-[90%] mx-auto lg:w-[500px] block border-2 border-gray-300 px-3 py-5"
                                />
                                <i className="absolute top-1/2 -translate-y-1/2 right-0 mx-8 text-red-500">
                                    <MdEmail />
                                </i>
                            </div>
                        </div>

                        <div className="relative cursor-pointer mb-5">
                            <div >
                                <input
                                    onClick={toggling}
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder={selectedOption || "Select Service Type"}
                                    className="w-[90%] mx-auto lg:w-[500px] cursor-pointer block border-2 border-gray-300 px-3 py-5"
                                />
                                <i className="absolute top-1/2 -translate-y-1/2 right-0 mx-8 text-red-500">
                                    <FaArrowDown />
                                </i>
                                {isOpen && (
                                    <div className="absolute w-[500px] top-[48px] right-0 z-10 mt-5 origin-top-right border bg-white ">
                                        {options.map((option) => (
                                            <button
                                                type="button"
                                                onClick={onOptionClicked(option)}
                                                key={Math.random()}
                                            >
                                                <div className="w-[500px] text-start block px-4 py-3 text-normal text-[#909293] hover:bg-gray-200">
                                                    {option}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div>
                            <div className="relative mb-5">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Enter your phone number"
                                    className="w-[90%] mx-auto lg:w-[500px] block border-2 border-gray-300 px-3 py-5"
                                />
                                <i className="absolute top-1/2 -translate-y-1/2 right-0 mx-8  text-red-500">
                                    <FaPhoneAlt />
                                </i>
                            </div>
                        </div>

                        <div>
                            <div className="relative mb-5">
                                <textarea
                                    type="message"
                                    name=""
                                    id=""
                                    placeholder="Enter message"
                                    className="w-[90%] mx-auto lg:w-[1037px] h-[20svh] block border-2 border-gray-300 px-3 py-3"
                                />
                                <i className="absolute top-1/2 -translate-y-[63px] right-0 mx-8 text-red-500">
                                    <FaPencil />
                                </i>
                            </div>
                        </div>
                    </div>

                    <div className="text-[#9a9ea1] mx-5 lg:mx-[95px] space-x-3 mb-6">
                        <input type="checkbox" id="save" className="" />
                        <label htmlFor="save">
                            Save my name, email, and website in this browser for the next time
                            I comment.
                        </label>
                    </div>

                    <button className="lg:w-[200px] h-[60px] ml-5 lg:ml-[95px] bg-orange-500 mb-5 px-4 text-white hover:bg-black"
                    >
                        GET A FREE SERVICE
                    </button>
                    <p className="ml-5 lg:ml-[95px] text-[#9a9ea1] mb-[80px]">Please complete the form and try again.</p>
                </div>
            </div>
        </section>
    );
}

export default Contact_us;
