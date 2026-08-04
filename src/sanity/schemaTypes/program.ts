import { defineField, defineType } from "sanity";

export const program = defineType({
  name: "program",
  title: "Program / pathway",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ageRange",
      title: "Age range",
      type: "string",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "durationNotes",
      title: "Duration / notes",
      type: "string",
      description: 'e.g. "5–10 week themed series"',
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA label",
      type: "string",
    }),
    defineField({
      name: "ctaHref",
      title: "CTA link",
      type: "string",
    }),
    defineField({
      name: "onHold",
      title: "On hold",
      type: "boolean",
      initialValue: false,
      description: 'e.g. Beginning Series currently "check back soon"',
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
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
  orderings: [
    {
      title: "Sort order",
      name: "sortOrderAsc",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "ageRange", media: "image", active: "active", onHold: "onHold" },
    prepare({ title, subtitle, media, active, onHold }) {
      const flags = [
        active === false ? "archived" : null,
        onHold ? "on hold" : null,
      ]
        .filter(Boolean)
        .join(", ");
      return {
        title: flags ? `${title} (${flags})` : title,
        subtitle,
        media,
      };
    },
  },
});
