import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  category: {
    title: string;
    description: string;
    heroImage: any;
  };
}

export default function CategoryHero({
  category,
}: Props) {
  return (
    <section className="relative h-[60vh] md:h-[90vh]">
      <Image
        src={urlFor(category.heroImage)
          .width(2000)
          .url()}
        alt={category.title}
        fill
        className="object-cover"
      />
    </section>
  );
}