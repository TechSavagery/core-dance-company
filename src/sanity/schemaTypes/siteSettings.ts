import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "hours",
      title: "Studio hours",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Day(s)", type: "string" }),
            defineField({ name: "time", title: "Hours", type: "string" }),
          ],
          preview: {
            select: { title: "label", subtitle: "time" },
          },
        },
      ],
    }),
    defineField({
      name: "parentPortalUrl",
      title: "Parent portal URL",
      type: "url",
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
    }),
    defineField({
      name: "tiktokUrl",
      title: "TikTok URL",
      type: "url",
    }),
    defineField({
      name: "youtubeUrl",
      title: "YouTube URL",
      type: "url",
    }),
    defineField({
      name: "facebookUrl",
      title: "Facebook URL",
      type: "url",
    }),
    defineField({
      name: "brandClaims",
      title: "Brand claims",
      type: "array",
      of: [{ type: "string" }],
      description: 'e.g. "Best of SLO — 15 years"',
    }),
    defineField({
      name: "navCtaLabel",
      title: "Seasonal nav CTA label",
      type: "string",
      description: 'e.g. "ENCORE 26" or "Fall Registration"',
    }),
    defineField({
      name: "navCtaHref",
      title: "Seasonal nav CTA link",
      type: "string",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "tagline" },
  },
});
