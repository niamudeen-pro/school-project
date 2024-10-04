import { FaArrowUpLong } from "react-icons/fa6";
import useScroll from "../hooks/useScroll";

export default function TopButton() {
    const { scrollY } = useScroll();
    return (
        <>
            {scrollY > 400 && (
                <div className="fixed bottom-4 right-8">
                    <button className="rounded-full bg-secondary p-4 shadow-lg">
                        <FaArrowUpLong
                            size={16}
                            className="cursor-pointer text-secondary"
                            fill="white"
                            onClick={() =>
                                window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                        />
                    </button>
                </div>
            )}
        </>
    );
}
