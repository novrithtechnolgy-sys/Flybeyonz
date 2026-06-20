import { defineType, defineField } from "sanity";

export default defineType({
  name: "tourPackage",
  title: "Tour Package",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),

    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
    }),

    defineField({
      name: "shortDescription",
      title: "Short Description",
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
      title: "Order",
      type: "number",
    }),
  ],
});