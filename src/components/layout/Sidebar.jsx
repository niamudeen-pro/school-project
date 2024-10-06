import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { GoGift } from "react-icons/go";
import { ImFilesEmpty } from "react-icons/im";
import { IoSettingsOutline } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineLogout } from "react-icons/ai";
import { cn } from "../../utils/helper";
import { SCHOOL_LOGO_IMAGE } from "../../constants";

const NAVIGATION_MENUS = [
    {
        id: 1,
        title: "Dashboard",
        icon: <RxDashboard size={22} />,
    },

    {
        id: 2,
        title: "test2",
        icon: <GoGift size={22} />,
    },

    {
        id: 3,
        title: "test3",
        icon: <ImFilesEmpty size={22} />,
    },
    {
        id: 4,
        title: "test4",
        icon: <IoSettingsOutline size={22} />,
    },
];

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            opacity: 1,
            width: "auto",
            transition: {
                duration: 0.5,
            },
        },
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsOpen(false);
            } else {
                setIsOpen(true);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.innerWidth]);

    return (
        <aside className="bg-primary p-5">
            <motion.div
                animate={{
                    width: isOpen ? "250px" : "60px",
                    transition: {
                        duration: 0.5,
                        type: "spring",
                        damping: 10,
                    },
                }}
                className="relative h-full"
            >
                <div className="flex items-center justify-between">
                    {isOpen && (
                        <div className="h-10 w-10 rounded-full bg-white p-1 sm:p-0">
                            <img
                                src={SCHOOL_LOGO_IMAGE}
                                alt="Brand Logo"
                                className="object-contain"
                            />
                        </div>
                    )}
                    <div className="rounded-md px-4 py-3 hover:bg-white hover:text-black">
                        {isOpen ? (
                            <IoClose
                                size={22}
                                className="cursor-pointer"
                                onClick={() => setIsOpen((prev) => !prev)}
                            />
                        ) : (
                            <RiMenuFill
                                size={22}
                                className="cursor-pointer"
                                onClick={() => setIsOpen((prev) => !prev)}
                            />
                        )}
                    </div>
                </div>
                <nav className="mt-10">
                    <ul className="space-y-4">
                        {NAVIGATION_MENUS?.map((menu) => (
                            <li
                                key={menu.id}
                                className={cn(
                                    "group relative flex cursor-pointer items-center gap-4 rounded-md px-4 py-3 transition-all duration-300 hover:bg-secondary hover:text-white",
                                    {
                                        "justify-center": !isOpen,
                                    },
                                )}
                            >
                                <div>{menu.icon}</div>
                                {isOpen && (
                                    <AnimatePresence>
                                        <motion.p
                                            variants={showAnimation}
                                            initial="hidden"
                                            animate="show"
                                            exit="hidden"
                                        >
                                            {menu.title}
                                        </motion.p>
                                    </AnimatePresence>
                                )}

                                {!isOpen && (
                                    <p className="absolute left-[150%] top-1/2 -translate-y-1/2 transform whitespace-nowrap rounded-md bg-primary px-3 py-2 text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                                        {menu.title}
                                    </p>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div
                    className={cn(
                        "absolute bottom-0 flex w-full cursor-pointer items-center gap-4 rounded-md px-4 py-3 transition-all duration-300 hover:bg-white hover:text-black",
                        {
                            "justify-center": !isOpen,
                        },
                    )}
                >
                    <AiOutlineLogout size={22} />
                    {isOpen && (
                        <AnimatePresence>
                            <motion.p
                                variants={showAnimation}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                            >
                                Logout
                            </motion.p>
                        </AnimatePresence>
                    )}
                </div>
            </motion.div>
        </aside>
    );
}
