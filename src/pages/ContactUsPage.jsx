import SeoContent from "../components/shared/SeoContent";
import { SCHOOL_SUPPORT_EMAIL, SCHOOL_SUPPORT_NUMBER } from "../constants";
import SchoolMapLocation from "./sections/SchoolMapLocation";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactUsPage() {
    const constactInfo = [
        {
            id: 1,
            icon: <FaPhone className="text-white" size={22} />,
            title: "contact number",
            description: SCHOOL_SUPPORT_NUMBER,
        },
        {
            id: 2,
            icon: <MdEmail className="text-white" size={24} />,
            title: "email address",
            description: SCHOOL_SUPPORT_EMAIL,
        },
    ];
    return (
        <>
            <SeoContent title="Contact Us" />
            <section>
                <div className="section">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                        {constactInfo.map((info) => (
                            <div
                                key={info.id}
                                className="flex gap-4 rounded-md bg-primary p-6"
                            >
                                {info.icon}
                                <div className="flex flex-col gap-2 whitespace-nowrap text-black">
                                    <span className="capitalize text-white">
                                        {info.title}
                                    </span>
                                    <p>{info.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <SchoolMapLocation />
            </section>
        </>
    );
}
