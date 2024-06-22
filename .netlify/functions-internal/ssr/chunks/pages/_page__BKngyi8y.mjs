import { d as createAstro, c as createComponent, r as renderTemplate, e as addAttribute, f as renderComponent, u as unescapeHTML, F as Fragment, m as maybeRenderHead, g as renderSlot, h as renderHead } from '../astro_BD0Lb4GF.mjs';
/* empty css                          */
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { jsxs, jsx, Fragment as Fragment$1 } from 'react/jsx-runtime';
import uuid from 'react-uuid';
/* empty css                           */
import { useState, useRef, useEffect } from 'react';
/* empty css                                 */

const BusinessInfo = {
  tile: "Eli Mordecai",
  owner: "Eli Mordecai",
  companyName: "Eli Mordecai - General Attorney",
  street: "14 Wavecrest Ave, Suite 11",
  city: "Venice",
  state: "CA",
  zip: "90291",
  country: "USA",
  phone: "3108060011",
  email: "Eliasmordecai@gmail.com",
  website_name: "Eli Mordecai website",
  websiteURL: "www.Mordecai-Law.com",
  OpenGraphImg: {
    src: "/assets/images/open-graph-image.webp",
    alt: "Eli Mordecai - Los Angeles General Practice Attorney",
  },
  facebook: "https://www.facebook.com",
  twitter: "https://www.x.com",
  pinterest: "https://www.pinterest.com",
  instagram: "https://www.instagram.com",
  youtube: "https://www.youtube.com",
  /*URL that leads to Google Business Profile review */
  Google_review_url: "https://www.google.com",
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
      "url": "${{"PUBLIC_EMAILJS_TEMPLATE_ID": "template_d33uvip", "PUBLIC_EMAILJS_SERVICE_ID": "service_4v8b2c6", "PUBLIC_EMAILJS_PUBLIC_KEY": "VbgTgikzNTaqIFL3q", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://mordecai-law.com/", "ASSETS_PREFIX": undefined}.SITE_URL}"
      }
    </script>`;
}

const $$Astro$f = createAstro("https://mordecai-law.com/");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
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

const $$Astro$e = createAstro("https://mordecai-law.com/");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
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
  return renderTemplate`${maybeRenderHead()}<div class="footer-widget"> <div class="footer-widget-title-wrap"> <h3 class="footer-widget-title">Quick Link</h3> </div> <div class="flex flex-row gap-10"> <div class="footer-links-wrap"> <div class="footer-links-area"> <a href="/" aria-current="page" class="footer-link w--current">Home</a> <a href="/about" class="footer-link">About</a> <a href="/practice-areas" class="footer-link">Practice Areas</a> <a href="/blog/1" class="footer-link">Blog </a> <a href="/contact" class="footer-link">Contact</a> <a href="/privacy-policy" class="footer-link">Privacy Policy</a> <a href="/terms-and-conditions" class="footer-link">Terms and Conditions</a> </div> </div> </div> </div>`;
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

const $$Astro$d = createAstro("https://mordecai-law.com/");
const $$LogoComponentLazy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$LogoComponentLazy;
  const {
    customDiv
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${customDiv ? customDiv : "header-logo"}`, "class")}> <a href="/" aria-current="page" class="w-inline-block w--current"> <img${addAttribute(Logo.src, "src")} loading="lazy" class="w-[225px] aspect-[5/2] min-[500px]:w-[300px]" alt="General Practice Attorney Logo"> </a> </div>`;
}, "D:/Astro/eli-mordecai/src/components/logoComponent-lazy.astro", void 0);

const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  var YEAR = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<div class="footer"> <div class="container w-container"> <div class="footer-top-logo"> <div class="footer-top-logo-wrap"> ${renderComponent($$result, "LogoComponent", $$LogoComponentLazy, { "customDiv": "header-logo mx-auto" })} </div> </div> <div class="footer-widget-wrap"> <div class="w-layout-grid footer-grid"> ${renderComponent($$result, "QuickLinkColumn", $$QuickLink, {})} ${renderComponent($$result, "PracticeAreaColumn", $$PracticeArea, {})} ${renderComponent($$result, "ContactUsColumn", $$ContactUs, {})} </div> </div> <div class="copyright"> <div class="w-layout-grid copyright-grid"> <div id="w-node-b65b1a3d-ddb9-afd1-e2c9-f7bc0a364088-0a36402f" class="copyright-left-section"> <span id="WebsiteName">${BusinessInfo.companyName}</span> <p class="copyright-content">Copyright © <span id="CopyRight">${YEAR}</span> | Website developed by <a href="https://www.LADesignInitiative.com" target="_blank">LA Design Initiative</a></p> </div> <div id="w-node-b65b1a3d-ddb9-afd1-e2c9-f7bc0a364090-0a36402f" class="copyright-right-section"> <div class="copyright-social-area"> <p class="copyright-social-title">Follow :</p> <div class="copyright-social-wrap"> <a href="http://www.facebook.com" target="_blank" class="social-icon-link w-inline-block"><img src="https://assets-global.website-files.com/663690af6ff2152d9a1b9618/663690b06ff2152d9a1b9e46_social-icon-facebook.svg" loading="lazy" alt="Copyright Social"></a><a href="https://www.twitter.com" target="_blank" class="social-icon-link w-inline-block"><img src="https://assets-global.website-files.com/663690af6ff2152d9a1b9618/663690b06ff2152d9a1b9e98_social-icon-twitter.svg" loading="lazy" alt="Copyright Social"></a><a href="https://www.instagram.com" target="_blank" class="social-icon-link w-inline-block"><img src="https://assets-global.website-files.com/663690af6ff2152d9a1b9618/663690b06ff2152d9a1b9e49_social-icon-instagram.svg" loading="lazy" alt="Copyright Social"></a><a href="https://www.pinterest.com" target="_blank" class="social-icon-link w-inline-block"><img src="https://assets-global.website-files.com/663690af6ff2152d9a1b9618/663690b06ff2152d9a1b9e48_social-icon-pinterest.svg" loading="lazy" alt="Copyright Social"></a> </div> </div> </div> </div> </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/footer/index.astro", void 0);

const $$Astro$c = createAstro("https://mordecai-law.com/");
const $$LinkItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
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
    label: "Landlord Tenant Law",
    link: "/practice-areas/tenant-law",
    subDirectory: [],
  },
];

const $$Astro$b = createAstro("https://mordecai-law.com/");
const $$MenuLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$MenuLinks;
  const {
    ContactButton = false
  } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<div class="header-nav-area justify-center align-middle hidden lg:flex lg:flex-row z-0"> <div class="w-nav bg-transparent flex align-middle mr-[0] ml-auto flex-nowrap"> <nav role="navigation" class="nav-menu w-nav-menu flex flex-row ![&>*]:z-[1]"> ${renderComponent($$result, "LinkItem", $$LinkItem, { "currentPath": currentPath, "href": "/", "label": "Home" })} ${renderComponent($$result, "LinkItem", $$LinkItem, { "currentPath": currentPath, "href": "/about", "label": "About" })} <div data-hover="true" data-delay="0" class="nav-link dropdown-navigation w-dropdown my-auto"> <div class="dropdown-toggle w-dropdown-toggle peer group"> <a href="/practice-areas"> <div class="flex flex-cols whitespace-nowrap gap-[10px]"> <div${addAttribute(`peer ${currentPath.toLowerCase().replace(/\//g, "") === "practice-areas" ? "text-primaryC" : "text-white"}`, "class")}>Practice Areas</div> <img src="/assets/icons/down-arrow-white.png" alt="drop down menu" loading="lazy" decoding="async" class="w-[32px] h-[32px] m-auto group-hover:hidden"> <img src="/assets/icons/down-arrow-gold.png" alt="drop down menu" loading="lazy" decoding="async" class="hidden w-[32px] h-[32px] m-auto group-hover:block"> </div> </a> <!-- <PracticeDropdown /> --> <nav class="bg-white absolute hidden group-hover:block !z-[9999] min-h-[250px]" id="practice_area_dropdown"> ${practice_areas && practice_areas.length > 0 && practice_areas.map(
    (page) => renderTemplate`${renderComponent($$result, "LinkItem", $$LinkItem, { "currentPath": currentPath, "href": page.link, "customStyle": "dropdown-link w-dropdown-link !z-[9999]", "label": page.label })}`
  )} </nav> </div> </div> ${renderComponent($$result, "LinkItem", $$LinkItem, { "currentPath": currentPath, "href": "/blog/1", "label": "Blog" })} ${ContactButton ? renderTemplate`<a href="/contact" class="nav-link w-nav-link my-auto"> <button class="bg-primaryC px-10 text-black hover:bg-transparent hover:text-primaryC border-[2px] border-solid border-primaryC transition-all duration-500">Contact Me</button> </a>` : renderTemplate`${renderComponent($$result, "LinkItem", $$LinkItem, { "currentPath": currentPath, "href": "/contact", "label": "Contact" })}`} </nav> </div> </div>`;
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

const $$Astro$a = createAstro("https://mordecai-law.com/");
const $$MobileIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$MobileIcon;
  const {
    customMargin,
    ID
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${customMargin ? customMargin : "my-auto"} block lg:hidden justify-center align-middle bg-transparent cursor-pointer`, "class")}${addAttribute(`${ID}`, "id")}> <img${addAttribute(Icon.src, "src")} class="w-[32px] h-[32px] m-auto object-fit" alt="Mobile Icon"> </div>`;
}, "D:/Astro/eli-mordecai/src/components/navigation/mobile-icon.astro", void 0);

const $$MinimizedNav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="mininized-header" class="flex flex-col fixed top-0 w-full z-[5] hidden_minimized_nav transition-all duration-500"> <div class="h-fit bg-primaryC sm:h-[30px] w-full block sm:flex sm:flex-row justify-between text-secondaryC [&>div]:px-5 text-lg [&>div]:my-auto font-primaryF"> <div><b>Call us on:</b> <a class="text-white font-bold pl-1 hover:text-secondaryC text-lg hover:underline"${addAttribute(`tel:${BusinessInfo.phone}`, "href")}>${formatPhone(BusinessInfo.phone)}</a></div> <div><b>Email us on:</b> <a class="text-white font-bold pl-1 hover:text-secondaryC text-lg hover:underline"${addAttribute(`mailto:${BusinessInfo.email}`, "href")}>${BusinessInfo.email}</a></div> </div> <div class="flex flex-row justify-between lg:justify-between bg-secondaryC [&>*]:px-5 border-b-2 border-b-white py-1"> ${renderComponent($$result, "LogoComponent", $$LogoComponentLazy, {})} ${renderComponent($$result, "MenuLinks", $$MenuLinks, { "ContactButton": true })} ${renderComponent($$result, "MobileIcon", $$MobileIcon, { "ID": "minimizedMobileIcon" })} </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/navigation/minimized-nav.astro", void 0);

const $$Astro$9 = createAstro("https://mordecai-law.com/");
const $$ConsultationBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ConsultationBtn;
  const {
    WrapperStyle
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`header-button-wrap ${WrapperStyle}`, "class")}> <a href="https://calendly.com/eliasjacobmordecai/30min" class="button header-button w-button" target="_blank">Book A Consultation</a> </div>`;
}, "D:/Astro/eli-mordecai/src/components/navigation/consultation-btn.astro", void 0);

