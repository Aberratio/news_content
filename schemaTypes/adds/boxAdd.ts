import { defineField, defineType } from "sanity";

export default defineType({
  name: "boxAdd",
  title: "Reklama box",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nazwa reklamodawcy",
      description: "Ta nazwa nie będzie widoczna na stronie internetowej",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Przekierowanie (link do reklamodawcy)",
      description:
        "Wypełnij tylko, jeżeli po kliknięciu w reklamę ma się otworzyć inna strona. Przykładowa zawartość tego pola to: https://google.com",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Reklama",
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
      ],
    }),
    defineField({
      name: "startDate",
      title: "Data rozpoczęcia reklamy",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "Data zakończenia reklamy",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      name: "name",
      startDate: "startDate",
      endDate: "endDate",
      media: "image",
    },
    prepare(selection) {
      const { name, startDate, endDate, media } = selection;

      const today = new Date();

      const isActive =
        today >= new Date(startDate) && today <= new Date(endDate);

      return {
        title: `[${isActive ? "Aktywna" : "Nieaktywna"}] ${name}`,
        subtitle: `od ${startDate} do ${endDate}`,
        media,
      };
    },
  },
});
