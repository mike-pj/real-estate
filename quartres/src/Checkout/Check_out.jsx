import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import Paypal from "../assets/paypal.png"

const options = [
    "Select Country",
    "Australia",
    "Canada",
    "China",
    "Morocco",
    "Saudi Arabia",
    "United Kingdom (UK)",
    "United States (US)",
];

function Check_out() {

    const [selectedOption, setSelectedOption] = useState(null);

    const [isOpen, setIsOpen] = useState(false);

    const [toggleOpen, setToggleOpen] = useState(false);

    const [togglesOpen, setTogglesOpen] = useState(false);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value) => () => {
        setSelectedOption(value);
        setIsOpen(false);
    };

    return (
        <section>
            <div className="w-full h-[400vh] py-[120px]">
                <div className="relative mb-[500px]">
                    <div>
                        <p className="w-[1230px] mx-auto p-5 border text-xl font-bold bg-[#dae0e3]">
                            Returning customer? <span onClick={() => setToggleOpen(!toggleOpen)} className="text-orange-600 font-bold cursor-pointer"> Click here to login</span>
                        </p>
                    </div>

                    {toggleOpen && (
                        // <div className="absolute top-[80px] left-[104px] w-[1230px] pt-5 px-[70px] border-2">
                        <div className={`${!toggleOpen && "hidden"}`}>
                            <div className="absolute top-[80px] left-[104px] w-[1230px] pt-5 px-[70px] border-2">
                                <p className="text-[#909293] mb-7">Please login your account.</p>
                                <div className="flex justify-between items-center mb-9">
                                    <div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Enter your name"
                                                className="w-[500px] block border-2 border-gray-300 px-3 py-5"
                                            />
                                            <i className="absolute top-1/2 -translate-y-1/2 right-0 mx-4 text-red-500">
                                                <FaUser />
                                            </i>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="email"
                                                id="email"
                                                placeholder="Enter email address"
                                                className="w-[500px] block border-2 border-gray-300 px-3 py-5"
                                            />
                                            <i className="absolute top-1/2 -translate-y-1/2 right-0 mx-4 text-red-500">
                                                <MdEmail />
                                            </i>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <button className='bg-orange-500 h-[60px] w-[150px] px-4 text-white hover:bg-black'>
                                        LOGIN
                                    </button>
                                    <input type="checkbox" id="remember" className="ml-5" />
                                    <label htmlFor="remember" className="text-[#909293]"> Remember me</label>
                                </div>

                                <p className="text-[#909293] mb-14">Lost your password?</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="relative mb-[500px]">
                    <div>
                        <p className="w-[1230px] mx-auto p-5 border text-xl font-bold bg-[#dae0e3]">
                            Have a coupon? <span onClick={() => setTogglesOpen(!togglesOpen)} className="text-orange-600 font-bold cursor-pointer"> Click here to enter your code</span>
                        </p>
                    </div>

                    {togglesOpen && (
                        <div className="absolute top-[80px] left-[104px] w-[1230px] pt-5 px-[70px] border-2">
                            <p className="text-[#909293] mb-7">If you have a coupon code, please apply it below..</p>
                            <div className="mb-9">
                                <div>
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Coupon code"
                                            className="w-[1100px] block border-2 border-gray-300 px-3 py-5"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <button className=' bg-black h-[60px] w-[200px] px-4 text-white hover:bg-white hover:text-black hover:border-red-400 border-2'>
                                    APPLY COUPON
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-9 mb-9 ml-[106px] border-l-2 border-red-600 px-2">
                    <h1 className="text-2xl font-bold h-9 ">Billing Details</h1>
                </div>

                <div className="w-[1230px] border-2 mx-auto">
                    <div className="pt-8 pl-[30px] mb-6">
                        <h1 className="font-bold">Personal Information</h1>
                    </div>

                    <div className="flex flex-wrap justify-between items-center px-[30px] mb-11">
                        <div>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="First name"
                                    className="w-[500px] block border-2 border-gray-300 px-3 py-5 mb-8"
                                />
                                <i className="absolute top-1/2 -translate-y-1/2 right-0 mx-4 text-red-500">
                                    <FaUser />
                                </i>
                            </div>
                        </div>

                        <div>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Last name"
                                    className="w-[500px] block border-2 border-gray-300 px-3 py-5 mb-8"
                                />
                                <i className="absolute top-1/2 -translate-y-1/2 right-0 mx-4 text-red-500">
                                    <FaUser />
                                </i>
                            </div>
                        </div>

                        <div>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="email address"
                                    className="w-[500px] block border-2 border-gray-300 px-3 py-5 mb-8"
                                />
                                <i className="absolute top-1/2 -translate-y-1/2 right-0 mx-4 text-red-500">
                                    <MdEmail />
                                </i>
                            </div>
                        </div>

                        <div>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="phone number"
                                    className="w-[500px] block border-2 border-gray-300 px-3 py-5 mb-8"
                                />
                                <i className="absolute top-1/2 -translate-y-1/2 right-0 mx-4  text-red-500">
                                    <FaPhoneAlt />
                                </i>
                            </div>
                        </div>

                        <div>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    placeholder="Company name (optional)"
                                    className="w-[500px] block border-2 border-gray-300 px-3 py-5 mb-8"
                                />
                                <i className="absolute top-1/2 -translate-y-1/2 right-0 mx-4  text-red-500">
                                    <FaGlobe />
                                </i>
                            </div>
                        </div>

                        <div>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="com"
                                    id="com"
                                    placeholder="Company Address"
                                    className="w-[500px] block border-2 border-gray-300 px-3 py-5 mb-8"
                                />
                                <i className="absolute top-1/2 -translate-y-1/2 right-0 mx-4  text-red-500">
                                    <FaGlobe />
                                </i>
                            </div>
                        </div>

                        <div className="relative cursor-pointer">
                            <div >
                                <label className="font-bold" htmlFor="country"> Country</label>
                                <input
                                    onClick={toggling}
                                    type="text"
                                    name="country"
                                    id="country"
                                    placeholder={selectedOption || "Select Country"}
                                    className="w-[300px] cursor-pointer block border-2 border-gray-300 px-3 py-5 mt-4"
                                />
                                <i onClick={toggling} className="absolute top-1/2 translate-y-3 right-0 mx-4 text-red-500">
                                    <FaArrowDown />
                                </i>
                                {isOpen && (
                                    <div className="absolute w-[300px] top-[87px] right-0 z-10 mt-5 origin-top-right border bg-white ">
                                        {options.map((option) => (
                                            <button
                                                type="button"
                                                onClick={onOptionClicked(option)}
                                                key={Math.random()}
                                            >
                                                <div className="w-[300px] text-start block px-4 py-3 text-normal text-[#909293] hover:bg-gray-200">
                                                    {option}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <h1 className="font-bold px-[30px] mb-5"> Address</h1>
                    <div className="flex justify-between items-center px-[30px]">
                        <div className="relative">

                            <input
                                type="text"
                                name="address"
                                id="address"
                                placeholder="House number and street name"
                                className="w-[500px] block border-2 border-gray-300 px-3 py-5 mb-8"
                            />
                            <i className="absolute top-1/2 -translate-y-6 right-0 mx-4  text-red-500">
                                <FaGlobe />
                            </i>
                        </div>

                        <div className="relative">
                            <input
                                type="text"
                                name="com"
                                id="com"
                                placeholder="Apartment, suite, unite etc. (optional)"
                                className="w-[500px] block border-2 border-gray-300 px-3 py-5 mb-8"
                            />
                            <i className="absolute top-1/2 -translate-y-6 right-0 mx-4  text-red-500">
                                <FaGlobe />
                            </i>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center px-[30px] mb-5">
                            <div>
                                <h1 className="font-bold">Town / City</h1>
                                <input
                                    type="text"
                                    id="town"
                                    name="town"
                                    placeholder="City"
                                    className="w-[300px] block border-2 border-gray-300 px-3 py-5 mt-4"
                                />
                            </div>

                            <div>
                                <h1 className="font-bold">State</h1>
                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    placeholder="State"
                                    className="w-[300px] block border-2 border-gray-300 px-3 py-5 mt-4"
                                />
                            </div>

                            <div>
                                <h1 className="font-bold">Zip</h1>
                                <input
                                    type="text"
                                    id="zip"
                                    name="zip"
                                    placeholder="Zip"
                                    className="w-[300px] block border-2 border-gray-300 px-3 py-5 mt-4"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="text-[#9a9ea1] mx-[30px] space-x-3 mb-6">
                        <input type="checkbox" id="save" className="" />
                        <label htmlFor="save">
                            Create an account?.
                        </label>
                    </div>

                    <div className="px-[30px]">
                        <label className="font-bold" htmlFor="message"> Order Notes (optional)</label>
                        <div className="relative">
                            <textarea
                                type="message"
                                name="message"
                                id="message"
                                placeholder="Notes about your order, e.g special notes for delivery"
                                className="w-[1170px] h-[20svh] block border-2 border-gray-300 px-3 py-3 mt-5 mb-[80px]"
                            />
                            <i className="absolute top-1/2 -translate-y-[63px] right-0 mx-4 text-red-500">
                                <FaPencil />
                            </i>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center px-[105px] mt-[100px]">
                    <div>
                        <div className="border-l-2 border-red-600 px-2">
                            <h1 className="text-2xl font-bold h-9 mb-5">Payment Method</h1>
                        </div>
                        <div>
                            <div className="space-x-3 w-[580px] h-[70px] px-[30px] py-[20px] border">
                                <input type="radio" id="pay" name="lang" value="check" />
                                <label htmlFor="pay" className="font-bold text-lg">
                                    Check payments
                                </label>
                            </div>
                            <div className="space-x-3 w-[580px] h-[70px] px-[30px] py-[20px] border">
                                <input type="radio" id="deliverh" name="lang" value="cash" />
                                <label htmlFor="deliverh" className="font-bold text-lg">
                                    Cash on delivery
                                </label>
                            </div>
                            <div className="flex space-x-3 w-[580px] h-[70px] px-[30px] py-[20px] border">
                                <input type="radio" id="pal" name="lang" value="pay" />
                                <label htmlFor="pal" className="font-bold text-lg">
                                    PayPal
                                </label>
                                <img src={Paypal} alt="paypal" />
                            </div>
                        </div>

                        <p className="w-[580px] text-[#9a9ea1] mt-[30px] sm:text-sm tracking-wider">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>

                        <button className="bg-orange-500 w-[200px] h-[60px] mt-[30px] px-4 text-white hover:bg-black"
                        >
                            PLACE ORDER
                        </button>
                    </div>

                    <div className="mt-[-135px]">
                        <div className="border-l-2 border-red-600 px-2">
                            <h1 className="text-2xl font-bold h-9 mb-5">Cart Totals</h1>
                        </div>
                        <div className="">
                            <div className="space-x-3 w-[450px] h-full border-t-0 border-l-0 border-r-0 border-b-red-700">
                                <div className="flex justify-between items-center bg-gray-100">
                                    <p className="flex justify-center h-[5vh] items-center tracking-wider pl-[15px] text-gray-500">3 Rooms Manhattan <span className="font-bold text-black tracking-wider px-1"> × 2</span></p>
                                    <p className="pr-[40px] text-gray-500">$298.00</p>
                                </div>
                            </div>

                            <div className="space-x-3 w-[450px] h-[40px] border-2 border-l-0 border-r-0">
                                <div className="flex justify-between items-center bg-gray-50">
                                    <p className="flex justify-center h-[5vh] items-center tracking-wider pl-[15px] text-gray-500">OE Replica Wheels 	 <span className="font-bold text-black tracking-wider px-1"> × 2</span></p>
                                    <p className="pr-[40px] text-gray-500">$170.00</p>
                                </div>
                            </div>
                            <div className="space-x-3 w-[450px] h-[40px] border-2 border-l-0 border-r-0">
                                <div className="flex justify-between items-center bg-gray-100">
                                    <p className="flex justify-center h-[5vh] items-center tracking-wider pl-[15px] text-gray-500">Wheel Bearing Retainer <span className="font-bold text-black tracking-wider px-1"> × 2</span></p>
                                    <p className="pr-[40px] text-gray-500">$150.00</p>
                                </div>
                            </div>
                            <div className="space-x-3 w-[450px] h-[40px] border-2 border-l-0 border-r-0">
                                <div className="flex justify-between items-center bg-gray-50">
                                    <p className="flex justify-center h-[5vh] items-center tracking-wider pl-[15px] text-gray-500">Shipping and Handing	</p>
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

                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default Check_out