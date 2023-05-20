import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag } from "react-icons/bs";
import Logo from "../img/newLogo.svg"

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    });
  });

  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all flex`}>
      <div className='container mx-auto flex items-center justify-between h-full px-16 '>
        {/* logo */}
        <Link to={'/'}>
          <div>
            <img className='w-[90px]' src={Logo} alt='' />
          </div>
        </Link>
        {/* cart */}
        <div 
          onClick={() => setIsOpen(!isOpen)} 
          className='cursor-pointer flex relative'
        >
          <BsBag className='text-4xl'/>
          <div className='bg-green-800 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;
