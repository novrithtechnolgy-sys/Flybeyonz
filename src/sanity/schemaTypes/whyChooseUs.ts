import { defineField, defineType } from "sanity";

export default defineType({
  name: "whyChooseUs",
  title: "Why Choose Us Card",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Card Title",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
});