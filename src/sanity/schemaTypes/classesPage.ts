import { StarIcon } from "@sanity/icons/Star";
import { defineArrayMember, defineField, defineType } from "sanity";
import { imageField, sectionHeadingField, seoField } from "./fields";

export const classesPage = defineType({
  name: "classesPage",
  title: "Classes page",
  type: "document",
  icon: StarIcon,
  groups: [
    { name: "classes", title: "Classes & pathways", default: true },
    { name: "styles", title: "Styles we offer" },
    { name: "seo", title: "Search & sharing" },
  ],
  fields: [
    sectionHeadingField({ name: "heading", title: "Page heading", group: "classes" }),
    defineField({
      name: "pathways",
      title: "Classes & pathways",
      type: "array",
      group: "classes",
      description:
        "Numbered automatically in this order. Also used for the Journey slider on the Home page. Drag to reorder.",
      of: [
        defineArrayMember({
          type: "object",
          name: "pathway",
          fields: [
            defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "ageRange", title: "Ages", type: "string", description: "e.g. Ages 2â€“6" }),
            defineField({ name: "summary", title: "Description", type: "text", rows: 4 }),
            imageField({ name: "image", title: "Photo", required: true }),
            defineField({
              name: "onHold",
              title: "Class on hold",
              type: "boolean",
              description: "Replaces the Register button with an on-hold notice.",
              initialValue: false,
            }),
          ],
          preview: {
            select: { title: "name", subtitle: "ageRange", media: "image", onHold: "onHold" },
            prepare: ({ title, subtitle, media, onHold }) => ({
              title: onHold ? `${title} (on hold)` : title,
              subtitle,
              media,
            }),
          },
        }),
      ],
    }),
    defineField({
      name: "registerButtonLabel",
      title: "Register button text",
      type: "string",
      group: "classes",
      description: "Links to the class registration link in Site settings.",
    }),
    defineField({
      name: "onHoldLabel",
      title: "On-hold notice",
      type: "string",
      group: "classes",
    }),

    defineField({ name: "stylesTitle", title: "Section heading", type: "string", group: "styles" }),
    defineField({ name: "stylesIntro", title: "Intro", type: "text", rows: 2, group: "styles" }),
    defineField({
      name: "styles",
      title: "Styles",
      type: "array",
      group: "styles",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "stylesButtonLabel",
      title: "Parent Portal button text",
      type: "string",
      group: "styles",
    }),
    defineField({
      name: "contactLinkLabel",
      title: "Contact link text",
      type: "string",
      group: "styles",
      description: "Links to the Contact page.",
    }),

    seoField(),
  ],
  preview: {
    prepare: () => ({ title: "Classes page" }),
  },
});
