import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('black');

  const handleNav = () => {
    setNav(!nav);
  };

 

  {/*Website View */}
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed top-0 left-0 z-10 w-full duration-300 ease-in'
    >
      <div className='flex items-center w-full grid-cols-11 p-4 m-auto bg-white border-2 border-solid justify-evenly bg-opacity-70'>
        <button href='/'>
          <h1 style={{ color: `${textColor}` }} className='text-4xl font-bold hover:float-left'>
            Prefab
          </h1>
        </button>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4 hover:underline'>
            <Link href='/shop'>SHOP</Link>
          </li>
          <li className='p-4 ml-15 hover:underline'>
            <Link href='/about' className='ml-15 '>ABOUT </Link>
          </li>
          <li className='p-4'>
            <button href='/stores' className='ml-15 hover:underline'>STORES</button>
          </li>
          <li className='p-4'>
            <button href='/contact' className='mr-20 ml-15 hover:underline'>FAQ</button>
          </li>
          <li className='float-right p-4 ml-20' class='float-right ml-20 p-4'>
            <button href='/search'><AiOutlineSearch/></button>
          </li>
          <li className='float-right p-4 ml-2' class=' float-right p-4'>
            <button href='/user'><AiOutlineUser/></button>
          </li>
          <li className='p-4 ml-2 ' class='mfloat-right p-4'>
            <button href='/cart'><AiOutlineShoppingCart/></button>
          </li>
        </ul>
        

        {/* Mobile Button */}
        <div onClick={handleNav} className='z-10 block ml-20 sm:hidden'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/shop'>SHOP</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/about'>ABOUT</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/stores'>STORES</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/faq'>FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;