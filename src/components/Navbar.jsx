import React, { useState } from 'react'
import { BiMenuAltRight } from "react-icons/bi"
import logo from "/images/logo.png"
const Navbar = () => {

    const [open, setOpen] = useState(false)
    return (

        <header>
            <div className="container mx-auto  py-4 flex justify-between items-center">
                <div className='mt-[-10px]'>
                    <img src={logo} alt="" width={130} />
                </div>
                <nav className={`flex flex-col md:flex-row fixed md:static top-0 right-0 h-screen md:h-auto py-32  px-20 md:p-0 gap-[40px] items-center font-ubuntu bg-pure md:bg-transparent  ${open ? "max-md:-translate-x-[0%]" : "max-md:translate-x-[100%]"} transition-all delay-50 ease-linear`}>
                    <a href="" className='capitalize'>home</a>
                    <a href="" className='capitalize'>products</a>
                    <a href="" className='capitalize'>about us</a>
                    <div>
                        <button className='btn'>contact</button>
                    </div>
                </nav>
                <div className={`flex md:hidden z-30  ${open && "fixed"} top-7 right-4 `} onClick={() => setOpen(!open)}>
                    <BiMenuAltRight size={25} />
                </div>
            </div>
        </header>
    )
}

export default Navbar