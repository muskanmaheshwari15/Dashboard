import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMiniHome } from 'react-icons/hi2';
import { RiBarChartBoxLine } from 'react-icons/ri';
import { BsClipboardCheck } from 'react-icons/bs';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { IoBagCheckOutline } from 'react-icons/io5';
import { AiOutlineLogout } from 'react-icons/ai';
import { TbLayoutDashboardFilled } from "react-icons/tb";

const Sidebar = () => {
  const location = useLocation();

  const linkClass = (path) => 
    `hover:underline ${location.pathname === path ? 'text-blue-500 before:content-[""] before:absolute before:-left-5 before:top-1/2 before:transform before:-translate-y-1/2 before:h-6 before:w-1 before:bg-blue-500' : ''}`;

  return (
    <div className="flex flex-col justify-between w-16 bg-gray-800 text-white h-screen p-5">
      <div>
        <h2 className="text-2xl font-bold mb-6"><TbLayoutDashboardFilled className='text-blue-500 text-3xl'/></h2>
        <ul> 
          <li className="mb-6 relative">
            <Link to="/" className={linkClass('/')}>
              <HiMiniHome className='text-xl' />
            </Link>
          </li>
          <li className="mb-6 relative">
            <Link to="/products" className={linkClass('/products')}>
              <RiBarChartBoxLine className='text-xl' />
            </Link>
          </li>
          <li className="mb-6 relative">
            <Link to="/orders" className={linkClass('/orders')}>
              <BsClipboardCheck className='text-xl' />
            </Link>
          </li>
          <li className="mb-6 relative">
            <Link to="/customers" className={linkClass('/customers')}>
              <MdOutlineAccountBalanceWallet className='text-xl' />
            </Link>
          </li>
          <li className="mb-6 relative">
            <Link to="/" className={linkClass('')}>
              <IoBagCheckOutline className='text-xl' />
            </Link>
          </li>
        </ul>
      </div>
      <div className="relative">
        <Link to="/" className={linkClass('')}>
          <AiOutlineLogout className='text-xl' />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
