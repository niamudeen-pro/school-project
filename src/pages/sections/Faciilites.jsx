import React from 'react';
import { SCHOOL_FACILITIES } from '../../constants';

export default function FaciilitesSection() {
    return (
        <section className="section">
            <div className="flex items-center">
                <hr className="flex-grow border-t border-black" />
                <h2 className="uppercase text-center text-xl mx-4">
                    School Facilities
                </h2>
                <hr className="flex-grow border-t border-black" />
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-14 mx-auto">
                {SCHOOL_FACILITIES?.length > 0 &&
                    SCHOOL_FACILITIES.map((facility, index) => (
                        <div key={facility.id} className="space-y-4">
                            <div>
                                <img
                                    src={facility.imageUrl}
                                    alt=""
                                    className="hover:scale-105 transition cursor-pointer"
                                />
                            </div>
                            <h2 className="text-center">{facility.title}</h2>
                        </div>
                    ))}
            </div>
        </section>
    );
}