const $$Astro$8 = createAstro("https://mordecai-law.com/");
const $$MobileMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$MobileMenu;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<div class="bg-secondaryC w-[250px] h-full overflow-y-scroll overflow-x-hidden fixed z-20 py-10 px-5 border-r-white border-r-2 border-r-solid transform-all duration-500 closedMobileMenu lg:hidden" id="MobileMenu"> ${renderComponent($$result, "LogoComponentLazy", $$LogoComponentLazy, { "customDiv": "header-logo w-[200px]" })} <div class="flex flex-col !text-white"> <nav role="navigation" class="flex flex-col"> ${renderComponent($$result, "ConsultationBtn", $$ConsultationBtn, { "wrapperStyle": "" })} ${renderComponent($$result, "LinkItem", $$LinkItem, { "currentPath": currentPath, "href": "/", "label": "Home" })} ${renderComponent($$result, "LinkItem", $$LinkItem, { "currentPath": currentPath, "href": "/about", "label": "About" })} ${renderComponent($$result, "MobileDropDown", null, { "label": "Practice Areas", "options": practice_areas, "client:only": "react", "currentPath": currentPath, "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/Astro/eli-mordecai/src/components/navigation/mobile-dropdown.tsx", "client:component-export": "default" })} ${renderComponent($$result, "LinkItem", $$LinkItem, { "currentPath": currentPath, "href": "/blog/1", "label": "Blog" })} ${renderComponent($$result, "LinkItem", $$LinkItem, { "currentPath": currentPath, "href": "/contact", "label": "Contact" })} <div class="hover:text-primaryC cursor-pointer nav-link w-nav-link" id="CloseMobileMenuLink">Close</div> </nav> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/navigation/mobile-menu.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BodyLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", "<body> ", " ", " ", " ", ' <script src="/script/nav-script.js" type="text/javascript" defer><\/script> <script src="/script/animated_script.js" type="text/javascript" defer><\/script> </body>'])), maybeRenderHead(), renderComponent($$result, "MinimizedNav", $$MinimizedNav, {}), renderComponent($$result, "MobileMenu", $$MobileMenu, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Index$2, {}));
}, "D:/Astro/eli-mordecai/src/layout/BodyLayout.astro", void 0);

