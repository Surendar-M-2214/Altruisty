import React from 'react'
import logo from '../Pagecompos/pageimg/logo.png'
import { Link } from 'react-router-dom'

export default function Navigationbar() {
  return (
    <div className='flex fixed w-screen h-[68px] text-2xl bg-gray-100 rounded-2xl font-sans text-blue-800 items-center z-10 '>
    <img src={logo} alt='logo' className='text-4xl text-black font-bold pl-4 w-[200px]'/>
    <div className='ml-10 rounded-xl space-x-10 space-y-[6px] pl-10 h-[50px] w-[1000px] items-center justify-center border border-black'>
    <Link to="/">
    <button>Home</button>
    </Link>
    <Link to="Services">
    <button>Services</button>
    </Link>
    <Link to="Training">
    <button>Training</button>
    </Link>
    <Link to="Ipss">
    <button>Ipss Request</button>
    </Link>
    <Link to="Programs">
    <button>Programs</button>
    </Link>
    <Link to="Contactus">
    <button>Contact us</button>
    </Link>
    <Link to="Aboutus">
    <button>Aboutus</button>
    </Link>
        </div></div>
  )
}
