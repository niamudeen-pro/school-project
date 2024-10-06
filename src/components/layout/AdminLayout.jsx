import UserMenu from "../global/UserMenu";
import Sidebar from "./Sidebar";

export default function AdminLayout({ children }) {
    return (
        <section className="flex min-h-screen text-white">
            <Sidebar />
            <main className="flex-1 text-black">
                <div className="flex justify-end px-4 py-2">
                    <UserMenu />
                </div>
                <div className="max-h-[90vh] overflow-y-auto p-4">
                    {children}
                </div>
            </main>
        </section>
    );
}
