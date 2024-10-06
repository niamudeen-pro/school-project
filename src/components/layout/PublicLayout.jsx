import Navbar from "./navbar";
import Footer from "./Footer";
import Loader from "../Loader";
import TopButton from "../TopButton";

export default function PublicLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
            <Loader />
            <TopButton />
        </>
    );
}
