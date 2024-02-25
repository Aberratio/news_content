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
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
  ],
});
