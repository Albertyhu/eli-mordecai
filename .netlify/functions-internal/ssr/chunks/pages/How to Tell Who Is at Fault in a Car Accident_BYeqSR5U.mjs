/* empty css                          */
import { c as createComponent, r as renderTemplate, d as addAttribute, e as renderComponent, f as createAstro, u as unescapeHTML, F as Fragment, m as maybeRenderHead, g as renderSlot, h as renderHead } from '../astro_7lB2f1hd.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
/* empty css                                 */

const BusinessInfo = {
  tile: "Eli Mordecai",
  owner: "Eli Mordecai",
  companyName: "Eli Mordecai - General Attorney",
  street: "3700 S Federal Blvd.",
  city: "Englewood",
  state: "CO",
  zip: "80110-3240",
  country: "USA",
  phone: "0123456789",
  email: "Eliasmordecai@gmail.com",
  website_name: "Eli Mordecai website",
  websiteURL: "www.EliMordecai.com",
  OpenGraphImg: {
    src: "/assets/images/open-graph-image.webp",
    alt: "Eli Mordecai - Los Angeles General Practice Attorney",
  },
  facebook: "https://www.facebook.com",
  twitter: "https://www.x.com",
  pinterest: "https://www.pinterest.com",
  instagram: "https://www.instagram.com",
  youtube: "https://www.youtube.com",
  hours: [
    { day: "Monday", hours: "9am-8pm" },
    { day: "Tuesday", hours: "9am-8pm" },
    { day: "Wednesday", hours: "9am-8pm" },
    { day: "Thursday", hours: "9am-8pm" },
    { day: "Friday", hours: "9am-8pm" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" },
  ],
};

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
      "url": "${{"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}.SITE_URL}"
      }
    </script>`;
}

const $$Astro$c = createAstro();
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
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

const $$Astro$b = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "D:/Astro/eli-mordecai/node_modules/astro/components/ViewTransitions.astro", void 0);

const formatPhone = (num) => {
  {
    var phoneNumber = num.replace(/[^\d]/g, "");
    if (phoneNumber.length < 4) {
      return phoneNumber;
    } else if (phoneNumber.length >= 4 && phoneNumber.length < 7) {
      var area_code = phoneNumber.slice(0, 3);
      var prefix = phoneNumber.slice(3, phoneNumber.length);
      return `(${area_code}) - ${prefix}`;
    } else if (phoneNumber.length >= 7) {
      var area_code = phoneNumber.slice(0, 3);
      var prefix = phoneNumber.slice(3, 6);
      var suffix = "";
      if (phoneNumber.length <= 10)
        suffix = phoneNumber.slice(6, phoneNumber.length);
      else suffix = phoneNumber.slice(6, 10);
      return `(${area_code})-${prefix}-${suffix}`;
    }
  }
};

const $$ContactUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="footer-widget"> <div class="footer-widget-title-wrap"> <h3 class="footer-widget-title">Contact Us</h3> </div> <div class="footer-contact-wrap"> <div class="footer-address-wrap"> <p class="footer-address">${BusinessInfo.companyName} <br> ${BusinessInfo.street}, <br>${BusinessInfo.city} ${BusinessInfo.zip},${BusinessInfo.country}.</p> </div> <div class="footer-contact-link-wrap"> <div class="footer-contact-link-item"> <p class="footer-link-type">Phone: </p> <a${addAttribute(`tel:${BusinessInfo.phone}`, "href")} class="footer-link">${formatPhone(BusinessInfo.phone)}</a> </div> <div class="footer-contact-link-item"> <p class="footer-link-type">Email: </p> <a href="mailto:info@example.com" class="footer-link">${BusinessInfo.email}</a> </div> </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/footer/contact-us.astro", void 0);

const $$QuickLink = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="footer-widget"> <div class="footer-widget-title-wrap"> <h3 class="footer-widget-title">Quick Link</h3> </div> <div class="flex flex-row gap-10"> <div class="footer-links-wrap"> <div class="footer-links-area"> <a href="/" aria-current="page" class="footer-link w--current">Home</a> <a href="/about" class="footer-link">About</a> <a href="/practice-areas" class="footer-link">Practice Areas</a> <a href="/blog/1" class="footer-link">Blog </a> <a href="/contact-us" class="footer-link">Contact Us</a> <a href="/privacy-policy" class="footer-link">Privacy Policy</a> <a href="/terms-and-conditions" class="footer-link">Terms and Conditions</a> </div> </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/footer/quick-link.astro", void 0);

const $$PracticeArea = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="footer-widget"> <div class="footer-widget-title-wrap"> <h3 class="footer-widget-title">Practice Area</h3> </div> <div class="footer-links-area"> <a href="/practice-areas/criminal-defense-law" class="footer-link">Criminal Defense Law</a> <a href="/practice-areas/transaction-law" class="footer-link">Transaction Law</a> <a href="/practice-areas/employment-law" class="footer-link">Employment Law</a> <a href="/practice-areas/personal-injury-law" class="footer-link">Personal Injury Law</a> <a href="/practice-areas/tenant-law" class="footer-link">Tenant Landlord Law</a> </div></div>`;
}, "D:/Astro/eli-mordecai/src/components/footer/practice-area.astro", void 0);

