import SCHOOL_LOGO_IMAGE from '../../assets/images/school-logo.png';

export default function SchoolLogo() {
    return (
        <div className="bg-white rounded-full h-20 w-20 p-2">
            <img
                src={SCHOOL_LOGO_IMAGE}
                alt="Brand Logo"
                className="object-contain"
            />
        </div>
    );
}
