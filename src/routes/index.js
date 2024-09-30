import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';

const ALL_ROUTES = [
    {
        id: 1,
        title: 'Home',
        path: '/',
        element: <HomePage />,
    },
    {
        id: 2,
        title: 'About',
        path: '#about',
        childrens: [
            {
                id: 1,
                title: 'Message from principle',
                path: '#about-us',
            },
            {
                id: 2,
                title: 'Vision Mission Motto',
                path: '#about-us',
            },
            {
                id: 3,
                title: 'Our facilities',
                path: '#about-us',
            },
        ],
    },
    {
        id: 3,
        title: 'Contact Us',
        path: '#contact',
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
        path: '*',
        element: <NotFoundPage />,
    },
]);

export { _router, PUBLIC_ROUTES, PRIVATE_ROUTES, ALL_ROUTES };