const Logo = new Proxy({"src":"/_astro/Eli_Mordecai-Logo.zRnoxzvg.webp","width":606,"height":236,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/eli-mordecai/src/assets/logo/Eli_Mordecai-Logo.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$a = createAstro();
const $$LogoComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$LogoComponent;
  const {
    customDiv,
    customImg,
    immediateLoading = false
  } = Astro2.props;
  const imgStyle = "w-[225px] h-[116px] min-[500px]:w-[300px]";
  return renderTemplate`${immediateLoading ? renderTemplate`${maybeRenderHead()}<div${addAttribute(`${customDiv ? customDiv : "header-logo"}`, "class")}><a href="/" aria-current="page"${addAttribute(`${customImg ? customImg : "w-inline-block w--current"}`, "class")}><img${addAttribute(Logo.src, "src")} loading="eager"${addAttribute(imgStyle, "class")} alt="Attorney Brand Logo"></a></div>` : renderTemplate`<div${addAttribute(`${customDiv ? customDiv : "header-logo"}`, "class")}><a href="/" aria-current="page"${addAttribute(`${customImg ? customImg : "w-inline-block w--current"}`, "class")}><img${addAttribute(Logo.src, "src")} loading="lazy"${addAttribute(imgStyle, "class")} alt="Attorney Brand Logo"></a></div>`}`;
}, "D:/Astro/eli-mordecai/src/components/logoComponent.astro", void 0);

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  var YEAR = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<div class="footer"> <div class="container w-container"> <div class="footer-top-logo"> <div class="footer-top-logo-wrap"> ${renderComponent($$result, "LogoComponent", $$LogoComponent, { "customDiv": "header-logo mx-auto" })} </div> </div> <div class="footer-widget-wrap"> <div class="w-layout-grid footer-grid"> ${renderComponent($$result, "QuickLinkColumn", $$QuickLink, {})} ${renderComponent($$result, "PracticeAreaColumn", $$PracticeArea, {})} ${renderComponent($$result, "ContactUsColumn", $$ContactUs, {})} </div> </div> <div class="copyright"> <div class="w-layout-grid copyright-grid"> <div id="w-node-b65b1a3d-ddb9-afd1-e2c9-f7bc0a364088-0a36402f" class="copyright-left-section"> <span id="WebsiteName">${BusinessInfo.companyName}</span> <p class="copyright-content">Copyright © <span id="CopyRight">${YEAR}</span> | Website developed by <a href="https://www.LADesignInitiative.com" target="_blank">LA Design Initiative</a></p> </div> <div id="w-node-b65b1a3d-ddb9-afd1-e2c9-f7bc0a364090-0a36402f" class="copyright-right-section"> <div class="copyright-social-area"> <p class="copyright-social-title">Follow :</p> <div class="copyright-social-wrap"> <a href="http://www.facebook.com" target="_blank" class="social-icon-link w-inline-block"><img src="https://assets-global.website-files.com/663690af6ff2152d9a1b9618/663690b06ff2152d9a1b9e46_social-icon-facebook.svg" loading="lazy" alt="Copyright Social"></a><a href="https://www.twitter.com" target="_blank" class="social-icon-link w-inline-block"><img src="https://assets-global.website-files.com/663690af6ff2152d9a1b9618/663690b06ff2152d9a1b9e98_social-icon-twitter.svg" loading="lazy" alt="Copyright Social"></a><a href="https://www.instagram.com" target="_blank" class="social-icon-link w-inline-block"><img src="https://assets-global.website-files.com/663690af6ff2152d9a1b9618/663690b06ff2152d9a1b9e49_social-icon-instagram.svg" loading="lazy" alt="Copyright Social"></a><a href="https://www.pinterest.com" target="_blank" class="social-icon-link w-inline-block"><img src="https://assets-global.website-files.com/663690af6ff2152d9a1b9618/663690b06ff2152d9a1b9e48_social-icon-pinterest.svg" loading="lazy" alt="Copyright Social"></a> </div> </div> </div> </div> </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/footer/index.astro", void 0);

