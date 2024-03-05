import { defineField, defineType } from "sanity";

export default defineType({
  name: "mainTopic",
  title: "Temat główny",
  type: "document",
  fields: [
    defineField({
      name: "show",
      validation: (Rule) => Rule.required(),
      title: "Pokaż temat główny",
      description: "Wyłączenie tematu głównego spowoduje schowanie całego paska!",
      type: "boolean",
    }),
    defineField({
      name: "topic",
      validation: rule => rule.custom((topic, context) => {
        if (context.document?.show) {
          return topic ? true : "Temat główny jest włączony, więc ta wartość nie może być pusta";
        }

        return true;
      }),
      title: "Temat główny",
      type: "string",
    }),
    defineField({
      name: "post",
      title: "Artykuł powiązany z tematem głównym",
      type: "reference",
      to: { type: "post" },
    }),
  ],
  initialValue: {
    show: false
  }
});
