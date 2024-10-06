import SCHOOL_LOGO_IMAGE from "../assets/images/school-logo.png";
const SCHOOL_NAME = "School of Eminence";

const SCHOOL_LOCATION = "Sahnewal";
const SCHOOL_DISTRICT = "Ludhiana";
const SCHOOL_SUPPORT_NUMBER = "+91 85478569852";
const SCHOOL_SUPPORT_EMAIL = "school@gmail.com";
const SCHOOL_FACILITIES = [
    {
        id: 1,
        title: "Library",
        imageUrl:
            "https://springdalesdubai.com/wp-content/uploads/2024/05/1.png",
    },
    {
        id: 2,
        title: "Canteen",
        imageUrl:
            "https://www.springdalesdubai.com/wp-content/uploads/2020/05/facilities4.jpg",
    },
    {
        id: 3,
        title: "Playground",
        imageUrl:
            "https://www.springdalesdubai.com/wp-content/uploads/2020/05/facilities3.jpg",
    },
    {
        id: 4,
        title: "Chemisty Laboratory",
        imageUrl:
            "https://www.springdalesdubai.com/wp-content/uploads/2020/05/facilities5.jpg",
    },
];

const ROUTES_CONFIG = {
    HOMEPAGE: {
        path: "/",
        title: "Home",
    },
    ABOUT_US: {
        title: "About",
        path: "#about",
    },
    FACILITIES: {
        path: "/facilities",
        title: "Our Facilites",
    },
    DIRECTORS_MESSAGE: {
        path: "/director-message",
        title: "Director's message",
    },
    CONTACT_US: {
        path: "/contact-us",
        title: "Contact Us",
    },
    LOGIN: {
        path: "/login",
        title: "Login",
    },
    DASHBOARD: {
        path: "/dashboard",
        title: "Dashboard",
    },
    FACULTY: {
        path: "/faculty",
        title: "Faculty",
    },
};

export {
    SCHOOL_NAME,
    SCHOOL_LOCATION,
    SCHOOL_DISTRICT,
    SCHOOL_SUPPORT_NUMBER,
    SCHOOL_SUPPORT_EMAIL,
    SCHOOL_LOGO_IMAGE,
    SCHOOL_FACILITIES,
    ROUTES_CONFIG,
};
