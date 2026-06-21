import { groq } from "next-sanity";

export const whyChooseUsQuery = groq`
*[_type == "whyChooseUs"] | order(order asc){
  _id,
  title,
  description,
  image
}
`;

export const featuredToursQuery = groq`
*[_type == "tourPackage"]
| order(order asc)
{
  _id,
  title,
  duration,
  shortDescription,
  image
}
`;


export const experiencesQuery = groq`
*[_type == "experience"]
| order(order asc)
{
  _id,
  title,
  description,
  image
}
`;


export const destinationsQuery = groq`
*[_type == "destination"]
| order(order asc)
{
  _id,
  title,
  description,
  image
}
`;

export const accommodationCategoriesQuery = groq`
*[_type == "accommodationCategory"]
| order(order asc)
{
  _id,
  title,
  image
}
`;

export const testimonialsQuery = `
*[_type == "testimonial"]
| order(order asc)
{
  _id,
  name,
  country,
  review,
  rating,
  photo
}
`;