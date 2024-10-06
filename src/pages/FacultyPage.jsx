import React from "react";
import SectionTitle from "../components/SectionTitle";
import { FaImage } from "react-icons/fa6";
import SeoContent from "../components/shared/SeoContent";

const MANAGEMENT = [
    {
        id: 1,
        name: "Mrs. Marie James",
        position: "Principal",
        imageUrl:
            "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
];

const FACULTY = [
    {
        id: 1,
        name: "John Doe",
        position: "Professor",
        imageUrl: "",
    },
    {
        id: 2,
        name: "Jane Smith",
        position: "Assistant Professor",
        imageUrl: "",
    },
    {
        id: 3,
        name: "Emily Johnson",
        position: "Lecturer",
        imageUrl: "",
    },
    {
        id: 4,
        name: "Michael Brown",
        position: "Associate Professor",
        imageUrl: "",
    },
    {
        id: 5,
        name: "Linda Taylor",
        position: "Professor",
        imageUrl: "",
    },
    {
        id: 6,
        name: "David Wilson",
        position: "Lecturer",
        imageUrl: "",
    },
    {
        id: 7,
        name: "Sarah Lee",
        position: "Assistant Professor",
        imageUrl: "",
    },
    {
        id: 8,
        name: "James White",
        position: "Associate Professor",
        imageUrl: "",
    },
    {
        id: 9,
        name: "Patricia Green",
        position: "Professor",
        imageUrl: "",
    },
    {
        id: 10,
        name: "Robert Harris",
        position: "Lecturer",
        imageUrl: "",
    },
    {
        id: 11,
        name: "Barbara Clark",
        position: "Assistant Professor",
        imageUrl: "",
    },
    {
        id: 12,
        name: "Daniel Lewis",
        position: "Professor",
        imageUrl: "",
    },
    {
        id: 13,
        name: "Susan Martinez",
        position: "Lecturer",
        imageUrl: "",
    },
    {
        id: 14,
        name: "Christopher Moore",
        position: "Assistant Professor",
        imageUrl: "",
    },
    {
        id: 15,
        name: "Nancy Rodriguez",
        position: "Associate Professor",
        imageUrl: "",
    },
    {
        id: 16,
        name: "Thomas King",
        position: "Professor",
        imageUrl: "",
    },
    {
        id: 17,
        name: "Karen Walker",
        position: "Lecturer",
        imageUrl: "",
    },
    {
        id: 18,
        name: "Matthew Scott",
        position: "Assistant Professor",
        imageUrl: "",
    },
    {
        id: 19,
        name: "Laura Hall",
        position: "Professor",
        imageUrl: "",
    },
    {
        id: 20,
        name: "Paul Young",
        position: "Associate Professor",
        imageUrl: "",
    },
];

export default function FacultyPage() {
    return (
        <>
            <SeoContent title="School Faculty" />
            <section className="bg-gray-100">
                <div className="custom_container py-8">
                    <SectionTitle>MANAGEMENT</SectionTitle>
                    <div className="mx-auto grid grid-cols-1 gap-8 py-14 md:grid-cols-2 lg:grid-cols-3">
                        {MANAGEMENT?.length > 0 &&
                            MANAGEMENT.map((user, index) => (
                                <div
                                    key={user.id}
                                    className="flex_center flex-col space-y-3"
                                >
                                    <div className="h-[300px] w-[300px]">
                                        <img
                                            src={user.imageUrl}
                                            alt=""
                                            className="cursor-pointer object-cover"
                                        />
                                    </div>
                                    <h2 className="text-center text-xl font-medium">
                                        {user.name}
                                    </h2>
                                    <p className="text-black">
                                        {user.position}
                                    </p>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
            <div className="custom_container scrollable_section py-16">
                <SectionTitle>FACULTY</SectionTitle>

                <div className="mx-auto grid grid-cols-1 gap-8 py-14 md:grid-cols-2 lg:grid-cols-3">
                    {FACULTY?.length > 0 &&
                        FACULTY.map((user, index) => (
                            <div
                                key={user.id}
                                className="flex_center flex-col space-y-3"
                            >
                                {user.imageUrl ? (
                                    <div className="h-[300px] w-[300px] p-14">
                                        <img
                                            src={user.imageUrl}
                                            alt=""
                                            className="cursor-pointer object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className="flex_center h-[200px] w-[200px] bg-gray-200">
                                        <FaImage
                                            size={32}
                                            className="text-white"
                                        />
                                    </div>
                                )}

                                <p className="text-xl font-medium text-black">
                                    {user.name}
                                </p>
                                <p className="text-black">{user.position}</p>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}
