import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderComponent, u as unescapeHTML, F as Fragment, m as maybeRenderHead, f as renderSlot } from './astro/server_BWzPTXNg.mjs';
import 'kleur/colors';
import { B as BusinessInfo, f as formatPhone, L as Logo216 } from './Eli_Mordecai-Logo-216_u2v_MXNV.mjs';
import 'clsx';
/* empty css                                */

function slugify(text) {
  return text.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
}

function jsonLDGenerator({ type, post, url }) {
  if (type === "post") {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post.title ? post.title : "website"}",
        "description": "${post.description ? post.description : ""}",
        "image": "${post.images.length > 0 ? post.images[0].image[0].url : ""}",
        "author": {
          "@type": "Person",
          "name": "${post.author}",
          "url": "/author/${slugify(post.author)}"
        },
        "datePublished": "${post.date ? post.date : ""}"
      }
    </script>`;
  }
  return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "${BusinessInfo.title}",
      "url": "${{"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://mordecai-law.com/", "ASSETS_PREFIX": undefined}.SITE_URL}"
      }
    </script>`;
}

const $$Astro$9 = createAstro("https://mordecai-law.com/");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title,
    description,
    url = Astro2.url,
    image,
    frontmatter,
    robots,
    canonicalUrl
  } = Astro2.props;
  const jsonLD = jsonLDGenerator({
    type: frontmatter ? "post" : "website",
    post: frontmatter,
    url
  });
  return renderTemplate`<!-- SEO -->${canonicalUrl && renderTemplate`<link rel="canonical"${addAttribute(canonicalUrl, "href")}>`}<!-- Open Graph --><meta property="og:site_name"${addAttribute(BusinessInfo.companyName, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta name="description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(url, "content")}><meta property="og:image"${addAttribute(image?.src || BusinessInfo.OpenGraphImg.src, "content")}><meta property="og:image:url"${addAttribute(image?.src || BusinessInfo.OpenGraphImg.src, "content")}><meta property="og:image:secure_url"${addAttribute(image?.src || BusinessInfo.OpenGraphImg.src, "content")}><meta property="og:image:type" content="image/jpeg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="600"><meta property="og:image:alt"${addAttribute(image?.alt || BusinessInfo.OpenGraphImg.alt, "content")}><!-- Twitter --><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image"${addAttribute(image?.src || BusinessInfo.OpenGraphImg.src, "content")}><meta name="twitter:image:alt"${addAttribute(title, "content")}>${renderTemplate`<meta name="twitter:domain"${addAttribute(BusinessInfo.twitter, "content")}>`}${robots && renderTemplate`<meta name="robots" content="noindex, nofollow">`}<!-- JSON LD -->${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(jsonLD)}` })}`;
}, "D:/Astro/eli-mordecai/src/components/SEO.astro", void 0);

const $$Astro$8 = createAstro("https://mordecai-law.com/");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "D:/Astro/eli-mordecai/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$ContactUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="footer-widget"> <div class="footer-widget-title-wrap"> <h3 class="footer-widget-title">Contact Us</h3> </div> <div class="footer-contact-wrap"> <div class="footer-address-wrap"> <p class="footer-address">${BusinessInfo.companyName} <br> ${BusinessInfo.street}, <br>${BusinessInfo.city} ${BusinessInfo.zip},${BusinessInfo.country}.</p> </div> <div class="footer-contact-link-wrap"> <div class="footer-contact-link-item"> <p class="footer-link-type">Phone: </p> <a${addAttribute(`tel:${BusinessInfo.phone}`, "href")} class="footer-link">${formatPhone(BusinessInfo.phone)}</a> </div> <div class="footer-contact-link-item"> <p class="footer-link-type">Email: </p> <a href="mailto:info@example.com" class="">${BusinessInfo.email}</a> </div> </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/footer/contact-us.astro", void 0);

const $$QuickLink = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="footer-widget"> <div class="footer-widget-title-wrap"> <h3 class="footer-widget-title">Quick Link</h3> </div> <div class="flex flex-row gap-10"> <div class="footer-links-wrap"> <div class="footer-links-area"> <a href="/" aria-current="page" class="footer-link w--current">Home</a> <a href="/about" class="footer-link">About</a> <a href="/practice-areas" class="footer-link">Practice Areas</a> <!-- <a href="/blog/1" class="footer-link">Blog </a>                 --> <a href="/contact" class="footer-link">Contact</a> <a href="/privacy-policy" class="footer-link">Privacy Policy</a> <a href="/terms-and-conditions" class="footer-link">Terms and Conditions</a> </div> </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/footer/quick-link.astro", void 0);

const $$PracticeArea = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="footer-widget"> <div class="footer-widget-title-wrap"> <h3 class="footer-widget-title">Practice Area</h3> </div> <div class="footer-links-area"> <a href="/practice-areas/criminal-defense-law" class="footer-link">Criminal Defense Law</a> <a href="/practice-areas/transactional-law" class="footer-link">Transactional Law</a> <!-- <a href="/practice-areas/employment-law" class="footer-link">Employment Law</a> --> <a href="/practice-areas/personal-injury-law" class="footer-link">Personal Injury Law</a> <a href="/practice-areas/landlord-tenant-law" class="footer-link">Landlord-Tenant Law</a> </div></div>`;
}, "D:/Astro/eli-mordecai/src/components/footer/practice-area.astro", void 0);

