"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

import { ChevronUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white">
      {/* Background Image */}
      <Image
        src="https://res.cloudinary.com/dvgodnxlg/image/upload/q_auto/f_auto/v1782023563/688b54c8053171101f71723e86f36f01f0591f32_wwislz.webp"
        alt="Footer Background"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

      <Container className="relative z-10">
        <div className="pt-20">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-5">
              <Image
                src="https://res.cloudinary.com/dvgodnxlg/image/upload/q_auto/f_auto/v1781681944/7ce989aa3fa9a1217a3c5b293a7ad794f342efb1_e4bppq.png"
                alt="Flybeyonz"
                width={260}
                height={80}
                className="mb-10 h-auto w-[120px] lg:w-[220px]"
              />

              <div className="space-y-8">
                <div>
                  <h4 className="font-semibold mb-2">
                    Address
                  </h4>

                  <p className="text-white/90 leading-9">
                    No. 123, Nawan Mawatha,
                    <br />
                    Colombo, Sri Lanka
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">
                    Hotline
                  </h4>

                  <p className="text-white/90">
                    +94 77 123 4567
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">
                    Email
                  </h4>

                  <p className="text-white/90">
                    flybeyonztravelsandtours@gmail.com
                  </p>
                </div>

                <div className="flex items-center gap-6 pt-2">
                  <Link href="#">
                    <FaFacebookF size={22} />
                  </Link>

                  <Link href="#">
                    <FaTiktok size={22} />
                  </Link>

                  <Link href="#">
                    <FaInstagram size={22} />
                  </Link>

                  <Link href="#">
                    <FaLinkedinIn size={22} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold mb-8">
                Quick Links
              </h3>

              <ul className="space-y-4">
                <li>
                  <Link href="/">Home</Link>
                </li>

                <li>
                  <Link href="/about">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link href="/tours">
                    Tours
                  </Link>
                </li>

                <li>
                  <Link href="/destinations">
                    Destinations
                  </Link>
                </li>

                <li>
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h3 className="font-semibold mb-8">
                Our Services
              </h3>

              <ul className="space-y-4">
                <li>Hotel & Accommodation</li>
                <li>Transport Service</li>
                <li>Custom Tour Packages</li>
                <li>Cultural Experiences</li>
                <li>Tour Guide Service</li>
                <li>Wildlife & Adventure</li>
              </ul>
            </div>

            {/* Policies */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold mb-8">
                Help & Support
              </h3>

              <ul className="space-y-4">
                <li>
                  <Link href="/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link href="/cancellation-policy">
                    Cancellation Policy
                  </Link>
                </li>

                <li>
                  <Link href="/booking-policy">
                    Booking Policy
                  </Link>
                </li>

                <li>
                  <Link href="/terms">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 border-t border-white/20 pt-6 pb-8 flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-white/80">
              © 2026 Flybeyonz Travels & Tours.
              All Rights Reserved.
            </p>

            <div className="flex items-center gap-6">
              <p className="text-white/80">
                Developed by{" "}
                <span className="font-semibold text-white">
                  Novrith Technology
                </span>
              </p>

              <button
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="h-8 w-8 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <ChevronUp size={18} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}