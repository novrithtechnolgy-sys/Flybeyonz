import { defineField, defineType } from "sanity";

export default defineType({
  name: "tour",
  title: "Tour",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Tour Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "tourCategory" }],
      validation: (Rule) => Rule.required(),
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
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "price",
      title: "Starting Price",
      type: "number",
    }),

    defineField({
      name: "featured",
      title: "Featured Tour",
      type: "boolean",
      initialValue: false,
    }),
  ],
});