import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            smooth: true, // Enable smooth scrolling
            lerp: 0.08, // Adjust the scroll speed (higher is slower)
            gestureOrientation: "vertical", // Enable vertical scrolling
        });

        // Animation frame loop for Lenis
        const scrollFn = (time) => {
            lenis.raf(time);
            requestAnimationFrame(scrollFn);
        };

        requestAnimationFrame(scrollFn);

        // Cleanup on component unmount
        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
