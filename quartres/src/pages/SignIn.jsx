import React, {useState} from 'react'
import { FaHome } from 'react-icons/fa'
import { RxCaretRight } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {

    const [formData, setformData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    function updateForm(e) {
        const { name, value } = e.target

        setformData(prev => {
            return { ...prev, [name]: value }
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError(false);
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            setLoading(false);
            if(data.success === false) {
                setError(true);
                return;
            }
            navigate('/')
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    };

    return (
        <section className=''>
            <div className='w-full bg-[#f7f7fa] px-[60px] py-[140px]'>
                <div className='flex flex-col justify-center'>
                    <h1 className='mb-8 font-bold lg:text-[40px] tracking-wider'>Account</h1>
                    <div className='flex items-center items-right gap-3'>
                        <Link className='flex items-center gap-2 group' to='/'>
                            <FaHome className='text-orange-600' />
                            <p className='text-gray-600 group-hover:text-orange-600'>Home</p>
                        </Link>
                        <RxCaretRight />
                        <p className='font-semibold'>Login</p>
                    </div>
                </div>

            </div>

            <div className='bg-white px-[60px] py-[120px]'>
                <div className='text-center flex flex-col justify-center items-center'>
                    <h1 className='text-center lg:text-5xl font-bold tracking-wider mb-10'>
                        <span className='ml-[]lg:ml-[120px] mb-8'>Sign In</span>
                        <br />
                        <span className=''>To Your Account</span>
                    </h1>

                        <p className='lg:w-[30%] text-[#7b888b] mb-[90px]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing. <span className=''>Ipsa quisquam doloribus autem sapiente</span>
                        </p>
                    
                </div>

                <div className='flex flex-col lg:flex-row justify-center items-center mb-[80px]'>
                    <div className='mb-[120px] lg:mb-[-50px] lg:w-1/2 flex justify-center items-center'>
                        <form onSubmit={handleSubmit} action=''>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder=" Email*"
                                    value={formData.email}
                                    className='p-2 border-2 border-[#e6e3e3] bg-white block w-[350px] mx-auto lg:w-[400px] h-[60px] mt-2 mb-9'
                                    onChange={updateForm}
                                />
                            </div>

                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder=" Password*"
                                    value={formData.password}
                                    className='p-2 border-2 border-[#e6e3e3] bg-white block w-[350px] mx-auto  lg:w-[400px] h-[60px] mt-2 mb-9'
                                    onChange={updateForm}
                                />
                            </div>

                            <button disabled={loading} className='bg-orange-500 h-[60px] w-[150px] px-4 text-white hover:bg-black'>
                                { loading ? "loading" : "SIGN IN" }
                            </button>

                            <Link to='/register'>
                             <p 
                                className='text-[#7b888b] uppercase mt-6 hover:text-orange-600'>
                                forger your password?
                             </p>
                            </Link>
                        </form>
                    </div>

                    <div className='w-1/2 flex justify-center items-center -mt-16'>
                        <div>
                            <h1 className='lg:text-xl font-bold ml-11 lg:ml-[90px] mb-5'>
                                DON'T HAVE AN ACCOUNT?
                            </h1>
                            <p className='w-[320px] lg:w-[450px] text-[#7b888b] mb-1'>
                                Add items to your wishlist  get personalised recommendations
                            </p>
                            <p className='lg:ml-9 text-[#7b888b] mb-7'>
                                Check out more and quickly track your orders register
                            </p>
                            <Link to='/Register'>
                                <button className='bg-orange-500 ml-16 lg:w-[200px] h-[60px] lg:ml-[130px] px-4 text-white hover:bg-black'>
                                    CREATE ACCOUNT
                                </button>
                            </Link>
                         
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SignIn
