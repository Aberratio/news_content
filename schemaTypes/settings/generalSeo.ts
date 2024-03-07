import { defineField, defineType } from "sanity";

export default defineType({
  name: "generalSeo",
  title: "SEO",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nazwa strony",
      validation: (Rule) => Rule.required(),
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Obrazek na miniaturce strony",
      validation: (Rule) => Rule.required(),
      type: "seoImage",
    }),
    defineField({
      name: "description",
      title: "Opis strony",
      validation: (Rule) => Rule.required(),
      type: "text",
    }),
    defineField({
      name: "mainLogo",
      title: "Główne logo strony",
      validation: (Rule) => Rule.required(),
      type: "seoImage",
    }),
    defineField({
      name: "mobileLogo",
      title: "Logo w nawigacji mobilnej strony",
      validation: (Rule) => Rule.required(),
      type: "seoImage",
    }),
    defineField({
      name: "footerLogo",
      title: "Logo w stópce strony",
      validation: (Rule) => Rule.required(),
      type: "seoImage",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});