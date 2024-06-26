import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function User() {
    // const Menus = [ 'Sign in', 'Register', 'My Account', 'Wishlist']
    
  return (
    // <div className=''>
    //     {
    //        <ul>
    //         { Menus.map((menu)=> (
    //              <li className='mb-2 font-light hover:text-orange-600 cursor-pointer' key={menu}>
    //                <Link to=''>
    //                    {menu}
    //               </Link>
    //             </li>
    //         ))}
    //        </ul>
    //     }
    // </div>

    <section>
      <div>
        <ul>
            <Link to='/login'>
              <li className='mb-2 font-light hover:text-orange-600 cursor-pointer'>
                Sign in
              </li>
            </Link>
            
            <Link to='/register'>
              <li className='mb-2 font-light hover:text-orange-600 cursor-pointer'>
                Register
              </li>
            </Link>
        </ul>
      </div>
    </section>

  )


}

export default User