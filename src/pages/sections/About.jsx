export default function AboutUsSection() {
    return (
        <section>
            <div className="custom_container my-24">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="space-y-6 bg-primary p-16 text-white">
                        <p className="uppercase">ABOUT THE SCHOOL</p>
                        <h2 className="text-4xl">Since 2013</h2>
                        <p className="font-normal">
                            More than 68 years on, Springdales continues to lead
                            from the front. It opened its first overseas school
                            in Dubai in 2013 on a magnificent purpose-designed
                            campus offering education from Pre-K to G12. The
                            campus, based in Al Quoz 4, next to Jumeira
                            University, has three classroom complexes, for KG,
                            Primary and Secondary (Middle and High) Schools.{' '}
                            <br />
                            <br />
                            It also has flood-lit Track and Field facilities for
                            Athletics, an Olympic indoor pool, bus parking and
                            sheltered outdoor play areas. It also boasts
                            dedicated science laboratories, campus-wide wifi,
                            library / resource centre and indoor courts of
                            racquet sports and basketball, a martial arts dojo
                            and dance studios to include but a few of the
                            world-class facilities that are available to the
                            students and wider community.
                        </p>
                        <button className="btn">Read more</button>
                    </div>
                    <div>
                        <img
                            src="https://images.pexels.com/photos/15453757/pexels-photo-15453757/free-photo-of-student-sitting-on-the-floor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
