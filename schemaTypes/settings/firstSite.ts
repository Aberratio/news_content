import { defineField, defineType } from "sanity";

export default defineType({
  name: "firstSite",
  title: "Pierwsza Strona",
  type: "document",
  fields: [
    defineField({
      name: "mainTopic",
      validation: (Rule) => Rule.required(),
      title: "Temat tygodnia",
      type: "string",
    }),
    defineField({
      name: "releaseDate",
      validation: (Rule) => Rule.required(),
      title: "Data wydania",
      type: "date",
    }),
    defineField({
      name: "image",
      validation: (Rule) => Rule.required(),
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
