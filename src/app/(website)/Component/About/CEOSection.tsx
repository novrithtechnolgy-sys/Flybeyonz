import Image from "next/image";
import Container from "../ui/Container";

export default function CEOSection() {
  return (
    <section className="bg-white py-10 lg:py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* CEO Image */}
          <div className="relative h-[340px] md:h-[560px] overflow-hidden order-last lg:order-first">
            <Image
              src="https://res.cloudinary.com/dvgodnxlg/image/upload/v1782205399/78a4bb88bf95f6edea49267247ed4d90ff366f45_1_phj1i8.jpg"
              alt="CEO"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-first lg:order-last">
            <h2 className="font-heading text-[26px] lg:text-[38px] italic leading-tight text-black text-center lg:text-left">
              A Message
              <br />
              <span className="font-bold">
                From Our CEO
              </span>
            </h2>

            <div className="mt-4 md:mt-8 space-y-4 text-center lg:text-left">
              <p className="font-body text-[14px] md:text-[18px] text-gray-700 font-light">
                "Flybeyonz was founded with a passion for sharing the beauty,
                culture, and hospitality of Sri Lanka with travelers from
                around the world.
              </p>

              <p className="font-body text-[14px] md:text-[18px] text-gray-700 font-light">
                Our mission is simple: to create meaningful journeys that
                combine luxury, authenticity, and unforgettable experiences.
                Every traveler is unique, and we take pride in designing
                personalized adventures that reflect their dreams and
                expectations.
              </p>

              <p className="font-body text-[14px] md:text-[18px] text-gray-700 font-light">
                Thank you for considering Flybeyonz as your travel partner. We
                look forward to welcoming you to Sri Lanka and creating memories
                that will last a lifetime."
              </p>
            </div>

            <div className="mt-8 hidden lg:block">
              <h3 className="text-[22px] font-semibold text-black font-body">
                Ms. Samitha Perera
              </h3>

              <p className="mt-2 text-[18px] text-gray-600 font-body font-light">
                Founder & Chief Executive Officer
              </p>

              <p className="mt-1 text-[18px] text-gray-600 font-body font-light">
                Flybeyonz Travels & Tours
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}