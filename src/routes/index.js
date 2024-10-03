import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import FacilitiesPage from "../pages/FacilitiesPage";
import PrincipalMessagePage from "../pages/PrincipalMessagePage";
import ContactUsPage from "../pages/ContactUsPage";

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
        title: "Facilites",
    },
    DIRECTORS_MESSAGE: {
        path: "/principals-message",
        title: "Director's message",
    },
    CONTACT_US: {
        path: "/contact-us",
        title: "Contact Us",
    },
};

const ALL_ROUTES = [
    {
        id: 1,
        title: ROUTES_CONFIG.HOMEPAGE.title,
        path: ROUTES_CONFIG.HOMEPAGE.path,
        element: <HomePage />,
    },
    {
        id: 2,
        title: ROUTES_CONFIG.ABOUT_US.title,
        path: ROUTES_CONFIG.ABOUT_US.path,
        childrens: [
            {
                id: 1,
                title: ROUTES_CONFIG.DIRECTORS_MESSAGE.title,
                path: ROUTES_CONFIG.DIRECTORS_MESSAGE.path,
            },
            {
                id: 2,
                title: ROUTES_CONFIG.FACILITIES.title,
                path: ROUTES_CONFIG.FACILITIES.path,
            },
        ],
    },
    {
        id: 3,
        title: ROUTES_CONFIG.CONTACT_US.title,
        path: ROUTES_CONFIG.CONTACT_US.path,
        element: <ContactUsPage />,
    },
    {
        id: 4,
        title: ROUTES_CONFIG.FACILITIES.title,
        path: ROUTES_CONFIG.FACILITIES.path,
        element: <FacilitiesPage />,
        excludeNav: true,
    },
    {
        id: 5,
        title: ROUTES_CONFIG.DIRECTORS_MESSAGE.title,
        path: ROUTES_CONFIG.DIRECTORS_MESSAGE.path,
        element: <PrincipalMessagePage />,
        excludeNav: true,
    },
];

const PUBLIC_ROUTES =
    (ALL_ROUTES?.length > 0 &&
        ALL_ROUTES.filter((menu) => !menu.isPrivate && !menu.ishidden)) ||
    [];
const PRIVATE_ROUTES =
    (ALL_ROUTES?.length > 0 &&
        ALL_ROUTES.filter((route) => route.isPrivate && !route.ishidden)) ||
    [];

const _router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [...PUBLIC_ROUTES, ...PRIVATE_ROUTES],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

export { _router, PUBLIC_ROUTES, PRIVATE_ROUTES, ALL_ROUTES };
