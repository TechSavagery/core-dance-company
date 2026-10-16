import { defineField, defineType } from "sanity";
import { linkField } from "./fields";

export const sectionHeading = defineType({
  name: "sectionHeading",
  title: "Section heading",
  type: "object",
  fields: [
    defineField({
      name: "backgroundWord",
      title: "Large background word",
      type: "string",
      description: "The oversized outlined word behind the heading, e.g. Gallery.",
    }),
    defineField({
      name: "title",
      title: "Heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subheading",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "buttonLabel",
      title: "Button text",
      type: "string",
      description: "Leave empty to hide the button.",
    }),
    linkField({ name: "buttonLink", title: "Button link" }),
  ],
  preview: {
    select: { title: "title", subtitle: "backgroundWord" },
  },
});

export const seo = defineType({
  name: "seo",
  title: "Search & sharing",
  type: "object",
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({
      name: "title",
      title: "Browser tab title",
      type: "string",
      description: "Shown in the browser tab and Google results. “ | CORE Dance” is added automatically.",
    }),
    defineField({
      name: "description",
      title: "Search description",
      type: "text",
      rows: 3,
      description: "One or two sentences shown under the title in Google results.",
      validation: (rule) => rule.max(200),
    }),
  ],
});
