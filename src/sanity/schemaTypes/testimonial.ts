import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Guest Name",
      type: "string",
    }),

    defineField({
      name: "country",
      title: "Country",
      type: "string",
    }),

    defineField({
      name: "review",
      title: "Review",
      type: "text",
    }),

    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
    }),

    defineField({
      name: "photo",
      title: "Guest Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
  ],
});