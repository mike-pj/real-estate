import React, { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { RxCaretRight } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';

function Register() {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: '',
        accept: false,
    })

    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    function updateForm(e) {
        const { name, value, type, checked } = e.target

        setFormData(prev => {
            return { ...prev, [name]: type === "checkbox" ? checked : value }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            setError(false);
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            console.log(data);
            setLoading(false);
            if(data.success === false) {
                setError(true);
                return;
            }
            navigate('/login')
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
                        <p className='font-semibold'>Register</p>
                    </div>
                </div>

            </div>

            <div className='bg-white px-[60px] py-[120px]'>
                <div className='text-center lg:flex flex-col justify-center items-center'>
                    <h1 className='text-center lg:text-5xl font-bold tracking-wider mb-10'>
                        <span className='mb-8'>Register</span>
                        <br />
                        <span className=''>Your Account</span>
                    </h1>

                    <p className='text-center lg:w-[30%] text-[#7b888b] mb-[90px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing. <span className=''>Ipsa quisquam doloribus autem sapiente</span>
                    </p>

                </div>

                <div className='flex justify-center items-center mb-[80px]'>
                    <div className='w-full flex justify-center items-center'>
                        <form onSubmit={handleSubmit} action="">
                            <div>
                                <div className='w-full ml-[30px] lg:ml-[1px]'>
                                    <input
                                        type="text"
                                        name="firstname"
                                        id="firstname"
                                        placeholder="First Name"
                                        value={formData.name}
                                        className='p-2 border-2 border-[#e6e3e3] bg-white block w-[350px] -ml-8 lg:w-[400px] h-[60px] mt-2 mb-9'
                                        onChange={updateForm}

                                    />
                                </div>

                                <div className='w-full ml-[30px] lg:ml-[1px]'>
                                    <input
                                        type="text"
                                        name="lastname"
                                        id="lastname"
                                        placeholder="Last Name"
                                        value={formData.name}
                                        className='p-2 border-2 border-[#e6e3e3] bg-white block w-[350px] -ml-8 lg:w-[400px] h-[60px] mt-2 mb-9'
                                        onChange={updateForm}
                                    />
                                </div>

                                <div className='w-full ml-[30px] lg:ml-[1px]'>
                                    <input
                                        type="email"
                                        name="email"
                                        id="useremail"
                                        placeholder=" Email*"
                                        value={formData.email}
                                        className='p-2 border-2 border-[#e6e3e3] bg-white block w-[350px] -ml-8 lg:w-[400px] h-[60px] mt-2 mb-9'
                                        onChange={updateForm}
                                    />
                                </div>

                                <div className='w-full ml-[30px] lg:ml-[1px]'>
                                    <input
                                        type="password"
                                        name="password"
                                        id="userpassword"
                                        placeholder=" Password*"
                                        value={formData.password}
                                        className='p-2 border-2 border-[#e6e3e3] bg-white block w-[350px] -ml-8 lg:w-[400px] h-[60px] mt-2 mb-9'
                                        onChange={updateForm}
                                    />
                                </div>

                                <div className='w-full ml-[30px] lg:ml-[1px]'>
                                    <input
                                        type="password"
                                        name="confirmpassword"
                                        id="confirmpassword"
                                        placeholder="Confirm Password*"
                                        value={formData.confirmpassword}
                                        className='p-2 border-2 border-[#e6e3e3] bg-white block w-[350px] -ml-8 lg:w-[400px] h-[60px] mt-2 mb-9'
                                        onChange={updateForm}
                                    />
                                </div>

                                <div className='xl:ml-[-30px] lg:w-[78%] xl:w-[400px] text-[#7b888b] text-sm mb-5'>
                                    <input type="checkbox" name="accept" checked={formData.accept} onChange={updateForm} id="" />
                                    <label htmlFor='' className='ml-1'>
                                        I consent to Herboil processing my personal data in order to send personalized marketing material in accordance with the consent form and the privacy policy.
                                    </label>
                                </div>

                                <div className='lg:w-[80%] xl:ml-[-30px] xl:w-[400px] text-[#7b888b] text-sm mb-8'>
                                    <input type="checkbox" name="accept" checked={formData.accept} onChange={updateForm} id="" />
                                    <label htmlFor='' className='ml-1'>
                                        By clicking "create account", I consent to the privacy policy.
                                    </label>
                                </div>

                                <div className='w-full ml-[-60px] lg:ml-[-160px]'>
                                    <button disabled={loading} className='bg-orange-500 w-[200px] h-[60px] ml-[130px] px-4 text-white hover:bg-black'>
                                        {loading ? "loading..." : "CREATE ACCOUNT"}
                                    </button>
                                </div>
                                <p className='text-red-700 mt-5'>
                                    {error && 'Something went wrong!'}
                                </p>

                                <div className='flex justify-center items-center text-[#7b888b]'>
                                    <div>
                                        <p className='mt-[50px] mb-[30px] ml-6 lg:text-center'>By creating an account, you agree to our:</p>

                                        <Link to='/register'>
                                            <p className='text-center tracking-widest mb-[60px] hover:text-orange-500'>TERMS OF CONDITIONS     |     PRIVACY POLICY</p>
                                        </Link>

                                        <Link to='/login'>
                                            <p className='text-center lg:ml-[70px] hover:text-orange-500'>ALREADY HAVE AN ACCOUNT ?</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Register
