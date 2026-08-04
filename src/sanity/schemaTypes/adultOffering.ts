import { defineField, defineType } from "sanity";

export const adultOffering = defineType({
  name: "adultOffering",
  title: "Adult & COREBarre",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "offeringType",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Adult class", value: "adultClass" },
          { title: "COREBarre", value: "coreBarre" },
        ],
      },
    }),
    defineField({
      name: "schedule",
      title: "Schedule blurb",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "pricing",
      title: "Pricing",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "amount", title: "Amount", type: "string" }),
          ],
          preview: {
            select: { title: "label", subtitle: "amount" },
          },
        },
      ],
    }),
    defineField({
      name: "bookingUrl",
      title: "Booking URL",
      type: "url",
      description: "Studio Bookings / ClassPass / Studio Pro link",
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
  preview: {
    select: { title: "name", subtitle: "schedule", offeringType: "offeringType", active: "active" },
    prepare({ title, subtitle, offeringType, active }) {
      return {
        title: active === false ? `${title} (archived)` : title,
        subtitle: [offeringType, subtitle].filter(Boolean).join(" · "),
      };
    },
  },
});
