/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as createAstro, e as renderComponent, g as renderSlot, h as renderHead } from '../astro_7lB2f1hd.mjs';
import 'kleur/colors';
import { h as $$Index$3, i as $$MobileMenu, j as $$MinimizedNav, k as $$ViewTransitions, l as $$SEO, c as $$ResponsiveImage, G as GetTheMostRecentBlogs, a as $$Index$4 } from './How to Tell Who Is at Fault in a Car Accident_BYeqSR5U.mjs';
/* empty css                                 */
import { b as $$EliHeadshot, c as $$Version2 } from './criminal-defense-law_DIg4IfJP.mjs';
import 'clsx';
import { $ as $$BannerTitleSeparator, a as $$PreviewPanel } from './_page__DwRUCVIt.mjs';

const BusinessLawIcon = new Proxy({"src":"/_astro/business-law.DAvyaUFi.svg","width":55,"height":51,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/eli-mordecai/src/assets/icons/practice-areas/business-law.svg";
							}
							
							return target[name];
						}
					});

const TenantLawIcon = new Proxy({"src":"/_astro/tenant.2VmqzHI2.png","width":128,"height":128,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/eli-mordecai/src/assets/icons/practice-areas/tenant.png";
							}
							
							return target[name];
						}
					});

const EmploymentLawIcon = new Proxy({"src":"/_astro/employment.YvhBn8Nj.png","width":128,"height":128,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/eli-mordecai/src/assets/icons/practice-areas/employment.png";
							}
							
							return target[name];
						}
					});

const CriminalLawIcon = new Proxy({"src":"/_astro/criminal-law.Dojwckkr.svg","width":53,"height":56,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/eli-mordecai/src/assets/icons/practice-areas/criminal-law.svg";
							}
							
							return target[name];
						}
					});

const PersonalInjuryIcon = new Proxy({"src":"/_astro/injury.B_Im4Ion.png","width":128,"height":128,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/eli-mordecai/src/assets/icons/practice-areas/injury.png";
							}
							
							return target[name];
						}
					});

const EstatePlanningIcon = new Proxy({"src":"/_astro/estate-planning.7sP1QNSy.png","width":128,"height":128,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/eli-mordecai/src/assets/icons/practice-areas/estate-planning.png";
							}
							
							return target[name];
						}
					});

const PracticeAreas = [
  {
    type: "Employment Law",
    description:
      "From workplace discrimination and wrongful termination to wage disputes and employment contracts, I provide strategic guidance and advocacy for employees and employers alike.",
    icon: EmploymentLawIcon,
    hasPage: true,
  },
  {
    type: "Personal Injury Law",
    description:
      "If you've been injured due to someone else's negligence, I will fight for your rights and pursue fair compensation for your injuries and losses.",
    icon: PersonalInjuryIcon,
    hasPage: true,
  },
  {
    type: "Landlord Tenant Law",
    description:
      "Whether you're a landlord dealing with tenant disputes or a tenant facing eviction or lease issues, I offer knowledgeable legal advice and representation to protect your rights and interests.",
    icon: TenantLawIcon,
    hasPage: true,
  },
  {
    type: "Transactional Law",
    description:
      "From business contracts and negotiations to mergers and acquisitions, my transactional law expertise ensures smooth and legally sound transactions for businesses and individuals.",
    icon: BusinessLawIcon,
    hasPage: true,
  },
  {
    type: "Criminal Defense Law",
    description:
      "If you're facing criminal charges, I will vigorously defend your rights and work towards achieving the best possible results for your case.",
    icon: CriminalLawIcon,
    hasPage: true,
  },
  {
    type: "Estate Planning",
    description:
      "It's never too early to plan what happens to your assets when you need to part from them. It's best to take advantage of existing options to reduce and eliminate estate and capital gains taxes early on.",
    icon: EstatePlanningIcon,
    hasPage: false,
  },
];

