"use client";

import Image from "next/image";
import Container from "../ui/Container";
import { urlFor } from "@/sanity/lib/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

type Destination = {
  _id: string;
  title: string;
  description: string;
  image: any;
};

interface Props {
  destinations: Destination[];
}

export default function DestinationSection({
  destinations,
}: Props) {
  return (
    <section className="bg-white py-10 md:py-20">
      <Container>
        {/* Title */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-heading text-[28px] lg:text-[38px] font-semibold italic text-gray-800">
            Explore Sri Lanka's
          </h2>

          <h2 className="font-heading text-[28px] lg:text-[38px] font-bold italic mt-2 text-gray-800">
            Most Extraordinary Places
          </h2>
        </div>
      </Container>

      <div className="relative">
        {/* Prev */}
        <button className="hidden destination-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-black/20 backdrop-blur-sm text-white">
          <ChevronLeft size={24} />
        </button>

        {/* Next */}
        <button className="hidden destination-next absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-black/20 backdrop-blur-sm text-white">
          <ChevronRight size={24} />
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".destination-prev",
            nextEl: ".destination-next",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="destination-swiper"
        >
          {destinations.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="relative aspect-[3/3] group overflow-hidden">
                <Image
                  src={urlFor(item.image).width(1600).url()}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="font-heading text-[22px] uppercase font-semibold mb-4">
                    {item.title}
                  </h3>

                  <p className="font-body text-[14px] text-white/90 max-w-md">
                    {item.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}