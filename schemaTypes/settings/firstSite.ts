import { defineField, defineType } from "sanity";

export default defineType({
  name: "firstSite",
  title: "Okładka wydania",
  type: "document",
  fields: [
    defineField({
      name: "show",
      validation: (Rule) => Rule.required(),
      title: "Pokaż okładkę wydania",
      type: "boolean",
    }),
    defineField({
      name: "releaseDate",
      validation: rule => rule.custom((releaseDate, context) => {
        if (context.document?.show) {
          return releaseDate ? true : "Okładka wydania jest włączona, więc ta wartość nie może być pusta";
        }

        return true;
      }),
      title: "Data wydania",
      type: "date",
    }),
    defineField({
      name: "image",
      validation: rule => rule.custom((image, context) => {
        if (context.document?.showFirstSite) {
          return image ? true : "Okładka wydania jest włączona, więc ta wartość nie może być pusta";
        }

        return true;
      }),
      title: "Zdjęcie okładki",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  initialValue: {
    show: false
  }
});
