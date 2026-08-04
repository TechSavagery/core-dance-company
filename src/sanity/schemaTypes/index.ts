import type { SchemaTypeDefinition } from "sanity";
import { adultOffering } from "./adultOffering";
import { camp } from "./camp";
import { danceLevel } from "./danceLevel";
import { danceStyle } from "./danceStyle";
import { performingGroup } from "./performingGroup";
import { person } from "./person";
import { program } from "./program";
import { recital } from "./recital";
import { siteSettings } from "./siteSettings";
import { studioEvent } from "./studioEvent";
import { tuitionPolicy } from "./tuitionPolicy";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
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
