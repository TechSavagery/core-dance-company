import { defineField, type FieldDefinition } from "sanity";

type FieldOptions = {
  name: string;
  title: string;
  description?: string;
  group?: string | string[];
  required?: boolean;
};

const LINK_PATTERN = /^(\/|https?:\/\/|mailto:|tel:)/;

export function linkField({ name, title, description, group, required }: FieldOptions): FieldDefinition {
  return defineField({
    name,
    title,
    type: "string",
    group,
    description:
      description ??
      "A page on this site (like /about) or a full web address (like https://…).",
    validation: (rule) => {
      const base = rule.custom((value) =>
        !value || LINK_PATTERN.test(value)
          ? true
          : "Start with / for a page on this site, or https:// for another website.",
      );
      return required ? base.required() : base;
    },
  });
}

export function imageField({ name, title, description, group, required }: FieldOptions): FieldDefinition {
  return defineField({
    name,
    title,
    type: "image",
    group,
    description:
      description ??
      "After uploading, click the crop icon to choose the focal point that should stay visible.",
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        title: "Image description",
        type: "string",
        description: "Describe the photo for screen readers and search engines.",
      }),
    ],
    validation: required ? (rule) => rule.required() : undefined,
  });
}

export function textField({
  name,
  title,
  description,
  group,
  required,
  rows,
}: FieldOptions & { rows?: number }): FieldDefinition {
  return defineField({
    name,
    title,
    type: rows ? "text" : "string",
    rows,
    group,
    description,
    validation: required ? (rule) => rule.required() : undefined,
  } as FieldDefinition);
}

export function sectionHeadingField({ name, title, group, description }: FieldOptions): FieldDefinition {
  return defineField({
    name,
    title,
    type: "sectionHeading",
    group,
    description,
    options: { collapsible: true, collapsed: false },
  });
}

export function seoField(group = "seo"): FieldDefinition {
  return defineField({
    name: "seo",
    title: "Search & sharing",
    type: "seo",
    group,
  });
}
