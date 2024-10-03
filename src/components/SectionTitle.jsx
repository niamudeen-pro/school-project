import React from 'react';

export default function SectionTitle({ children }) {
    return (
        <div className="flex items-center">
            <hr className="flex-grow border-t border-black" />
            <h2 className="mx-4 text-center text-xl uppercase">{children}</h2>
            <hr className="flex-grow border-t border-black" />
        </div>
    );
}
