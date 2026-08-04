import { defineField, defineType } from "sanity";

export const performingGroup = defineType({
  name: "performingGroup",
  title: "Performing group",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "isCompanyTrack",
      title: "CORE Dance Company track",
      type: "boolean",
      initialValue: false,
      description: "Junior, Teen, Senior, Black/Silver, Production, etc.",
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
      name: "competitionNotes",
      title: "Competition / convention notes",
      type: "text",
      rows: 3,
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
    select: {
      title: "name",
      subtitle: "ageRange",
      media: "image",
      active: "active",
      isCompanyTrack: "isCompanyTrack",
    },
    prepare({ title, subtitle, media, active, isCompanyTrack }) {
      const bits = [
        isCompanyTrack ? "CDC track" : null,
        active === false ? "archived" : null,
      ]
        .filter(Boolean)
        .join(" · ");
      return {
        title,
        subtitle: [subtitle, bits].filter(Boolean).join(" · "),
        media,
      };
    },
  },
});