const $$Astro$9 = createAstro();
const $$LinkItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$LinkItem;
  const {
    currentPath,
    href,
    label,
    customStyle
  } = Astro2.props;
  return renderTemplate`${currentPath.toLowerCase().replace(/\//g, "") === href.toLowerCase().replace(/\//g, "") ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} aria-current="page"${addAttribute(`w--current whitespace-nowrap my-auto ${customStyle ? customStyle : "nav-link w-nav-link"}`, "class")}>${label}</a>` : renderTemplate`<a${addAttribute(href, "href")}${addAttribute(`whitespace-nowrap my-auto ${customStyle ? customStyle : "nav-link w-nav-link"}`, "class")}>${label}</a>`}`;
}, "D:/Astro/eli-mordecai/src/components/navigation/linkItem.astro", void 0);

const practice_areas = [
  {
    label: "Criminal Defense",
    link: "/practice-areas/criminal-defense-law",
    subDirectory: [],
  },
  {
    label: "Transaction Law",
    link: "/practice-areas/transaction-law",
    subDirectory: [],
  },
  {
    label: "Employment Law",
    link: "/practice-areas/employment-law",
    subDirectory: [],
  },
  {
    label: "Personal Injury Law",
    link: "/practice-areas/personal-injury-law",
    subDirectory: [],
  },
  {
    label: "Tenant Landlord Law",
    link: "/practice-areas/tenant-law",
    subDirectory: [],
  },
];

const $$Astro$8 = createAstro();
const $$MenuLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$MenuLinks;
  const {
    ContactButton = false
  } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<div class="header-nav-area justify-center align-middle hidden lg:flex lg:flex-row"> <div class="w-nav bg-transparent flex align-middle mr-[0] ml-auto flex-nowrap"> <nav role="navigation" class="nav-menu w-nav-menu flex flex-row ![&>*]:z-[1]"> ${renderComponent($$result, "LinkItem", $$LinkItem, { "currentPath": currentPath, "href": "/", "label": "Home" })} ${renderComponent($$result, "LinkItem", $$LinkItem, { "currentPath": currentPath, "href": "/about", "label": "About" })} <div data-hover="true" data-delay="0" class="nav-link dropdown-navigation w-dropdown my-auto"> <div class="dropdown-toggle w-dropdown-toggle peer group"> <a href="/practice-areas"> <div class="flex flex-cols whitespace-nowrap gap-[10px]"> <div${addAttribute(`peer ${currentPath.toLowerCase().replace(/\//g, "") === "practice-areas" ? "text-primaryC" : "text-white"}`, "class")}>Practice Areas</div> <img src="/assets/icons/down-arrow-white.png" alt="drop down menu" class="w-[32px] h-[32px] m-auto group-hover:hidden"> <img src="/assets/icons/down-arrow-gold.png" alt="drop down menu" class="hidden w-[32px] h-[32px] m-auto group-hover:block"> </div> </a> <nav class="dropdown-list w-dropdown-list group-hover:block"> ${practice_areas && practice_areas.length > 0 && practice_areas.map(
    (page) => renderTemplate`${renderComponent($$result, "LinkItem", $$LinkItem, { "currentPath": currentPath, "href": page.link, "customStyle": "dropdown-link w-dropdown-link", "label": page.label })}`
  )} </nav> </div> </div> ${renderComponent($$result, "LinkItem", $$LinkItem, { "currentPath": currentPath, "href": "/blog/1", "label": "Blog" })} ${ContactButton ? renderTemplate`<a href="/contact-us" class="nav-link w-nav-link my-auto"> <button class="bg-primaryC px-10 text-black hover:bg-transparent hover:text-primaryC border-[2px] border-solid border-primaryC transition-all duration-500">Contact Us</button> </a>` : renderTemplate`${renderComponent($$result, "LinkItem", $$LinkItem, { "currentPath": currentPath, "href": "/contact-us", "label": "Contact Us" })}`} </nav> </div> </div>`;
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

const $$Astro$7 = createAstro();
const $$MobileIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$MobileIcon;
  const {
    customMargin,
    ID
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${customMargin ? customMargin : "my-auto"} block lg:hidden justify-center align-middle bg-transparent cursor-pointer`, "class")}${addAttribute(`${ID}`, "id")}> <img${addAttribute(Icon.src, "src")} class="w-[32px] h-[32px] m-auto object-fit" alt="Mobile Icon"> </div>`;
}, "D:/Astro/eli-mordecai/src/components/navigation/mobile-icon.astro", void 0);

const $$MinimizedNav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="mininized-header" class="flex flex-col fixed top-0 w-full z-[5] hidden_minimized_nav transition-all duration-500"> <div class="h-fit bg-primaryC sm:h-[30px] w-full block sm:flex sm:flex-row justify-between text-secondaryC [&>div]:px-5 text-lg [&>div]:my-auto font-primaryF"> <div><b>Call us on:</b> <a class="text-white font-bold pl-1 hover:text-secondaryC text-lg hover:underline"${addAttribute(`tel:${BusinessInfo.phone}`, "href")}>${formatPhone(BusinessInfo.phone)}</a></div> <div><b>Email us on:</b> <a class="text-white font-bold pl-1 hover:text-secondaryC text-lg hover:underline"${addAttribute(`mailto:${BusinessInfo.email}`, "href")}>${BusinessInfo.email}</a></div> </div> <div class="flex flex-row justify-between lg:justify-between bg-secondaryC [&>*]:px-5 border-b-2 border-b-white py-1"> ${renderComponent($$result, "LogoComponent", $$LogoComponent, {})} ${renderComponent($$result, "MenuLinks", $$MenuLinks, { "ContactButton": true })} ${renderComponent($$result, "MobileIcon", $$MobileIcon, { "ID": "minimizedMobileIcon" })} </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/navigation/minimized-nav.astro", void 0);

const $$Astro$6 = createAstro();
const $$ConsultationBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ConsultationBtn;
  const {
    WrapperStyle
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`header-button-wrap ${WrapperStyle}`, "class")}> <a href="/contact-us" class="button header-button w-button">Book A Consultation</a> </div>`;
}, "D:/Astro/eli-mordecai/src/components/navigation/consultation-btn.astro", void 0);

