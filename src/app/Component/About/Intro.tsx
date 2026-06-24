import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Intro() {
  return (
    <section className="bg-white py-10 lg:py-20">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-[26px] lg:text-[38px] font-semibold italic text-black">
            Crafting Extraordinary
            <br />
            <span className="font-bold">
            Sri Lankan Journeys
            </span>
          </h2>

          <p className="mt-4 md:mt-8 font-body text-[14px] lg:text-[18px] leading-relaxed text-[#333] font-light max-w-3xl mx-auto">
            Flybeyonz is a luxury travel company dedicated to creating exceptional experiences across Sri Lanka. 
            From pristine beaches and scenic hill country landscapes to ancient heritage sites and unforgettable wildlife encounters, 
            we design journeys that showcase the very best of the island.
          </p>

          <p className="mt-4 md:mt-8 font-body text-[14px] lg:text-[18px] leading-relaxed text-[#333] font-light max-w-3xl mx-auto">
            Every itinerary is thoughtfully tailored to your interests, ensuring a seamless blend of luxury, authenticity, and personalized service. 
            Whether you're planning a honeymoon, family vacation, cultural escape, or adventure-filled getaway, we transform travel into unforgettable memories.
          </p>

          <div className="mt-8 lg:mt-14 flex justify-center">
            <Button
              href="/about"
              variant="primary"
            >
              View More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}