import SCHOOL_LOGO_IMAGE from "../../assets/images/school-logo.png";

export default function SchoolLogo() {
    return (
        <div className="h-10 w-10 rounded-full bg-white p-1 sm:h-16 sm:w-16 sm:p-0">
            <img
                src={SCHOOL_LOGO_IMAGE}
                alt="Brand Logo"
                className="object-contain"
            />
        </div>
    );
}
