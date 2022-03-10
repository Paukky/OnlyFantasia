import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { IosArrowForward } from 'react-icons/io';
import logo from '../assets/logo-red.png'

import { categories } from '../utils/data'

const Sidebar = (closeToggle) => {

const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize'
const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize'


const handleCloseSideBar = () => {
    if (closeToggle) closeToggle(false);
}

  return (
    <div className=" flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
        <div className="flex flex-col">
            <Link
                to="/"
                className=" flex px-5 gap-2 my-7 pt-1 w-190 items-center"
                onClick={handleCloseSideBar}
            >
                <img src={logo} alt="logo" className='w-full'/>        
            </Link>
            <NavLink
                to="/"
                className={({ isActive }) =>  isActive ? isActiveStyle : isNotActiveStyle}
            >
                <RiHomeFill/>
                Home
            </NavLink>
            <h3 className="mt-2 px-5 text-base 2xl:text-xl">Discover categories</h3>
            {categories.slice(0, categories.length).map((category) =>
                <NavLink
                    to={`/category/${category.name}`}
                    className=" flex px-5 gap-1 my-4 pt-1 w-190 items-center justify-center"
                    onClick={handleCloseSideBar}
                    key={category.name}
                >
                    {category.name}
                </NavLink>
            )}
        </div>
    </div>
    
  )
}

export default Sidebar