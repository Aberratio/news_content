import { defineField, defineType } from "sanity";
import { FcInfo, FcRightUp2, FcLeftDown2, FcMms } from "react-icons/fc";

export default defineType({
  name: "generalConfig",
  title: "Konfiguracja",
  type: "document",
  groups: [
    {
      default: true,
      name: "info",
      title: "Informacje ogólne o stronie",
      icon: FcInfo,
    },
    {
      name: "header",
      title: "Nagłówek",
      icon: FcRightUp2,
    },
    {
      name: "footer",
      title: "Stópka",
      icon: FcLeftDown2,
    },
    {
      name: "seo",
      title: "SEO",
      icon: FcMms,
    },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Nazwa strony",
      validation: (Rule) => Rule.required(),
      type: "string",
      group: "info",
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
      group: "footer",
    }),
    defineField({
      name: "footerDescription",
      title: "Opis strony na stópce",
      validation: (Rule) => Rule.required(),
      type: "expandedText",
      group: "footer",
    }),
    defineField({
      name: "description",
      title: "Opis strony",
      validation: (Rule) => Rule.required(),
      type: "text",
      group: "seo",
    }),
    defineField({
      name: "image",
      title: "Obrazek na miniaturce strony",
      validation: (Rule) => Rule.required(),
      type: "seoImage",
      group: "seo",
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
