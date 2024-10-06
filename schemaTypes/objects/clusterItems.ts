import { defineArrayMember, defineType } from "sanity";

export default defineType({
  name: "clusterItems",
  title: "Elementy klastra",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      lists: [{ title: "Lista numeryczna", value: "number" }],
    }),
  ],
});
