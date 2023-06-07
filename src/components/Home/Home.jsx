import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs'
import bgVid from '../../assets/vid/bgVid.mp4'

const Home = () => {
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
                <div className="pt-32">
                    <div className="flex flex-col lg:flex-row gap-0 lg:gap-5">
                        <h1 className="text-4xl md:text-7xl font-bold uppercase text-white font-monument lg:leading-[5rem]">Visual</h1>
                        <h1 className="text-4xl md:text-7xl font-bold uppercase text-white font-monument lg:leading-[5rem]">Network</h1>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-bold uppercase text-white font-monument tracking-widest">Creatives</h1>
                </div>
                <div className="">
                    <p className="text-white">
                        Embrace the power of visual connectivity, let us transform your online presence into a captivating network of creativity, functionality, and success!
                    </p>
                    <div className="flex items-center gap-2 pt-4 cursor-pointer">
                        <p className="uppercase text-2xl underline underline-offset-4">
                        Get in touch
                    </p>
                    <BsArrowUpRight className="text-2xl" />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;
