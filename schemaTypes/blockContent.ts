import { defineType, defineArrayMember } from "sanity";

export default defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Nagłówek", value: "h3" },
        { title: "Cytat", value: "blockquote" },
      ],
      lists: [{ title: "Lista wypunktowana", value: "bullet" }],
      marks: {
        decorators: [
          { title: "Pogrubienie", value: "strong" },
          { title: "Kursywa", value: "em" },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "seoImage",
    }),
    defineArrayMember({
      type: "code",
    }),
  ],
});
