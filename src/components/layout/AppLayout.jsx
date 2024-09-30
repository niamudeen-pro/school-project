import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './Footer';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '../../routes';

export default function AppLayout() {
    const privateRoutes = PRIVATE_ROUTES.map((menu) => menu.path);

    const publicRoutes = PUBLIC_ROUTES.map((menu) => menu.path);

    const { isLoggedIn } = false;
    const currentRoute = useLocation().pathname;

    if (!isLoggedIn && privateRoutes.includes(currentRoute))
        return <Navigate to="/" />;

    if (isLoggedIn && publicRoutes.includes(currentRoute))
        return <Navigate to="/products" />;

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
