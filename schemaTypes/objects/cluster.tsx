import React from "react";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "cluster",
  title: "Klaster",
  type: "object",
  fields: [
    defineField({
      name: "blocks",
      type: "array",
      of: [
        defineArrayMember({
          title: "Block",
          type: "block",
          lists: [{ title: "Lista numeryczna", value: "number" }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      blocks: "blocks",
    },
    prepare(value) {
      const block = (value.blocks || []).find(
        (block: any) => block._type === "block"
      );

      return {
        media: (
          <div style={{ fontSize: "1.5rem", height: "200px" }}>
            {block
              ? block.children
                  .filter((child: any) => child._type === "span")
                  .map((span: any) => span.text)
                  .join("")
              : "Brak treści"}
          </div>
        ),
      };
    },
  },
});
