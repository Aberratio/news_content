import { defineField, defineType } from "sanity";

export default defineType({
  name: "firstSite",
  title: "Pierwsza Strona",
  type: "document",
  fields: [
    defineField({
      name: "mainTopic",
      title: "Temat tygodnia",
      type: "string",
    }),
    defineField({
      name: "releaseDate",
      title: "Data wydania",
      type: "date",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "mainTopic",
      subtitle: "releaseDate",
      media: "image",
    },
  },
});
