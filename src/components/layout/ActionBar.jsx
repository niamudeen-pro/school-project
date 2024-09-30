import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function ActionBar() {
    return (
        <div className="bg-secondary text-xs text-white p-4 flex items-center">
            <div className="custom_container">
                <div className="flex gap-4">
                    <span className="flex items-center gap-2">
                        <FaPhone /> 6280168572
                    </span>
                    <span className="flex items-center gap-2">
                        <MdEmail /> niamudeen6280@gmail.com
                    </span>
                </div>
                <div></div>
            </div>
        </div>
    );
}
