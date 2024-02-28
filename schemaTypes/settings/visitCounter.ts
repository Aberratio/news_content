import { defineField, defineType } from "sanity";

export default defineType({
  name: "visitCounter",
  title: "Licznik wizyt",
  type: "document",
  fields: [
    defineField({
      name: "visits",
      title: "Liczba wizyt",
      type: "number",
    }),
  ],
  preview: {
    select: {
      title: "visits",
    },
  },
});