const $$Astro$7 = createAstro("https://mordecai-law.com/");
const $$LogoComponentLazy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$LogoComponentLazy;
  const {
    customDiv
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${customDiv ? customDiv : "my-auto"}`, "class")}> <a href="/" aria-current="page" class="justify-center flex max-w-full w--current"> <img${addAttribute(Logo216.src, "src")} loading="lazy" class="w-[218px] aspect-[3/1]" alt="General Practice Attorney Logo"> </a> </div>`;
}, "D:/Astro/eli-mordecai/src/components/logoComponent-lazy.astro", void 0);

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  var YEAR = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<div class="footer"> <div class="max-w-[100%] px-[30px] min-[480px]:px-[40px] min-[1280px]:max-w-[100%] min-[1280px]:px-[40px] min-[1440px]:max-w-[1440px] min-[1440px]:px-[20px] min-[1920px]:px-0 container mx-auto before:content-[' '] after:content-[' '] before:grid-area-[1/1/2/2] after:grid-area-[1/1/2/2] before:table after:table after:clear-both w-container"> <div class="footer-top-logo"> <div class="footer-top-logo-wrap"> ${renderComponent($$result, "LogoComponent", $$LogoComponentLazy, { "customDiv": "header-logo mx-auto" })} </div> </div> <div class="footer-widget-wrap"> <div class="w-layout-grid footer-grid"> ${renderComponent($$result, "QuickLinkColumn", $$QuickLink, {})} ${renderComponent($$result, "PracticeAreaColumn", $$PracticeArea, {})} ${renderComponent($$result, "ContactUsColumn", $$ContactUs, {})} </div> </div> <div class="copyright"> <div class="w-layout-grid copyright-grid"> <div id="w-node-b65b1a3d-ddb9-afd1-e2c9-f7bc0a364088-0a36402f" class="copyright-left-section"> <span id="WebsiteName">${BusinessInfo.companyName}</span> <p class="copyright-content">Copyright © <span id="CopyRight">${YEAR}</span> | Website developed by <a href="https://www.LADesignInitiative.com" target="_blank">LA Design Initiative</a></p> </div> <div id="w-node-b65b1a3d-ddb9-afd1-e2c9-f7bc0a364090-0a36402f" class="copyright-right-section"> <!-- <div class="copyright-social-area">
                  <p class="copyright-social-title">Follow :</p>
               <div class="copyright-social-wrap"> --> <!-- <a href="http://www.facebook.com" target="_blank" class="social-icon-link w-inline-block"><img src="https://assets-global.website-files.com/663690af6ff2152d9a1b9618/663690b06ff2152d9a1b9e46_social-icon-facebook.svg" loading="lazy" alt="Copyright Social"/></a><a href="https://www.twitter.com" target="_blank" class="social-icon-link w-inline-block"><img src="https://assets-global.website-files.com/663690af6ff2152d9a1b9618/663690b06ff2152d9a1b9e98_social-icon-twitter.svg" loading="lazy" alt="Copyright Social"/></a><a href="https://www.instagram.com" target="_blank" class="social-icon-link w-inline-block"><img src="https://assets-global.website-files.com/663690af6ff2152d9a1b9618/663690b06ff2152d9a1b9e49_social-icon-instagram.svg" loading="lazy" alt="Copyright Social"/></a><a href="https://www.pinterest.com" target="_blank" class="social-icon-link w-inline-block"><img src="https://assets-global.website-files.com/663690af6ff2152d9a1b9618/663690b06ff2152d9a1b9e48_social-icon-pinterest.svg" loading="lazy" alt="Copyright Social"/></a> --> </div> </div> </div> </div> </div> `;
}, "D:/Astro/eli-mordecai/src/components/footer/index.astro", void 0);

const $$Astro$6 = createAstro("https://mordecai-law.com/");
const $$LinkItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$LinkItem;
  const {
    currentPath,
    href,
    label,
    customStyle
  } = Astro2.props;
  return renderTemplate`${currentPath.toLowerCase().replace(/\//g, "") === href.toLowerCase().replace(/\//g, "") ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} aria-current="page"${addAttribute(`w--current !text-primaryC !transition-[color] duration-[200ms] whitespace-nowrap my-auto nav-link text-primaryC pl-[20px] pr-[18px] text-[20px] min-[1280]:text-[22px] min-[1280]:px-[23px] font-secondaryF, sans-serif font-[400] transition-[color] duration-[200ms] w-nav-link align-top text-left no-underline inline-block relative mx-auto p-[20px] ${customStyle}`, "class")}>${label}</a>` : renderTemplate`<a${addAttribute(href, "href")}${addAttribute(`whitespace-nowrap my-auto nav-link text-white px-[20px] text-[20px] min-[1280]:text-[22px] min-[1280]:px-[23px] font-secondaryF, sans-serif font-[400] transition-[color] duration-[200ms] w-nav-link align-top text-left no-underline inline-block relative mx-auto p-[20px] ${customStyle}`, "class")}>${label}</a>`}`;
}, "D:/Astro/eli-mordecai/src/components/navigation/linkItem.astro", void 0);

