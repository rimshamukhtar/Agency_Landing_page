import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "../../public/Logo (1).png"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-3 font-sans sticky-top-0'>
    <a href='#'>
        <Image src="/Logo (1).png" alt='logo' width={150} height={40} className='top-[48px] left-[135px] '/>
    </a>
    <div className='flex gap-3 font-thin '>
      <ul className='flex space-x-16 px-12 font-bold '>
        <li className='font-[ageo] weight-[700px]'> <Link href="/">Home</Link></li>
        <li><Link href="/About">About Us</Link></li>
        <li> <Link href="/ourapps">Our Apps</Link></li>
        <li> <Link href="/Contacts">Contacts</Link> </li>
      </ul>
 
    </div>
    <div className='flex'>
        <ul className='flex gap-2 px-12'>
            <li className='w-[47px] h-[25px]'>Log in</li>
            <li><button className='w-[100px] h-[36px] bg-orange-500 rounded-[10px] top-[48px] left-[1186px] text-white'>Sign up</button></li>
        </ul>
    </div>
  
      
    </div>
  )
}

export default Navbar