const $$Astro$5 = createAstro();
const $$MobileMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MobileMenu;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<div class="bg-secondaryC w-[250px] h-full overflow-y-scroll fixed z-20 py-10 px-5 border-r-white border-r-2 border-r-solid transform-all duration-500 closedMobileMenu lg:hidden" id="MobileMenu"> ${renderComponent($$result, "LogoComponent", $$LogoComponent, { "customDiv": "header-logo w-[200px]" })} <div class="flex flex-col !text-white"> <nav role="navigation" class="flex flex-col"> ${renderComponent($$result, "ConsultationBtn", $$ConsultationBtn, { "wrapperStyle": "" })} ${renderComponent($$result, "LinkItem", $$LinkItem, { "currentPath": currentPath, "href": "/", "label": "Home" })} ${renderComponent($$result, "LinkItem", $$LinkItem, { "currentPath": currentPath, "href": "/about", "label": "About" })} ${renderComponent($$result, "MobileDropDown", null, { "label": "Practice Areas", "options": practice_areas, "client:only": "react", "currentPath": currentPath, "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/Astro/eli-mordecai/src/components/navigation/mobile-dropdown.tsx", "client:component-export": "default" })} ${renderComponent($$result, "LinkItem", $$LinkItem, { "currentPath": currentPath, "href": "/blog/1", "label": "Blog" })} ${renderComponent($$result, "LinkItem", $$LinkItem, { "currentPath": currentPath, "href": "/contact-us", "label": "Contact Us" })} <div class="hover:text-primaryC cursor-pointer nav-link w-nav-link" id="CloseMobileMenuLink">Close</div> </nav> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/navigation/mobile-menu.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BodyLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", "<body> ", " ", " ", " ", ' <script src="/script/nav-script.js" type="text/javascript"><\/script> <script src="/script/animated_script.js" type="text/javascript"><\/script> </body>'])), maybeRenderHead(), renderComponent($$result, "MinimizedNav", $$MinimizedNav, {}), renderComponent($$result, "MobileMenu", $$MobileMenu, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Index$1, {}));
}, "D:/Astro/eli-mordecai/src/layout/BodyLayout.astro", void 0);

