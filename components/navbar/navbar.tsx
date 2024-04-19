import React from 'react'
import NavLink from './navlink';
import { ModeToggle } from '../mode-toggle';
import MobileToogle from './mobile-toggle';
import { bebasNeue, manrope } from '@/utils/fonts';

const NavBar = () => {
    return (
        <nav className='flex justify-between items-center m-6'>
            <a href="/" className={`${bebasNeue.className} text-3xl md:ml-8`}> SEBASTIAN ACTIS</a>
            <ModeToggle />
            <MobileToogle />
            <ul className={`${manrope.className} gap-4 text-lg mr-10 hidden md:flex items-center justify-between`}>
                <NavLink label="Work" href="#proyects" />
                <NavLink label="About Me" href="#aboutme" />
                <NavLink label="Contact" href="#contact" />
            </ul>
        </nav>
    )
}

export default NavBar