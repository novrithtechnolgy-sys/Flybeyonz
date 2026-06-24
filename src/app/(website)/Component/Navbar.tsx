"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import Container from "./ui/Container";

type TourCategory = {
  title: string;
  slug: string;
};

interface NavbarProps {
  categories: TourCategory[];
}

export default function Navbar({
  categories,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [tourOpen, setTourOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg text-black"
            : "bg-gradient-to-b from-black to-transparent text-white"
        }`}
      >
        <Container>
          {/* Top Bar */}
          <div
            className={`hidden lg:flex items-center justify-end gap-8 text-sm overflow-hidden transition-all duration-300 ${
              scrolled
                ? "max-h-0 opacity-0 py-0 border-0"
                : "max-h-20 opacity-100 py-4 border-b border-white/20 pt-8"
            }`}
          >
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>
                flybeyonztravelsandtours@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>+94 77 123 4567</span>
            </div>

            <button className="flex items-center gap-1">
              EN
              <ChevronDown size={14} />
            </button>
          </div>

          {/* Main Navigation */}
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? "py-4" : "py-6"
            }`}
          >
            {/* Logo */}
            <Link href="/">
              <Image
                src={
                  scrolled
                    ? "https://res.cloudinary.com/dvgodnxlg/image/upload/q_auto/f_auto/v1781686885/Flybeyonz_Color_Logo_uob6pl.png"
                    : "https://res.cloudinary.com/dvgodnxlg/image/upload/q_auto/f_auto/v1781681944/7ce989aa3fa9a1217a3c5b293a7ad794f342efb1_e4bppq.png"
                }
                alt="Flybeyonz"
                width={240}
                height={80}
                priority
                className="h-auto w-[120px] lg:w-[160px]"
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-10">
              <Link
                href="/"
                className={`uppercase text-sm font-semibold tracking-wide hover:text-[#D8A31A] ${
                  scrolled
                    ? "text-black"
                    : "text-white"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`uppercase text-sm font-semibold tracking-wide hover:text-[#D8A31A] ${
                  scrolled
                    ? "text-black"
                    : "text-white"
                }`}
              >
                About Us
              </Link>

              {/* Tours Dropdown */}
              <div
                className="relative"
                onMouseEnter={() =>
                  setTourOpen(true)
                }
                onMouseLeave={() =>
                  setTourOpen(false)
                }
              >
                <button
                  className={`flex items-center gap-1 uppercase text-sm font-semibold tracking-wide hover:text-[#D8A31A] ${
                    scrolled
                      ? "text-black"
                      : "text-white"
                  }`}
                >
                  Tours
                  <ChevronDown size={16} />
                </button>

                <div
                  className={`absolute top-full left-0 mt-3 w-72 bg-white shadow-xl transition-all duration-300 ${
                    tourOpen
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  {categories.map(
                    (category) => (
                      <Link
                        key={category.slug}
                        href={`/tours/${category.slug}`}
                        className="block px-6 py-4 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {category.title}
                      </Link>
                    )
                  )}
                </div>
              </div>

              <Link
                href="/destinations"
                className={`uppercase text-sm font-semibold tracking-wide hover:text-[#D8A31A] ${
                  scrolled
                    ? "text-black"
                    : "text-white"
                }`}
              >
                Destinations
              </Link>

              <Link
                href="/contact"
                className={`uppercase text-sm font-semibold tracking-wide hover:text-[#D8A31A] ${
                  scrolled
                    ? "text-black"
                    : "text-white"
                }`}
              >
                Contact Us
              </Link>
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-[#D8A31A] hover:bg-[#c69415] px-7 py-3 text-sm font-bold uppercase text-white transition"
              >
                Inquire Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() =>
                setMobileOpen(true)
              }
              className={`lg:hidden ${
                scrolled
                  ? "text-black"
                  : "text-white"
              }`}
            >
              <Menu size={30} />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-black/95 transition-transform duration-300 ${
          mobileOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() =>
              setMobileOpen(false)
            }
            className="text-white"
          >
            <X size={32} />
          </button>
        </div>

        <nav className="flex flex-col items-center gap-8 mt-10">
          <Link
            href="/"
            onClick={() =>
              setMobileOpen(false)
            }
            className="text-lg font-semibold uppercase text-white"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() =>
              setMobileOpen(false)
            }
            className="text-lg font-semibold uppercase text-white"
          >
            About Us
          </Link>

          {/* Mobile Tours */}
          <div className="text-center">
            <h3 className="text-lg font-semibold uppercase text-white mb-4">
              Tours
            </h3>

            <div className="flex flex-col gap-3">
              {categories.map(
                (category) => (
                  <Link
                    key={category.slug}
                    href={`/tours/${category.slug}`}
                    onClick={() =>
                      setMobileOpen(false)
                    }
                    className="text-white/80 hover:text-[#D8A31A]"
                  >
                    {category.title}
                  </Link>
                )
              )}
            </div>
          </div>

          <Link
            href="/destinations"
            onClick={() =>
              setMobileOpen(false)
            }
            className="text-lg font-semibold uppercase text-white"
          >
            Destinations
          </Link>

          <Link
            href="/contact"
            onClick={() =>
              setMobileOpen(false)
            }
            className="text-lg font-semibold uppercase text-white"
          >
            Contact Us
          </Link>

          <Link
            href="/contact"
            onClick={() =>
              setMobileOpen(false)
            }
            className="bg-[#D8A31A] px-8 py-4 text-white font-bold uppercase mt-4"
          >
            Inquire Now
          </Link>
        </nav>
      </div>
    </>
  );
}