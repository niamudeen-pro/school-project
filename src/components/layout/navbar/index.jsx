import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { IoCloseOutline } from 'react-icons/io5';
import useWindowSize from '../../../hooks/useWindowSize';
import { GoTriangleDown } from 'react-icons/go';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const ROUTES = [
    {
        id: 1,
        title: 'Home',
        path: '/',
    },
    {
        id: 2,
        title: 'About',
        path: '#about',
        childrens: [
            {
                id: 1,
                title: 'Message from principle',
                path: '#about-us',
            },
            {
                id: 2,
                title: 'Vision Mission Motto',
                path: '#about-us',
            },
            {
                id: 3,
                title: 'Our facilities',
                path: '#about-us',
            },
        ],
    },
    {
        id: 3,
        title: 'Contact Us',
        path: '#contact',
    },
];
export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const windowSize = useWindowSize();

    const { pathname: currentRoute } = useLocation();

    const toggle = () => {
        setIsNavOpen((prev) => !prev);
    };

    useEffect(() => {
        if (windowSize.width > 1280) {
            setIsNavOpen(false);
        }
    }, [windowSize.width]);

    return (
        <div className="bg-primary text-white top-0 sticky z-50">
            <div className="bg-secondary text-xs text-white p-4 flex justify-between sm:justify-start items-center w-full">
                <div className="custom_container">
                    <div className="flex gap-4">
                        <span className="flex items-center gap-2">
                            <FaPhone /> 6280168572
                        </span>
                        <span className="flex items-center gap-2">
                            <MdEmail /> niamudeen6280@gmail.com
                        </span>
                    </div>
                    <div></div>
                </div>
                {isNavOpen ? (
                    <IoCloseOutline
                        className="cursor-pointer text-white block sm:hidden  z-50"
                        onClick={toggle}
                        size={24}
                    />
                ) : (
                    <HiBars3BottomRight
                        className="cursor-pointer text-white block sm:hidden  z-50"
                        onClick={toggle}
                        size={24}
                    />
                )}
            </div>
            <header className="custom_container w-full">
                <div className="flex items-center justify-center gap-4 py-4">
                    <img
                        src="https://www.springdalesdubai.com/wp-content/uploads/2020/07/footer.png"
                        alt="Brand Logo"
                        className="w-24"
                    />
                    <h2 className="font-semibold uppercase text-xl sm:text-2xl">
                        Government Senior Secondary Smart School - Boys
                        <br />
                        Sahnewal
                    </h2>
                </div>

                <nav
                    className={
                        isNavOpen
                            ? 'bg-primary fixed min-h-screen top-0 left-0 w-full flex justify-center items-center z-20'
                            : 'hidden sm:block'
                    }
                >
                    <ul
                        className={
                            isNavOpen
                                ? 'flex flex-col justify-center items-center gap-4 capitalize'
                                : 'flex gap-14 capitalize'
                        }
                    >
                        {ROUTES?.length > 0 &&
                            ROUTES?.filter(
                                (route) =>
                                    !route.private &&
                                    !route.hidden &&
                                    !route.excludeNav
                            ).map((route) => (
                                <li
                                    key={route.id}
                                    className={`group relative nav_link py-3 rounded-md transition-all duration-300 ease-in-out ${
                                        currentRoute === route.path &&
                                        'active_nav_link'
                                    }`}
                                    onClick={() => setIsNavOpen(false)}
                                >
                                    <Link
                                        to={route.path}
                                        className="text-sm flex items-center gap-2"
                                    >
                                        {route.title}
                                        {route?.childrens?.length > 0 && (
                                            <GoTriangleDown className="text-gray-200" />
                                        )}
                                    </Link>

                                    <div className="bg-gray-100 text-black min-w-[200px] absolute top-full group-hover:block hidden transition">
                                        <ul>
                                            {route?.childrens?.length > 0 &&
                                                route?.childrens.map(
                                                    (child) => (
                                                        <li
                                                            key={child.id}
                                                            className={`transition border-b py-3 px-4  hover:bg-gray-200`}
                                                            onClick={() =>
                                                                setIsNavOpen(
                                                                    false
                                                                )
                                                            }
                                                        >
                                                            <Link
                                                                to={child.path}
                                                                className="text-gray-800 text-xs text-nowrap"
                                                            >
                                                                {child.title}
                                                            </Link>
                                                        </li>
                                                    )
                                                )}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </nav>
            </header>
        </div>
    );
}
