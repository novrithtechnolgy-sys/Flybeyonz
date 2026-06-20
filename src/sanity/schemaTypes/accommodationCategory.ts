import { defineField, defineType } from "sanity";

export default defineType({
  name: "accommodationCategory",
  title: "Accommodation Category",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
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
      title: "Order",
      type: "number",
    }),
  ],
});