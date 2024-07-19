/* empty css                         */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, u as unescapeHTML } from './astro/server_BWzPTXNg.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_euznmiol.mjs';
import { $ as $$Index } from './index_Z6KWOvVW.mjs';
import { f as filterPostsByAuthor, $ as $$ProfilePicture } from './blogHooks_DxDKlx2f.mjs';
import 'clsx';
/* empty css                                */

const $$Astro$1 = createAstro("https://mordecai-law.com/");
const $$PreviewPanel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PreviewPanel;
  const {
    pubDate,
    category,
    title,
    url,
    excerpt,
    featured_image,
    phoneImg,
    mediumTabImg,
    tabletImg,
    altText = "Blog Image"
  } = Astro2.props;
  const category_url = category.replace(" ", "-").toLowerCase();
  return renderTemplate`${maybeRenderHead()}<div role="listitem" class="w-dyn-item w-col w-col-4"> <div class="blog-item"> <a${addAttribute(url, "href")} class="w-inline-block cursor-pointer"> <img${addAttribute(featured_image, "src")} loading="lazy"${addAttribute(altText, "alt")} sizes="(max-width: 479px) 83vw, (max-width: 767px) 87vw, (max-width: 991px) 29vw, (max-width: 1279px) 30vw, (max-width: 1439px) 31vw, (max-width: 1919px) 440px, 453.328125px"${addAttribute(`
                    ${phoneImg ? phoneImg + " 500w," : ""}
                    ${mediumTabImg ? mediumTabImg + " 800w," : ""}
                    ${tabletImg ? tabletImg + " 1080w," : ""}
                    ${featured_image} 1200w
                `, "srcset")}> </a> <div class="blog-meta-wrap"> <div class="law-type-wrap"> <a${addAttribute(`/blog/category/${category_url}/1`, "href")} class="blog-law-type cursor-pointer">${category}</a> </div> <div class="meta-separator"><p class="meta-separator-line">|</p></div> <div class="date-wrap"><p class="published-date">${pubDate}</p></div> </div> <div class="blog-content-area"> <a${addAttribute(url, "href")} class="blog-title-link cursor-pointer">${title}</a> ${excerpt && renderTemplate`<p class="blog-excerpt">${excerpt}</p>`} </div> <div class="blog-viewmore-wrap"> <a${addAttribute(url, "href")} class="viewmore-link cursor-pointer">View More</a> </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/blogComponent/preview-panel.astro", void 0);

const $$Astro = createAstro("https://mordecai-law.com/");
const $$MarkdownAuthorLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownAuthorLayout;
  var allPosts = [];
  try {
    allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/posts/How to Tell Who Is at Fault in a Car Accident.md": () => import('./How to Tell Who Is at Fault in a Car Accident_l6Ccn7oh.mjs')}), () => "../pages/posts/*.md");
  } catch (error) {
    allPosts = [];
  }
  const { frontmatter } = Astro2.props;
  var selectedPosts = filterPostsByAuthor(frontmatter.author, allPosts);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.author, "customDescription": frontmatter.bio }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="banner-title-area"> <div class="banner-title-overlay"></div> ${renderComponent($$result2, "NavBar", $$Index, {})} <div class="max-w-[100%] px-[30px] min-[480px]:px-[40px] min-[1280px]:max-w-[100%] min-[1280px]:px-[40px] min-[1440px]:max-w-[1440px] min-[1440px]:px-[20px] min-[1920px]:px-0 container mx-auto before:content-[' '] after:content-[' '] before:grid-area-[1/1/2/2] after:grid-area-[1/1/2/2] before:table after:table after:clear-both w-container"> <div class="banner-title-wrap"> ${frontmatter.profile_picture && renderTemplate`${renderComponent($$result2, "FeaturedImage", $$ProfilePicture, { "defaultImg": frontmatter.profile_picture, "altText": frontmatter.author })}`} <h1 class="banner-area-title">Posts by ${frontmatter.author}</h1> <img src="/assets/icons/banner-title-separator.svg" loading="lazy" decoding="async" alt="Banner Title Separator" class="mx-auto"> </div> </div> </div> <div class="blog-section"> <div class="max-w-[100%] px-[30px] min-[480px]:px-[40px] min-[1280px]:max-w-[100%] min-[1280px]:px-[40px] min-[1440px]:max-w-[1440px] min-[1440px]:px-[20px] min-[1920px]:px-0 container mx-auto before:content-[' '] after:content-[' '] before:grid-area-[1/1/2/2] after:grid-area-[1/1/2/2] before:table after:table after:clear-both w-container"> <div class="blog-content-wrap"> <div class="w-dyn-list"> <div role="list" class="w-dyn-items w-row"> <!-- Blog List  --> ${selectedPosts && selectedPosts.length > 0 ? renderTemplate`<div class=""> ${selectedPosts.map(async (post) => {
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
