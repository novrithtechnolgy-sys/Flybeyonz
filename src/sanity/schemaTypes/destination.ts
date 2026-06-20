import { defineType, defineField } from "sanity";

export default defineType({
  name: "destination",
  title: "Destination",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Destination Name",
      type: "string",
    }),

    defineField({
      name: "description",
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