import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site settings")
        .id("siteSettings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Site settings"),
        ),
      S.divider(),
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
      S.listItem()
        .title("Tuition & policies")
        .id("tuitionPolicy")
        .child(
          S.document()
            .schemaType("tuitionPolicy")
            .documentId("tuitionPolicy")
            .title("Tuition & policies"),
        ),
    ]);