const practice_areas = [
  {
    label: "Criminal Defense",
    link: "/practice-areas/criminal-defense-law",
    subDirectory: [],
  },
  {
    label: "Transactional Law",
    link: "/practice-areas/transactional-law",
    subDirectory: [],
  },
  // {
  //   label: "Employment Law",
  //   link: "/practice-areas/employment-law",
  //   subDirectory: [],
  // },
  {
    label: "Personal Injury Law",
    link: "/practice-areas/personal-injury-law",
    subDirectory: [],
  },
  {
    label: "Landlord-Tenant Law",
    link: "/practice-areas/landlord-tenant-law",
    subDirectory: [],
  },
];

const $$Astro$5 = createAstro("https://mordecai-law.com/");
const $$MenuLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MenuLinks;
  const {
    ContactButton = false
  } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<div class="header-nav-area1 justify-center align-middle hidden lg:flex lg:flex-row z-0"> <div class="w-nav! align-top text-left no-underline inline-block relative mx-auto pl-0 pr-5 py-5 bg-transparent flex align-middle mr-[0] ml-auto flex-nowrap"> <nav role="navigation" class="nav-menu! w-nav-menu! relative float-right flex flex-row ![&>*]:z-[1]"> ${renderComponent($$result, "LinkItem", $$LinkItem, { "currentPath": currentPath, "customStyle": "!pl-0", "href": "/", "label": "Home" })} ${renderComponent($$result, "LinkItem", $$LinkItem, { "currentPath": currentPath, "href": "/about", "label": "About" })} <div data-hover="true" data-delay="0" class="text-[#ffffff] pl-[20px] pr-[18px] md:pl-[23px] md:pr-[23px] text-[20px] font-secondaryF font-[400] transition-colors duration-20 dropdown-navigation w-dropdown my-auto"> <div class="dropdown-toggle! w-dropdown-toggle! peer group text-white mr-0 pl-[2px] pr-[2px] transition-[color] duration-200 min-[1280px]:pl-[2px] min-[1280px]:pr-[2px] w-dropdown-toggle select-none cursor-pointer pr-[2px] inline-block align-top text-[#222222] text-left whitespace-nowrap mx-auto p-[20px] no-underline relative block"> <a href="/practice-areas" class="text-[20px]"> <div class="flex flex-cols whitespace-nowrap gap-[10px]"> <div${addAttribute(`peer !font-['Outfit'] ${currentPath.toLowerCase().replace(/\//g, "") === "practice-areas" ? "text-primaryC" : "text-white"}`, "class")}>Practice Areas</div> <img src="/assets/icons/down-arrow-white.png" alt="drop down menu" loading="lazy" decoding="async" class="w-[32px] h-[32px] m-auto group-hover:hidden"> <img src="/assets/icons/down-arrow-gold.png" alt="drop down menu" loading="lazy" decoding="async" class="hidden w-[32px] h-[32px] m-auto group-hover:block"> </div> </a> <!-- <PracticeDropdown /> --> <nav class="bg-[#2F3B4B] text-white absolute hidden group-hover:grid !z-[9999] min-h-[250px]" id="practice_area_dropdown"> ${practice_areas && practice_areas.length > 0 && practice_areas.map(
    (page) => renderTemplate`${renderComponent($$result, "LinkItem", $$LinkItem, { "currentPath": currentPath, "href": page.link, "customStyle": "!z-[9999] !text-white", "label": page.label })}`
  )} </nav> </div> </div> ${ContactButton ? renderTemplate`<a href="/contact" class="nav-link w-nav-link my-auto"> <button class="bg-primaryC px-10 text-black hover:bg-transparent hover:text-primaryC border-[2px] border-solid border-primaryC transition-all duration-500">Contact Me</button> </a>` : renderTemplate`${renderComponent($$result, "LinkItem", $$LinkItem, { "currentPath": currentPath, "href": "/contact", "label": "Contact" })}`} </nav> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/navigation/menu-links.astro", void 0);