const $$Astro$4 = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    pageTitle,
    customDescription
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><title>${pageTitle}</title>${renderComponent($$result, "SEO", $$SEO, { "title": pageTitle, "description": customDescription })}<meta content="width=device-width, initial-scale=1" name="viewport"><link href="/style/global.css" rel="stylesheet" type="text/css" media="print" onload="this.media='all'; this.onload=null;">${maybeRenderHead()}<noscript><link rel="stylesheet" href="/style/global.css"></noscript><link href="/assets/icons/favicon.webp" rel="shortcut icon" type="image/x-icon">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> ${renderComponent($$result, "BodyLayout", $$BodyLayout, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </html>`;
}, "D:/Astro/eli-mordecai/src/layout/BaseLayout.astro", void 0);

const $$Astro$3 = createAstro();
const $$ContactInfoItems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ContactInfoItems;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`header-contact-wrap wrapperStyle`, "class")}> <div class="header-contact-item-wrap"> <div class="header-contact-item "> <div class="header-contact-icon-wrap header-link-wrap"> <img src="/assets/icons/header-call-icon.svg" loading="lazy" alt="Header Contact Icon" class="w-[17px] h-[17px]"> </div> <div class="header-contact-link-wrap"> <p class="header-contact-title whitespace-nowrap">Call Us On:</p> <a${addAttribute(`tel:${BusinessInfo.phone}`, "href")} class="header-contact-link whitespace-nowrap">${formatPhone(BusinessInfo.phone)}</a> </div> </div> <div class="header-contact-item"> <div class="header-contact-icon-wrap header-link-wrap"> <img src="/assets/icons/header-mail-icon.svg" loading="lazy" alt="Header Contact Icon" class="w-[17px] h-[17px]"> </div> <div class="header-contact-link-wrap"> <p class="header-contact-title">Email Us On:</p> <a${addAttribute(`mailto:${BusinessInfo.email}`, "href")} class="header-contact-link whitespace-normal">${BusinessInfo.email}</a> </div> </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/navigation/contact-info-items.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="header" id="static_nav"> <div class="container w-container"> <div class="header-logo-wrap"> ${renderComponent($$result, "LogoComponent", $$LogoComponent, { "immediateLoading": true })} ${renderComponent($$result, "ContactInfoItems", $$ContactInfoItems, { "wrapperStyle": "my-auto [&>div]:my-auto" })} </div> <div class="header-navbar-wrap"> ${renderComponent($$result, "MobileIcon", $$MobileIcon, { "customMargin": "mx-auto md:ml-0 md:mr-auto", "ID": "staticMobileIcon" })} ${renderComponent($$result, "MenuLinks", $$MenuLinks, { "ContactButton": false })} ${renderComponent($$result, "ConsultationBtn", $$ConsultationBtn, {})} </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/navigation/index.astro", void 0);

const $$Astro$2 = createAstro();
const $$ProfilePicture = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
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

const getPaginatedArray = (allPosts, currentPage, pageSize) => {
  return allPosts?.slice((currentPage - 1) * pageSize, pageSize * currentPage) || [];
};
const createStaticPathArray = ({
  allPosts,
  PAGE_SIZE,
  totalPages,
  assets
}) => {
  var staticPaths = [];
  var i = 1;
  const sortedPosts = SortPostsByNew(allPosts);
  do {
    var paginatedArray = getPaginatedArray(sortedPosts, i, PAGE_SIZE);
    var path = {
      params: { page: i },
      props: {
        totalPages,
        assets,
        paginatedArray,
        totalPosts: allPosts.length,
        PAGE_SIZE
      }
    };
    staticPaths.push(path);
    i++;
  } while (i <= totalPages);
  return staticPaths;
};
const SortPostsByNew = (AllPosts) => {
  var sortedPosts = [...AllPosts];
  sortedPosts.sort((a, b) => {
    return new Date(b.frontmatter.pubDate) - new Date(a.frontmatter.pubDate);
  });
  return sortedPosts;
};
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
const GetTheMostRecentBlogs = (size, AllPosts) => {
  try {
    let sortedBlogs = SortPostsByNew(AllPosts);
    return sortedBlogs.slice(0, size);
  } catch (e) {
    console.log("GetTheMostRecentBlog error: ", e);
    return [];
  }
};

const $$Astro$1 = createAstro();
const $$ResponsiveImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ResponsiveImage;
  const {
    defaultImg,
    phoneImg,
    mediumTabImg,
    tabletImg,
    altText = "image",
    customStyle
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<picture> <!-- Mobile Image --> ${phoneImg && renderTemplate`<source media="(max-width: 600px)"${addAttribute(phoneImg, "srcset")}>`} <!-- Medium Tablet Image--> ${mediumTabImg && renderTemplate`<source media="(min-width: 601px)"${addAttribute(mediumTabImg, "srcset")}>`} <!-- Tablet Image--> ${tabletImg && renderTemplate`<source media="(min-width: 1080px)"${addAttribute(tabletImg, "srcset")}>`} <!-- Desktop Image--> ${defaultImg && renderTemplate`<source media="(min-width: 1200px)"${addAttribute(defaultImg, "srcset")}>`} <!-- Fallback Image --> <img aria-hidden="true" loading="lazy" decoding="async"${addAttribute(defaultImg, "src")}${addAttribute(altText, "alt")} width="1920" height="1280"${addAttribute(customStyle, "class")}> </picture>`;
}, "D:/Astro/eli-mordecai/src/components/graphics/ResponsiveImage.astro", void 0);

