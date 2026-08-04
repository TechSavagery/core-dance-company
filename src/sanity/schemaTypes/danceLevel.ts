import { defineField, defineType } from "sanity";

export const danceLevel = defineType({
  name: "danceLevel",
  title: "Dance level",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
      description: 'e.g. "Ballet 2/3" or "Tap Fundamentals"',
    }),
    defineField({
      name: "style",
      title: "Dance style",
      type: "reference",
      to: [{ type: "danceStyle" }],
    }),
    defineField({
      name: "levelCode",
      title: "Level code",
      type: "string",
      description: 'Short code for sorting, e.g. "ballet-2-3"',
    }),
    defineField({
      name: "ageNotes",
      title: "Age notes",
      type: "string",
    }),
    defineField({
      name: "placementNotes",
      title: "Placement notes",
      type: "string",
      description: 'e.g. "Teacher Placement"',
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
      styleName: "style.name",
      active: "active",
    },
    prepare({ title, styleName, active }) {
      return {
        title: active === false ? `${title} (archived)` : title,
        subtitle: styleName,
      };
    },
  },
});
