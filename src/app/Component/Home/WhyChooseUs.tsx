"use client";

import { useState, useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

import Image from "next/image";
import Container from "../ui/Container";
import { urlFor } from "@/sanity/lib/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

type WhyChooseUsCard = {
  _id: string;
  title: string;
  description: string;
  image: any;
};

interface Props {
  cards: WhyChooseUsCard[];
}

export default function WhyChooseUs({ cards }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <section className="bg-white py-10 md:py-20">
      <Container>
        {/* Title */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-heading text-[26px] md:text-[38px] font-bold italic text-gray-800">
            Why Discerning Travelers
            <br />
            <span className="font-bold">
            Choose Flybeyonz
            </span>
          </h2>
        </div>

        <div className="hidden lg:block relative">
          {/* Previous Button */}
          <button className="why-prev absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-black/20 text-white backdrop-blur-sm transition hover:bg-black/40">
            <ChevronLeft size={22} />
          </button>

          {/* Next Button */}
          <button className="why-next absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-black/20 text-white backdrop-blur-sm transition hover:bg-black/40">
            <ChevronRight size={22} />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".why-prev",
              nextEl: ".why-next",
            }}
            loop
            // autoplay={{
            //   delay: 5000,
            //   disableOnInteraction: false,
            // }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="why-choose-swiper"
          >
            {cards.map((card) => (
              <SwiperSlide key={card._id}>
                <div className="relative w-full aspect-[2/3] overflow-hidden group">
                  <Image
                    src={urlFor(card.image).width(1000).url()}
                    alt={card.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h3 className="font-heading text-[22px] font-semibold uppercase mb-4">
                      {card.title}
                    </h3>

                    <p className="font-body text-[14px] leading-relaxed text-white/90">
                      {card.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
       <div className="lg:hidden relative">
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
            1024: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={card._id}
            className={index === 0 ? "pl-[16px]" : index === cards.length - 1 ? "pr-[16px]" : ""}>
              <div className="relative h-[380px] md:h-[520px] overflow-hidden group">
                <Image
                  src={urlFor(card.image).width(1000).url()}
                  alt={card.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-0 left-0 p-4 md:p-8 text-white">
                  <h3 className="font-heading text-[18px] md:text-[22px] font-semibold uppercase mb-2 md:mb-4 ">
                    {card.title}
                  </h3>

                  <p className="font-body text-[14px] md:text-[16px] leading-6 text-white/90 font-light">
                    {card.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="md:hidden flex justify-center gap-2 mt-8">
          {cards.map((_, index) => (
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
    </section>
  );
}