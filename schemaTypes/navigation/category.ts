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
  ],
});
