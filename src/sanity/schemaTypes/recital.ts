import { defineField, defineType } from "sanity";

export const recital = defineType({
  name: "recital",
  title: "Recital / showcase",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
      description: 'e.g. "ENCORE 26"',
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
    }),
    defineField({
      name: "venue",
      title: "Venue",
      type: "string",
    }),
    defineField({
      name: "showDates",
      title: "Show dates / times",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "rehearsalWindow",
      title: "Rehearsal window",
      type: "string",
    }),
    defineField({
      name: "fees",
      title: "Fees",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "amount", title: "Amount", type: "string" }),
            defineField({ name: "dueDate", title: "Due date", type: "string" }),
          ],
          preview: {
            select: { title: "label", subtitle: "amount" },
          },
        },
      ],
    }),
    defineField({
      name: "body",
      title: "Body copy",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "sortOrder",
      title: "Sort order",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "active",
      title: "Active",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "venue", active: "active" },
    prepare({ title, subtitle, active }) {
      return {
        title: active === false ? `${title} (archived)` : title,
        subtitle,
      };
    },
  },
});
