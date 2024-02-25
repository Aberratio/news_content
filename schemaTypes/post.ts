import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tytuł",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "author",
      title: "Autor",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      title: "Zdjęcie główne",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Tekst alternatywny",
        },
        {
          name: "description",
          type: "text",
          title: "Opis",
        },
      ],
    }),
    defineField({
      name: "category",
      title: "Kategoria",
      type: "reference",
      to: { type: "category" },
    }),
    defineField({
      name: "publishedAt",
      title: "Data publikacji",
      type: "date",
    }),
    defineField({
      name: "lead",
      title: "Lead",
      type: "text",
    }),
    defineField({
      name: "body",
      title: "Treść",
      type: "blockContent",
    }),
    defineField({
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Tekst alternatywny",
            },
            {
              name: "description",
              type: "text",
              title: "Opis",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `${author}` };
    },
  },
});
