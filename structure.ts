import { StructureBuilder } from "sanity/structure";
import { FcSettings } from "react-icons/fc";
import { FcNews } from "react-icons/fc";
import { FcFilledFilter } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import { FcGenealogy } from "react-icons/fc";
import { FcFlowChart } from "react-icons/fc";
import { FcComments } from "react-icons/fc";
import { FcInTransit } from "react-icons/fc";
import { FcTemplate } from "react-icons/fc";
import { FcReuse } from "react-icons/fc";
import { IconType } from "react-icons";
import { FcGallery } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { FcPositiveDynamic } from "react-icons/fc";
import { BsFillPinAngleFill } from "react-icons/bs";
import { IoBuildOutline } from "react-icons/io5";

const singletonListItem = (
  S: StructureBuilder,
  typeName: string,
  title: string,
  icon: IconType
) =>
  S.listItem()
    .title(title || typeName)
    .id(typeName)
    .icon(icon)
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
        .icon(FcSettings)
        .child(
          S.list()
            .title("Ustawienia")
            .items([
              singletonListItem(S, "firstSite", "Pierwsza strona", FcGallery),
              singletonListItem(S, "mainTopic", "Temat główny", FcIdea),
              singletonListItem(
                S,
                "visitCounter",
                "Licznik odwiedzin",
                FcPositiveDynamic
              ),
              singletonListItem(
                S,
                "pinnedPost",
                "Przypięta publikacja",
                BsFillPinAngleFill
              ),
              singletonListItem(S, "generalSeo", "(W budowie)", IoBuildOutline),
            ])
        ),
      S.listItem()
        .title("Reklamy")
        .icon(FcInTransit)
        .child(
          S.list()
            .title("Ustawienia")
            .items([
              singletonListItem(S, "adds", "Reklamy na stronie", FcTemplate),
              S.listItem()
                .title("Archiwum reklamy boxowe")
                .icon(FcReuse)
                .child(
                  S.documentList()
                    .title("Reklamy boxowe")
                    .filter('_type == "boxAdd"')
                ),
              S.listItem()
                .title("Archiwum reklamy banerowych")
                .icon(FcReuse)
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
        .icon(FcNews)
        .child(
          S.documentList()
            .title("Wszystkie publikacje")
            .filter('_type == "post"')
        ),
      S.listItem()
        .title("Filtrowane publikacje")
        .icon(FcFilledFilter)
        .child(
          S.list()
            .title("Filtry")
            .items([
              S.listItem()
                .title("Kategorie")
                .icon(FcFlowChart)
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
                .icon(FcBusinesswoman)
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
        .icon(FcBusinesswoman)
        .child(S.documentList().title("Autorzy").filter('_type == "author"')),
      S.divider(),
      S.listItem()
        .title("Kategorie")
        .icon(FcFlowChart)
        .child(
          S.documentList().title("Kategorie").filter('_type == "category"')
        ),
      S.listItem()
        .icon(FcGenealogy)
        .title("Zakładki")
        .child(S.documentList().title("Zakładki").filter('_type == "tab"')),
      S.divider(),
      S.listItem()
        .title("Komenatrze")
        .icon(FcComments)
        .child(
          S.documentList().title("Komenatrze").filter('_type == "comment"')
        ),
    ]);
