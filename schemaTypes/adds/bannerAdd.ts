import { defineField, defineType } from "sanity";

export default defineType({
  name: "bannerAdd",
  title: "Reklama baner",
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
      validation: rule => rule.custom((link, context) => {

        if (context.document.post && link) {
          return "To pole oraz 'Artykuł powiązany z reklamą' (pole poniżej) nie mogą być wypełnione jednocześnie."
        }

        return true
      }),
      description:
        "Wypełnij tylko, jeżeli po kliknięciu w reklamę ma się otworzyć inna strona. Przykładowa zawartość tego pola to: https://google.com",
      type: "string",
    }),
    defineField({
      name: "post",
      title: "Artykuł powiązany z reklamą",
      validation: rule => rule.custom((post, context) => {

        if (context.document.link && post) {
          return "To pole oraz 'Przekierowanie (link do reklamodawcy)' (pole powyżej) nie mogą być wypełnione jednocześnie."
        }
        
        return true
      }),
      description:
        "Wypełnij tylko, jeżeli po kliknięciu w reklamę ma się otworzyć konkretny artykuł na stronie Głosu Milicza.",
      type: "reference",
      to: { type: "post" },
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
