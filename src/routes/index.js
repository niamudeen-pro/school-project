import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import FacilitiesPage from "../pages/FacilitiesPage";
import ContactUsPage from "../pages/ContactUsPage";
import DirectorMessagePage from "../pages/DirectorMessagePage";
import { ROUTES_CONFIG } from "../constants";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import PublicLayout from "../components/layout/PublicLayout";
import AdminLayout from "../components/layout/AdminLayout";
import FacultyPage from "../pages/FacultyPage";

const ALL_ROUTES = [
    {
        title: ROUTES_CONFIG.HOMEPAGE.title,
        path: ROUTES_CONFIG.HOMEPAGE.path,
        element: <HomePage />,
    },
    {
        title: ROUTES_CONFIG.ABOUT_US.title,
        path: ROUTES_CONFIG.ABOUT_US.path,
        childrens: [
            {
                title: ROUTES_CONFIG.DIRECTORS_MESSAGE.title,
                path: ROUTES_CONFIG.DIRECTORS_MESSAGE.path,
            },
            {
                title: ROUTES_CONFIG.FACILITIES.title,
                path: ROUTES_CONFIG.FACILITIES.path,
            },
        ],
    },
    {
        title: ROUTES_CONFIG.ACADEMICS.title,
        path: ROUTES_CONFIG.ACADEMICS.path,
        childrens: [
            {
                title: ROUTES_CONFIG.FACULTY.title,
                path: ROUTES_CONFIG.FACULTY.path,
            },
        ],
    },
    {
        title: ROUTES_CONFIG.CONTACT_US.title,
        path: ROUTES_CONFIG.CONTACT_US.path,
        element: <ContactUsPage />,
    },
    {
        title: ROUTES_CONFIG.FACILITIES.title,
        path: ROUTES_CONFIG.FACILITIES.path,
        element: <FacilitiesPage />,
        excludeNav: true,
    },
    {
        title: ROUTES_CONFIG.DIRECTORS_MESSAGE.title,
        path: ROUTES_CONFIG.DIRECTORS_MESSAGE.path,
        element: <DirectorMessagePage />,
        excludeNav: true,
    },
    {
        title: ROUTES_CONFIG.LOGIN.title,
        path: ROUTES_CONFIG.LOGIN.path,
        element: <LoginPage />,
        excludeNav: true,
    },
    {
        title: ROUTES_CONFIG.DASHBOARD.title,
        path: ROUTES_CONFIG.DASHBOARD.path,
        element: <DashboardPage />,
        isPrivate: true,
    },
    {
        title: ROUTES_CONFIG.FACULTY.title,
        path: ROUTES_CONFIG.FACULTY.path,
        element: <FacultyPage />,
        excludeNav: true,
    },
];

const PUBLIC_ROUTES =
    (
        ALL_ROUTES?.length > 0 &&
        ALL_ROUTES.filter((menu) => !menu.isPrivate && !menu.ishidden)
    ).map((menu) => {
        return {
            ...menu,
            element: <PublicLayout>{menu.element}</PublicLayout>,
        };
    }) || [];

const PRIVATE_ROUTES =
    (
        ALL_ROUTES?.length > 0 &&
        ALL_ROUTES.filter((route) => route.isPrivate && !route.ishidden)
    ).map((menu) => {
        return {
            ...menu,
            element: <AdminLayout>{menu.element}</AdminLayout>,
        };
    }) || [];

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
