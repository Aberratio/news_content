import { defineField, defineType } from "sanity";

export default defineType({
  name: "pinnedPost",
  title: "Przypięty post",
  type: "document",
  fields: [
    defineField({
      name: "post",
      title: "Artykuł specjalny",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: { type: "post" },
    }),
  ],
});
