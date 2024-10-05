import { defineField, defineType } from "sanity";
import { FcRotateToPortrait } from "react-icons/fc";

export default defineType({
  name: "generalConfig",
  title: "Konfiguracja",
  type: "document",
  groups: [
    {
      name: "header",
      title: "Nagłówek",
      icon: FcRotateToPortrait,
    },
  ],
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
      group: "header",
    }),
    defineField({
      name: "mobileLogo",
      title: "Logo w nawigacji mobilnej strony",
      validation: (Rule) => Rule.required(),
      type: "seoImage",
      group: "header",
    }),
    defineField({
      name: "footerLogo",
      title: "Logo w stópce strony",
      validation: (Rule) => Rule.required(),
      type: "seoImage",
    }),
    defineField({
      name: "footerDescription",
      title: "Opis strony na stópce",
      validation: (Rule) => Rule.required(),
      type: "expandedText",
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
