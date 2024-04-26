import { Link } from 'react-scroll'

interface navLinkProps {
    label: string;
    href: string
}

const NavLink = ({ label, href }: navLinkProps) => {
    return (
        <li className="gap-2">
            <Link smooth={true} duration={500} to={href} className="nav-link relative group font-bold pb-[4px] cursor-pointer">
                {label}
                <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-green-700 transition-all duration-300 ease-in-out group-hover:w-full">
                </span>
            </Link>
        </li>
    )
}

export default NavLink