import { defineField, defineType } from "sanity";

export const camp = defineType({
  name: "camp",
  title: "Camp",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
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
      name: "ages",
      title: "Ages / grades",
      type: "string",
    }),
    defineField({
      name: "schedule",
      title: "Daily schedule",
      type: "string",
      description: 'e.g. "9am–3pm"',
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
    }),
    defineField({
      name: "earlyBirdPrice",
      title: "Early-bird price",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "registrationUrl",
      title: "Registration URL",
      type: "url",
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
      description: "Uncheck to archive (hidden from public site later)",
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
    select: { title: "name", subtitle: "ages", media: "image", active: "active" },
    prepare({ title, subtitle, media, active }) {
      return {
        title: active === false ? `${title} (archived)` : title,
        subtitle,
        media,
      };
    },
  },
});