const $$Astro$7 = createAstro("https://mordecai-law.com/");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    pageTitle,
    customDescription
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><title>${pageTitle}</title>${renderComponent($$result, "SEO", $$SEO, { "title": pageTitle, "description": customDescription })}<meta content="width=device-width, initial-scale=1" name="viewport"><link href="/style/global.css" rel="stylesheet" type="text/css" media="print" onload="this.media='all'; this.onload=null;">${maybeRenderHead()}<noscript><link rel="stylesheet" href="/style/global.css"></noscript><link href="/assets/icons/favicon.webp" rel="shortcut icon" type="image/x-icon"><link rel="preload" href="../fonts/CormorantGaramond-Regular.ttf" as="font" type="font/ttf" crossorigin="anonymous"><link rel="preload" href="../fonts/Outfit-Regular.ttf" as="font" type="font/ttf" crossorigin="anonymous"><link rel="sitemap" href="/sitemap-index.xml">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> ${renderComponent($$result, "BodyLayout", $$BodyLayout, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </html>`;
}, "D:/Astro/eli-mordecai/src/layout/BaseLayout.astro", void 0);

const $$Astro$6 = createAstro("https://mordecai-law.com/");
const $$LogoComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$LogoComponent;
  const {
    customDiv
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${customDiv ? customDiv : "header-logo"}`, "class")}> <a href="/" aria-current="page" class="w-inline-block w--current"> <img${addAttribute(Logo.src, "src")} loading="eager" class="w-[225px] aspect-[5/2] min-[500px]:w-[300px]" alt="General Practice Attorney Logo"> </a> </div>`;
}, "D:/Astro/eli-mordecai/src/components/logoComponent.astro", void 0);

const $$Astro$5 = createAstro("https://mordecai-law.com/");
const $$ContactInfoItems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ContactInfoItems;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`header-contact-wrap wrapperStyle`, "class")}> <div class="header-contact-item-wrap"> <div class="header-contact-item "> <div class="header-contact-icon-wrap header-link-wrap"> <img src="/assets/icons/header-call-icon.svg" loading="lazy" alt="Header Contact Icon" class="w-[17px] h-[17px]"> </div> <div class="header-contact-link-wrap"> <p class="header-contact-title whitespace-nowrap">Call Us On:</p> <a${addAttribute(`tel:${BusinessInfo.phone}`, "href")} class="header-contact-link whitespace-nowrap">${formatPhone(BusinessInfo.phone)}</a> </div> </div> <div class="header-contact-item"> <div class="header-contact-icon-wrap header-link-wrap"> <img src="/assets/icons/header-mail-icon.svg" loading="lazy" alt="Header Contact Icon" class="w-[17px] h-[17px]"> </div> <div class="header-contact-link-wrap"> <p class="header-contact-title">Email Us On:</p> <a${addAttribute(`mailto:${BusinessInfo.email}`, "href")} class="header-contact-link whitespace-normal">${BusinessInfo.email}</a> </div> </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/navigation/contact-info-items.astro", void 0);

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="header lg:z-[99999]" id="static_nav"> <div class="container w-container"> <div class="header-logo-wrap"> ${renderComponent($$result, "LogoComponent", $$LogoComponent, { "immediateLoading": true, "customDiv": "header-logo hidden sm:block" })} ${renderComponent($$result, "LogoComponentLazy", $$LogoComponentLazy, { "customDiv": "header-logo block sm:hidden" })} ${renderComponent($$result, "ContactInfoItems", $$ContactInfoItems, { "wrapperStyle": "my-auto [&>div]:my-auto" })} </div> <div class="header-navbar-wrap"> ${renderComponent($$result, "MobileIcon", $$MobileIcon, { "customMargin": "mx-auto md:ml-0 md:mr-auto", "ID": "staticMobileIcon" })} ${renderComponent($$result, "MenuLinks", $$MenuLinks, { "ContactButton": false })} ${renderComponent($$result, "ConsultationBtn", $$ConsultationBtn, {})} </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/navigation/index.astro", void 0);

const $$Astro$4 = createAstro("https://mordecai-law.com/");
const $$BannerTitleSeparator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BannerTitleSeparator;
  const {
    customStyle = "w-[95px] h-[44px]"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<img src="/assets/icons/banner-title-separator.svg" loading="lazy" alt="Title Large Separator" decoding="async"${addAttribute(`${customStyle}`, "class")} width="95" height="44">`;
}, "D:/Astro/eli-mordecai/src/components/graphics/banner-title-separator.astro", void 0);

