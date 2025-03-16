// adds
import adds from "./adds/adds";
import boxAdd from "./adds/boxAdd";
import bannerAdd from "./adds/bannerAdd";

// articles
import author from "./articles/author";
import comment from "./articles/comment";
import post from "./articles/post";

// navigation
import category from "./navigation/category";
import tab from "./navigation/tab";
import tabAction from "./navigation/tabAction";
// settings
import firstSite from "./settings/firstSite";
import generalConfig from "./settings/generalConfig";
import mainTopic from "./settings/mainTopic";
import pinnedPost from "./settings/pinnedPost";
import visitCounter from "./settings/visitCounter";

// one pages
import rules from "./onePages/rules";

// other
import blockContent from "./blockContent";
import cluster from "./objects/cluster";
import clusterItems from "./objects/clusterItems";
import expandedText from "./expandedText";
import seoImage from "./objects/seoImage";

export const schemaTypes = [
  // adds
  adds,
  boxAdd,
  bannerAdd,

  // articles
  author,
  comment,
  post,

  // navigation
  category,
  tab,
  tabAction,
  // settings
  firstSite,
  generalConfig,
  mainTopic,
  pinnedPost,
  visitCounter,

  // one pages
  rules,

  // other
  blockContent,
  cluster,
  clusterItems,
  expandedText,
  seoImage,
];
