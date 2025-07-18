'use client'

import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { headerMenu } from "@/lib/data"; 
import Logo from "./Logo";

export default function Header () {
    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <header className="w-full flex items-center justify-between bg-[#251b54] text-white pe-4 md:pe-8 p-4">
            <Logo />
            <FaBars className="md:hidden text-3xl" onClick={() => setShowNavbar(!showNavbar)} />
            <Navbar />
            <NavbarMobile {...{ showNavbar, setShowNavbar }} />
        </header>
    )
}

function Navbar () {
    return (
        <div className="hidden md:flex">
            <nav className="flex gap-4 md:text-center font-bold">
                {headerMenu.map((item, index) => (
                    <Link key={index} href={item.href}>{item.name}</Link>
                ))}
            </nav>
        </div>
    )
}

function NavbarMobile ({ showNavbar, setShowNavbar }) {
    return (
        <div className={`${showNavbar ? '' : '-translate-x-full'} md:hidden absolute md:relative top-0 left-0 h-screen w-screen z-50 duration-500`}>
            <div className={`${showNavbar ? '' : 'hidden'} absolute top-0 left-0 h-screen w-screen -z-50`} onClick={() => setShowNavbar(!showNavbar)}></div>
            <div className="w-2/3 flex flex-col gap-4 bg-[#251b54b6] backdrop-blur-md shadow-2xl p-4 h-screen">
                <Logo />
                <hr />
                <nav className="flex flex-col md:flex-row gap-4 md:text-center font-bold">
                    {headerMenu.map((item, index) => (
                        <Link key={index} href={item.href}>{item.name}</Link>
                    ))}
                </nav>
            </div>
        </div>
    )
}