const $$Astro = createAstro();
const $$MarkdownPostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  let allAuthors = [];
  try {
    allAuthors = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/author_profile/eli_mordecai.md": () => import('./eli_mordecai_CByWEYua.mjs')}), () => "../pages/author_profile/*.md");
  } catch (e) {
    allAuthors = [];
  }
  const { frontmatter } = Astro2.props;
  const selectedAuthor = getAuthorInfoFromArray(frontmatter.author, allAuthors);
  const category_url = frontmatter.category.replace(" ", "-").toLowerCase();
  console.log(frontmatter);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.title, "customDescription": frontmatter.excerpt }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$Index, {})} ${maybeRenderHead()}<div class="blog-single-section"> <div class="container w-container"> ${frontmatter.featured_image && renderTemplate`${renderComponent($$result2, "FeaturedImage", $$ResponsiveImage, { "defaultImg": frontmatter.featured_image, "phoneImg": frontmatter.phoneImg, "mediumTabImg": frontmatter.mediumTabImg, "tabletImg": frontmatter.tabletImg, "altText": frontmatter.altText ? frontmatter.altText : frontmatter.title })}`} <div class="blog-single-content-wrap"> <div class="blog-single-title-wrap"> <div class="blog-meta-wrap blog-single-meta-wrap"> <div class="law-type-wrap"> <a${addAttribute(`/blog/category/${category_url}/1`, "href")} class="blog-law-type">${frontmatter.category}</a> </div> <div class="meta-separator"> <p class="meta-separator-line">|</p> </div> <div class="date-wrap"> <p class="published-date">${frontmatter.pubDate}</p> </div> </div> <h1>${frontmatter.title}</h1> </div> <div class="blog-single-rich-text"> <div class="blog-single-main-content w-richtext"> ${renderSlot($$result2, $$slots["default"])} <div id="scriptContainer"${addAttribute(frontmatter.body, "data-frontmatter")}></div> </div> </div> </div> </div> </div> <div class="blog-author-wrap"> <div class=""> <div class=""> <div class="flex flex-col md:flex-row md:px-10"> <div class="blog-author-image-wrap"> <a${addAttribute(selectedAuthor?.url, "href")} class=""> ${renderComponent($$result2, "ProfilePicture", $$ProfilePicture, { "defaultImg": selectedAuthor.frontmatter.profile_picture, "altText": frontmatter.author, "immedateLoad": false })} </a> </div> <div class="flex flex-col mx-auto md:ml-0 md:justify-around  text-center md:text-left"> <a${addAttribute(selectedAuthor?.url, "href")} class="author-link">${frontmatter.author}</a> ${selectedAuthor?.frontmatter.bio && renderTemplate`<div class="author-simple-bio px-5 md:p-0">${selectedAuthor?.frontmatter.bio}</div>`} <a${addAttribute(selectedAuthor?.url, "href")} class="underline hover:text-secondaryC">View More Posts</a> </div> </div> </div> </div> </div> ` })}`;
}, "D:/Astro/eli-mordecai/src/layout/MarkdownPostLayout.astro", void 0);

const html = "<p>\nUniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology.\n</p>\n<br>\n<h2>Equal Justice for all Livings</h2>\n<p>\nAppropriately empower dynamic leadership skills after business portals. Globally my cardinate interactive supply chains with distinctive quality vectors global sources services. Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements.\n</p>\n<br>\n<ul>\n  <li>Dynamically target high-payoff intellectual capital for customized</li>\n  <li>Interactively procrastinate high-payoff content</li>\n  <li>Credibly reintermediate backend ideas for cross-platform models</li>\n</ul>\n<h3>Make real time a law services.</h3>\n<p>\nCollaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.\n</p>\n<br>\n<ol>\n  <li>It brings the right people together with all the right information and tools to get work done</li>\n  <li>We provide operational efficiency, data security, and flexible scale</li>\n  <li>Your best work, together in one package that works seamlessly from your computer</li>\n  <li>Delivers the tools you need to save time Improve field performance always</li>\n</ol>";

				const frontmatter = {"layout":"../../layout/MarkdownPostLayout.astro","title":"How to Tell Who Is at Fault in a Car Accident","pubDate":"Friday, February 4, 2022","category":"Legal Advice","excerpt":"Capitalize on low-hanging fruit to identify a ballpark value added matrix economically activity to beta test override the digital.","author":"Eli Mordecai","featured_image":"/assets/images/banner-title-background-books.webp","phoneImg":"https://assets-global.website-files.com/61fd0d3090785d374bf9afc3/6200b30819a334c9cc6e330e_blog-large-image-2-p-500.jpeg","mediumTabImg":"https://assets-global.website-files.com/61fd0d3090785d374bf9afc3/6200b30819a334c9cc6e330e_blog-large-image-2-p-800.jpeg","tabletImg":"https://assets-global.website-files.com/61fd0d3090785d374bf9afc3/6200b30819a334c9cc6e330e_blog-large-image-2-p-1080.jpeg","altText":"How to Tell Who Is at Fault in a Car Accident"};
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

const How_to_Tell_Who_Is_at_Fault_in_a_Car_Accident = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MarkdownPostLayout as $, BusinessInfo as B, GetTheMostRecentBlogs as G, How_to_Tell_Who_Is_at_Fault_in_a_Car_Accident as H, $$Index as a, $$BaseLayout as b, $$ResponsiveImage as c, filterPostsByAuthor as d, $$ProfilePicture as e, formatPhone as f, getPaginatedArray as g, $$Index$1 as h, $$MobileMenu as i, $$MinimizedNav as j, $$ViewTransitions as k, $$SEO as l, createStaticPathArray as m };
