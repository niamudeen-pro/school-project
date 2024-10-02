import React from 'react';
import { GoTriangleDown } from 'react-icons/go';
import { Link } from 'react-router-dom';

function MobileNavLinks({
    route,
    currentRoute,
    handleActiveMenu,
    activeMenu,
    setIsNavOpen,
}) {
    return (
        <>
            {route?.childrens?.length > 0 ? (
                <li
                    key={route.id}
                    className={`rounded-md py-3 ${
                        currentRoute === route.path && 'bg-white text-primary'
                    }`}
                    onClick={() => {
                        handleActiveMenu(route);
                    }}
                >
                    <span className="flex_between px-4 text-sm">
                        {route.title}
                        {route?.childrens?.length > 0 && (
                            <GoTriangleDown className="text-gray-200" />
                        )}
                    </span>

                    {/* submenu */}

                    {activeMenu === route.id &&
                        route?.childrens?.length > 0 && (
                            <ul className="pt-2">
                                {route?.childrens.map((child) => (
                                    <li
                                        key={child.id}
                                        className={`ml-4 rounded-md px-4 py-3 ${
                                            currentRoute === child.path &&
                                            'bg-white text-primary'
                                        }`}
                                        onClick={() => setIsNavOpen(false)}
                                    >
                                        <Link
                                            to={child.path}
                                            className="text-nowrap text-xs"
                                        >
                                            {child.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                </li>
            ) : (
                <Link to={route.path}>
                    <li
                        key={route.id}
                        className={`rounded-md py-3 ${
                            currentRoute === route.path &&
                            'bg-white text-primary'
                        }`}
                        onClick={() => {
                            setIsNavOpen(false);
                        }}
                    >
                        <span className="flex_between px-4 text-sm">
                            {route.title}
                            {route?.childrens?.length > 0 && (
                                <GoTriangleDown className="text-gray-200" />
                            )}
                        </span>

                        {/* submenu */}

                        {activeMenu === route.id &&
                            route?.childrens?.length > 0 && (
                                <ul className="pt-2">
                                    {route?.childrens.map((child) => (
                                        <li
                                            key={child.id}
                                            className={`px-4 py-3`}
                                            onClick={() => setIsNavOpen(false)}
                                        >
                                            <Link
                                                to={child.path}
                                                className="text-nowrap text-xs"
                                            >
                                                {child.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                    </li>
                </Link>
            )}
        </>
    );
}

function NavLinks({ route, currentRoute, setIsNavOpen }) {
    return (
        <>
            <li
                key={route.id}
                className={`nav_link group relative rounded-md py-6 transition-all duration-300 ease-in-out ${
                    currentRoute === route.path && 'active_nav_link'
                }`}
                onClick={() => setIsNavOpen(false)}
            >
                <Link
                    to={route.path}
                    className="flex items-center gap-2 text-nowrap text-sm"
                >
                    {route.title}
                    {route?.childrens?.length > 0 && (
                        <GoTriangleDown className="text-gray-200" />
                    )}
                </Link>

                {/* submenu */}

                <div className="absolute top-full z-50 hidden min-w-[200px] bg-gray-100 text-black transition group-hover:block">
                    <ul>
                        {route?.childrens?.length > 0 &&
                            route?.childrens.map((child) => (
                                <li
                                    key={child.id}
                                    className={`border-b px-4 py-3 transition hover:bg-gray-200`}
                                    onClick={() => setIsNavOpen(false)}
                                >
                                    <Link
                                        to={child.path}
                                        className="text-nowrap text-xs text-gray-500 hover:text-gray-700"
                                    >
                                        {child.title}
                                    </Link>
                                </li>
                            ))}
                    </ul>
                </div>
            </li>
        </>
    );
}

export { MobileNavLinks, NavLinks };
