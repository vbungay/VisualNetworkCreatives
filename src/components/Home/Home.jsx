import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { BsArrowUpRight } from 'react-icons/bs'
import bgVid from '../../assets/vid/bgVid.mp4'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page on route change
    }, []);

    const wipeDown = {
        initial: { scaleY: 0, originY: -1 },
        animate: { scaleY: 1, transition: { duration: .5, delay: 3 } },
    };

    const webDesignVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 2.5 } }
    };

    const wipeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 3 } }
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={bgVid} type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex flex-col items-start justify-evenly pl-4 lg:pl-20">
                <motion.div
                    className="pt-32"
                    initial="hidden"
                    animate="visible"
                    variants={webDesignVariants}
                >
                    <div className="flex flex-col lg:flex-row gap-0 lg:gap-5">
                        <h1 className="text-4xl md:text-7xl font-bold uppercase text-white font-monument lg:leading-[5rem]">Visual</h1>
                        <h1 className="text-4xl md:text-7xl font-bold uppercase text-white font-monument lg:leading-[5rem]">Network</h1>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-bold uppercase text-white font-monument tracking-widest">Creatives</h1>
                </motion.div>
                <div className="">
                    <motion.p
                        className="text-white"
                        initial={wipeDown.initial}
                        animate={wipeDown.animate}
                    >
                        Embrace the power of visual connectivity, let us transform your online presence into a captivating network of creativity, functionality, and success!
                    </motion.p>
                    <motion.div
                        className="flex items-center gap-2 pt-4 cursor-pointer"
                        initial="hidden"
                        animate="visible"
                        variants={wipeUp}
                    >
                        <p className="uppercase text-2xl underline underline-offset-4">
                            Get in touch
                        </p>
                        <BsArrowUpRight className="text-2xl" />
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Home;
