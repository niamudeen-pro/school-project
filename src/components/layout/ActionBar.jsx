import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SCHOOL_SUPPORT_EMAIL, SCHOOL_SUPPORT_NUMBER } from '../../constants';
import { HiBars3BottomRight } from 'react-icons/hi2';

export default function ActionBar({ isNavOpen, toggle }) {
    return (
        <>
            <div className="flex w-full items-center justify-between bg-secondary p-4 text-xs text-white sm:justify-start">
                <div className="custom_container flex_between w-full !px-0">
                    <div className="flex gap-4">
                        <span className="flex cursor-pointer items-center gap-2">
                            <FaPhone /> {SCHOOL_SUPPORT_NUMBER}
                        </span>
                        <span className="flex cursor-pointer items-center gap-2">
                            <MdEmail /> {SCHOOL_SUPPORT_EMAIL}
                        </span>
                    </div>
                    {!isNavOpen && (
                        <HiBars3BottomRight
                            className="z-50 block cursor-pointer text-white sm:hidden"
                            onClick={toggle}
                            size={24}
                        />
                    )}
                </div>
            </div>
        </>
    );
}
