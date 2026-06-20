import Button from "./ui/Button";
import Container from "./ui/Container";

export default function AboutIntro() {
  return (
    <section className="bg-[#f5f5f5] py-10 lg:py-20">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-[32px] lg:text-[38px] font-semibold italic text-black">
            The Art of Luxury Travel in Sri Lanka
          </h2>

          <p className="mt-4 md:mt-8 font-body text-[16px] lg:text-[18px] leading-relaxed text-[#333] font-body max-w-3xl mx-auto">
            Sri Lanka is more than a destination – it's a collection of
            extraordinary experiences. From panoramic mountain views and
            ancient kingdoms to incredible wildlife and luxury retreats,
            every journey reveals something unforgettable.
          </p>

          <p className="mt-4 md:mt-8 font-body text-[16px] lg:text-[18px] leading-relaxed text-[#333] font-body max-w-3xl mx-auto">
            At Flybeyonz, we craft personalized travel experiences that
            blend luxury, authenticity, and exceptional service. Whether
            you seek adventure, relaxation, romance, or cultural discovery,
            we invite you to experience Sri Lanka beyond the ordinary.
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