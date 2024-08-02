import React, { useState } from 'react';
import { RiMenuFoldLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { NavLink, useLocation } from 'react-router-dom';

const NavItemInfo = [
    {
        title: 'Home',
        url: '/'
    },
    {
        title: 'Events',
        url: '/events'
    },
    {
        title: 'Timeline',
        url: '/timeline'
    },
    {
        title: 'Team',
        url: '/team'
    }
];

const NavItem = ({ url, children }) => {
    const location = useLocation();
    const isActive = location.pathname === url;

    return (
        <li className={`hover:text-zinc-300 hover:underline-offset-8 hover:underline hover:lg:animate-bounce ${isActive ? 'underline-offset-8 underline' : ''}`}>
            <NavLink to={url} exact>
                {children}
            </NavLink>
        </li>
    );
};

const Header = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    return (
        <section className='top-0 left-0 right-0 bg-dark-soft text-white z-50'>
            <header className='container mx-auto flex items-center justify-between py-4 px-4 lg:px-0'>
                <div className='flex items-center justify-center lg:justify-start'>
                    <h1 className='text-2xl'><img src="/static/media/logo.jpg" alt="logo" width="50" height="60"></h1>
                </div>

                <div className="lg:hidden flex flex-row-reverse z-50 text-white">
                    <button onClick={() => setIsNavVisible(!isNavVisible)}>
                        {isNavVisible ? <MdClose size={30} /> : <RiMenuFoldLine size={30} />}
                    </button>
                </div>

                <div className={`${isNavVisible ? "right-0" : "-right-full"} transition-all duration-300 lg:bg-transparent mt-[96px] lg:mt-0 z-[49] flex flex-col w-full lg:w-auto justify-center text-normal lg:justify-end lg:flex-row fixed top-0 bottom-0 bg-dark-soft lg:static gap-x-9 items-center`}>
                    <ul className="flex flex-col lg:flex-row items-center gap-x-10 gap-y-5">
                        {NavItemInfo.map((item, index) => (
                            <NavItem key={index} url={item.url}>
                                {item.title}
                            </NavItem>
                        ))}
                    </ul>
                    <NavLink to="/sign" className="lg:animate-pulse hover:lg:animate-none mt-5 mr-5 lg:mt-0 border-2 rounded-full border-white px-6 py-2 text-white font-semibold hover:bg-[#EEEDEB] hover:text-dark-hard transition-all duration-300">
                        Sign In
                    </NavLink>
                </div>
            </header>
        </section>
    );
};

export default Header;