const Icon = new Proxy({"src":"/_astro/hamburger_menu_white.FeGc34rS.png","width":100,"height":100,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/eli-mordecai/src/assets/icons/hamburger_menu_white.png";
							}
							
							return target[name];
						}
					});

const $$Astro$4 = createAstro("https://mordecai-law.com/");
const $$MobileIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MobileIcon;
  const {
    customMargin,
    ID
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${customMargin ? customMargin : "my-auto"} block lg:hidden justify-center align-middle bg-transparent cursor-pointer`, "class")}${addAttribute(`${ID}`, "id")}> <img${addAttribute(Icon.src, "src")} class="w-[32px] h-[32px] m-auto object-fit" alt="Mobile Icon"> </div>`;
}, "D:/Astro/eli-mordecai/src/components/navigation/mobile-icon.astro", void 0);

const $$MinimizedNav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="mininized-header" class="flex flex-col fixed top-0 w-full z-[5] hidden_minimized_nav transition-all duration-500"> <div class="h-fit bg-primaryC sm:h-[30px] w-full block sm:flex sm:flex-row justify-between text-secondaryC [&>div]:px-5 text-lg [&>div]:my-auto font-primaryF"> <div><b>Call us on:</b> <a class="text-black underline font-bold pl-1 hover:text-secondaryC text-lg hover:underline"${addAttribute(`tel:${BusinessInfo.phone}`, "href")}>${formatPhone(BusinessInfo.phone)}</a></div> <div><b>Email us on:</b> <a class="text-black underline font-bold pl-1 hover:text-secondaryC text-lg hover:underline"${addAttribute(`mailto:${BusinessInfo.email}`, "href")}>${BusinessInfo.email}</a></div> </div> <div class="flex flex-row justify-between lg:justify-between bg-secondaryC [&>*]:px-5 border-b-2 border-b-white py-1"> ${renderComponent($$result, "LogoComponent", $$LogoComponentLazy, {})} ${renderComponent($$result, "MenuLinks", $$MenuLinks, { "ContactButton": true })} ${renderComponent($$result, "MobileIcon", $$MobileIcon, { "ID": "minimizedMobileIcon" })} </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/navigation/minimized-nav.astro", void 0);

