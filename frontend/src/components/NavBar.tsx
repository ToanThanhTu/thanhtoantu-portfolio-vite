import React, { useState } from "react";

import MenuIcon from '@mui/icons-material/Menu';

import logo from "../assets/logo3t.png";
import Weather from "./Weather";

const Navbar: React.FC = () => {
    const navItems = [
        ["About me", "#about-section"],
        ["Work", "#work-section"],
        ["Contact", "#contact-section"],
    ];

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed w-full bg-primary-white z-50 px-8">
            <nav className="flex h-14 items-center portfolio-width justify-between">
                <img src={logo} alt="3T logo" className="flex-none size-10" />
                <ul className="flex-auto hidden  sm:flex justify-end space-x-6 md:space-x-10 md:justify-center">
                    {navItems.map(([text, id]) => (
                        <li key={text}>
                            <a href={id}>{text}</a>
                        </li>
                    ))}
                </ul>

                {/* Small Screen navigation */}
                <div className="sm:hidden relative">
                    <button
                        onClick={toggleMenu}
                        className={isOpen
                            ? 'bg-primary-background p-1 rounded-md'
                            : 'p-1'}>
                        <MenuIcon className="text-primary-black" />
                    </button>

                    {isOpen && (
                        <div className="z-30 absolute w-20 text-right right-0 top-6 bg-primary-background rounded-md">
                            <ul>
                                {navItems.map(([text, id]) => (
                                    <a href={id}>
                                        <li key={text} className="leading-10 pr-2 hover:bg-primary-white">
                                            {text}
                                        </li>
                                    </a>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <Weather />
            </nav>
        </div>
    );
}

export default Navbar;