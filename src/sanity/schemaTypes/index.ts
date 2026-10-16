import type { SchemaTypeDefinition } from "sanity";
import { aboutPage } from "./aboutPage";
import { adultOffering } from "./adultOffering";
import { camp } from "./camp";
import { classesPage } from "./classesPage";
import { contactPage } from "./contactPage";
import { danceLevel } from "./danceLevel";
import { danceStyle } from "./danceStyle";
import { homePage } from "./homePage";
import { sectionHeading, seo } from "./objects";
import { performingGroup } from "./performingGroup";
import { person } from "./person";
import { program } from "./program";
import { recital } from "./recital";
import { siteSettings } from "./siteSettings";
import { studioEvent } from "./studioEvent";
import { tuitionPolicy } from "./tuitionPolicy";

export const singletonTypes = new Set([
  "homePage",
  "aboutPage",
  "classesPage",
  "contactPage",
  "siteSettings",
  "tuitionPolicy",
]);

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage,
    aboutPage,
    classesPage,
    contactPage,
    siteSettings,
    sectionHeading,
    seo,
    program,
    danceStyle,
    danceLevel,
    performingGroup,
    person,
    studioEvent,
    camp,
    adultOffering,
    recital,
    tuitionPolicy,
  ],
};