const $$Astro$3 = createAstro("https://mordecai-law.com/");
const $$ConsultationBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ConsultationBtn;
  const {
    WrapperStyle
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`header-button-wrap ${WrapperStyle}`, "class")}> <a href="https://calendly.com/eliasjacobmordecai/30min" class="text-white bg-[rgba(255,255,255,0.1)] border-[rgba(255,255,255,0.1)] mt-[20px] py-[20px] px-[30px] text-[20px] min-[992]:py-[20px] min-[992]:px-[50px] mr-0 transition-all border-[1px] border-solid text-center font-secondaryF font-500 leading-inherit cursor-pointer no-underline block" target="_blank">Book A Consultation</a> </div>`;
}, "D:/Astro/eli-mordecai/src/components/navigation/consultation-btn.astro", void 0);

const $$Astro$2 = createAstro("https://mordecai-law.com/");
const $$MobileMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MobileMenu;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<div class="bg-secondaryC w-[250px] h-full overflow-y-scroll overflow-x-hidden fixed z-20 py-10 px-5 border-r-white border-r-2 border-r-solid transform-all duration-500 closedMobileMenu lg:hidden" id="MobileMenu"> ${renderComponent($$result, "LogoComponentLazy", $$LogoComponentLazy, { "customDiv": "header-logo w-[200px]" })} <div class="flex flex-col !text-white"> <nav role="navigation" class="flex flex-col"> ${renderComponent($$result, "ConsultationBtn", $$ConsultationBtn, { "wrapperStyle": "" })} ${renderComponent($$result, "LinkItem", $$LinkItem, { "currentPath": currentPath, "href": "/", "label": "Home" })} ${renderComponent($$result, "LinkItem", $$LinkItem, { "currentPath": currentPath, "href": "/about", "label": "About" })} ${renderComponent($$result, "MobileDropDown", null, { "label": "Practice Areas", "options": practice_areas, "client:only": "react", "currentPath": currentPath, "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/Astro/eli-mordecai/src/components/navigation/mobile-dropdown.tsx", "client:component-export": "default" })} ${renderComponent($$result, "LinkItem", $$LinkItem, { "currentPath": currentPath, "href": "/contact", "label": "Contact" })} <div class="hover:text-primaryC cursor-pointer nav-link w-nav-link" id="CloseMobileMenuLink">Close</div> </nav> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/navigation/mobile-menu.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BodyLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", "<body> ", " ", " ", " ", ' <script src="/script/nav-script.js" type="text/javascript" defer><\/script> <script src="/script/animated_script.js" type="text/javascript" defer><\/script> </body> <script>\n    // document.addEventListener("astro:page-load", () => {\n    // window.location.href = "/undermaintenance"\n    // })\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "MinimizedNav", $$MinimizedNav, {}), renderComponent($$result, "MobileMenu", $$MobileMenu, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Index$1, {}));
}, "D:/Astro/eli-mordecai/src/layout/BodyLayout.astro", void 0);

const $$Astro$1 = createAstro("https://mordecai-law.com/");
const $$LogoComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LogoComponent;
  const {
    customDiv
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${customDiv ? customDiv : "justify-center flex"}`, "class")}> <a href="/" aria-current="page" class="w-inline-block max-w-full inline-block"> <img${addAttribute(Logo216.src, "src")} loading="eager" class="w-[218px] aspect-[3/1]" alt="General Practice Attorney Logo"> </a> </div>`;
}, "D:/Astro/eli-mordecai/src/components/logoComponent.astro", void 0);

const $$Astro = createAstro("https://mordecai-law.com/");
const $$ContactInfoItems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactInfoItems;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`wrapperStyle`, "class")}> <div class="header-contact-item-wrap1 grid md:flex md:flex-row justify-between items-[flex-start] min-[1280px]:flex-row min-[1280px]:justify-between min-[1280px]:items-center min-[1280px]:flex"> <div class="header-contact-item1 flex items-center mb-[15px] pl-[10px] min-[1280px]:justify-start min-[1280px]:pl-[50px]"> <div class=" header-link-wrap border-[2px] border-primaryC rounded-[100px] justify-center items-center w-[62px] h-[62px] md:flex"> <img src="/assets/icons/header-call-icon.svg" loading="lazy" alt="Header Contact Icon" class="w-[17px] h-[17px]"> </div> <div class="header-contact-link-wrap1 pl-0 md:pl-[12px] mt-5 md:mt-auto md:mx-auto"> <p class="header-contact-title1 hidden sm:block text-primaryC mb-[0] text-[18px] font-[500] md:text-[18px] whitespace-nowrap">Call Us:</p> <a${addAttribute(`tel:${BusinessInfo.phone}`, "href")} class="header-contact-link1 text-[#ffffff] text-[16px] sm:text-[22px] leading-[1.2] no-underline transition-[color] hover:text-primaryC md:text-[22px] whitespace-nowrap">${formatPhone(BusinessInfo.phone)}</a> </div> </div> <div class="header-contact-item1 flex items-center mb-[15px] pl-[10px] min-[1280px]:justify-start min-[1280px]:pl-[50px]"> <div class="header-link-wrap border-[2px] border-primaryC rounded-[100px] justify-center items-center w-[62px] h-[62px] md:flex"> <img src="/assets/icons/header-mail-icon.svg" loading="lazy" alt="Header Contact Icon" class="w-[17px] h-[17px]"> </div> <div class="header-contact-link-wrap1 pl-0 md:pl-[12px] mx-auto"> <p class="header-contact-title1 hidden sm:block text-primaryC mb-[0] text-[18px] font-[500] md:text-[18px]">Email Us:</p> <a${addAttribute(`mailto:${BusinessInfo.email}`, "href")} class="header-contact-link1 text-[#ffffff] text-[16px] sm:text-[22px] leading-[1.2] no-underline transition-[color] hover:text-primaryC md:text-[22px] whitespace-normal">${BusinessInfo.email}</a> </div> </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/navigation/contact-info-items.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="pt-[40px] pb-[20px] relative min-[1440px]:pt-[40px] min-[1440px]:pb-[20px] lg:z-[99999]" id="static_nav"> <div class="max-w-[100%] px-[30px] min-[480px]:px-[40px] min-[1280px]:max-w-[100%] min-[1280px]:px-[40px] min-[1440px]:max-w-[1440px] min-[1440px]:px-[20px] min-[1920px]:px-0 container mx-auto  before:content-[' '] after:content-[' '] before:grid-area-[1/1/2/2] after:grid-area-[1/1/2/2] before:table after:table after:clear-both w-container"> <div class="flex justify-between pb-[20px] min-[1280px]:justify-between min-[1280px]:items-stretch min-[1280px]:flex max-[991px]:flex-col max-[991px]:items-center"> ${renderComponent($$result, "LogoComponent", $$LogoComponent, { "immediateLoading": true })} ${renderComponent($$result, "ContactInfoItems", $$ContactInfoItems, { "wrapperStyle": "my-auto [&>div]:my-auto" })} </div> <div class="header-navbar-wrap1 justify-between items-center flex mt-2.5 pt-[25px] pb-7 border-y-[1px] border-y-[#4e555f] border-t border-solid border-b"> ${renderComponent($$result, "MobileIcon", $$MobileIcon, { "customMargin": "ml-0 mr-auto", "ID": "staticMobileIcon" })} ${renderComponent($$result, "MenuLinks", $$MenuLinks, { "ContactButton": false })} ${renderComponent($$result, "ConsultationBtn", $$ConsultationBtn, {})} </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/navigation/index.astro", void 0);

export { $$Index as $, $$BodyLayout as a, $$ViewTransitions as b, $$SEO as c };
