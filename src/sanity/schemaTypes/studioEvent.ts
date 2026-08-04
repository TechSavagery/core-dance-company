import { defineField, defineType } from "sanity";

export const studioEvent = defineType({
  name: "studioEvent",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "startDate",
      title: "Start date",
      type: "date",
    }),
    defineField({
      name: "endDate",
      title: "End date",
      type: "date",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Closed / holiday", value: "closed" },
          { title: "Series", value: "series" },
          { title: "Performance", value: "performance" },
          { title: "Registration", value: "registration" },
          { title: "Other", value: "other" },
        ],
      },
    }),
    defineField({
      name: "notes",
      title: "Notes",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "active",
      title: "Active",
      type: "boolean",
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: "Start date",
      name: "startDateAsc",
      by: [{ field: "startDate", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "startDate", category: "category", active: "active" },
    prepare({ title, subtitle, category, active }) {
      return {
        title: active === false ? `${title} (archived)` : title,
        subtitle: [subtitle, category].filter(Boolean).join(" · "),
      };
    },
  },
});
