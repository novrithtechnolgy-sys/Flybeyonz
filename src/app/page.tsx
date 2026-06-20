import { client } from "@/sanity/lib/client";
import {
  whyChooseUsQuery,
  featuredToursQuery,
  experiencesQuery,
  destinationsQuery,
  accommodationCategoriesQuery,
} from "@/sanity/lib/queries";

import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import AboutIntro from "./Component/AboutIntro";
import WhyChooseUs from "./Component/WhyChooseUs";
import FeaturedTours from "./Component/FeaturedTours";
import ExperiencesSection from "./Component/ExperiencesSection";
import DestinationSection from "./Component/DestinationSection";
import StayExtraordinary from "./Component/StayExtraordinary";


export default async function Home() {
  const [whyChooseUs, featuredTours, experiences, destinations, accommodationCategories] = await Promise.all([
    client.fetch(whyChooseUsQuery),
    client.fetch(featuredToursQuery),
    client.fetch(experiencesQuery),
    client.fetch(destinationsQuery),
    client.fetch(accommodationCategoriesQuery),
  ]);

  return (

    <>
      <Navbar />
      <HeroSection />
      <AboutIntro />
      <WhyChooseUs cards={whyChooseUs} />
      <FeaturedTours tours={featuredTours} />
      <ExperiencesSection experiences={experiences} />
      <StayExtraordinary  categories={accommodationCategories} />
      <DestinationSection destinations={destinations} />
    </>
  );
}