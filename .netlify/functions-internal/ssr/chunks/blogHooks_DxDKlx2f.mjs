import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_BWzPTXNg.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://mordecai-law.com/");
const $$ProfilePicture = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProfilePicture;
  const {
    defaultImg,
    imgStyle,
    wrapperStyle,
    altText = "image",
    thumbnail = false,
    immediateLoad = false
  } = Astro2.props;
  return renderTemplate`${thumbnail ? renderTemplate`${maybeRenderHead()}<div${addAttribute(wrapperStyle ? wrapperStyle : "bg-transparent mx-auto w-[50px] h-[50px] rounded-full", "class")}><img aria-hidden="true" decoding="async"${addAttribute(immediateLoad ? "eager" : "lazy", "loading")}${addAttribute(defaultImg, "src")}${addAttribute(altText, "alt")}${addAttribute(imgStyle ? imgStyle : "w-full h-full object-fit", "class")}></div>` : renderTemplate`<div${addAttribute(wrapperStyle ? wrapperStyle : "bg-transparent mx-auto w-[300px] h-[300px] rounded-full", "class")}><img aria-hidden="true" decoding="async"${addAttribute(immediateLoad ? "eager" : "lazy", "loading")}${addAttribute(defaultImg, "src")}${addAttribute(altText, "alt")}${addAttribute(imgStyle ? imgStyle : "w-full h-full object-fit", "class")}></div>`}`;
}, "D:/Astro/eli-mordecai/src/components/blogComponent/profile_picture.astro", void 0);

const filterPostsByAuthor = (author, allPosts) => {
  try {
    const filtered = allPosts.filter(
      (post) => author.toLowerCase() === post.frontmatter.author.toLowerCase()
    );
    return filtered;
  } catch (e) {
    console.log("filterPostsByAuthor error: ", e);
    return [];
  }
};
const getAuthorInfoFromArray = (author, authorArray) => {
  try {
    return authorArray.find(
      (val) => val.frontmatter.author.toLowerCase() === author.toLowerCase()
    );
  } catch (e) {
    console.log("getAuthorInfoFromArray error: ", e);
    return null;
  }
};

export { $$ProfilePicture as $, filterPostsByAuthor as f, getAuthorInfoFromArray as g };
