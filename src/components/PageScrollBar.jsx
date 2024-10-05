import { useEffect, useState } from "react";

export default function PageScrollProgressBar() {
    const [scrollY, setScrollY] = useState(0);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const currentScrollY = window.scrollY;
            const newScrollPercentage = Math.round(
                (currentScrollY / totalHeight) * 100,
            );

            setScrollY(currentScrollY);
            setScrollPercentage(newScrollPercentage);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div
                className="z-50 h-1 bg-gray-100/20"
                style={{ width: `${scrollPercentage}%` }}
            ></div>
        </>
    );
}
