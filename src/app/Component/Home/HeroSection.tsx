"use client";

import Link from "next/link";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="https://res.cloudinary.com/dvgodnxlg/video/upload/q_auto/f_auto/v1781681905/Fits-Air-Banner-video_img9at.mp4" 
        type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/50" /> */}

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center lg:items-end lg:pb-20 justify-center">
        <div className="text-center max-w-5xl px-6">
          <h1 className="text-white font-heading text-[42px] mt-10 md:mt-0 md:text-6xl lg:text-[52px] font-semibold italic leading-tight">
            Beyond Travel, Beyond Expectations
          </h1>

          <p className="mt-4 md:mt-8 font-body text-white/90 text-[16px] md:text-[18px] max-w-4xl mx-auto">
            Discover Sri Lanka through tailor-made luxury journeys crafted
            around your passions, preferences, and sense of adventure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 md:mt-10">
            <Button
              href="/tours"
              variant="primary"
            >
              Explore Tours
            </Button>

            <Button
              href="/contact"
              variant="outline"
            >
              Plan My Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}