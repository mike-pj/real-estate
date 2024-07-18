import React, { useState } from "react";
import stairs from "../assets/stairs.jpeg";
import bed from "../assets/bed.jpeg";
import house_03 from "../assets/house03.jpeg";
import house_04 from "../assets/house04.jpeg";
import house_05 from "../assets/house05.jpeg";
import highrise_02 from "../assets/highrise02.jpeg";
import william from "../assets/william.jpeg";
import { RiLayoutGridLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import { terminologies } from "../components/Search_data/data";

const options = [
    "Default Sorting",
    "Sort by popularity",
    "Sort by new arrivals",
    "Sort by price: low to high",
    "Sort by price: high to low",
];

const items = [
    "Per Sq Ft: 1000",
    "Per Sq Ft: 2000",
    "Per Sq Ft: 3000",
    "Per Sq Ft: 4000",
    "Per Sq Ft: 5000",
];

function List_apartments() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpens, setIsOpens] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const toggling = () => setIsOpen(!isOpen);
    const toggling2 = () => setIsOpens(!isOpens);

    const onOptionClicked = (value) => () => {
        setSelectedOption(value);
        setIsOpen(false);
    };

    const onItemClicked = (value) => () => {
        setSelectedItem(value);
        setIsOpens(false);
    };

    const [activeSearch, setActiveSearch] = useState([])

    const handleSearch = (e) => {
        if (e.target.value == '') {
            setActiveSearch([])
            return false
        }
        setActiveSearch(terminologies.filter(t => t.includes(e.target.value)).slice(0, 8))

    }

    return (
        <section className="bg-[white] py-[110px]  px-[50px]">
            <div className="flex">
                <div className="w-[70%]">
                    <div className="flex justify-center items-center gap-16">
                        <i className="text-[40px] hover:text-red-600 cursor-pointer -mt-10">
                            <RiLayoutGridLine />
                        </i>
                        <i className="text-[34px] hover:text-red-600 cursor-pointer -mt-10">
                            <FaList />
                        </i>

                        <div className="flex gap-4">
                            <div className="relative w-[290px] font-normal h-[100px] text-[#909293]">
                                <div className="bg-white px-3 py-3 rounded-md border-2 cursor-pointer">
                                    <div type="button" onClick={toggling}>
                                        <div className="flex justify-between items-center">
                                            {selectedOption || "Sorting Apartment"}
                                            <BiChevronDown size={20} className="" />
                                        </div>
                                    </div>
                                </div>
                                {isOpen && (
                                    <div className="absolute w-[290px] top-7 right-0 z-20 mt-5 origin-top-right border bg-white ">
                                        {options.map((option) => (
                                            <button
                                                type="button"
                                                onClick={onOptionClicked(option)}
                                                key={Math.random()}
                                            >
                                                <div className="w-[289px] text-start block px-2 py-3 text-normal text-[#909293] hover:bg-gray-200">
                                                    {option}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="relative w-[290px] font-normal h-[100px] text-[#909293]">
                                <div className="bg-white px-3 py-3 rounded-md border-2 cursor-pointer">
                                    <div type="button" onClick={toggling2}>
                                        <div className="flex justify-between items-center ">
                                            {selectedItem || "Range Per Sq Ft"}
                                            <BiChevronDown size={20} className="" />
                                        </div>
                                    </div>
                                </div>
                                {isOpens && (
                                    <div className="absolute w-[290px] top-7 right-0 z-20 mt-5 origin-top-right border bg-white ">
                                        {items.map((item) => (
                                            <button
                                                type="button"
                                                onClick={onItemClicked(item)}
                                                key={Math.random()}
                                            >
                                                <div className="w-[289px] text-start block px-2 py-3 text-normal text-[#909293] hover:bg-gray-200">
                                                    {item}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <form action="" className="w-[870px] relative ml-[34px] z-10 mb-7">
                        <div className="relative">
                            <input onChange={(e) => handleSearch(e)} type="search" placeholder="Search your keyword...." className="w-full p-4 bg-slate-200" />
                            <button className="w-[60px] h-[57px] border bg-orange-500 absolute top-1/2 -translate-y-1/2 -right-1">
                                <i className="flex justify-center items-center text-white"><FaSearch /></i>
                            </button>
                        </div>

                        {
                            activeSearch.length > 0 && (
                                <div className="absolute top-20 p-4 bg-slate-200 text-black w-full left-1/2 -translate-x-1/2 flex flex-col gap-2 ">
                                    {
                                        activeSearch.map(s => (
                                            <span>{s}</span>
                                        ))
                                    }
                                </div>
                            )
                        }

                    </form>
                    <div className="w-full flex flex-wrap justify-center gap-7 mb-[90px]">
                        <div className="relative w-[45%] group h-fit bg-white shadow-lg rounded-lg">
                            <Link to="">
                                <div className="relative overflow-hidden">
                                    <img className="h-[42svh] group-hover:scale-105 duration-500" src={house_03} alt="house03" />
                                </div>
                            </Link>

                            <div className="absolute top-[10px] right-[20px] text-white px-2 cursor-default">
                                <img
                                    className="w-[50px] border-4 border-gray-200 rounded-full"
                                    src={william}
                                    alt="william"
                                />
                            </div>

                            <div className="px-8">
                                <p className="mt-8 text-lg text-red-600 mb-4">FOR RENT</p>
                                <h1 className="text-[20px] cursor-pointer font-bold mb-4 hover:text-[#fb5940]">
                                    {" "}
                                    New Apartment Nice View
                                </h1>
                                <p className="flex items-center gap-2 cursor-pointer text-[#6c808a] hover:text-orange-500 mb-4">
                                    <i className="text-orange-500">
                                        <FaMapMarkerAlt />
                                    </i>
                                    Belmont Garden, Chicago
                                </p>

                                <p className=" text-[#6c808a] text-sm leading-6 mb-8">
                                    {" "}
                                    Beautiful Huge 1 Family House Of Westbury. Newly Renovated
                                    With New Wood
                                </p>

                                <div className="flex text-[#6c808a] gap-3 mb-6">
                                    <div className="w-fit">
                                        <p> 3 Bedrooms</p>
                                    </div>
                                    <div className="w-fit">
                                        <p> 2 Bathrooms</p>
                                    </div>
                                    <div className="w-fit">
                                        <p> 3450 Square Ft </p>
                                    </div>
                                </div>
                                <Link to="">
                                    <div className="flex items-center gap-2 mb-7">
                                        <button className="bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white">
                                            <AiOutlineArrowsAlt />
                                        </button>
                                        <button className="bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white">
                                            <CiHeart />
                                        </button>
                                        <button className="bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white">
                                            <CiCirclePlus />
                                        </button>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex justify-between items-center border-t-2 px-4 py-5">
                                <div className="">
                                    <p className="text-lg text-red-600 font-bold ml-3">
                                        $34,900
                                        <span className="text-red-400 font-light">/Month</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-[45%] group h-fit bg-white shadow-lg rounded-lg">
                            <Link to="">
                                <div className="relative overflow-hidden">
                                    <img className="h-[42svh] group-hover:scale-105 duration-500" src={stairs} alt="stairs" />
                                </div>
                            </Link>

                            <div className="absolute top-[10px] right-[20px] text-white px-2 cursor-default">
                                <img
                                    className="w-[50px] border-4 border-gray-200 rounded-full"
                                    src={william}
                                    alt="william"
                                />
                            </div>

                            <div className="px-8">
                                <p className="mt-8 text-lg text-red-600 mb-4">FOR RENT</p>
                                <h1 className="text-[20px] cursor-pointer font-bold mb-4 hover:text-[#fb5940]">
                                    {" "}
                                    Comfortable Apartment
                                </h1>
                                <p className="flex items-center gap-2 cursor-pointer text-[#6c808a] hover:text-orange-500 mb-4">
                                    <i className="text-orange-500">
                                        <FaMapMarkerAlt />
                                    </i>
                                    Belmont Garden, Chicago
                                </p>

                                <p className=" text-[#6c808a] text-sm leading-6 mb-8">
                                    {" "}
                                    Beautiful Huge 1 Family House Of Westbury. Newly Renovated
                                    With New Wood
                                </p>

                                <div className="flex text-[#6c808a] gap-3 mb-6">
                                    <div className="w-fit">
                                        <p> 3 Bedrooms</p>
                                    </div>
                                    <div className="w-fit">
                                        <p> 2 Bathrooms</p>
                                    </div>
                                    <div className="w-fit">
                                        <p> 3450 Square Ft </p>
                                    </div>
                                </div>
                                <Link to="">
                                    <div className="flex items-center gap-2 mb-7">
                                        <button className="bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white">
                                            <AiOutlineArrowsAlt />
                                        </button>
                                        <button className="bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white">
                                            <CiHeart />
                                        </button>
                                        <button className="bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white">
                                            <CiCirclePlus />
                                        </button>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex justify-between items-center border-t-2 px-4 py-5">
                                <div className="">
                                    <p className="text-lg text-red-600 font-bold ml-3">
                                        $74,900
                                        <span className="text-red-400 font-light">/Month</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-[45%] group h-fit bg-white shadow-lg rounded-lg">
                            <Link to="">
                                <div className="relative overflow-hidden">
                                    <img className="h-[42svh] group-hover:scale-105 duration-500" src={house_04} alt="house04" />
                                </div>
                            </Link>

                            <div className="absolute top-[10px] right-[20px] text-white px-2 cursor-default">
                                <img
                                    className="w-[50px] border-4 border-gray-200 rounded-full"
                                    src={william}
                                    alt="william"
                                />
                            </div>

                            <div className="px-8">
                                <p className="mt-8 text-lg text-red-600 mb-4">FOR RENT</p>
                                <h1 className="text-[20px] cursor-pointer font-bold mb-4 hover:text-[#fb5940]">
                                    {" "}
                                    Luxury villa in Rego Park
                                </h1>
                                <p className="flex items-center gap-2 cursor-pointer text-[#6c808a] hover:text-orange-500 mb-4">
                                    <i className="text-orange-500">
                                        <FaMapMarkerAlt />
                                    </i>
                                    Belmont Garden, Chicago
                                </p>

                                <p className=" text-[#6c808a] text-sm leading-6 mb-8">
                                    {" "}
                                    Beautiful Huge 1 Family House Of Westbury. Newly Renovated
                                    With New Wood
                                </p>

                                <div className="flex text-[#6c808a] gap-3 mb-6">
                                    <div className="w-fit">
                                        <p> 3 Bedrooms</p>
                                    </div>
                                    <div className="w-fit">
                                        <p> 2 Bathrooms</p>
                                    </div>
                                    <div className="w-fit">
                                        <p> 3450 Square Ft </p>
                                    </div>
                                </div>
                                <Link to="">
                                    <div className="flex items-center gap-2 mb-7">
                                        <button className="bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white">
                                            <AiOutlineArrowsAlt />
                                        </button>
                                        <button className="bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white">
                                            <CiHeart />
                                        </button>
                                        <button className="bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white">
                                            <CiCirclePlus />
                                        </button>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex justify-between items-center border-t-2 px-4 py-5">
                                <div className="">
                                    <p className="text-lg text-red-600 font-bold ml-3">
                                        $54,900
                                        <span className="text-red-400 font-light">/Month</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-[45%] group h-fit bg-white shadow-lg rounded-lg">
                            <Link to="">
                                <div className="relative overflow-hidden">
                                    <img
                                        className="h-[42svh] group-hover:scale-105 duration-500"
                                        src={highrise_02}
                                        alt="highrise02"
                                    />
                                </div>
                            </Link>

                            <div className="absolute top-[10px] right-[20px] text-white px-2 cursor-default">
                                <img
                                    className="w-[50px] border-4 border-gray-200 rounded-full"
                                    src={william}
                                    alt="william"
                                />
                            </div>

                            <div className="px-8">
                                <p className="mt-8 text-lg text-red-600 mb-4">FOR RENT</p>
                                <h1 className="text-[20px] cursor-pointer font-bold mb-4 hover:text-[#fb5940]">
                                    {" "}
                                    Beautiful Flat in Manhattan
                                </h1>
                                <p className="flex items-center gap-2 cursor-pointer text-[#6c808a] hover:text-orange-500 mb-4">
                                    <i className="text-orange-500">
                                        <FaMapMarkerAlt />
                                    </i>
                                    Belmont Garden, Chicago
                                </p>

                                <p className=" text-[#6c808a] text-sm leading-6 mb-8">
                                    {" "}
                                    Beautiful Huge 1 Family House Of Westbury. Newly Renovated
                                    With New Wood
                                </p>

                                <div className="flex text-[#6c808a] gap-3 mb-6">
                                    <div className="w-fit">
                                        <p> 3 Bedrooms</p>
                                    </div>
                                    <div className="w-fit">
                                        <p> 2 Bathrooms</p>
                                    </div>
                                    <div className="w-fit">
                                        <p> 3450 Square Ft </p>
                                    </div>
                                </div>
                                <Link to="">
                                    <div className="flex items-center gap-2 mb-7">
                                        <button className="bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white">
                                            <AiOutlineArrowsAlt />
                                        </button>
                                        <button className="bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white">
                                            <CiHeart />
                                        </button>
                                        <button className="bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white">
                                            <CiCirclePlus />
                                        </button>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex justify-between items-center border-t-2 px-4 py-5">
                                <div className="">
                                    <p className="text-lg text-red-600 font-bold ml-3">
                                        $84,900
                                        <span className="text-red-400 font-light">/Month</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-[45%] group h-fit bg-white shadow-lg rounded-lg">
                            <Link to="">
                                <div className="relative overflow-hidden">
                                    <img className="h-[42svh] group-hover:scale-105 duration-500" src={bed} alt="bed" />
                                </div>
                            </Link>

                            <div className="absolute top-[10px] right-[20px] text-white px-2 cursor-default">
                                <img
                                    className="w-[50px] border-4 border-gray-200 rounded-full"
                                    src={william}
                                    alt="william"
                                />
                            </div>

                            <div className="px-8">
                                <p className="mt-8 text-lg text-red-600 mb-4">FOR SALE</p>
                                <h1 className="text-[20px] cursor-pointer font-bold mb-4 hover:text-[#fb5940]">
                                    {" "}
                                    Modern Apartments
                                </h1>
                                <p className="flex items-center gap-2 cursor-pointer text-[#6c808a] hover:text-orange-500 mb-4">
                                    <i className="text-orange-500">
                                        <FaMapMarkerAlt />
                                    </i>
                                    Belmont Garden, Chicago
                                </p>

                                <p className=" text-[#6c808a] text-sm leading-6 mb-8">
                                    {" "}
                                    Beautiful Huge 1 Family House Of Westbury. Newly Renovated
                                    With New Wood
                                </p>

                                <div className="flex text-[#6c808a] gap-3 mb-6">
                                    <div className="w-fit">
                                        <p> 3 Bedrooms</p>
                                    </div>
                                    <div className="w-fit">
                                        <p> 2 Bathrooms</p>
                                    </div>
                                    <div className="w-fit">
                                        <p> 3450 Square Ft </p>
                                    </div>
                                </div>
                                <Link to="">
                                    <div className="flex items-center gap-2 mb-7">
                                        <button className="bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white">
                                            <AiOutlineArrowsAlt />
                                        </button>
                                        <button className="bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white">
                                            <CiHeart />
                                        </button>
                                        <button className="bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white">
                                            <CiCirclePlus />
                                        </button>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex justify-between items-center border-t-2 px-4 py-5">
                                <div className="">
                                    <p className="text-lg text-red-600 font-bold ml-3">
                                        $34,900
                                        <span className="text-red-400 font-light">/Month</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative w-[45%] group h-fit bg-white shadow-lg rounded-lg">
                            <Link to="">
                                <div className="relative overflow-hidden">
                                    <img className="h-[42svh] group-hover:scale-105 duration-500" src={house_05} alt="house05" />
                                </div>
                            </Link>

                            <div className="absolute top-[10px] right-[20px] text-white px-2 cursor-default">
                                <img
                                    className="w-[50px] border-4 border-gray-200 rounded-full"
                                    src={william}
                                    alt="william"
                                />
                            </div>

                            <div className="px-8">
                                <p className="mt-8 text-lg text-red-600 mb-4">FOR RENT</p>
                                <h1 className="text-[20px] cursor-pointer font-bold mb-4 hover:text-[#fb5940]">
                                    {" "}
                                    Luxury villa in Rego Park
                                </h1>
                                <p className="flex items-center gap-2 cursor-pointer text-[#6c808a] hover:text-orange-500 mb-4">
                                    <i className="text-orange-500">
                                        <FaMapMarkerAlt />
                                    </i>
                                    Belmont Garden, Chicago
                                </p>

                                <p className=" text-[#6c808a] text-sm leading-6 mb-8">
                                    {" "}
                                    Beautiful Huge 1 Family House Of Westbury. Newly Renovated
                                    With New Wood
                                </p>

                                <div className="flex text-[#6c808a] gap-3 mb-6">
                                    <div className="w-fit">
                                        <p> 3 Bedrooms</p>
                                    </div>
                                    <div className="w-fit">
                                        <p> 2 Bathrooms</p>
                                    </div>
                                    <div className="w-fit">
                                        <p> 3450 Square Ft </p>
                                    </div>
                                </div>
                                <Link to="">
                                    <div className="flex items-center gap-2 mb-7">
                                        <button className="bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white">
                                            <AiOutlineArrowsAlt />
                                        </button>
                                        <button className="bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white">
                                            <CiHeart />
                                        </button>
                                        <button className="bg-[#a7bdc8] h-[30px] w-[30px] shadow-2xl flex items-center justify-center hover:bg-orange-500 hover:text-white">
                                            <CiCirclePlus />
                                        </button>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex justify-between items-center border-t-2 px-4 py-5">
                                <div className="">
                                    <p className="text-lg text-red-600 font-bold ml-3">
                                        $88,900
                                        <span className="text-red-400 font-light">/Month</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[30%]">
                    <h1 className="text-2xl font-bold mb-4">Advance Information</h1>
                    <p className="mb-7 text-[#909293]">About 9,620 results (0.62 seconds)</p>
                    <div className=" text-[#909293] border-2 px-8 py-8">
                        <div className="mb-[70px] font-semibold">
                            <h1 className="text-lg text-black font-bold tracking-wider mb-5">Property Type</h1>
                            <div className="flex justify-between items-center mb-4 ">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="tick" className="" />
                                    <label htmlFor="tick" className="text-sm cursor-pointer"> House</label>
                                </div>
                                <p>3,924</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="ticks" className="" />
                                    <label htmlFor="ticks" className="text-sm cursor-pointer"> Single Family</label>
                                </div>
                                <p>3,700</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="apartment" className="" />
                                    <label htmlFor="apartment" className="text-sm cursor-pointer"> Apartment</label>
                                </div>
                                <p>2,924</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="villa" className="" />
                                    <label htmlFor="villa" className="text-sm cursor-pointer"> Office Villa</label>
                                </div>
                                <p>2,665</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="home" className="" />
                                    <label htmlFor="home" className="text-sm cursor-pointer"> Luxury Home</label>
                                </div>
                                <p>1,500</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="studio" className="" />
                                    <label htmlFor="studio" className="text-sm cursor-pointer"> Studio</label>
                                </div>
                                <p>800</p>
                            </div>
                        </div>
                        
                        <div className="mb-[70px] font-semibold">
                            <h1 className="text-lg text-black font-bold tracking-wider mb-5">Amenities</h1>
                            <div className="flex justify-between items-center mb-4 ">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="dish" className="" />
                                    <label htmlFor="dish" className="text-sm cursor-pointer"> Dishwasher</label>
                                </div>
                                <p>3,924</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="floor" className="" />
                                    <label htmlFor="floor" className="text-sm cursor-pointer"> Floor Coverings</label>
                                </div>
                                <p>3,700</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="internet" className="" />
                                    <label htmlFor="internet" className="text-sm cursor-pointer"> Internet</label>
                                </div>
                                <p>2,924</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="build" className="" />
                                    <label htmlFor="build" className="text-sm cursor-pointer"> Build Wardrobes</label>
                                </div>
                                <p>2,665</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="super" className="" />
                                    <label htmlFor="super" className="text-sm cursor-pointer"> Supermarket</label>
                                </div>
                                <p>1,500</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="zone" className="" />
                                    <label htmlFor="zone" className="text-sm cursor-pointer"> Kids Zone</label>
                                </div>
                                <p>800</p>
                            </div>
                        </div>

                        <div className="mb-[70px] font-semibold">
                            <h1 className="text-lg text-black font-bold tracking-wider mb-5">Price Range</h1>
                            <div className="flex justify-between items-center mb-4 ">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="low" className="" />
                                    <label htmlFor="low" className="text-sm cursor-pointer"> Low Budget</label>
                                </div>
                                <p>$5,000 - $10,000</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="medium" className="" />
                                    <label htmlFor="medium" className="text-sm cursor-pointer"> Medium</label>
                                </div>
                                <p>$10,000 - $30,000</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="high" className="" />
                                    <label htmlFor="high" className="text-sm cursor-pointer"> High Budget</label>
                                </div>
                                <p>$30,500 Up</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="office" className="" />
                                    <label htmlFor="office" className="text-sm cursor-pointer"> Office Villa</label>
                                </div>
                                <p>2,665</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="lux" className="" />
                                    <label htmlFor="lux" className="text-sm cursor-pointer"> Luxury Home</label>
                                </div>
                                <p>1,500</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="stud" className="" />
                                    <label htmlFor="stud" className="text-sm cursor-pointer"> Studio</label>
                                </div>
                                <p>800</p>
                            </div>
                        </div>

                        {/* Filter by price: Your Range to be handled later
                        <div className="mb-[70px] font-semibold">
                            <h1 className="text-lg text-black font-bold tracking-wider mb-5">Filter By Price</h1>
                            <div className="flex justify-between items-center mb-4 ">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="" className="" />
                                    <label htmlFor="" className="text-sm"> House</label>
                                </div>
                                <p>3,924</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="" className="" />
                                    <label htmlFor="" className="text-sm"> Single Family</label>
                                </div>
                                <p>3,700</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="" className="" />
                                    <label htmlFor="" className="text-sm"> Apartment</label>
                                </div>
                                <p>2,924</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="" className="" />
                                    <label htmlFor="" className="text-sm"> Office Villa</label>
                                </div>
                                <p>2,665</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="" className="" />
                                    <label htmlFor="" className="text-sm"> Luxury Home</label>
                                </div>
                                <p>1,500</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="" className="" />
                                    <label htmlFor="" className="text-sm"> Studio</label>
                                </div>
                                <p>800</p>
                            </div>
                        </div> */}

                        <div className="mb-[70px] font-semibold">
                            <h1 className="text-lg text-black font-bold tracking-wider mb-5">Bed/Bath</h1>
                            <div className="flex justify-between items-center mb-4 ">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="" className="" />
                                    <label htmlFor="" className="text-sm cursor-pointer"> Single</label>
                                </div>
                                <p>3,924</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="" className="" />
                                    <label htmlFor="" className="text-sm cursor-pointer">  Double</label>
                                </div>
                                <p>3,700</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="" className="" />
                                    <label htmlFor="" className="text-sm cursor-pointer"> Up to 3</label>
                                </div>
                                <p>2,924</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="" className="" />
                                    <label htmlFor="" className="text-sm cursor-pointer"> Up to 5</label>
                                </div>
                                <p>2,665</p>
                            </div>
                        </div>

                        <div className="mb-[70px] font-semibold">
                            <h1 className="text-lg text-black font-bold tracking-wider mb-5">Catagory</h1>
                            <div className="flex justify-between items-center mb-4 ">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="buying" className="" />
                                    <label htmlFor="buying" className="text-sm cursor-pointer"> Buying</label>
                                </div>
                                <p>3,924</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="rent" className="" />
                                    <label htmlFor="rent" className="text-sm cursor-pointer"> Rent</label>
                                </div>
                                <p>3,700</p>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="space-x-2">
                                    <input type="checkbox" name="" id="sell" className="" />
                                    <label htmlFor="sell" className="text-sm cursor-pointer"> Selling</label>
                                </div>
                                <p>2,924</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default List_apartments;
