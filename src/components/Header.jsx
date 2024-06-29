import React from 'react';
import { useState } from 'react';
import { RiMenuFoldLine } from "react-icons/ri";
import { MdClose } from "react-icons/md";

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
        title: 'About',
        url: '/about'
    },
    {
        title: 'Contact',
        url: '/contact'
    }
];

const NavItem = ({ url, children }) => {
    return (
        <li>
            <a href={url}>{children}</a>
        </li>
    );
};

const Header = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    return (
        <section className='bg-dark-soft'>
            <header>
                <div className='text-white'>LOGO</div>

                <div className="lg:hidden z-50 text-white">
                    <button onClick={() => setIsNavVisible(!isNavVisible)}>
                        {isNavVisible ? <MdClose size={30} /> : <RiMenuFoldLine size={30} />}
                    </button>
                </div>

                <div className={`${isNavVisible ? "right-0" : "-right-full"} transition-all duration-300 bg-dark-hard lg:bg-transparent mt-[96px] lg:mt-0 z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}>
                    <ul className="flex flex-col lg:flex-row items-center gap-x-10 gap-y-5">
                        {NavItemInfo.map((item, index) => (
                            <NavItem key={index} url={item.url}>
                                {item.title}
                            </NavItem>
                        ))}
                    </ul>
                    <button className="mt-5 mr-6 lg:mt-0 border-2 rounded-full border-white-500 px-6 py-2 text-white-500 font-semibold hover:bg-[#EEEDEB] hover:text-dark-hard transition-all duration-300">Sign In</button>
                </div>

            </header>
        </section>
    );
};

export default Header;