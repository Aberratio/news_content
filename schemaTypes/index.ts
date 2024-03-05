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

// settings 
import firstSite from "./settings/firstSite";
import mainTopic from "./settings/mainTopic";
import pinnedPost from "./settings/pinnedPost";
import visitCounter from "./settings/visitCounter";

// other
import blockContent from "./blockContent"; 
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

  // settings
  firstSite,
  mainTopic,
  pinnedPost,
  visitCounter,

  // other
  blockContent,
  seoImage
];
