"use client"

import NavLink from './navlink';
import MobileToogle from './mobile-toggle';
import { bebasNeue, manrope } from '@/utils/fonts';
import { useLanguage } from '@/hooks/useLanguage';
import ButtonsFixed from '../buttonsFixed';

const NavBar = () => {

    const { language } = useLanguage();

    return (
        <nav className='flex justify-between items-center m-6'>
            <a href="/" className={`${bebasNeue.className} text-3xl md:ml-8`}> SEBASTIAN ACTIS</a>
            <div className="md:hidden">
                <ButtonsFixed />
            </div>
            <MobileToogle />
            <ul className={`${manrope.className} gap-4 text-lg mr-10 hidden md:flex items-center justify-between`}>
                <NavLink label={language ? "Work" : "Trabajos"} href="proyects" />
                <NavLink label={language ? "About Me" : "Sobre Mi"} href="aboutme" />
                <NavLink label={language ? "Contact" : "Contacto"} href="contact" />
            </ul>
        </nav>
    )
}

export default NavBar