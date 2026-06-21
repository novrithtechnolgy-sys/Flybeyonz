import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { urlFor } from "@/sanity/lib/image";

type AccommodationCategory = {
  _id: string;
  title: string;
  image: any;
};

interface Props {
  categories: AccommodationCategory[];
}

export default function StayExtraordinary({
  categories,
}: Props) {
  return (
    <section className="bg-white py-20">
      <Container>
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left */}
          <div className="lg:col-span-4">
            <h2 className="font-heading text-4xl lg:text-[38px] font-semibold italic text-gray-900 leading-tight">
              Stay Somewhere
              <br />
              <span className="font-bold">
              Extraordinary
              </span>
            </h2>
          </div>

          {/* Center */}
          <div className="lg:col-span-5">
            <p className="font-body text-[18px] leading-10 text-gray-700">
              Experience exceptional stays at handpicked
              luxury properties across Sri Lanka.
            </p>
          </div>

          {/* Right */}
          <div className="lg:col-span-3 flex lg:justify-end">
            <Button href="/accommodation" variant="primary">
              Discover All
            </Button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((item) => (
            <div
              key={item._id}
              className="relative aspect-[5/9] overflow-hidden group"
            >
              <Image
                src={urlFor(item.image).width(1000).url()}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

              <div className="absolute inset-0 flex items-center justify-center p-6">
                <h3 className="font-heading text-center text-white text-[22px] font-semibold uppercase leading-relaxed">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}