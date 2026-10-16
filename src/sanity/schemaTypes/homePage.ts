import { HomeIcon } from "@sanity/icons/Home";
import { defineArrayMember, defineField, defineType } from "sanity";
import { imageField, linkField, sectionHeadingField, seoField } from "./fields";

export const homePage = defineType({
  name: "homePage",
  title: "Home page",
  type: "document",
  icon: HomeIcon,
  groups: [
    { name: "hero", title: "Hero slider", default: true },
    { name: "about", title: "About" },
    { name: "gallery", title: "Gallery" },
    { name: "programs", title: "Programs" },
    { name: "team", title: "Team" },
    { name: "video", title: "Video" },
    { name: "highlights", title: "Highlights" },
    { name: "testimonials", title: "Testimonials" },
    { name: "journey", title: "Journey" },
    { name: "news", title: "Whatâ€™s happening" },
    { name: "seo", title: "Search & sharing" },
  ],
  fields: [
    defineField({
      name: "heroSlides",
      title: "Hero slides",
      type: "array",
      group: "hero",
      description: "The full-width slideshow at the top of the page. Drag to reorder.",
      of: [
        defineArrayMember({
          type: "object",
          name: "heroSlide",
          fields: [
            defineField({
              name: "headingLine1",
              title: "Heading â€” solid line",
              type: "string",
              description: "e.g. Shine",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "headingLine2",
              title: "Heading â€” outlined line",
              type: "string",
              description: "e.g. With Us",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "navLabel",
              title: "Slide label",
              type: "string",
              description: "Short text next to the slide number in the bottom bar.",
              validation: (rule) => rule.required(),
            }),
            imageField({ name: "image", title: "Background photo", required: true }),
            defineField({ name: "buttonLabel", title: "Button text", type: "string", validation: (rule) => rule.required() }),
            linkField({ name: "buttonLink", title: "Button link", required: true }),
          ],
          preview: {
            select: { line1: "headingLine1", line2: "headingLine2", subtitle: "navLabel", media: "image" },
            prepare: ({ line1, line2, subtitle, media }) => ({
              title: [line1, line2].filter(Boolean).join(" "),
              subtitle,
              media,
            }),
          },
        }),
      ],
      validation: (rule) => rule.min(1).max(5),
    }),

    sectionHeadingField({ name: "aboutHeading", title: "Section heading", group: "about" }),
    imageField({ name: "aboutImage", title: "Photo", group: "about", required: true }),
    defineField({
      name: "aboutText",
      title: "Story preview",
      type: "array",
      group: "about",
      description: "Short paragraphs next to the photo. The sign-off and owner name come from the About page.",
      of: [defineArrayMember({ type: "text", rows: 4 })],
    }),
    defineField({
      name: "aboutButtonLabel",
      title: "Button text",
      type: "string",
      group: "about",
      description: "This button goes to the About page.",
    }),

    sectionHeadingField({ name: "galleryHeading", title: "Section heading", group: "gallery" }),
    defineField({
      name: "galleryItems",
      title: "Gallery panels",
      type: "array",
      group: "gallery",
      description: "Tall photo panels that expand on hover. Works best with 5.",
      of: [
        defineArrayMember({
          type: "object",
          name: "galleryItem",
          fields: [
            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "string" }),
            imageField({ name: "image", title: "Photo", required: true }),
            linkField({ name: "link", title: "Link" }),
          ],
          preview: { select: { title: "title", subtitle: "description", media: "image" } },
        }),
      ],
    }),

    sectionHeadingField({ name: "programsHeading", title: "Section heading", group: "programs" }),
    defineField({
      name: "programCards",
      title: "Program cards",
      type: "array",
      group: "programs",
      description: "Each card links to the Classes page.",
      of: [
        defineArrayMember({
          type: "object",
          name: "programCard",
          fields: [
            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
            imageField({ name: "image", title: "Photo", required: true }),
          ],
          preview: { select: { title: "title", subtitle: "description", media: "image" } },
        }),
      ],
    }),

    sectionHeadingField({ name: "teamHeading", title: "Section heading", group: "team" }),
    defineField({
      name: "teamMembers",
      title: "Team members",
      type: "array",
      group: "team",
      description: "Shown in a staggered row of three on desktop.",
      of: [
        defineArrayMember({
          type: "object",
          name: "teamMember",
          fields: [
            defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "role", title: "Role", type: "string" }),
            imageField({ name: "photo", title: "Photo", required: true }),
          ],
          preview: { select: { title: "name", subtitle: "role", media: "photo" } },
        }),
      ],
    }),

    sectionHeadingField({ name: "videoHeading", title: "Section heading", group: "video" }),
    imageField({
      name: "videoImage",
      title: "Cover photo",
      group: "video",
      description: "The photo shown behind the play button.",
      required: true,
    }),
    defineField({
      name: "videoLink",
      title: "Video link",
      type: "url",
      group: "video",
      description: "Where the play button goes, e.g. a YouTube video or channel.",
      validation: (rule) => rule.required(),
    }),

    sectionHeadingField({ name: "highlightsHeading", title: "Section heading", group: "highlights" }),
    defineField({
      name: "highlightCards",
      title: "Highlight cards",
      type: "array",
      group: "highlights",
      of: [
        defineArrayMember({
          type: "object",
          name: "highlightCard",
          fields: [
            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
            imageField({ name: "image", title: "Photo", required: true }),
            linkField({ name: "link", title: "Link" }),
          ],
          preview: { select: { title: "title", subtitle: "description", media: "image" } },
        }),
      ],
    }),

    sectionHeadingField({ name: "testimonialsHeading", title: "Section heading", group: "testimonials" }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      group: "testimonials",
      of: [
        defineArrayMember({
          type: "object",
          name: "testimonial",
          fields: [
            defineField({ name: "quote", title: "Quote", type: "text", rows: 3, validation: (rule) => rule.required() }),
            defineField({ name: "name", title: "Name", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "role", title: "Who they are", type: "string", description: "e.g. Parent" }),
          ],
          preview: { select: { title: "name", subtitle: "quote" } },
        }),
      ],
    }),

    sectionHeadingField({
      name: "journeyHeading",
      title: "Section heading",
      group: "journey",
      description:
        "The cards in this slider come from Classes page â†’ Classes & pathways. Edit, add or reorder them there.",
    }),
    defineField({
      name: "journeyButtonLabel",
      title: "Card button text",
      type: "string",
      group: "journey",
      description: "Appears when hovering over a card.",
    }),
    defineField({
      name: "journeyOnHoldLabel",
      title: "Card button text for classes on hold",
      type: "string",
      group: "journey",
    }),

    sectionHeadingField({ name: "newsHeading", title: "Section heading", group: "news" }),
    defineField({
      name: "newsCards",
      title: "News cards",
      type: "array",
      group: "news",
      of: [
        defineArrayMember({
          type: "object",
          name: "newsCard",
          fields: [
            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "category", title: "Category", type: "string", description: "e.g. Events" }),
            defineField({ name: "when", title: "When", type: "string", description: "e.g. June" }),
            defineField({ name: "excerpt", title: "Short description", type: "text", rows: 2 }),
            imageField({ name: "image", title: "Photo", required: true }),
            linkField({ name: "link", title: "Link" }),
          ],
          preview: { select: { title: "title", subtitle: "category", media: "image" } },
        }),
      ],
    }),

    seoField(),
  ],
  preview: {
    prepare: () => ({ title: "Home page" }),
  },
});
