/* empty css                          */
import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, u as unescapeHTML } from '../astro_BD0Lb4GF.mjs';
import 'kleur/colors';
import { c as filterPostsByAuthor, b as $$BaseLayout, $ as $$Index, d as $$PreviewPanel } from './_page__BKngyi8y.mjs';
import 'clsx';
/* empty css                                 */

const $$Astro$1 = createAstro("https://mordecai-law.com/");
const $$ProfilePicture = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
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

const $$Astro = createAstro("https://mordecai-law.com/");
const $$MarkdownAuthorLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownAuthorLayout;
  var allPosts = [];
  try {
    allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({}), () => "../pages/posts/*.md");
  } catch (error) {
    allPosts = [];
  }
  const { frontmatter } = Astro2.props;
  var selectedPosts = filterPostsByAuthor(frontmatter.author, allPosts);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.author, "customDescription": frontmatter.bio }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="banner-title-area"> <div class="banner-title-overlay"></div> ${renderComponent($$result2, "NavBar", $$Index, {})} <div class="container w-container"> <div class="banner-title-wrap"> ${frontmatter.profile_picture && renderTemplate`${renderComponent($$result2, "FeaturedImage", $$ProfilePicture, { "defaultImg": frontmatter.profile_picture, "altText": frontmatter.author })}`} <h1 class="banner-area-title">Posts by ${frontmatter.author}</h1> <img src="/assets/icons/banner-title-separator.svg" loading="lazy" decoding="async" alt="Banner Title Separator" class="mx-auto"> </div> </div> </div> <div class="blog-section"> <div class="container w-container"> <div class="blog-content-wrap"> <div class="w-dyn-list"> <div role="list" class="w-dyn-items w-row"> <!-- Blog List  --> ${selectedPosts && selectedPosts.length > 0 ? renderTemplate`<div class=""> ${selectedPosts.map(async (post) => {
    return renderTemplate`${renderComponent($$result2, "BlogPreview", $$PreviewPanel, { ...post.frontmatter, "url": post.url })}`;
  })} </div>` : renderTemplate`<h2 class="text-center text-2xl my-5">${frontmatter.author} has not written any posts yet.</h2>`} </div> </div> </div> </div> </div> ` })}`;
}, "D:/Astro/eli-mordecai/src/layout/MarkdownAuthorLayout.astro", void 0);

const html = "";

				const frontmatter = {"layout":"../../layout/MarkdownAuthorLayout.astro","author":"Eli Mordecai","bio":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","profile_picture":"/assets/images/authors/eli_mordecai.webp"};
				const file = "D:/Astro/eli-mordecai/src/pages/author_profile/eli_mordecai.md";
				const url = "/author_profile/eli_mordecai";
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownAuthorLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
