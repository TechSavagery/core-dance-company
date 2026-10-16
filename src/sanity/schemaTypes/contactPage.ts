import { EnvelopeIcon } from "@sanity/icons/Envelope";
import { defineField, defineType } from "sanity";
import { sectionHeadingField, seoField } from "./fields";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact page",
  type: "document",
  icon: EnvelopeIcon,
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "Search & sharing" },
  ],
  fields: [
    sectionHeadingField({
      name: "heading",
      title: "Page heading",
      group: "content",
      description:
        "The address, phone, email, hours and social links on this page come from Site settings, so they match everywhere on the site.",
    }),
    defineField({ name: "studioCardTitle", title: "Address card title", type: "string", group: "content" }),
    defineField({ name: "directionsLabel", title: "Directions link text", type: "string", group: "content" }),
    defineField({ name: "phoneCardTitle", title: "Phone card title", type: "string", group: "content" }),
    defineField({ name: "emailCardTitle", title: "Email card title", type: "string", group: "content" }),
    defineField({ name: "hoursTitle", title: "Hours box title", type: "string", group: "content" }),
    seoField(),
  ],
  preview: {
    prepare: () => ({ title: "Contact page" }),
  },
});
