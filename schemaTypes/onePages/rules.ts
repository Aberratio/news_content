import { defineField, defineType } from "sanity";
import { FcDocument } from "react-icons/fc";

export default defineType({
  name: "rules",
  title: "Regulamin strony",
  type: "document",
  icon: FcDocument,
  fields: [
    defineField({
      name: "body",
      title: "Treść",
      type: "blockContent",
    }),
  ],
});
