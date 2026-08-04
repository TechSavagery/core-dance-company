import { defineField, defineType } from "sanity";

export const tuitionPolicy = defineType({
  name: "tuitionPolicy",
  title: "Tuition & policies",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Tuition & policies",
    }),
    defineField({
      name: "monthlyRates",
      title: "Monthly rates",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "classCount", title: "Classes / week", type: "string" }),
            defineField({ name: "amount", title: "Amount", type: "string" }),
          ],
          preview: {
            select: { title: "classCount", subtitle: "amount" },
          },
        },
      ],
    }),
    defineField({
      name: "additionalClassRate",
      title: "Each additional class",
      type: "string",
    }),
    defineField({
      name: "dropInRate",
      title: "Drop-in rate",
      type: "string",
    }),
    defineField({
      name: "annualProcessingFee",
      title: "Annual processing fee",
      type: "string",
    }),
    defineField({
      name: "lateFeeNotes",
      title: "Late fee / billing notes",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "sections",
      title: "Policy sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "heading", title: "Heading", type: "string" }),
            defineField({ name: "body", title: "Body", type: "text", rows: 5 }),
          ],
          preview: {
            select: { title: "heading" },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});
