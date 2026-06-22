"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

import { useState, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import "swiper/css";
import Container from "../ui/Container";

type Testimonial = {
  _id: string;
  name: string;
  country: string;
  review: string;
  rating: number;
  photo: any;
};

interface Props {
  testimonials: Testimonial[];
}

export default function Testimonials({
  testimonials,
}: Props) {

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);  

  return (
    <section className="bg-white py-10 md:py-20">
      <Container>
        {/* Title */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-heading text-[28px] lg:text-[38px] italic text-gray-800">
            Trusted by
          </h2>

          <h2 className="font-heading text-[28px] lg:text-[38px] font-bold italic mt-2 text-gray-800">
            Travelers Worldwide
          </h2>
        </div>

        <div className="relative">
          {/* Prev */}
          <button className="hidden testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-gray-500 text-white">
            <ChevronLeft />
          </button>

          {/* Next */}
          <button className="hidden testimonial-next absolute right-0 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-gray-500 text-white">
            <ChevronRight />
          </button>
        <div className="relative md:px-16">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            // autoplay={{
            //   delay: 5000,
            //   disableOnInteraction: false,
            // }}
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
              }}
            // loop
            spaceBetween={16}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item._id}>
                <div className="bg-[#EDEDED] p-8 min-h-[300px] md:min-h-[380px]">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-[#E4A31A] text-[#E4A31A]"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="font-body text-gray-700 text-[14px] leading-6 md:leading-10">
                    "{item.review}"
                  </p>

                  {/* Guest */}
                  <div className="flex items-center gap-4 mt-6">
                    <Image
                      src={urlFor(item.photo).width(80).url()}
                      alt={item.name}
                      width={55}
                      height={55}
                      className="rounded-full object-cover h-10 w-10"
                    />

                    <div>
                      <h4 className="font-body font-semibold text-[#2B2E83] text-[18px]">
                        {item.name}
                      </h4>

                      <p className="font-body text-gray-500 text-[14px]">
                        {item.country}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="md:hidden flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
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
        </div>
      </Container>
    </section>
  );
}