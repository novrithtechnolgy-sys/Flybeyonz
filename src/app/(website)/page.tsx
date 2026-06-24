import { client } from "@/sanity/lib/client";
import {
  whyChooseUsQuery,
  featuredToursQuery,
  experiencesQuery,
  destinationsQuery,
  accommodationCategoriesQuery,
  testimonialsQuery,
} from "@/sanity/lib/queries";

import Navbar from "./Component/Navbar";
import HeroSection from "./Component/Home/HeroSection";
import AboutIntro from "./Component/Home/AboutIntro";
import WhyChooseUs from "./Component/Home/WhyChooseUs";
import FeaturedTours from "./Component/Home/FeaturedTours";
import ExperiencesSection from "./Component/Home/ExperiencesSection";
import DestinationSection from "./Component/Home/DestinationSection";
import StayExtraordinary from "./Component/Home/StayExtraordinary";
import Testimonials from "./Component/Home/Testimonials";


export default async function Home() {

  const [whyChooseUs, featuredTours, experiences, destinations, accommodationCategories, testimonials] = await Promise.all([
    client.fetch(whyChooseUsQuery),
    client.fetch(featuredToursQuery),
    client.fetch(experiencesQuery),
    client.fetch(destinationsQuery),
    client.fetch(accommodationCategoriesQuery),
    client.fetch(testimonialsQuery),
  ]);

  return (

    <>
      <HeroSection />
      <AboutIntro />
      <WhyChooseUs cards={whyChooseUs} />
      <FeaturedTours tours={featuredTours} />
      <ExperiencesSection experiences={experiences} />
      <StayExtraordinary  categories={accommodationCategories} />
      <DestinationSection destinations={destinations} />
      <Testimonials testimonials={testimonials} />
    </>
  );
}