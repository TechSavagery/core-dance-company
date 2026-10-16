import { CogIcon } from "@sanity/icons/Cog";
import { defineArrayMember, defineField, defineType } from "sanity";
import { imageField, linkField } from "./fields";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  icon: CogIcon,
  groups: [
    { name: "general", title: "Studio info", default: true },
    { name: "hours", title: "Hours" },
    { name: "links", title: "Links & social" },
    { name: "headerFooter", title: "Header & footer" },
    { name: "banner", title: "â€œDrop us a lineâ€ banner" },
    { name: "stats", title: "Stats" },
    { name: "seo", title: "Search & sharing" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Studio name",
      type: "string",
      group: "general",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      group: "general",
      description: "Shown under the logo in the footer.",
    }),
    defineField({
      name: "phone",
      title: "Phone number",
      type: "string",
      group: "general",
      description: "Written the way it should appear, e.g. (805) 541-2669.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email address",
      type: "string",
      group: "general",
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: "addressLine1",
      title: "Street address",
      type: "string",
      group: "general",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "addressLine2",
      title: "City, state & ZIP",
      type: "string",
      group: "general",
      description: "The map and â€œGet directionsâ€ link use the full address automatically.",
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "hours",
      title: "Office hours",
      type: "array",
      group: "hours",
      description: "Shown on the Contact page. Drag to reorder.",
      of: [
        defineArrayMember({
          type: "object",
          name: "hoursRow",
          fields: [
            defineField({ name: "label", title: "Day(s)", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "time", title: "Hours", type: "string", validation: (rule) => rule.required() }),
          ],
          preview: { select: { title: "label", subtitle: "time" } },
        }),
      ],
    }),

    defineField({
      name: "parentPortalLabel",
      title: "Parent Portal button text",
      type: "string",
      group: "links",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "parentPortalUrl",
      title: "Parent Portal link",
      type: "url",
      group: "links",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "registerUrl",
      title: "Class registration link",
      type: "url",
      group: "links",
      description: "Used by the Register buttons on the Classes page.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram",
      type: "url",
      group: "links",
      description: "Leave any social link empty to hide it.",
    }),
    defineField({ name: "tiktokUrl", title: "TikTok", type: "url", group: "links" }),
    defineField({ name: "youtubeUrl", title: "YouTube", type: "url", group: "links" }),
    defineField({ name: "facebookUrl", title: "Facebook", type: "url", group: "links" }),

    imageField({
      name: "logo",
      title: "Logo",
      group: "headerFooter",
      description: "Used in the header and footer. A square PNG with a transparent background works best.",
      required: true,
    }),
    defineField({
      name: "topBarMessage",
      title: "Top bar message",
      type: "string",
      group: "headerFooter",
      description: "The welcome line above the menu on desktop.",
    }),
    defineField({
      name: "footerPortalText",
      title: "Footer Parent Portal text",
      type: "text",
      rows: 2,
      group: "headerFooter",
    }),
    defineField({
      name: "footerNote",
      title: "Footer bottom line",
      type: "string",
      group: "headerFooter",
      description: "Small text at the bottom left of the footer.",
    }),

    defineField({
      name: "contactBanner",
      title: "â€œDrop us a lineâ€ banner",
      type: "object",
      group: "banner",
      description: "The large photo banner near the bottom of the Home, About and Classes pages.",
      fields: [
        defineField({ name: "heading", title: "Heading", type: "string", validation: (rule) => rule.required() }),
        defineField({ name: "buttonLabel", title: "Button text", type: "string", validation: (rule) => rule.required() }),
        linkField({ name: "buttonLink", title: "Button link", required: true }),
        imageField({ name: "image", title: "Background photo", required: true }),
      ],
    }),

    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      group: "stats",
      description: "The row of big numbers on the Home and About pages.",
      of: [
        defineArrayMember({
          type: "object",
          name: "stat",
          fields: [
            defineField({
              name: "value",
              title: "Number",
              type: "string",
              description: "e.g. 15+ or 2010",
              validation: (rule) => rule.required(),
            }),
            defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        }),
      ],
      validation: (rule) => rule.max(4),
    }),

    defineField({
      name: "seoDescription",
      title: "Default search description",
      type: "text",
      rows: 3,
      group: "seo",
      description: "Used in Google results for any page that doesnâ€™t have its own description.",
      validation: (rule) => rule.max(200),
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site settings" }),
  },
});
