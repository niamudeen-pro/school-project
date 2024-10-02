import React from 'react';
import { SCHOOL_NAME } from '../constants';

export default function PrincipalMessagePage() {
    return (
        <section>
            <div className="custom_container py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div>
                        <img
                            src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            className="object-cover"
                        />
                    </div>
                    <div className="bg-primary p-16">
                        <p>
                            Dear Parents,
                            <br /> <br />
                            {SCHOOL_NAME} has a well-established set of core
                            values which celebrates diversity, global
                            citizenship, and inclusion that is embodied in the
                            Springdales motto: “Vasudhaiva Kutumbakam” – “The
                            World is a family”. We are a school that lives these
                            values and motto every day and they permeate through
                            everything that we do. We are a school that knows
                            exactly ‘what we stand for’, staff knows it,
                            students know it and parents know it. This places us
                            in a great position to provide exemplary education,
                            leading global citizens to a pathway of success in
                            their preferred career options and life choices.
                            <br /> <br />
                            {SCHOOL_NAME} has always placed the student’s
                            individual development at the centre of its
                            educational focus, encouraging active, engaged
                            participation. Questioning is encouraged, and
                            student-led inquiry is prioritised, enabling
                            students to follow their interests while exploring
                            and constructing their own meaning of the world
                            around them.
                            <br /> <br />
                            {SCHOOL_NAME} we proudly prioritise a safe and
                            nurturing environment for our students. In order to
                            learn, we all must feel safe to make mistakes, one
                            doesn’t learn anything by always making the right
                            choices - mistakes are an important step in
                            learning.
                            <br /> <br />
                            Mr. Marie James <br />
                            Principal
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
