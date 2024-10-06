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
            {
                id: 3,
                title: ROUTES_CONFIG.FACULTY.title,
                path: ROUTES_CONFIG.FACULTY.path,
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
        element: <DirectorMessagePage />,
        excludeNav: true,
    },
    {
        id: 6,
        title: ROUTES_CONFIG.LOGIN.title,
        path: ROUTES_CONFIG.LOGIN.path,
        element: <LoginPage />,
        excludeNav: true,
    },
    {
        id: 7,
        title: ROUTES_CONFIG.DASHBOARD.title,
        path: ROUTES_CONFIG.DASHBOARD.path,
        element: <DashboardPage />,
        isPrivate: true,
    },
    {
        id: 8,
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
