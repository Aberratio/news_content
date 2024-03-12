import { defineType } from 'sanity'

export default defineType ({
    name: 'seoImage',
    type: 'image',
    title: "Obrazek",
    fields: [
      {
        name: 'alt',
        type: 'string',
        title: "Tekst alternatywny",
        description: 'Tekst alternatywny jest wymagany.',
        hidden: ({ parent }) => !parent?.asset,
        validation: Rule => [
          Rule.required(),
        ],
        options: {
          isHighlighted: true,
        }
      },
      {
        name: "description",
        type: "text",
        title: "Opis",
      },
    ]
  }) 