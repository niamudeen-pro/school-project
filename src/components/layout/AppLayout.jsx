import { Navigate, Outlet } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "../../routes";
import useRoute from "../../hooks/useRoute";

export default function AppLayout() {
    const privateRoutes = PRIVATE_ROUTES.map((menu) => menu.path);

    const publicRoutes = PUBLIC_ROUTES.map((menu) => menu.path);

    const { isLoggedIn } = false;
    const { currentRoute } = useRoute();

    if (!isLoggedIn && privateRoutes.includes(currentRoute))
        return <Navigate to="/" />;

    if (isLoggedIn && publicRoutes.includes(currentRoute))
        return <Navigate to="/products" />;

    return <Outlet />;
}