const $$Astro$4 = createAstro();
const $$Panel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Panel;
  const {
    type,
    description,
    icon
  } = Astro2.props;
  const url = `/practice-areas/${type.toLowerCase().replace(/\s+/g, "-")}`;
  return renderTemplate`${maybeRenderHead()}<div role="listitem" class="md:w-[300px] min-[992px]:w-[375px] 2xl:w-[468px] h-full md:min-w-[280px] lg:min-w-[270px]"> <div class="practice-area-item h-auto hover:bg-slate-700 transition-all duration-1000"> <div class="practice-listing-content-wrap !pb-[40px]"> <div class="h-[110px]"> <a${addAttribute(url, "href")} class="practice-area-title">${type}</a> </div> <p class="h-[120px] md:h-[300px] min-[991px]:h-[250px] max-h-[250px]">${description}</p> </div> <div class="grid [&>div]:mx-auto mb-0 mt-auto text-center sm:flex sm:flex-row sm:align-start"> <div class="mx-auto w-[53px] min-[788px]:w-[53px] sm:mt-[20px]"> <img${addAttribute(type, "alt")} decoding="async" loading="lazy"${addAttribute(icon.src, "src")} class="w-[53px] h-[53px]"> </div> <div class=""> <a${addAttribute(url, "href")} class="practice-button w-button hover:bg-primaryC hover:text-secondaryC transition-all duration-1000">View More</a> </div> </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/practice-area-preview-section/panel.astro", void 0);

const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-[#161d27] pt-10"> <div class="w-dyn-list"> <div role="list" class="flex flex-col sm:flex-row sm:flex-wrap md:gap-x-5 justify-center mx-auto w-10/12 xl:w-full"> ${PracticeAreas && PracticeAreas.length > 0 && PracticeAreas.map((area) => {
    if (area.hasPage) {
      return renderTemplate`${renderComponent($$result, "Panel", $$Panel, { ...area })}`;
    }
    return null;
  })} </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/practice-area-preview-section/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro();
const $$HomeLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HomeLayout;
  const {
    pageTitle,
    customDescription
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><title>', "</title>", `<meta content="width=device-width, initial-scale=1" name="viewport"><link href="/style/home.css" rel="stylesheet" type="text/css" media="print" onload="this.media='all'; this.onload=null;">`, '<noscript><link rel="stylesheet" href="/style/home.css"></noscript><link href="/assets/icons/favicon.webp" rel="shortcut icon" type="image/x-icon">', "", "</head> <!-- <BodyLayout>\n      <slot />\n   </BodyLayout> --> <body> ", " ", " ", " ", ' <script src="/script/nav-script.js" type="text/javascript"><\/script> <script src="/script/animated_script.js" type="text/javascript"><\/script> </body> </html>'])), pageTitle, renderComponent($$result, "SEO", $$SEO, { "title": pageTitle, "description": customDescription }), maybeRenderHead(), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "MinimizedNav", $$MinimizedNav, {}), renderComponent($$result, "MobileMenu", $$MobileMenu, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Index$3, {}));
}, "D:/Astro/eli-mordecai/src/layout/HomeLayout.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="practice-areas-section"> <div class="container w-container"> <div class=""> <div class=""> <h2 class="section-left-title-text">My Practice Areas</h2> <img src="/assets/icons/small-separator-gold.svg" loading="lazy" alt="Title Separator" class="w-[95px] h-[44px]"> </div> <div class="practice-title-content"> <p class="section-left-content">Winning a case is a team effort. <span class="text-primaryC">Never go at it alone.</span> I work with a network of top lawyers in every field I practice in, each of whom has decades of experience and whom I bring in to work alongside me on every case. Thus, I can help deliver the best results possible for each client. </p> </div> </div> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/practice-area-preview-section/layout.astro", void 0);

const NetworkIcon = new Proxy({"src":"/_astro/network.Ddqraiig.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/eli-mordecai/src/assets/icons/trust/network.png";
							}
							
							return target[name];
						}
					});

const PersonalizedIcon = new Proxy({"src":"/_astro/personalized.Dsh9Ri0c.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/eli-mordecai/src/assets/icons/trust/personalized.png";
							}
							
							return target[name];
						}
					});

const SatisfactionIcon = new Proxy({"src":"/_astro/satisfaction.efgBJGCc.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/eli-mordecai/src/assets/icons/trust/satisfaction.png";
							}
							
							return target[name];
						}
					});

const TrustReasons = [
  {
    label: "Personalized Approach",
    description:
      "Every case is unique. I have a flexible approach that a big law firm can’t provide. I provide personalized attention and tailored legal strategies to meet your specific needs and goals.",
    icon: PersonalizedIcon,
  },
  {
    label: "Access to Extensive Top Network",
    description:
      "I bring together a network of top lawyers in every field of practice, each with decades of experience. We collaborate closely on every case, leveraging our collective expertise to deliver the best possible results for each client. With our combined knowledge and dedication, you can trust us to provide unmatched legal representation and strategic solutions tailored to your needs.",
    icon: NetworkIcon,
  },
  {
    label: "Client Satisfaction",
    description:
      "Your satisfaction is my top priority. I am dedicated to achieving the best possible results for you.",
    icon: SatisfactionIcon,
  },
];

const $$Astro$2 = createAstro();
const $$TrustPanel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TrustPanel;
  const {
    label,
    description,
    icon,
    index
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div role="listitem" class="fadeOutIntoBottom fadeInFromBottomTag z-[2]"> <div${addAttribute(`practice-area-item !min-h-0 md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:flex-nowrap`, "class")}> <div class="min-w-[150px] w-[150px] h-[150px] m-auto rounded-full border-solid border-2 border-primaryC flex justify-center items-center"> <img${addAttribute(`${label} icon`, "alt")} decoding="async" loading="lazy"${addAttribute(icon.src, "src")} class="w-[100px] h-[100px] object-fit m-auto"> </div> <div class="justify-center items-center px-5"> <h3 class="text-primaryC text-2xl mt-5 md:my-auto font-bold">${label}</h3> <p class="w-auto">${description}</p> </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/trust-section/trust-panel.astro", void 0);

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`help-section relative overflow-hidden h-auto bg-no-repeat bg-cover bg-historyBG_mobile md:bg-historyBG before:w-full before:h-full 
before:absolute before:bg-gradient-to-t before:from-transparent before:to-white before:bottom-0 
before:z-[0]`, "class")}> <div class="container w-container"> <div class="section-title"> <h2 class="section-title-text dark-color-title fadeInFromBottomTag fadeOutIntoBottom z-[3] relative">Why should you trust your case with me?</h2> ${renderComponent($$result, "BannerTitleSeparator", $$BannerTitleSeparator, { "customStyle": "mx-auto my-10 fadeInFromBottomTag fadeOutIntoBottom z-[3] relative w-[95px] h-[44px]" })} <div class="md:flex md:flex-row md:gap-5"> <div class="flex flex-col"> ${TrustReasons && TrustReasons.length > 0 && TrustReasons.map((reason, index) => renderTemplate`${renderComponent($$result, "Panel", $$TrustPanel, { ...reason, "index": index })}`)} </div> <div class="history-image-wrap w-full h-full h-auto z-[2]"> <img src="/assets/images/blind-justice.webp" loading="lazy" decoding="async" alt="blind justice" class="object-cover w-[417px] h-[778px]"> </div> </div> </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/trust-section/index.astro", void 0);

const $$Astro$1 = createAstro();
const $$FeaturedBlogSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeaturedBlogSection;
  const {
    pubDate,
    category,
    title,
    url,
    excerpt,
    featured_image,
    phoneImg,
    mediumTabImg,
    tabletImg
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="featured-blog-wrap home-featured-blog"> <div class="w-dyn-list"> <div role="list" class="w-dyn-items"> <div role="listitem" class="w-dyn-item"> <div class="featured-blog-item"> <div class="w-layout-grid featured-blog-grid"> <div id="w-node-_25a59e16-114d-9856-7e7b-a3c4dc31e84b-9a1b9e10" class="featured-blog-image-wrap"> <a${addAttribute(url, "href")} class="w-inline-block"> ${renderComponent($$result, "ResponsiveImage", $$ResponsiveImage, { "defaultImg": featured_image, "phoneImg": phoneImg, "mediumTabImg": mediumTabImg, "tabletImg": tabletImg, "altText": title, ",": true })} </a> </div> <div class="featured-blog-content-wrap"> <div class="blog-meta-wrap"> <div class="law-type-wrap"> <a${addAttribute(`/blog/category/${category}/1`, "href")} class="blog-law-type">${category}</a> </div> <div class="meta-separator"> <p class="meta-separator-line">|</p> </div> <div class="date-wrap"> <p class="published-date">${pubDate}</p> </div> </div> <div class="blog-content-area"> <a${addAttribute(url, "href")} class="featured-blog-title">${title}</a> ${excerpt && renderTemplate`<p class="blog-excerpt">${excerpt}</p>`} </div> <div class="blog-viewmore-wrap"> <a${addAttribute(url, "href")} class="viewmore-link">View More</a> </div> </div> </div> </div> </div> </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/blogComponent/featuredBlogSection.astro", void 0);

const $$FeaturedBlogLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="featured-blog-section"> <div class="container w-container"> <div class="section-title childrenFadeInFromBottomTag"> <h2 class="section-title-text fadeOutIntoBottom">Recent Blogs</h2> ${renderComponent($$result, "BannerTitleSeparator", $$BannerTitleSeparator, { "customStyle": "mx-auto fadeOutIntoBottom !delay-500 w-[95px] h-[44px]" })} </div> ${renderSlot($$result, $$slots["default"])} </div> </div> <div class="divider-section"> <div class="container w-container"> <div class="divider-line"></div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/blogComponent/featuredBlogLayout.astro", void 0);

const $$Astro = createAstro();
const $$BlogSection = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogSection;
  let AllPosts = [];
  try {
    AllPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../pages/posts/How to Tell Who Is at Fault in a Car Accident.md": () => import('./How to Tell Who Is at Fault in a Car Accident_BYeqSR5U.mjs').then(n => n.H),"../../pages/posts/How to Tell Who Is at Fault in a Car Accident2.md": () => import('./How to Tell Who Is at Fault in a Car Accident2_Cc-bxGKX.mjs'),"../../pages/posts/How to Tell Who Is at Fault in a Car Accident3.md": () => import('./How to Tell Who Is at Fault in a Car Accident3_BKMtLWMJ.mjs'),"../../pages/posts/How to Tell Who Is at Fault in a Car Accident4.md": () => import('./How to Tell Who Is at Fault in a Car Accident4_DN8RBwGN.mjs'),"../../pages/posts/How to Tell Who Is at Fault in a Car Accident5.md": () => import('./How to Tell Who Is at Fault in a Car Accident5_Zcxk8Px6.mjs'),"../../pages/posts/How to Tell Who Is at Fault in a Car Accident6.md": () => import('./How to Tell Who Is at Fault in a Car Accident6_CdF6hjAi.mjs'),"../../pages/posts/How to Tell Who Is at Fault in a Car Accident7.md": () => import('./How to Tell Who Is at Fault in a Car Accident7_BYfjZKcH.mjs')}), () => "../../pages/posts/*.md");
  } catch (e) {
    AllPosts = [];
    console.log("Error trying to retrieve blog posts: ", e);
  }
  const {
    RETRIEVE_SIZE = 4
  } = Astro2.props;
  let recentPosts = GetTheMostRecentBlogs(RETRIEVE_SIZE, AllPosts);
  const mostRecent = recentPosts.shift();
  return renderTemplate`${AllPosts && AllPosts.length > 0 && renderTemplate`${renderComponent($$result, "FeaturedBlogLayout", $$FeaturedBlogLayout, {}, { "default": ($$result2) => renderTemplate`${mostRecent && renderTemplate`${renderComponent($$result2, "FeaturedBlogSection", $$FeaturedBlogSection, { ...mostRecent.frontmatter, "url": mostRecent.url })}`}` })}
    ${maybeRenderHead()}<div class="blog-section"><div class="container w-container"><div class="blog-content-wrap"><div class="w-dyn-list"><!-- blog here -->${recentPosts && recentPosts.length > 0 && recentPosts.map(
    (post) => renderTemplate`${renderComponent($$result, "PreviewPanel", $$PreviewPanel, { ...post.frontmatter, "url": post.url })}`
  )}</div></div></div></div>
    <a href="/blog/1" class="mx-auto"><button type="button" class="button transition-all w-button block mx-auto mb-10">View More Posts</button></a>
    <div class="divider-section"><div class="container w-container"><div class="divider-line"></div></div></div>`}`;
}, "D:/Astro/eli-mordecai/src/components/blogComponent/blogSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$HomeLayout, { "pageTitle": "Eli Mordecai - Home Page", "customDescription": "Your trusted general practice attorney in Los Angeles, CA." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="hero-section lg:min-h-[605px]"> <div class="hero-overlay"></div> ${renderComponent($$result2, "NavBar", $$Index$4, {})} <div class="hero-main-wrap"> <div class="container w-container"> <!-- <div class="w-layout-grid hero-grid"> --> <div class="flex flex-col md:flex-row gap justify-center items-center"> <div class="hero-content-area"> <img src="/assets/icons/small-separator-gold.svg" loading="eager" alt="Small Separator" class="hidden sm:block fadeInTag fadeOut w-[95px] h-[44px]"> <div class="childrenFadeInFromBottomTag"> <h1 class="hero-area-title font-light fadeOutIntoBottom text-center sm:text-left sm:!delay-[750ms]">Transforming Legal Hurdles into Success Stories</h1> <p class="hero-area-content fadeOutIntoBottom text-center sm:text-left !delay-500 sm:!delay-[1000ms]">Your Trusted General Practice Attorney</p> <a href="/contact-us" class="button w-button mx-auto sm:ml-0 sm:mr-auto block sm:inline-block !text-center text-left hover:bg-transparent hover:text-primaryC fadeOutIntoBottom transition-all duration-1000 w-fit !delay-[750ms] sm:!delay-[1250ms]">Get In Touch</a> </div> </div> <div class="hero-image-area m-auto lg:ml-auto lg:mr-0 fadeInTag fadeOut"> ${renderComponent($$result2, "Eli", $$EliHeadshot, { "wrapperStyle": "bg-transparent w-[270px] h-[270px] sm:w-[450px] sm:h-[450px] m-auto" })} </div> </div> </div> </div> </div> <div class="simple-intro-section"> <div class="container w-container"> <div class="flex flex-col lg:flex-row gap-5"> <div class="simple-intro-image-wrap  fadeInFromBottomTag fadeOutIntoBottom md:min-w-[467px] w-full "> <img src="/assets/images/statue-library.webp" loading="lazy" decoding="async" alt="Simple Intro Image" class="simple-intro-image w-[320px] h-[189px] min-[400px]:w-[400px] min-[400px]:h-[215px] sm:w-[467px] sm:h-[294px] object-fill mx-auto lg:ml-0"> </div> <div class="simple-intro-content-wrap"> <div class="section-title-left  fadeInFromBottomTag fadeOutIntoBottom"> <h2 class="section-left-title-text">Are you seeking reliable legal advice and representation? <span class="text-primaryC">Look no further.</span></h2> <img src="/assets/icons/small-separator-gold.svg" loading="lazy" alt="Title Separator" class="w-[95px] h-[44px]"> <p class="section-left-content"> As your trusted <b class="text-primaryC">general practice attorney</b> in Los Angeles, CA, I am here to help you navigate through a wide range of legal matters, ensuring your rights and interests are protected every step of the way. You’re in good hands. </p> </div> <div class="intro-lawyer-area fadeInFromBottomTag fadeOutIntoBottom "> <div class="intro-lawyer-wrap"> <img src="/assets/images/authors/eli-mordecai-small.webp" loading="lazy" decoding="async" alt="Eli Mordecai" class="lawyer-radius-image w-[90px] h-[90px]"> </div> <h3 class="intro-author-name">Eli Mordecai</h3> </div> <!-- <InfoStatus /> --> </div> </div> </div> </div> ${renderComponent($$result2, "PracticeAreaLayout", $$Layout, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "PracticeAreaSection", $$Index$2, {})} ` })} ${renderComponent($$result2, "TrustSection", $$Index$1, {})}     ${renderComponent($$result2, "CTASection", $$Version2, { "title": "Your best legal representation is just a phone call away." })} <div class="divider-section"> <div class="container w-container"> <div class="divider-line"></div> </div> </div> ${renderComponent($$result2, "BlogSection", $$BlogSection, {})} ` })}`;
}, "D:/Astro/eli-mordecai/src/pages/index.astro", void 0);

const $$file = "D:/Astro/eli-mordecai/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Index$2 as $, PracticeAreas as P, index as i };
