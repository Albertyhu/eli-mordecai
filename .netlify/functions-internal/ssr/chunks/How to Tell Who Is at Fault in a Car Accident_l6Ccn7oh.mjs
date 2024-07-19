/* empty css                         */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute, f as renderSlot, u as unescapeHTML } from './astro/server_BWzPTXNg.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_euznmiol.mjs';
import { $ as $$Index } from './index_Z6KWOvVW.mjs';
import { $ as $$ResponsiveImage } from './ResponsiveImage_BzMXR-ER.mjs';
import { g as getAuthorInfoFromArray, $ as $$ProfilePicture } from './blogHooks_DxDKlx2f.mjs';
/* empty css                                */

const $$Astro = createAstro("https://mordecai-law.com/");
const $$MarkdownPostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  let allAuthors = [];
  try {
    allAuthors = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/author_profile/eli_mordecai.md": () => import('./eli_mordecai_BXNz17JV.mjs')}), () => "../pages/author_profile/*.md");
  } catch (e) {
    allAuthors = [];
  }
  const { frontmatter } = Astro2.props;
  const selectedAuthor = getAuthorInfoFromArray(frontmatter.author, allAuthors);
  const category_url = frontmatter.category.replace(" ", "-").toLowerCase();
  console.log(frontmatter);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.title, "customDescription": frontmatter.excerpt }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$Index, {})} ${maybeRenderHead()}<div class="blog-single-section"> <div class="max-w-[100%] px-[30px] min-[480px]:px-[40px] min-[1280px]:max-w-[100%] min-[1280px]:px-[40px] min-[1440px]:max-w-[1440px] min-[1440px]:px-[20px] min-[1920px]:px-0 container mx-auto before:content-[' '] after:content-[' '] before:grid-area-[1/1/2/2] after:grid-area-[1/1/2/2] before:table after:table after:clear-both w-container"> ${frontmatter.featured_image && renderTemplate`${renderComponent($$result2, "FeaturedImage", $$ResponsiveImage, { "defaultImg": frontmatter.featured_image, "phoneImg": frontmatter.phoneImg, "mediumTabImg": frontmatter.mediumTabImg, "tabletImg": frontmatter.tabletImg, "altText": frontmatter.altText ? frontmatter.altText : frontmatter.title })}`} <div class="blog-single-content-wrap"> <div class="blog-single-title-wrap"> <div class="blog-meta-wrap blog-single-meta-wrap"> <div class="law-type-wrap"> <a${addAttribute(`/blog/category/${category_url}/1`, "href")} class="blog-law-type">${frontmatter.category}</a> </div> <div class="meta-separator"> <p class="meta-separator-line">|</p> </div> <div class="date-wrap"> <p class="published-date">${frontmatter.pubDate}</p> </div> </div> <h1>${frontmatter.title}</h1> </div> <div class="blog-single-rich-text"> <div class="blog-single-main-content w-richtext"> ${renderSlot($$result2, $$slots["default"])} <div id="scriptContainer"${addAttribute(frontmatter.body, "data-frontmatter")}></div> </div> </div> </div> </div> </div> <div class="blog-author-wrap"> <div class=""> <div class=""> <div class="flex flex-col md:flex-row md:px-10"> <div class="blog-author-image-wrap"> <a${addAttribute(selectedAuthor?.url, "href")} class=""> ${renderComponent($$result2, "ProfilePicture", $$ProfilePicture, { "defaultImg": selectedAuthor.frontmatter.profile_picture, "altText": frontmatter.author, "immedateLoad": false })} </a> </div> <div class="flex flex-col mx-auto md:ml-0 md:justify-around  text-center md:text-left"> <a${addAttribute(selectedAuthor?.url, "href")} class="author-link">${frontmatter.author}</a> ${selectedAuthor?.frontmatter.bio && renderTemplate`<div class="author-simple-bio px-5 md:p-0">${selectedAuthor?.frontmatter.bio}</div>`} <a${addAttribute(selectedAuthor?.url, "href")} class="underline hover:text-secondaryC">View More Posts</a> </div> </div> </div> </div> </div> ` })}`;
}, "D:/Astro/eli-mordecai/src/layout/MarkdownPostLayout.astro", void 0);

const html = "<p>\nUniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology.\n</p>\n<br>\n<h2>Equal Justice for all Livings</h2>\n<p>\nAppropriately empower dynamic leadership skills after business portals. Globally my cardinate interactive supply chains with distinctive quality vectors global sources services. Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements.\n</p>\n<br>\n<ul>\n  <li>Dynamically target high-payoff intellectual capital for customized</li>\n  <li>Interactively procrastinate high-payoff content</li>\n  <li>Credibly reintermediate backend ideas for cross-platform models</li>\n</ul>\n<h3>Make real time a law services.</h3>\n<p>\nCollaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.\n</p>\n<br>\n<ol>\n  <li>It brings the right people together with all the right information and tools to get work done</li>\n  <li>We provide operational efficiency, data security, and flexible scale</li>\n  <li>Your best work, together in one package that works seamlessly from your computer</li>\n  <li>Delivers the tools you need to save time Improve field performance always</li>\n</ol>";

				const frontmatter = {"layout":"../../layout/MarkdownPostLayout.astro","title":"How to Tell Who Is at Fault in a Car Accident","pubDate":"Friday, February 4, 2022","category":"Legal Advice","excerpt":"Capitalize on low-hanging fruit to identify a ballpark value added matrix economically activity to beta test override the digital.","author":"Eli Mordecai","featured_image":"/assets/images/banner-title-background-books.webp","phoneImg":"https://assets-global.website-files.com/61fd0d3090785d374bf9afc3/6200b30819a334c9cc6e330e_blog-large-image-2-p-500.jpeg","mediumTabImg":"https://assets-global.website-files.com/61fd0d3090785d374bf9afc3/6200b30819a334c9cc6e330e_blog-large-image-2-p-800.jpeg","tabletImg":"https://assets-global.website-files.com/61fd0d3090785d374bf9afc3/6200b30819a334c9cc6e330e_blog-large-image-2-p-1080.jpeg","altText":"How to Tell Who Is at Fault in Car Accidents"};
				const file = "D:/Astro/eli-mordecai/src/pages/posts/How to Tell Who Is at Fault in a Car Accident.md";
				const url = "/posts/How to Tell Who Is at Fault in a Car Accident";
				function rawContent() {
					return "\r\n<p>\r\nUniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology.\r\n</p>\r\n<br />\r\n\r\n<h2>Equal Justice for all Livings</h2>\r\n<p>\r\nAppropriately empower dynamic leadership skills after business portals. Globally my cardinate interactive supply chains with distinctive quality vectors global sources services. Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements.\r\n</p>\r\n<br />\r\n<ul>\r\n  <li>Dynamically target high-payoff intellectual capital for customized</li>\r\n  <li>Interactively procrastinate high-payoff content</li>\r\n  <li>Credibly reintermediate backend ideas for cross-platform models</li>\r\n</ul>\r\n<h3>Make real time a law services.</h3>\r\n<p>\r\nCollaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.\r\n</p>\r\n<br />\r\n<ol>\r\n  <li>It brings the right people together with all the right information and tools to get work done</li>\r\n  <li>We provide operational efficiency, data security, and flexible scale</li>\r\n  <li>Your best work, together in one package that works seamlessly from your computer</li>\r\n  <li>Delivers the tools you need to save time Improve field performance always</li>\r\n</ol>\r\n";
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

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownPostLayout, {
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
