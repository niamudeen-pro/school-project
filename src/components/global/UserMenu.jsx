import React, { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

export default function UserMenu() {
    const [show, setShow] = useState(false);

    const menuRef = useRef();
    useClickOutside(menuRef, () => setShow(false));

    const USER_MENUS = [
        {
            id: 1,
            title: "Dashboard",
        },
        {
            id: 2,
            title: "Settings",
        },
        {
            id: 3,
            title: "Earnings",
        },
        {
            id: 4,
            title: "Sign out",
        },
    ];

    return (
        <>
            <div className="relative">
                <button
                    id="dropdownAvatarNameButton"
                    data-dropdown-toggle="dropdownAvatarName"
                    class="text-gray-9000 mb-2 flex items-center rounded-full pe-1 text-sm font-medium"
                    type="button"
                    onClick={() => setShow(!show)}
                >
                    <span class="sr-only">Open user menu</span>
                    <img
                        className="h-12 w-12 rounded-full object-cover"
                        src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="user"
                    />
                </button>

                {show && (
                    <div
                        id="dropdownAvatarName"
                        class="absolute -left-32 top-full z-10 w-44 rounded-lg bg-primary shadow"
                        ref={menuRef}
                    >
                        <div class="px-4 py-3 text-sm text-gray-300">
                            <div class="font-medium">Pro User</div>
                            <div class="truncate">name@flowbite.com</div>
                        </div>
                        <ul class="px-2 py-2 text-sm">
                            {USER_MENUS?.map((menu) => {
                                return (
                                    <li class="block rounded-md px-4 py-2 text-gray-300 hover:bg-secondary">
                                        {menu.title}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}
