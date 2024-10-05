import { useEffect, useState } from "react";

export default function Loader() {
    const [show, setshow] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setshow(false);
        }, 2 * 1000);
    }, []);
    return (
        <div>
            {show && (
                <section className="flexCenter flex_center fixed inset-0 z-50 bg-black/60">
                    <div className="loader"></div>
                </section>
            )}
        </div>
    );
}
