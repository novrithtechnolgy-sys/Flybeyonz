import Link from "next/link";
import Image from "next/image";

import Container from "../ui/Container";
import Button from "../ui/Button";

import { urlFor } from "@/sanity/lib/image";

interface Props {
  category: {
    title: string;
    description: string;
  };

  tours: any[];
}

export default function TourGrid({
  category,
  tours,
}: Props) {
  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Heading */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h2 className="font-heading text-[38px] italic font-semibold text-gray-900">
            {/* {category.title} */}
            {category.title.includes(" ") ? (
                <>
                {category.title.slice(0, category.title.indexOf(' '))}
                <br />
                <span className="font-bold">
                {category.title.slice(category.title.indexOf(' '))}
                </span>
                </>
                ) : (
                category.title
                )}
          </h2>

          <p className="mt-8 font-body text-[18px] leading-relaxed font-light text-gray-600">
            {category.description}
          </p>
        </div>

        {/* Tours */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[16px]">
          {tours.map((tour) => (
            <div
              key={tour._id}
              className="relative aspect-[5/7] overflow-hidden group"
            >
              <Image
                src={urlFor(
                  tour.featuredImage
                ).url()}
                alt={tour.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Duration */}
              <div className="absolute top-5 left-0 bg-[#7088B8] px-4 py-2 text-white text-sm italic">
                {tour.duration}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="font-heading text-2xl uppercase mb-4">
                  {tour.title}
                </h3>
                
                <div className="overflow-hidden max-h-0 opacity-0 transition-all duration-800 group-hover:max-h-40 group-hover:opacity-100">
                <p className="text-white/90 mb-6 font-light font-body text-[14px] leading-6">
                  {tour.shortDescription}
                </p>
               </div>
                <Button
                  href={`/tours/${tour.categorySlug}/${tour.slug}`}
                  variant="outline"
                  size="sm"
                >
                  View Details
                </Button>
                 

              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}