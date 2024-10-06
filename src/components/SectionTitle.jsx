import React from "react";
import { cn } from "../utils/helper";

export default function SectionTitle({ children, isLight }) {
    return (
        <div className="flex items-center">
            <hr
                className={cn("flex-grow border-t border-white", {
                    "border-black": !isLight,
                })}
            />
            <h2 className="mx-4 text-center text-xl uppercase">{children}</h2>
            <hr
                className={cn("flex-grow border-t border-white", {
                    "border-black": !isLight,
                })}
            />
        </div>
    );
}
