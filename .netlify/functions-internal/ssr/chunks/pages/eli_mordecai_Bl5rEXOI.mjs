/* empty css                          */
import { c as createComponent, r as renderTemplate, f as renderComponent, e as createAstro, m as maybeRenderHead, u as unescapeHTML } from '../astro_Dvw0weLc.mjs';
import 'kleur/colors';
import { d as filterPostsByAuthor, b as $$BaseLayout, a as $$Index, e as $$ProfilePicture } from './How to Tell Who Is at Fault in a Car Accident_BFJPptDl.mjs';
import { a as $$PreviewPanel } from './_page__DP0K6avd.mjs';
/* empty css                                 */

const $$Astro = createAstro();
const $$MarkdownAuthorLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownAuthorLayout;
  var allPosts = [];
  try {
    allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/posts/How to Tell Who Is at Fault in a Car Accident.md": () => import('./How to Tell Who Is at Fault in a Car Accident_BFJPptDl.mjs').then(n => n.H),"../pages/posts/How to Tell Who Is at Fault in a Car Accident2.md": () => import('./How to Tell Who Is at Fault in a Car Accident2_IzkcpRL7.mjs'),"../pages/posts/How to Tell Who Is at Fault in a Car Accident3.md": () => import('./How to Tell Who Is at Fault in a Car Accident3_CGZx7mqb.mjs'),"../pages/posts/How to Tell Who Is at Fault in a Car Accident4.md": () => import('./How to Tell Who Is at Fault in a Car Accident4_NKhdxi1X.mjs'),"../pages/posts/How to Tell Who Is at Fault in a Car Accident5.md": () => import('./How to Tell Who Is at Fault in a Car Accident5_RBSjDo4n.mjs'),"../pages/posts/How to Tell Who Is at Fault in a Car Accident6.md": () => import('./How to Tell Who Is at Fault in a Car Accident6_DoxxrdPp.mjs'),"../pages/posts/How to Tell Who Is at Fault in a Car Accident7.md": () => import('./How to Tell Who Is at Fault in a Car Accident7_D0iVMWPU.mjs')}), () => "../pages/posts/*.md");
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
