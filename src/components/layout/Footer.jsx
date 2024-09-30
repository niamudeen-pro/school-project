export default function Footer() {
    return (
        <section className="bg-primary py-14 px-14 text-white space-y-4 mt-10  text-center">
            <div className="flex_center flex-col space-y-4 py-10 px-4">
                <img
                    src="https://www.springdalesdubai.com/wp-content/uploads/2020/07/footer.png"
                    alt="Brand Logo"
                    className="w-24"
                />
                <p className="max-w-4xl text-sm">
                    Government Senior Secondary Smart School - Boys is an
                    established private school located in Dubai, recognized and
                    approved by the MOE, Government of UAE and is affiliated to
                    the Central Board of Secondary Education, India.
                </p>
            </div>
            <div className="flex_center flex-col space-y-4 px-4 py-4">
                <h2 className="font-semibold text-xl">
                    Quintessentially Indian, Innovatively International
                </h2>
                <p className="text-xs">
                    © Copyright Protected 2023 - Government Senior Secondary
                    Smart School - Boys
                </p>
            </div>
        </section>
    );
}
