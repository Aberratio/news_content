import { defineField, defineType } from "sanity";

export default defineType({
  name: "adds",
  title: "Reklamy",
  type: "document",
  fields: [
    defineField({
      name: "mainAdd",
      title: "Reklama Główna",
      type: "reference",
      to: { type: "bannerAdd" },
    }),
    defineField({
      name: "boxAdds",
      title: "Reklamy boxowe",
      type: "array",
      of: [{ type: "boxAdd" }],
    }),
  ],
  preview: {
    select: {
      title: "Reklamy",
    },
    prepare(selection) {
      const { title } = selection;

      return {
        title,
      };
    },
  },
});
