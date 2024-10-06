import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import useWindowSize from "../../../hooks/useWindowSize";

import {
    SCHOOL_DISTRICT,
    SCHOOL_LOCATION,
    SCHOOL_NAME,
} from "../../../constants";
import SchoolLogo from "../../shared/SchoolLogo";
import { PUBLIC_ROUTES } from "../../../routes";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

import { IoCloseOutline } from "react-icons/io5";

import { MobileNavLinks, NavLinks } from "./NavLinks";
import ActionBar from "../ActionBar";
import useClickOutside from "../../../hooks/useClickOutside";

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const windowSize = useWindowSize();

    const { pathname: currentRoute } = useLocation();

    const mobileRef = useRef();

    const toggle = () => {
        setIsNavOpen((prev) => !prev);
    };
    useClickOutside(mobileRef, toggle);

    useEffect(() => {
        if (windowSize.width > 1280) {
            setIsNavOpen(false);
        }
    }, [windowSize.width]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const SHOW_STICKY_NAVBAR = scrollY > 200 && windowSize.width > 640;

    const NAV_MENU =
        (PUBLIC_ROUTES?.length > 0 &&
            PUBLIC_ROUTES?.filter(
                (route) => !route.private && !route.hidden && !route.excludeNav,
            )) ||
        [];

    const handleActiveMenu = (route) => {
        const { id } = route;

        if (route?.childrens?.length > 0) {
            setActiveMenu(id);
            if (activeMenu === id) setActiveMenu(null);
        }
    };

    return (
        <>
            {/* action bar ******************************** */}
            <ActionBar isNavOpen={isNavOpen} toggle={toggle} />

            {/* main title bar *********************** */}
            <div className="bg-primary text-white">
                <div className="custom_container flex w-full flex-col pt-4">
                    <div className="flex_between gap-4 pb-4">
                        <div className="flex items-center gap-4 sm:flex-row">
                            <SchoolLogo />
                            <h2 className="max-w-xl text-center text-base font-semibold uppercase sm:text-left sm:text-xl">
                                {`${SCHOOL_NAME} 
                            ${SCHOOL_LOCATION}, ${SCHOOL_DISTRICT}`}
                            </h2>
                        </div>
                        <p className="hidden text-white sm:block">
                            <span className="font-medium">VISTING TIME : </span>
                            9:00 AM to 5:00 PM ( Mon to Sat )
                        </p>
                    </div>

                    {/* mobile navbar */}
                    {isNavOpen ? (
                        <nav className="fixed left-0 top-0 z-20 flex min-h-screen w-full">
                            <div
                                className={`${isNavOpen ? "translate-x-0" : "-translate-x-full"} w-[80%] bg-primary px-10 py-4 transition-all duration-300 ease-in-out`}
                                ref={mobileRef}
                            >
                                <div className="flex_between">
                                    <SchoolLogo />
                                    <IoCloseOutline
                                        className="z-50 block cursor-pointer text-white sm:hidden"
                                        onClick={toggle}
                                        size={24}
                                    />
                                </div>
                                <ul className="mt-10">
                                    {NAV_MENU.map((route) => (
                                        <MobileNavLinks
                                            key={route.id}
                                            route={route}
                                            currentRoute={currentRoute}
                                            handleActiveMenu={handleActiveMenu}
                                            activeMenu={activeMenu}
                                            setIsNavOpen={setIsNavOpen}
                                        />
                                    ))}
                                </ul>
                            </div>
                            <div className="absolute bottom-8 left-8 space-y-4">
                                <div className="flex gap-8">
                                    <FaFacebookF
                                        size={18}
                                        className="cursor-pointer hover:scale-110"
                                    />
                                    <BsInstagram
                                        size={18}
                                        className="cursor-pointer hover:scale-110"
                                    />
                                </div>

                                <p className="text-white">
                                    9:00 AM to 5:00 PM ( Mon to Sat )
                                </p>
                            </div>
                        </nav>
                    ) : (
                        <nav className="hidden sm:block">
                            {/* desktop navbar **************** */}

                            <ul className="flex_center flex gap-14 capitalize">
                                {NAV_MENU.map((route) => (
                                    <NavLinks
                                        key={route.id}
                                        route={route}
                                        currentRoute={currentRoute}
                                        setIsNavOpen={setIsNavOpen}
                                    />
                                ))}
                            </ul>
                        </nav>
                    )}
                </div>
            </div>
            {/* sticky navbar */}
            {SHOW_STICKY_NAVBAR && (
                <div className="sticky top-0 z-50 bg-primary text-white shadow-lg">
                    <header className="custom_container relative flex w-full gap-8">
                        <div className="absolute top-1">
                            <SchoolLogo />
                        </div>
                        <nav className="ml-28 hidden sm:block">
                            <ul className="flex gap-14 capitalize">
                                {NAV_MENU.map((route) => (
                                    <NavLinks
                                        key={route.id}
                                        route={route}
                                        currentRoute={currentRoute}
                                        setIsNavOpen={setIsNavOpen}
                                    />
                                ))}
                            </ul>
                        </nav>
                    </header>
                </div>
            )}
        </>
    );
}
