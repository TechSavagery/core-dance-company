import { ArchiveIcon } from "@sanity/icons/Archive";
import { CogIcon } from "@sanity/icons/Cog";
import { EnvelopeIcon } from "@sanity/icons/Envelope";
import { HomeIcon } from "@sanity/icons/Home";
import { StarIcon } from "@sanity/icons/Star";
import { UsersIcon } from "@sanity/icons/Users";
import type { StructureBuilder, StructureResolver } from "sanity/structure";

function singleton(S: StructureBuilder, type: string, title: string, icon: typeof HomeIcon) {
  return S.listItem()
    .title(title)
    .id(type)
    .icon(icon)
    .child(S.document().schemaType(type).documentId(type).title(title));
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Website")
    .items([
      singleton(S, "homePage", "Home page", HomeIcon),
      singleton(S, "aboutPage", "About page", UsersIcon),
      singleton(S, "classesPage", "Classes page", StarIcon),
      singleton(S, "contactPage", "Contact page", EnvelopeIcon),
      S.divider(),
      singleton(S, "siteSettings", "Site settings", CogIcon),
      S.divider(),
      S.listItem()
        .title("Not on the website yet")
        .id("notOnWebsite")
        .icon(ArchiveIcon)
        .child(
          S.list()
            .title("Not on the website yet")
            .items([
              S.documentTypeListItem("program").title("Programs & pathways"),
              S.documentTypeListItem("danceStyle").title("Dance styles"),
              S.documentTypeListItem("danceLevel").title("Dance levels"),
              S.documentTypeListItem("performingGroup").title("Performing groups"),
              S.divider(),
              S.documentTypeListItem("person").title("People"),
              S.documentTypeListItem("studioEvent").title("Events"),
              S.divider(),
              S.documentTypeListItem("camp").title("Camps"),
              S.documentTypeListItem("adultOffering").title("Adult & COREBarre"),
              S.documentTypeListItem("recital").title("Recitals (ENCORE)"),
              S.divider(),
              singleton(S, "tuitionPolicy", "Tuition & policies", ArchiveIcon),
            ]),
        ),
    ]);
