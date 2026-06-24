
import { client } from "@/sanity/lib/client";
import {
  categoryQuery,
  categoryToursQuery,
} from "@/sanity/lib/queries";
import CategoryHero from "../../Component/Category/Hero";
import TourGrid from "../../Component/Category/TourGrid";



export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const categoryData = await client.fetch(
    categoryQuery,
    {
      slug: category,
    }
  );

  const tours = await client.fetch(
    categoryToursQuery,
    {
      slug: category,
    }
  );

  return (
    <>
      <CategoryHero
        category={categoryData}
      />

      <TourGrid
        category={categoryData}
        tours={tours}
      />
    </>
  );
}