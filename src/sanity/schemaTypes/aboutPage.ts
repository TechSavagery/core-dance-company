import { UsersIcon } from "@sanity/icons/Users";
import { defineArrayMember, defineField, defineType } from "sanity";
import { imageField, sectionHeadingField, seoField } from "./fields";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  icon: UsersIcon,
  groups: [
    { name: "story", title: "Our story", default: true },
    { name: "values", title: "What we stand for" },
    { name: "timeline", title: "Timeline" },
    { name: "seo", title: "Search & sharing" },
  ],
  fields: [
    sectionHeadingField({ name: "heading", title: "Page heading", group: "story" }),
    imageField({ name: "image", title: "Photo", group: "story", required: true }),
    defineField({
      name: "badgeHeadline",
      title: "Photo badge â€” large text",
      type: "string",
      group: "story",
      description: "The red badge on the photo, e.g. 15 Years.",
    }),
    defineField({
      name: "badgeText",
      title: "Photo badge â€” small text",
      type: "string",
      group: "story",
      description: "e.g. Voted Best of SLO",
    }),
    defineField({
      name: "story",
      title: "Story",
      type: "array",
      group: "story",
      description: "One entry per paragraph.",
      of: [defineArrayMember({ type: "text", rows: 6 })],
    }),
    defineField({
      name: "signOff",
      title: "Sign-off",
      type: "string",
      group: "story",
      description: "Also shown on the Home page, e.g. SHINE!",
    }),
    defineField({ name: "ownerName", title: "Owner name", type: "string", group: "story" }),
    defineField({ name: "ownerTitle", title: "Owner title", type: "string", group: "story" }),

    defineField({ name: "valuesTitle", title: "Section heading", type: "string", group: "values" }),
    defineField({
      name: "values",
      title: "Values",
      type: "array",
      group: "values",
      description: "Numbered automatically in the order shown here.",
      of: [
        defineArrayMember({
          type: "object",
          name: "value",
          fields: [
            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title", subtitle: "description" } },
        }),
      ],
    }),

    defineField({ name: "timelineTitle", title: "Section heading", type: "string", group: "timeline" }),
    defineField({
      name: "timeline",
      title: "Milestones",
      type: "array",
      group: "timeline",
      of: [
        defineArrayMember({
          type: "object",
          name: "milestone",
          fields: [
            defineField({ name: "year", title: "Year", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "year", subtitle: "title" } },
        }),
      ],
    }),

    seoField(),
  ],
  preview: {
    prepare: () => ({ title: "About page" }),
  },
});
