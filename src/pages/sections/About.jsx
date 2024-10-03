import { SCHOOL_NAME } from '../../constants';

export default function AboutUsSection() {
    return (
        <section className="section">
            <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2">
                <div className="space-y-4 bg-primary p-8 text-white lg:p-16">
                    <p className="uppercase">ABOUT THE SCHOOL</p>
                    <h2 className="text-4xl">Since 2013</h2>
                    <p className="font-normal">
                        More than 68 years on, {SCHOOL_NAME} continues to lead
                        from the front. It opened its first overseas school in
                        Dubai in 2013 on a magnificent purpose-designed campus
                        offering education from Pre-K to G12. The campus, based
                        in Al Quoz 4, next to Jumeira University, has three
                        classroom complexes, for KG, Primary and Secondary
                        (Middle and High) Schools. <br />
                        <br />
                        The Public School idea is one of the most original
                        contribution by England towards quality education.
                        Dating back to 14th century, English Public Schools have
                        occupie very prominent place in the field of secondary
                        education. Indian Public Schools have been modelled
                        after the English Public Schools.
                    </p>
                </div>
                <div className="hidden h-[600px] md:block">
                    <img
                        src="https://images.pexels.com/photos/15453757/pexels-photo-15453757/free-photo-of-student-sitting-on-the-floor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
