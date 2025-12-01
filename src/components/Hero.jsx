import React from 'react';
import Gradient from './Gradient';

const Hero = () => {
    return (
        <section className='mb-20 md:mb-48'>
            <div className="container mx-auto px-4 md:mt-32 md:px-24 mt-16 flex flex-col md:flex-row md:justify-between md:items-start gap-[60px]">
                <div className='flex-1 relative'>
                    <div className='absolute -z-40 -top-10 h-[480px] w-[300px] blur-[170px]'>
                        <Gradient />
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div className='h-10 w-[0.3rem] bg-secondary rounded-xl'></div>
                        <h1 className='text-3xl md:text-4xl'>Xorvix</h1>
                    </div>
                    <div className='text-4xl md:text-5xl font-ubuntu font-medium'>
                        <p className=' md:leading-[3.2rem]'>Engineering <span className='font-calligraffitti '>Excellence<br />Envisioning</span> Tommorow.</p>
                    </div>
                </div>
                <div className='flex-1'>
                    <p className='font-ubuntu text-justify md:pl-1'>Pioneering Tomorrow's Possibilities. We blend innovation and expertise to engineer solutions that redefine industries. With a passion for excellence, we create a future where ideas become reality. Join us on a journey to transform the world through technology and imagination.</p>
                    <a href="#about">
                        <button className="btn mt-6 lg:mt-8">
                            Shisir
                        </button>
                    </a>

                </div>
            </div>
        </section>
    );
}

export default Hero;