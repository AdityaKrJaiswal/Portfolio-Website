import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link } from 'react-scroll';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const Navlink = [
        { id: 1, text: "Home" },
        { id: 2, text: "Projects" },
        { id: 3, text: "Skills" },
        { id: 4, text: "Contact" },
    ];

    const handleLinkClick = () => {
        setOpen(false); 
    };

    return (
        <>
            <div className='container  max-w-screen-xl mx-auto px-4 md:px-20 bg-red-600 shadow-md h-16 z-50 relative'>
                <div className='flex justify-between h-16 items-center'>
                    <div>
                        <h1 className='text-white font-bold text-4xl cursor-pointer'>ADITYA</h1>
                    </div>
                    <div>
                        <ul className='hidden md:flex space-x-8 text-xl '>
                            {Navlink.map(({ id, text }) => (
                                <li
                                    className='hover:text-gray-600 scale-105 transition-all duration-200 cursor-pointer'
                                    key={id}
                                >
                                    <Link
                                        to={text}
                                        smooth={true}
                                        duration={500}
                                        offset={-70} 
                                        activeClass='active'
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div onClick={() => setOpen(!open)} className='md:hidden text-white text-2xl cursor-pointer'>
                            {open ? <MdClose /> : <GiHamburgerMenu />}
                        </div>
                    </div>
                </div>
                {open && (
                    <div className='absolute top-16 left-0 w-full bg-white md:hidden transition-all duration-300 z-40'>
                        <ul className='flex flex-col items-center justify-center h-screen gap-7 text-xl'>
                            {Navlink.map(({ id, text }) => (
                                <li
                                    className='text-black font-bold hover:text-red-600 scale-105 transition-all duration-200 cursor-pointer'
                                    key={id}
                                >
                                    <Link
                                        to={text}
                                        smooth={true}
                                        duration={500}
                                        offset={-70} 
                                        onClick={handleLinkClick} 
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;
