import Image from "next/image";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { urlFor } from "@/sanity/lib/image";

type Experience = {
  _id: string;
  title: string;
  description: string;
  image: any;
};

interface Props {
  experiences: Experience[];
}

export default function ExperiencesSection({
  experiences,
}: Props) {
  return (
    <section className="bg-[#f5f5f5] py-20">
      <Container>
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-[38px] font-semibold italic text-gray-800">
            For Travelers Who
          </h2>

          <h2 className="font-heading text-4xl lg:text-[38px] font-bold italic mt-2 text-gray-800">
            Who Seek Extraordinary
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {experiences.map((item) => (
            <div
              key={item._id}
              className="relative h-[430px] overflow-hidden group"
            >
              <Image
                src={urlFor(item.image).width(1200).url()}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="font-heading text-[22px] font-semibold uppercase mb-4">
                  {item.title}
                </h3>

                <p className="font-body text-[18px] leading-8 text-white/90">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-14">
          <Button href="/experiences" variant="primary">
            Explore More
          </Button>
        </div>
      </Container>
    </section>
  );
}