const $$Astro$3 = createAstro("https://mordecai-law.com/");
const $$PreviewPanel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
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
const GetTheMostRecentBlogs = (size, AllPosts) => {
  try {
    let sortedBlogs = SortPostsByNew(AllPosts);
    return sortedBlogs.slice(0, size);
  } catch (e) {
    console.log("GetTheMostRecentBlog error: ", e);
    return [];
  }
};

const DOTS = '...';

function usePagination({
  currentPage,
  totalCount,
  pageSize
}) {
  const consecPage = 1;
  const createRange = (first, last) => {
    var pageRange = [];
    for (var i = first; i <= last; i++) {
      pageRange.push(i);
    }
    return pageRange;
  };
  const Pagination = () => {
    const totalPages = Math.ceil(totalCount / pageSize);
    const firstPage = 1;
    if (totalPages < consecPage + 5) {
      const range = createRange(firstPage, totalPages);
      return [...range];
    }
    var leftMostPage = 0;
    var rightMostPage = 0;
    var addLeftPage = 0;
    var addRightPage = 0;
    if (currentPage - consecPage - 2 > 0) {
      leftMostPage = currentPage - consecPage;
    } else {
      leftMostPage = firstPage;
      addRightPage = consecPage - (currentPage - 2);
    }
    if (currentPage + consecPage + 1 < totalPages) {
      rightMostPage = currentPage + consecPage;
    } else {
      rightMostPage = totalPages;
      addLeftPage = consecPage - (totalPages - currentPage - 1);
    }
    if (leftMostPage !== firstPage) {
      leftMostPage -= addLeftPage;
    }
    if (rightMostPage !== totalPages) {
      rightMostPage += addRightPage;
    }
    const displayLeftDots = currentPage - consecPage - 1 > 1 ? true : false;
    const displayRightDots = currentPage + consecPage + 1 < totalPages ? true : false;
    const midRange = createRange(leftMostPage, rightMostPage);
    if (displayLeftDots && displayRightDots) {
      return [firstPage, DOTS, ...midRange, DOTS, totalPages];
    }
    if (!displayLeftDots && displayRightDots) {
      return [...midRange, DOTS, totalPages];
    }
    if (displayLeftDots && !displayRightDots) {
      return [firstPage, DOTS, ...midRange];
    }
  };
  return Pagination();
}

