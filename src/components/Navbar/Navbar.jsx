import React, { useState } from 'react';
import { motion } from 'framer-motion'
import { TbMenu } from 'react-icons/tb'
import { MdClose } from 'react-icons/md'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const wipeRightToLeft = {
        initial: { scaleX: 0, originX: 1 },
        animate: { scaleX: 1, transition: { duration: 1, delay: .5 } },
    };

    const webDesignVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 2 } }
    };

    const graphicsVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 2 } }
    };

    const wipeDown = {
        initial: { scaleY: 0, originY: -1 },
        animate: { scaleY: 1, transition: { duration: 0.5, delay: 1.5 } },
    };

    return (
        <div className="w-full fixed z-10 overflow-x-hidden">
            <motion.div
                className="flex justify-between text-black border-b border-white items-center"
                initial={wipeRightToLeft.initial}
                animate={wipeRightToLeft.animate}
            >
                <motion.span
                    className="pl-4 pt-2 pb-2 lg:pl-20 lg:pt-5 lg:pb-5 font-monument tracking-widest"
                    initial="hidden"
                    animate="visible"
                    variants={webDesignVariants}
                >
                    vnc
                </motion.span>
                <motion.div
                    className="flex gap-5 border-l border-white pl-4 pr-4 pt-2 pb-2 lg:pt-5 lg:pb-5 lg:pl-20 lg:pr-20"
                    initial={wipeDown.initial}
                    animate={wipeDown.animate}
                >
                    <motion.span
                        className={`hidden lg:inline cursor-pointer ${showMenu ? 'hidden' : ''}`}
                        initial="hidden"
                        animate="visible"
                        variants={graphicsVariants}
                    >
                        About
                    </motion.span>
                    <motion.span
                        className={`hidden lg:inline cursor-pointer ${showMenu ? 'hidden' : ''}`}
                        initial="hidden"
                        animate="visible"
                        variants={graphicsVariants}
                    >
                        Works
                    </motion.span>
                    <motion.span
                        className={`hidden lg:inline cursor-pointer ${showMenu ? 'hidden' : ''}`}
                        initial="hidden"
                        animate="visible"
                        variants={graphicsVariants}
                    >
                        Services
                    </motion.span>
                    <motion.span
                        className={`hidden lg:inline cursor-pointer ${showMenu ? 'hidden' : ''}`}
                        initial="hidden"
                        animate="visible"
                        variants={graphicsVariants}
                    >
                        Contact
                    </motion.span>
                    <motion.button
                        className="lg:hidden focus:outline-none"
                        onClick={toggleMenu}
                        initial="hidden"
                        animate="visible"
                        variants={graphicsVariants}
                    >
                        {showMenu ? (
                            <MdClose className="text-white text-xl" />
                        ) : (
                            <TbMenu className="text-white text-xl" />
                        )}
                    </motion.button>
                </motion.div>
            </motion.div>
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