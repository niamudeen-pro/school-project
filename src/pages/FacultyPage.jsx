import SectionTitle from "../components/SectionTitle";
import SeoContent from "../components/shared/SeoContent";
import { SCHOOL_LOCATION, SCHOOL_NAME } from "../constants";

const FACULTY = [
    {
        id: 1,
        name: "Mrs. Marie James",
        position: "Principal",
        imageUrl: "",
    },
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
];

export default function FacultyPage() {
    return (
        <>
            <SeoContent title="School Faculty" />

            <div className="custom_container scrollable_section space-y-4 py-16">
                <SectionTitle>
                    {SCHOOL_NAME}, {SCHOOL_LOCATION} FACULTY
                </SectionTitle>

                <div className="space-y-10 rounded-md py-14">
                    {FACULTY?.length > 0 &&
                        FACULTY.map((user, index) => (
                            <article
                                key={user.id}
                                className="grid grid-cols-1 gap-4 transition hover:bg-gray-50 md:grid-cols-2"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex_center h-28 w-28 rounded-full bg-gray-200">
                                        {/* <FaImage
                                            size={32}
                                            className="text-white"
                                        /> */}
                                        <img
                                            src="https://img.freepik.com/free-photo/3d-illustration-business-man-with-glasses-grey-background-clipping-path_1142-58140.jpg?size=626&ext=jpg&ga=GA1.1.66811697.1726320344&semt=ais_hybrid"
                                            alt="faculty"
                                            className="rounded-full object-cover"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <p className="text-xl font-medium text-black">
                                            {user.name}
                                        </p>
                                        <p className="text-black">
                                            {user.position}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center space-y-1">
                                    <p className="text-xl font-medium text-black">
                                        Areas of expertise
                                    </p>
                                    <p className="text-black">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Ipsa distinctio
                                        exercitationem iusto iure ab possimus in
                                        illo odit maiores quae
                                    </p>
                                </div>
                            </article>
                        ))}
                </div>
            </div>
        </>
    );
}
