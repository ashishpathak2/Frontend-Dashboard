import React from "react";
import { CiBellOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";


export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-gray-800 w-11/12 mx-auto text-white py-2 px-6 md:px-10">
            {/* Logo */}
            <a href="#">
                <h1 className="text-3xl font-semibold tracking-[8px]">HOURS</h1>
            </a>

            {/* Navigation Links */}
            <div className="hidden md:flex gap-6">
                {["Dashboard", "Projects", "Team", "Client", "Time", "Report"].map((item) => (
                    <a
                        key={item}
                        href="#"
                        className="pb-1 border-b-2 border-transparent hover:border-white transition-all duration-200 ease-in-out"
                    >
                        {item}
                    </a>
                ))}
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-3">
                <button className="hidden md:block hover:scale-125 transition-all duration-200 ease-in-out"><CiBellOn size={22} /></button>
                <a href="" className="flex items-center gap-1">
                    <div className="w-12 h-12">
                        <img className="w-full h-full object-cover rounded-full" src="user.png" alt="User" />
                    </div>
                    <span className="hidden md:block">Mario</span>
                </a>
               <button className="hidden md:block hover:rotate-180 transition-all duration-200 ease-in-out"><IoIosArrowDown size={22}/></button>

            </div>
        </nav>
    );
};
