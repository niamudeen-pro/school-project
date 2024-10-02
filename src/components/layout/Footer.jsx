import { SCHOOL_DISTRICT, SCHOOL_LOCATION, SCHOOL_NAME } from '../../constants';
import SchoolLogo from '../shared/SchoolLogo';

export default function Footer() {
    return (
        <section className="space-y-4 bg-primary py-14 text-center text-white">
            <div className="flex_center flex-col space-y-8 px-4 py-10">
                <SchoolLogo />
                <p className="max-w-6xl">
                    {`${SCHOOL_NAME} is an established  school located in
                    ${SCHOOL_LOCATION}, ${SCHOOL_DISTRICT} is affiliated to the PSEB, India.`}
                </p>
            </div>
            <div className="flex_center footer_copyright px-4 py-10">
                <p>
                    <span className="text-white">
                        © Copyright Protected 2024
                    </span>
                    - {SCHOOL_NAME}
                </p>
            </div>
        </section>
    );
}
