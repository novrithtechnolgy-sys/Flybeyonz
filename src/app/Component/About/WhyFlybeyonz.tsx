import Image from "next/image";
import Container from "../ui/Container";
import { urlFor } from "@/sanity/lib/image";

type Card = {
  _id: string;
  title: string;
  description: string;
  image: any;
};

interface Props {
  cards: Card[];
}

export default function WhyFlybeyonz({
  cards,
}: Props) {
  return (
    <section className="relative py-10 lg:py-20 overflow-hidden">
      {/* Background Section Image */}
      <Image
        src="https://res.cloudinary.com/dvgodnxlg/image/upload/v1782201225/f2ec4b552a93efd921ea1cc4862c0de01b405e0f_u69n30.webp"
        alt=""
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/75" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
          <div>
            <h2 className="font-heading text-white text-[26px] lg:text-[38px] italic">
              Why Travelers
              <br />
              <span className="font-bold">
              Choose Flybeyonz
              </span>
            </h2>
          </div>

          <div className="flex items-center">
            <p className="text-white/90 text-[14px] md:text-[18px] md:leading-9">
              Discover the exceptional service,
              personalized experiences, and attention
              to detail that set Flybeyonz apart.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div
              key={card._id}
              className="group relative overflow-hidden md:aspect-[10/9] border border-white/20"
            >
              {/* Hover Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <Image
                  src={urlFor(card.image)
                    .width(1200)
                    .height(1200)
                    .url()}
                  alt={card.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/60" />
              </div>

              {/* Default Background */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-4 md:p-8">
                <div className="text-white font-heading text-[26px] md:text-[38px] font-bold mb-4">
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </div>

                <div>
                  <h3 className="text-white font-heading text-[18px] md:text-[22px] font-semibold uppercase mb-2 md:mb-4">
                    {card.title}
                  </h3>

                  <p className="text-white/85 font-body text-[14px] md:leading-6">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}