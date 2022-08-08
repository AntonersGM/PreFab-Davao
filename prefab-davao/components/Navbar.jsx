import Link from 'next/link';
import React, {useState} from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    const handleNav = () => {
        setNav(!true)
    };




    return (
        <div style={{backgroundColor: '${color}'}} className='fixed top-0 left-0 z-10 w-full duration-300 ease-in'>
            <div className='max-w-[1240px] m-auto flex justify-between 
            items-center p-4 text-black'>
                <Link href='/'>
                <h1 style={{color: '${textColor}'}}className='text-4xl font-bold'>PREFAB</h1>
                </Link>
                <ul className='hidden sm:flex'>
                    <li className='p-4'>
                        <Link href='/'>SHOP</Link>
                    </li>
                </ul>
                <ul className='hidden sm:flex'>
                    <li className='p-4'>
                        <Link href='/'>ABOUT</Link>
                    </li>
                </ul>
                <ul className='hidden sm:flex'>
                    <li className='p-4'>
                        <Link href='/'>STORES</Link>
                    </li>
                </ul>
                <ul className='hidden sm:flex'>
                    <li className='p-4'>
                        <Link href='/'>FAQ</Link>
                    </li>
                </ul>








                {/* Mobile Button*/}
                <div onClick={handleNav} className='z-10 block sm:hidden '>    
                    {nav ? <AiOutlineClose size={20} style={{color: '${textColor}'}}/> 
                    : <AiOutlineMenu size={20} style={{color: '${textColor}'}}/>}
                </div>
                {/*Mobile Menu*/}
                <div className= { nav ? 'absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-screen text-center duration-300 ease-in bg-white sm:hidden'
                : 'absolute top-0 bottom-0 left-[-100%] right-0 flex items-center justify-center w-full h-screen text-center duration-300 ease-in bg-white sm:hidden'}
                >
                    <ul>
                    <li className='p-4 text-4xl hover:text-gray-500 sm:flex'>
                        <Link href='/shop'>SHOP</Link>
                    </li>
                </ul>
                <ul>
                    <li className='p-4 text-4xl hover:text-gray-500 sm:flex'>
                        <Link href='/about'>ABOUT</Link>
                    </li>
                </ul>
                <ul>
                    <li className='p-4 text-4xl hover:text-gray-500 sm:flex'>
                        <Link href='/stores'>STORES</Link>
                    </li>
                </ul>
                <ul>
                    <li className='p-4 text-4xl hover:text-gray-500 sm:flex'>
                        <Link href='/faq'>FAQ</Link>
                    </li>
                </ul>
                    
                </div>



            </div>
        </div>
    )
}

export default Navbar
