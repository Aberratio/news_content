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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Autor",
      type: "reference",
      to: { type: "author" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isAdd",
      title: "Czy artykuł jest reklamą?",
      type: "boolean",
    }),
    defineField({
      name: "category",
      title: "Kategoria",
      validation: rule => rule.custom((category, context) => {

        if (context.document.isAdd && category) {
          return "Dla artykułów typu rekalama nie możesz mieć wybranej kategorii."
        }

        if (!context.document.isAdd && !category) {
          return 'Wprowadź kategorię!'
        }
        
        return true
      }),
      type: "reference",
      to: { type: "category" },
    }),
    defineField({
      name: "publishedAt",
      title: "Data publikacji",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Zdjęcie główne",
      type: "image",
      validation: (Rule) => Rule.required(),
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
    defineField({
      name: "lead",
      title: "Lead",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Treść",
      type: "blockContent",
    }),
    defineField({
      name: "likes",
      title: "Polubienia",
      type: "number",
      initialValue: 0,
      readOnly: true,
    }),
    defineField({
      name: "dislikes",
      title: "Łapki w dół",
      type: "number",
      initialValue: 0,
      readOnly: true,
    }),
    defineField({
      name: "views",
      title: "Wyświetlania",
      type: "number",
      initialValue: 0,
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
