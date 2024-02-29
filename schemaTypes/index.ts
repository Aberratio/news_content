import blockContent from "./blockContent";
import category from "./navigation/category";
import post from "./articles/post";
import author from "./articles/author";
import firstSite from "./settings/firstSite";
import pinnedPost from "./settings/pinnedPost";
import tab from "./navigation/tab";
import comment from "./articles/comment";
import visitCounter from "./settings/visitCounter";

export const schemaTypes = [
  // articles
  post,
  author,
  comment,

  // navigation
  tab,
  category,

  // settings
  firstSite,
  pinnedPost,
  visitCounter,

  // other
  blockContent,
];
