import { defineField, defineType } from "sanity";
import { SchemaIcon } from "@sanity/icons";

export default defineType({
  name: "tab",
  title: "Zakładka",
  type: "document",
  icon: SchemaIcon,
  fields: [
    defineField({
      name: "name",
      title: "Nazwa",
      validation: (Rule) => Rule.required(),
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      validation: (Rule) => Rule.required(),
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "order",
      validation: (Rule) => Rule.required(),
      title: "Kolejność (im mniejsza liczba, tym bardziej z lewej strony)",
      type: "number",
    }),
    defineField({
      name: "image",
      title: "Obrazek",
      validation: (Rule) => Rule.required(),
      type: "seoImage",
    }),
    defineField({
      name: "description",
      title: "Opis - jakich wiadomości możemy spodziewać się w tej zakładce",
      validation: (Rule) => Rule.required(),
      type: "text",
    }),
    defineField({
      name: "color",
      title: "Kolor",
      type: "color",
    }),
    defineField({
      name: "action",
      title: "Akcja",
      type: "tabAction",
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
