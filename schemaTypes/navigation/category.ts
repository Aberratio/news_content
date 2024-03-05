import { defineField, defineType } from "sanity";
import { FolderIcon } from "@sanity/icons";

export default defineType({
  name: "category",
  title: "Kategoria",
  icon: FolderIcon,
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nazwa",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "tab",
      title: "Zakładka",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: { type: "tab" },
    }),
    defineField({
      name: "image",
      title: "Obrazek",
      validation: (Rule) => Rule.required(),
      type: "seoImage",
    }),
    defineField({
      name: "description",
      title: "Opis - jakich wiadomości możemy spodziewać się w tej kategorii",
      validation: (Rule) => Rule.required(),
      type: "text",
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
