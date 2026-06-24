import Image from "next/image";
import Navbar from "../Component/Navbar";
import Intro from "../Component/About/Intro";
import { whyFlybeyonzCardsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import WhyFlybeyonz from "../Component/About/WhyFlybeyonz";
import CEOSection from "../Component/About/CEOSection";

export default async function AboutPage() {
    const cards = await client.fetch(
    whyFlybeyonzCardsQuery
  );
    return (
        <>
            <Navbar/>
            <section className="relative w-full h-[60vh] md:h-[90vh]">
                <Image src="https://res.cloudinary.com/dvgodnxlg/image/upload/v1782199576/ffae334d8a063bc3576b052c8d5762a3f84c6a0e_iyqndz.webp" 
                  fill
                  alt="about"
                  className="w-full h-full object-cover"
                 />
            </section>
            <Intro/>
            <WhyFlybeyonz cards={cards}/>
            <CEOSection/>    
        </>
    );
}