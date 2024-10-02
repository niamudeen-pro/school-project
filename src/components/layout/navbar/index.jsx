import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';
import { GoTriangleDown } from 'react-icons/go';
import {
    SCHOOL_DISTRICT,
    SCHOOL_LOCATION,
    SCHOOL_NAME,
    SCHOOL_SUPPORT_EMAIL,
    SCHOOL_SUPPORT_NUMBER,
} from '../../../constants';
import SchoolLogo from '../../shared/SchoolLogo';
import { PUBLIC_ROUTES } from '../../../routes';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoCloseOutline } from 'react-icons/io5';
import { HiBars3BottomRight } from 'react-icons/hi2';

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

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* action bar ******************************** */}
            <div className="bg-secondary text-xs text-white p-4 flex justify-between sm:justify-start items-center w-full">
                <div className="custom_container w-full">
                    <div className="flex gap-4">
                        <span className="flex items-center gap-2 cursor-pointer">
                            <FaPhone /> {SCHOOL_SUPPORT_NUMBER}
                        </span>
                        <span className="flex items-center gap-2 cursor-pointer">
                            <MdEmail /> {SCHOOL_SUPPORT_EMAIL}
                        </span>
                    </div>
                </div>

                <HiBars3BottomRight
                    className="cursor-pointer text-white block sm:hidden  z-50"
                    onClick={toggle}
                    size={24}
                />
            </div>

            {/* navbar code *********************** */}
            <div className="bg-primary text-white sticky top-0 z-50 shadow-lg">
                <header className="custom_container w-full flex_between">
                    <div className="flex items-center  gap-4 py-6 flex-col sm:flex-row">
                        <SchoolLogo />
                        <h2 className="font-semibold uppercase  text-center text-xl sm:text-left">
                            {`${SCHOOL_NAME} 
                            ${SCHOOL_LOCATION}, ${SCHOOL_DISTRICT}`}
                        </h2>
                    </div>
                    <nav
                        className={
                            isNavOpen
                                ? 'bg-primary  fixed min-h-screen top-0 left-0 w-full flex justify-center items-center z-20'
                                : 'hidden sm:block'
                        }
                    >
                        {isNavOpen && (
                            <div className="fixed top-0 right-0 p-4">
                                <IoCloseOutline
                                    className="cursor-pointer text-white block sm:hidden  z-50"
                                    onClick={toggle}
                                    size={24}
                                />
                            </div>
                        )}
                        <ul
                            className={
                                isNavOpen
                                    ? 'flex flex-col justify-center items-center gap-4 capitalize'
                                    : 'flex gap-14 capitalize'
                            }
                        >
                            {PUBLIC_ROUTES?.length > 0 &&
                                PUBLIC_ROUTES?.filter(
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
                                            className="text-sm flex items-center gap-2 text-nowrap"
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
                                                                    to={
                                                                        child.path
                                                                    }
                                                                    className="text-gray-500 hover:text-gray-700 text-xs text-nowrap"
                                                                >
                                                                    {
                                                                        child.title
                                                                    }
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
        </>
    );
}
