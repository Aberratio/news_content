import { defineField, defineType } from "sanity";
import { SchemaIcon } from "@sanity/icons";

export default defineType({
  name: "tabAction",
  title: "Akcja zakładki",
  type: "document",
  icon: SchemaIcon,
  fields: [
    defineField({
      name: "title",
      title: "Tytuł",
      validation: (Rule) => Rule.required(),
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Opis",
      validation: (Rule) => Rule.required(),
      type: "text",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
    }),
    defineField({
      name: "cta",
      title: "Tekst CTA",
      validation: (Rule) => Rule.required(),
      type: "string",
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
