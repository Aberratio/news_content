import { defineField, defineType } from "sanity";

export default defineType({
  name: "comment",
  title: "Komentarz",
  type: "document",
  fields: [
    defineField({
      name: "author",
      title: "Nazwa użytkownika",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Treść",
      type: "string",
    }),
    defineField({
      name: "publishedAt",
      title: "Data publikacji",
      type: "datetime",
    }),
    defineField({
      name: "post",
      title: "Komentowany artykuł",
      type: "reference",
      to: [{ type: "post" }],
    }),
    defineField({
      name: "likes",
      title: "Polubienia",
      type: "number",
    }),
    defineField({
      name: "dislikes",
      title: "Łapki w dół",
      type: "number",
    }),
  ],

  preview: {
    select: {
      text: "text",
      author: "author",
      publishedAt: "publishedAt",
    },
    prepare(selection) {
      const { author, text, publishedAt } = selection;
      return {
        title: author && `${author} - ${publishedAt}`,
        subtitle: text && `${text.slice(0, 100)}`,
      };
    },
  },
});
