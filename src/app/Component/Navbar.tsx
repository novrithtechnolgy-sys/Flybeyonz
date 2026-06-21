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

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Tours", href: "/tours" },
  { name: "Destinations", href: "/destinations" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
                : "max-h-20 opacity-100 py-4 border-b border-white/20"
            }`}
          >
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>flybeyonz@gmail.com</span>
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

          {/* Main Navbar */}
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
                className="h-auto w-[100px] lg:w-[160px]"
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`uppercase text-sm font-semibold tracking-wide transition-colors duration-300 hover:text-[#D8A31A] ${
                    scrolled ? "text-black" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-[#D8A31A] hover:bg-[#c69415] px-7 py-2 text-sm font-bold uppercase text-white transition-all duration-300"
              >
                Inquire Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden transition-colors ${
                scrolled ? "text-black" : "text-white"
              }`}
              aria-label="Open Menu"
            >
              <Menu size={30} />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-black/95 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close Menu"
            className="text-white"
          >
            <X size={32} />
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="flex flex-col items-center gap-8 mt-16">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-semibold uppercase tracking-wide text-white hover:text-[#D8A31A]"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 bg-[#D8A31A] px-8 py-4 font-bold uppercase text-white"
          >
            Inquire Now
          </Link>
        </nav>
      </div>
    </>
  );
}