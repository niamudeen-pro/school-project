import React from "react";
import { SCHOOL_NAME } from "../../constants";
import { Link } from "react-router-dom";

export default function DirectorMessage() {
    return (
        <>
            <section className="section">
                <div className="">
                    <div className="space-y-4 bg-primary p-8 sm:p-16">
                        {/* director's image */}
                        <div className="flex_center flex-col gap-4">
                            <div className="h-40 w-40 rounded-full border-4 border-white">
                                <img
                                    src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt=""
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <p className="text-white sm:text-base">
                                Mrs. Marie James ( Principal )
                            </p>
                        </div>
                        <p>
                            Dear Parents , {SCHOOL_NAME} has a well-established
                            set of core values which celebrates diversity,
                            global citizenship, and inclusion that is embodied
                            in the Springdales motto: “Vasudhaiva Kutumbakam” –
                            “The World is a family”. We are a school that lives
                            these values and motto every day and they permeate
                            through everything that we do. We are a school that
                            knows exactly ‘what we stand for’, staff knows it,
                            students know it and parents know it. This places us
                            in a great position to provide exemplary education,
                            leading global citizens to a pathway of success in
                            their preferred career options and life
                            choices........
                        </p>
                        <div className="flex_center">
                            <Link to="/principals-message">
                                <button className="btn">Read more</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