const RenderPagination = (props) => {
  const {
    pageSize,
    totalCount,
    currentPage,
    totalPages,
    isMobile,
    search_query
  } = props;
  const onPageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      if (search_query != null && typeof search_query != void 0) {
        return window.location.href = `/blog/search/${search_query}/${newPage}`;
      }
      return window.location.href = `/blog/${newPage}`;
    }
  };
  const Pagination = usePagination({ currentPage, totalCount, pageSize });
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id: "PaginationContainer",
      className: `my-10 list-none text-center ${isMobile ? "md:hidden" : "block"} [&>li]:cursor-pointer`,
      children: [
        /* @__PURE__ */ jsx(
          "li",
          {
            id: "leftArrow",
            className: "PaginatedListItem PaginatedArrow",
            onClick: () => onPageChange(currentPage - 1),
            children: "˂ Prev"
          }
        ),
        Pagination?.map((page) => {
          const uniqueKey = uuid();
          if (page === DOTS) {
            return /* @__PURE__ */ jsx("li", { className: "PaginatedListItem text-white", children: "…" }, uniqueKey);
          }
          if (page === currentPage) {
            return /* @__PURE__ */ jsx(
              "li",
              {
                className: "selected PaginatedListItem !text-primaryC",
                onClick: () => onPageChange(page),
                children: page
              },
              uniqueKey
            );
          }
          return /* @__PURE__ */ jsx(
            "li",
            {
              className: "PaginatedListItem",
              onClick: () => onPageChange(page),
              children: page
            },
            uniqueKey
          );
        }),
        /* @__PURE__ */ jsx(
          "li",
          {
            id: "rightArrow",
            className: "PaginatedListItem PaginatedArrow",
            onClick: () => {
              onPageChange(currentPage + 1);
            },
            children: "Next ˃"
          }
        )
      ]
    }
  );
};

