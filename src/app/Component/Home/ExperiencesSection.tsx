"use client";
import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { urlFor } from "@/sanity/lib/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { useState, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-white py-10 md:py-20">
      <Container>
        {/* Title */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-heading text-[26px] lg:text-[38px] font-semibold italic text-gray-800">
            For Travelers Who
          <br/>
          <span className="font-bold">
            Who Seek Extraordinary
          </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {experiences.map((item) => (
            <div
              key={item._id}
              className="relative aspect-[7/8] overflow-hidden group"
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

                <p className="font-body text-[14px] leading-8 text-white/90">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
         {/* Mobile Slider */}
          <div className="md:hidden">
            <Swiper
              modules={[Pagination]}
                onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
              }}
              spaceBetween={16}
              slidesPerView={1}
              className="experience-slider"
            >
              {experiences.map((item) => (
                <SwiperSlide key={item._id}>
                  <div className="relative h-[360px] overflow-hidden">
                    <Image
                      src={urlFor(item.image).width(1200).url()}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-heading text-[18px] font-semibold uppercase mb-2">
                        {item.title}
                      </h3>

                      <p className="font-body text-[14px] leading-6 text-white/90">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="md:hidden flex justify-center gap-2 mt-8">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {}}
                  className={`h-2 w-2 rounded-full transition-all ${
                    activeIndex === index
                      ? "bg-[#08295D]"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        {/* Button */}
        <div className="flex justify-center mt-8 md:mt-16">
          <Button href="/experiences" variant="primary">
            Explore More
          </Button>
        </div>
      </Container>
    </section>
  );
}