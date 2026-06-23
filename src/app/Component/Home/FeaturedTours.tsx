"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { urlFor } from "@/sanity/lib/image";
import type { Swiper as SwiperType } from "swiper";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

type TourPackage = {
  _id: string;
  title: string;
  duration: string;
  shortDescription: string;
  image: any;
};

interface Props {
  tours: TourPackage[];
}

export default function FeaturedTours({
  tours,
}: Props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperType | null>(null);
  return (
    <section className="relative overflow-hidden py-10 md:py-20">
      {/* Background */}
      <Image
        src="https://res.cloudinary.com/dvgodnxlg/image/upload/q_auto/f_auto/v1781702721/95a89087dad198f19ede4ebace08169c71b62b78_iwvel1.webp"
        alt="Sri Lanka"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Content */}
          <div className="lg:col-span-4 text-white">
            <h2 className="font-heading text-[26px] md:text-[38px] italic font-semibold leading-tight">
              Signature
              <br />
              <span className="font-bold ">
              Sri Lanka Journeys
              </span>
            </h2>

            <p className="mt-4 md:mt-8 font-body text-[14px] md:text-[18px] text-white/90 leading-relaxed">
              Browse our carefully crafted tour packages
              and discover the very best of Sri Lanka.
            </p>
            <div className="mt-10 hidden lg:block">
              <Button
                href="/tours"
                variant="outline"
              >
                View All Tours
              </Button>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="hidden lg:block lg:col-span-8">
            <div className="relative">
              {/* Prev */}
              <button className="tour-prev absolute left-3 top-1/2 -translate-y-1/2 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition">
                <ChevronLeft size={22} />
              </button>

              {/* Next */}
              <button className="tour-next absolute right-3 top-1/2 -translate-y-1/2 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition">
                <ChevronRight size={22} />
              </button>

              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  prevEl: ".tour-prev",
                  nextEl: ".tour-next",
                }}
                // autoplay={{
                //   delay: 5000,
                //   disableOnInteraction: false,
                // }}
                loop
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1280: {
                    slidesPerView: 3,
                  },
                }}
                className="featured-tour-swiper"
              >
                {tours.map((tour) => (
                  <SwiperSlide key={tour._id}>
                    <Link href={`/tours/${tour._id}`}>
                      <div className="relative aspect-[5/9] overflow-hidden group cursor-pointer">
                        <Image
                          src={urlFor(tour.image)
                            .width(1200)
                            .url()}
                          alt={tour.title}
                          fill
                          className="object-cover transition duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                        <div className="absolute bottom-0 left-0 p-8 text-white">
                          <h3 className="font-heading text-[22px] font-semibold uppercase leading-tight">
                            {tour.title}
                          </h3>

                          <p className="mt-4 font-body text-[14px] text-white/90 leading-relaxed">
                            {tour.shortDescription}
                          </p>

                          <p className="mt-4 font-body text-[16px] font-semibold">
                            {tour.duration}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </Container>
        <div className="lg:hidden relative mt-8">  
          <Swiper
            modules={[Navigation]}
            // navigation={{
            //   prevEl: ".why-prev",
            //   nextEl: ".why-next",
            // }}
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
              }}
            spaceBetween={12}
            slidesPerView={1.25}
            breakpoints={{
              640: {
                    slidesPerView: 1.25,
                    spaceBetween: 16,
              },
              768: {
                      slidesPerView: 2,
                      spaceBetween: 16,
                    },
              }}
            >
              {tours.map((card, index) => (
                <SwiperSlide key={card._id}
                  className={index === 0 ? "pl-[16px]" : index === tours.length - 1 ? "pr-[16px]" : ""}>
                    <div className="relative h-[380px] md:h-[520px] overflow-hidden group">
                      <Image
                        src={urlFor(card.image).width(1000).url()}
                        alt={card.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute -bottom-1 inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                          <div className="absolute bottom-0 left-0 p-4 md:p-8 text-white">
                          <h3 className="mt-4 font-heading text-[18px] text-white/90 leading-relaxed">
                            {card.title}
                          </h3>
                          <p className="mt-2 font-body text-[14px] text-white/90 leading-relaxed">
                            {card.shortDescription}
                          </p>
                          <p className="mt-2 font-body text-[14px] font-semibold">
                            {card.duration}
                          </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="md:hidden flex justify-center gap-2 mt-8">
                    {tours.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {}}
                        className={`h-2 w-2 rounded-full transition-all ${
                          activeIndex === index
                            ? "bg-[#08295D]"
                            : "bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
               </div>
              <div className="relative flex items-center justify-center mt-8 md:hidden z-90">
              <Button
                href="/tours"
                variant="outline"
              >
                View All Tours
              </Button>
            </div>
    </section>
  );
}