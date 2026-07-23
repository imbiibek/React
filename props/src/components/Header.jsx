import React from 'react'
import logo from '../assets/letslearnlogo.webp'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex items-center justify-between px-8 py-4 shadow-md bg-white'>
            <div>
                <img src={logo} alt='Logo' className='h-10 w-auto'></img>
            </div>

            <div>
                <ul className='flex gap-8 text-gray-700 font-medium'>
                    <li className='cursor-pointer hover:text-blue-600'><NavLink to="/">Home</NavLink></li>
                    <li className='cursor-pointer hover:text-blue-600'><NavLink to="/about">About</NavLink></li>
                    <li className='cursor-pointer hover:text-blue-600'>Blog</li>
                    <li className='cursor-pointer hover:text-blue-600'>Contact</li>
                </ul>
            </div>

            <div>
                <button className='bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition'>
                    Register Now
                </button>
            </div>
        </div>
    )
}

export default Header