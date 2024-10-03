import React from 'react';
import { SCHOOL_NAME } from '../constants';
import SectionTitle from '../components/SectionTitle';

export default function PrincipalMessagePage() {
    return (
        <section className="custom_container py-24">
            <div className="space-y-6 p-8 sm:p-16">
                <SectionTitle>Director Message</SectionTitle>
                <p className="text-black">
                    Dear Parents , {SCHOOL_NAME} has a well-established set of
                    core values which celebrates diversity, global citizenship,
                    and inclusion that is embodied in the Springdales motto:
                    “Vasudhaiva Kutumbakam” – “The World is a family”. We are a
                    school that lives these values and motto every day and they
                    permeate through everything that we do. We are a school that
                    knows exactly ‘what we stand for’, staff knows it, students
                    know it and parents know it. This places us in a great
                    position to provide exemplary education, leading global
                    citizens to a pathway of success in their preferred career
                    options and life choices.
                    <br /> <br />
                    {SCHOOL_NAME} has always placed the student’s individual
                    development at the centre of its educational focus,
                    encouraging active, engaged participation. Questioning is
                    encouraged, and student-led inquiry is prioritised, enabling
                    students to follow their interests while exploring and
                    constructing their own meaning of the world around them.
                    <br /> <br />
                    {SCHOOL_NAME} we proudly prioritise a safe and nurturing
                    environment for our students. In order to learn, we all must
                    feel safe to make mistakes, one doesn’t learn anything by
                    always making the right choices - mistakes are an important
                    step in learning.
                </p>
                <p className="text-center text-black sm:text-base">
                    Mrs. Marie James <br />
                    (Director)
                </p>
            </div>
        </section>
    );
}