const RenderRecentSearch = (props) => {
  const { setQuery, historyResults, setSearchHistory } = props;
  return /* @__PURE__ */ jsx("div", { className: "w-full h-fit py-10 bg-white z-10 mt-5", id: "HistoryResults", children: /* @__PURE__ */ jsxs("div", { className: "w-11/12 lg:w-8/12 mx-auto", children: [
    /* @__PURE__ */ jsx("div", { id: "HistoryWrapper", className: "flex flex-col", children: /* @__PURE__ */ jsx("h3", { className: "text-slate-400", children: "Recent searches" }) }),
    /* @__PURE__ */ jsx("ul", { className: "list-none list-indented RecentSearches", children: historyResults && historyResults.length > 0 && historyResults.map((result, index) => /* @__PURE__ */ jsx(
      RenderItem,
      {
        historyResults,
        result,
        setQuery,
        setSearchHistory,
        index
      },
      uuid()
    )) })
  ] }) });
};
const RenderItem = (props) => {
  const { historyResults, result, setQuery, setSearchHistory, index } = props;
  const deleteValue = () => {
    var arr = [...historyResults];
    arr.splice(index, 1);
    setSearchHistory(arr);
    localStorage.setItem("searchHistory", JSON.stringify(arr));
  };
  return /* @__PURE__ */ jsxs("li", { className: "my-5 mx-auto cursor-pointer justify-between w-full flex", children: [
    /* @__PURE__ */ jsx(
      "span",
      {
        className: "hover:font-bold ",
        onClick: async () => {
          setQuery(result);
          setSearchHistory([]);
        },
        children: result
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "text-[#ff0000] hover:font-bold", onClick: deleteValue, children: "clear" })
  ] });
};

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [historyResults, setSearchHistory] = useState([]);
  const inputRef = useRef(null);
  const onChangeHandler = (event) => {
    setQuery(event.target?.value);
  };
  const submitSearch = () => {
    const data = localStorage.getItem("searchHistory");
    var arr = data ? JSON.parse(data) : [];
    if (query.trim() != "") {
      console.log("query: ", query);
      arr.push(query);
      arr = [...new Set(arr)];
      localStorage.setItem("searchHistory", JSON.stringify(arr));
      window.location.href = `/blog/search/${query}/1`;
    }
    setSearchHistory([]);
  };
  const enterEvent = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitSearch();
    }
  };
  useEffect(() => {
    if (query && query.length > 0) {
      SearchHistory(query, setSearchHistory);
    }
    if (query.length === 0) {
      setSearchHistory([]);
    }
  }, [query]);
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-y-5", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          id: "QueryWrapper",
          className: "flex bg-[#ffffff] rounded-lg mx-auto w-full border-2 border-solid border-black mr-5 flex-nowrap",
          children: /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Type here to search a blog post",
              value: query,
              id: "QueryInput",
              className: "rounded-lg w-full px-5 SearchInput text-slate-500",
              onChange: (event) => onChangeHandler(event),
              onKeyDown: enterEvent,
              ref: inputRef
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          id: "SearchButton",
          className: "border-1 rounded-lg text-white bg-[#5b87e4] active:translate-x-[1px] active:translate-y-[1px] px-4 w-fit mx-auto",
          onClick: submitSearch,
          children: "Search"
        }
      )
    ] }),
    historyResults && historyResults.length > 0 && /* @__PURE__ */ jsx(
      RenderRecentSearch,
      {
        setQuery,
        historyResults,
        setSearchHistory
      }
    )
  ] });
};
const SearchHistory = (query, setSearchHistory) => {
  const jsonData = localStorage.getItem("searchHistory");
  const searchHistory = jsonData ? JSON.parse(jsonData) : [];
  var arr = searchHistory.filter((item) => item.includes(query));
  setSearchHistory(arr);
};

