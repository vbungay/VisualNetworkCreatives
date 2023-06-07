import React, { useState } from 'react';
import { motion } from 'framer-motion'
import { TbMenu } from 'react-icons/tb'
import { MdClose } from 'react-icons/md'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <div className="w-full fixed z-10 overflow-x-hidden">
            <div className="flex justify-between text-black border-b border-white items-center">
                <span className="pl-4 pt-2 pb-2 lg:pl-20 lg:pt-5 lg:pb-5 font-monument tracking-widest">
                    vnc
                </span>
                <div className="flex gap-5 border-l border-white pl-4 pr-4 pt-2 pb-2 lg:pt-5 lg:pb-5 lg:pl-20 lg:pr-20">
                    <span className={`hidden lg:inline cursor-pointer ${showMenu ? 'hidden' : ''}`}>
                        About
                    </span>
                    <span className={`hidden lg:inline cursor-pointer ${showMenu ? 'hidden' : ''}`}>
                        Works
                    </span>
                    <span className={`hidden lg:inline cursor-pointer ${showMenu ? 'hidden' : ''}`}>
                        Services
                    </span>
                    <span className={`hidden lg:inline cursor-pointer ${showMenu ? 'hidden' : ''}`}>
                        Contact
                    </span>
                    <button
                        className="lg:hidden focus:outline-none"
                        onClick={toggleMenu}
                    >
                        {showMenu ? (
                            <MdClose className="text-white text-xl" />
                        ) : (
                            <TbMenu className="text-white text-xl" />
                        )}
                    </button>
                </div>
            </div>
            {showMenu && (
                <div className="lg:hidden h-screen z-[-1] flex flex-col gap-10 items-center justify-center bg-white text-black transition-all duration-500 ease-in">
                    <div className="duration-500 text-3xl font-monument" onClick={toggleMenu}>
                        <span className="text-gray-950">
                            About
                        </span>
                    </div>
                    <div className="duration-500 text-3xl font-monument" onClick={toggleMenu}>
                        <span className="text-gray-950">
                            Works
                        </span>
                    </div>
                    <div className="duration-500 text-3xl font-monument">
                        <span className="text-gray-950">
                            Services
                        </span>
                    </div>
                    <div className="duration-500 text-3xl font-monument">
                        <span className="text-gray-950">
                            Contact
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar