import React from 'react'

interface navLinkProps {
    label: string;
}

const NavLink = ({ label }: navLinkProps) => {
    return (
        <li className="gap-2">
            <a href="#" className="nav-link relative group font-bold pb-[2px]">
                {label}
                <span className="absolute left-0 bottom-0 w-0 h-[2.5px] bg-indigo-700 transition-all duration-300 ease-in-out group-hover:w-full">
                </span>
            </a>
        </li>
    )
}

export default NavLink