const $$Astro$2 = createAstro("https://mordecai-law.com/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form id="SearchBar" class="relative block py-[30px] px-[40px] rounded-lg mt-10 mb-10 border-2 border-primaryC h-fit border-solid mx-10"> ${renderComponent($$result, "SearchBar", SearchBar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Astro/eli-mordecai/src/components/search/searchbar", "client:component-export": "default" })} </form>`;
}, "D:/Astro/eli-mordecai/src/components/search/index.astro", void 0);

const $$Astro$1 = createAstro("https://mordecai-law.com/");
const prerender$1 = false;
const $$page$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$page$1;
  const { category_name, page } = Astro2.params;
  let formattedCategoryName = category_name?.replace("-", " ") || "";
  const PAGE_SIZE = 6;
  formattedCategoryName = formattedCategoryName?.charAt(0)?.toUpperCase() + formattedCategoryName?.slice(1);
  let allPosts = [];
  try {
    allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({}), () => "../../../posts/*.md");
  } catch (e) {
    allPosts = [];
  }
  let selectedPosts = allPosts.filter((post) => post.frontmatter.category.toLowerCase() === formattedCategoryName.toLowerCase());
  let totalPages = Math.ceil(selectedPosts.length / PAGE_SIZE);
  let pageInt = parseInt(page);
  let paginatedArray = getPaginatedArray(selectedPosts, pageInt, PAGE_SIZE);
  let inBound = page && typeof parseInt(page) === "number" && parseInt(page) <= totalPages;
  if (!inBound && totalPages != 0) {
    return Astro2.redirect("/error");
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Blog Category", "customDescription": `All blog posts related to ${formattedCategoryName}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="banner-title-area"> <div class="banner-title-overlay"></div> ${renderComponent($$result2, "NavBar", $$Index$1, {})} <div class="container w-container"> <div class="banner-title-wrap"> <h1 class="banner-area-title">All posts related to <span class="text-primaryC">${formattedCategoryName}</span></h1> ${renderComponent($$result2, "BannerTitleSeparator", $$BannerTitleSeparator, { "customStyle": "mx-auto" })} </div> </div> </div> <div class="divider-section"> <div class="container w-container"> <div class="divider-line"></div> </div> </div> ${renderComponent($$result2, "Searchbar", $$Index, {})} <div class="blog-section"> <div class="container w-container"> <div class="blog-content-wrap"> <div class="w-dyn-list"> <div role="list" class="w-dyn-items w-row"> <!-- Blog List  --> ${selectedPosts.length === 0 && renderTemplate`<h2 class="text-center text-2xl my-5">There are currently no blog posts published at the moment.</h2>`} ${totalPages > 1 && renderTemplate`${renderComponent($$result2, "RenderPagination", RenderPagination, { "pageSize": PAGE_SIZE, "totalCount": selectedPosts.length, "currentPage": parseInt(page), "totalPages": totalPages, "isMobile": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/paginatedBlog/renderPostPagination.tsx", "client:component-export": "default" })}`} ${paginatedArray && paginatedArray.length > 0 && renderTemplate`<div class=""> ${paginatedArray.map(async (post) => {
    return renderTemplate`${renderComponent($$result2, "BlogPreview", $$PreviewPanel, { ...post.frontmatter, "url": post.url })}`;
  })} </div>`} ${totalPages > 1 && renderTemplate`<div class="w-full h-auto"> ${renderComponent($$result2, "RenderPagination", RenderPagination, { "pageSize": PAGE_SIZE, "totalCount": selectedPosts.length, "currentPage": parseInt(page), "totalPages": totalPages, "isMobile": false, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/paginatedBlog/renderPostPagination.tsx", "client:component-export": "default" })} </div>`} </div> </div> </div> </div> </div> <div class="client-section large-space-section"> <div class="container w-container"> <div class="section-center-title"> <div class="center-title-wrap"> <img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb8b7a92d8c38a29ac1a28_center-separator.svg" loading="lazy" alt="Title Large Separator"> <h2 class="section-center-title-text dark-color-title">Meet the Partners</h2> <img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb8b7a92d8c38a29ac1a28_center-separator.svg" loading="lazy" alt="Title Large Separator"> </div> </div> <div class="w-layout-grid client-image-grid [&>div]:mx-auto"> <div id="w-node-d8340d9a-4334-c61c-ef20-dcec2d84015f-034100c3" class="client-image-item"><img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb9c7d506a9f3525f5c4ab_client-logo-1.svg" loading="lazy" alt="Client Logo"></div> <div id="w-node-d8340d9a-4334-c61c-ef20-dcec2d840161-034100c3" class="client-image-item"><img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb9c7d0fc70dce3699f4ab_client-logo-2.svg" loading="lazy" alt="Client Logo"></div> <div id="w-node-d8340d9a-4334-c61c-ef20-dcec2d840163-034100c3" class="client-image-item"><img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb9c7e6ba739a82705e9fa_client-logo-3.svg" loading="lazy" alt="Client Logo"></div> <div id="w-node-d8340d9a-4334-c61c-ef20-dcec2d840165-034100c3" class="client-image-item"><img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb9c7deb1c5944fd2a2b74_client-logo-4.svg" loading="lazy" alt="Client Logo"></div> <div id="w-node-d8340d9a-4334-c61c-ef20-dcec2d840167-034100c3" class="client-image-item"><img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb9c7dd8aaa3d823c16db7_client-logo-5.svg" loading="lazy" alt="Client Logo"></div> </div> </div> </div> ` })}`;
}, "D:/Astro/eli-mordecai/src/pages/blog/category/[category_name]/[page].astro", void 0);

const $$file$1 = "D:/Astro/eli-mordecai/src/pages/blog/category/[category_name]/[page].astro";
const $$url$1 = "/blog/category/[category_name]/[page]";

const _page_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page$1,
  file: $$file$1,
  prerender: prerender$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const SearchQuery = (query, list) => {
  const lowercase_query = query.toLowerCase().trim();
  return list.filter(
    (item) => SearchFrontmatter(lowercase_query, item)
  );
};
const SearchFrontmatter = async (query, post) => {
  const author = post.frontmatter.author.toLowerCase().trim();
  if (author.includes(query)) {
    return true;
  }
  const title = post.frontmatter.title.toLowerCase().trim();
  if (title.includes(query)) {
    return true;
  }
  const description = post.frontmatter.excerpt?.toLowerCase().trim();
  if (description?.includes(query)) {
    return true;
  }
  return false;
};

