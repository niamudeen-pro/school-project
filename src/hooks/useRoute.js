import { useLocation } from "react-router-dom";
import { ALL_ROUTES } from "../routes";

export default function useRoute() {
    const { pathname: currentRoute } = useLocation();

    const activePage =
        ALL_ROUTES.find((route) => route.path === currentRoute)?.title || null;
    return {
        currentRoute,
        activePage,
    };
}
