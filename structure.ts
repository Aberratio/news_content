import { StructureBuilder } from "sanity/structure";
import { CogIcon } from "@sanity/icons";

const singletonListItem = (
  S: StructureBuilder,
  typeName: string,
  title?: string
) =>
  S.listItem()
    .title(title || typeName)
    .id(typeName)
    .child(
      S.document()
        .schemaType(typeName)
        .documentId(typeName)
        .title(title || typeName)
    );

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Kontent")
    .items([
      S.listItem()
        .title("Ustawienia")
        .icon(CogIcon)
        .child(
          S.list()
            .title("Ustawienia")
            .items([ 
              singletonListItem(S, "firstSite", "Pierwsza strona"),
              singletonListItem(S, "mainTopic", "Temat główny"),
              singletonListItem(S, "visitCounter", "Licznik odwiedzin"),
              singletonListItem(S, "pinnedPost", "Przypięta publikacja"),
            ])
        ),
      S.listItem()
        .title("Reklamy")
        .icon(CogIcon)
        .child(
          S.list()
            .title("Ustawienia")
            .items([
              singletonListItem(S, "adds", "Reklamy na stronie"),
              S.listItem()
                .title("Archiwum reklamy boxowe")
                .child(
                  S.documentList()
                    .title("Reklamy boxowe")
                    .filter('_type == "boxAdd"')
                ),
              S.listItem()
                .title("Archiwum reklamy banerowych")
                .child(
                  S.documentList()
                    .title("Reklamy baneorwe")
                    .filter('_type == "bannerAdd"')
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Wszystkie publikacje")
        .child(
          S.documentList()
            .title("Wszystkie publikacje")
            .filter('_type == "post"')
        ),
      S.listItem()
        .title("Filtrowane publikacje")
        .child(
          S.list()
            .title("Filtry")
            .items([
              S.listItem()
                .title("Kategorie")
                .child(
                  S.documentTypeList("category")
                    .title("Publikacje według kategorii")
                    .child((categoryId) =>
                      S.documentList()
                        .title("Publikacje")
                        .filter(
                          '_type == "post" && $categoryId in categories[]._ref'
                        )
                        .params({ categoryId })
                    )
                ),
              S.listItem()
                .title("Autorzy")
                .child(
                  S.documentTypeList("author")
                    .title("Publikacje według autorów")
                    .child((authorId) =>
                      S.documentList()
                        .title("Publikacje")
                        .filter('_type == "post" && $authorId == author._ref')
                        .params({ authorId })
                    )
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Autorzy")
        .child(S.documentList().title("Autorzy").filter('_type == "author"')),
      S.divider(),
      S.listItem()
        .title("Zakładki")
        .child(S.documentList().title("Zakładki").filter('_type == "tab"')),
      S.listItem()
        .title("Kategorie")
        .child(
          S.documentList().title("Kategorie").filter('_type == "category"')
        ),
      S.divider(),
      S.listItem()
        .title("Komenatrze")
        .child(
          S.documentList().title("Komenatrze").filter('_type == "comment"')
        ),
    ]);