const $$Astro = createAstro("https://mordecai-law.com/");
const prerender = false;
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const {
    page,
    search_query
  } = Astro2.params;
  const PAGE_SIZE = 6;
  var allPosts = [];
  var totalPages = 0;
  var searchResults = [];
  try {
    allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({}), () => "../../../posts/*.md");
  } catch (error) {
    allPosts = [];
  }
  searchResults = SearchQuery(search_query, allPosts);
  totalPages = Math.ceil(searchResults.length / PAGE_SIZE);
  const pageNumber = page ? parseInt(page) : null;
  let inBound = page && typeof pageNumber === "number" && pageNumber <= totalPages;
  if (!inBound && totalPages != 0) {
    return Astro2.redirect("/error");
  }
  var paginatedArray = pageNumber && searchResults.length > 0 ? getPaginatedArray(searchResults, pageNumber, PAGE_SIZE) : [];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Blog", "customDescription": "Lawyer Website" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="banner-title-area"> <div class="banner-title-overlay"></div> ${renderComponent($$result2, "NavBar", $$Index$1, {})} <div class="container w-container"> <div class="banner-title-wrap"> <h1 class="banner-area-title">Search query: "${search_query}"</h1> ${renderComponent($$result2, "BannerTitleSeparator", $$BannerTitleSeparator, { "customStyle": "mx-auto" })} </div> </div> </div> ${renderComponent($$result2, "Searchbar", $$Index, {})} <div class="block mx-auto w-fit sm:[&>*]:inline-block justify-between"> <a href="/blog/1" class="mx-auto text-center"> <p class="underline hover:font-bold rounded-lg hover:bg-slate-300 p-1">Reset search</p> </a> </div> <div class="blog-section"> <div class="container w-container"> <div class="blog-content-wrap"> <div class="w-dyn-list"> <div role="list" class="w-dyn-items w-row"> <!-- Blog List  --> ${totalPages > 1 && renderTemplate`${renderComponent($$result2, "RenderPagination", RenderPagination, { "pageSize": PAGE_SIZE, "totalCount": searchResults.length, "currentPage": parseInt(page), "totalPages": totalPages, "isMobile": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/paginatedBlog/renderPostPagination.tsx", "client:component-export": "default" })}`} ${paginatedArray && paginatedArray.length > 0 ? renderTemplate`<div class=""> ${paginatedArray.map(async (post) => {
    return renderTemplate`${renderComponent($$result2, "BlogPreview", $$PreviewPanel, { ...post.frontmatter, "url": post.url })}`;
  })} </div>` : renderTemplate`<h2 class="text-center text-2xl my-5">Your search didn't return any results.</h2>`} ${totalPages > 1 && renderTemplate`<div class="w-full h-auto"> ${renderComponent($$result2, "RenderPagination", RenderPagination, { "pageSize": PAGE_SIZE, "totalCount": searchResults.length, "currentPage": parseInt(page), "totalPages": totalPages, "isMobile": false, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/paginatedBlog/renderPostPagination.tsx", "client:component-export": "default" })} </div>`} </div> </div> </div> </div> </div> <div class="client-section large-space-section"> <div class="container w-container"> <div class="section-center-title"> <div class="center-title-wrap"> <img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb8b7a92d8c38a29ac1a28_center-separator.svg" loading="lazy" alt="Title Large Separator"> <h2 class="section-center-title-text dark-color-title">Meet the Partners</h2> <img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb8b7a92d8c38a29ac1a28_center-separator.svg" loading="lazy" alt="Title Large Separator"> </div> </div> <div class="w-layout-grid client-image-grid [&>div]:mx-auto"> <div id="w-node-d8340d9a-4334-c61c-ef20-dcec2d84015f-034100c3" class="client-image-item"><img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb9c7d506a9f3525f5c4ab_client-logo-1.svg" loading="lazy" alt="Client Logo"></div> <div id="w-node-d8340d9a-4334-c61c-ef20-dcec2d840161-034100c3" class="client-image-item"><img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb9c7d0fc70dce3699f4ab_client-logo-2.svg" loading="lazy" alt="Client Logo"></div> <div id="w-node-d8340d9a-4334-c61c-ef20-dcec2d840163-034100c3" class="client-image-item"><img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb9c7e6ba739a82705e9fa_client-logo-3.svg" loading="lazy" alt="Client Logo"></div> <div id="w-node-d8340d9a-4334-c61c-ef20-dcec2d840165-034100c3" class="client-image-item"><img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb9c7deb1c5944fd2a2b74_client-logo-4.svg" loading="lazy" alt="Client Logo"></div> <div id="w-node-d8340d9a-4334-c61c-ef20-dcec2d840167-034100c3" class="client-image-item"><img src="https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fb9c7dd8aaa3d823c16db7_client-logo-5.svg" loading="lazy" alt="Client Logo"></div> </div> </div> </div> ` })}`;
}, "D:/Astro/eli-mordecai/src/pages/blog/search/[search_query]/[page].astro", void 0);

const $$file = "D:/Astro/eli-mordecai/src/pages/blog/search/[search_query]/[page].astro";
const $$url = "/blog/search/[search_query]/[page]";

const _page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Index$1 as $, BusinessInfo as B, GetTheMostRecentBlogs as G, RenderPagination as R, _page_$1 as _, $$BannerTitleSeparator as a, $$BaseLayout as b, filterPostsByAuthor as c, $$PreviewPanel as d, $$SEO as e, formatPhone as f, $$ViewTransitions as g, $$BodyLayout as h, createStaticPathArray as i, $$Index as j, _page_ as k };
