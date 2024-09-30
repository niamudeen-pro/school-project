import { SCHOOL_DISTRICT, SCHOOL_LOCATION, SCHOOL_NAME } from '../../constants';
import SchoolLogo from '../shared/SchoolLogo';

export default function Footer() {
    return (
        <section className="bg-primary text-white space-y-4 mt-10  text-center  py-14">
            <div className="flex_center flex-col space-y-8 py-10 px-4">
                <SchoolLogo />
                <p className="max-w-4xl text-sm">
                    {`${SCHOOL_NAME} is an established private school located in
                    ${SCHOOL_LOCATION}, ${SCHOOL_DISTRICT}. It is recognized and approved by the MOE,
                    Government of UAE and is affiliated to the Central Board of
                    Secondary Education, India.`}
                </p>
            </div>
            <div className="flex_center flex-col space-y-4 px-4 py-4">
                <p>© Copyright Protected 2024 - {SCHOOL_NAME}</p>
            </div>
        </section>
    );
}
