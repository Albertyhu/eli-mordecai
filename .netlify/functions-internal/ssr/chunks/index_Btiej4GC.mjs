/* empty css                         */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, e as renderHead, m as maybeRenderHead, f as renderSlot, b as addAttribute } from './astro/server_BWzPTXNg.mjs';
import 'kleur/colors';
import { a as $$BodyLayout, b as $$ViewTransitions, c as $$SEO, $ as $$Index$2 } from './index_Z6KWOvVW.mjs';
/* empty css                                */
import { $ as $$EliHeadshot, a as $$Version2 } from './version2_gugycLMD.mjs';
import 'clsx';
import { $ as $$Index$3 } from './index_CnhfKYOF.mjs';
import { $ as $$BannerTitleSeparator } from './banner-title-separator_BZATBMIA.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://mordecai-law.com/");
const $$HomeLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HomeLayout;
  const {
    pageTitle,
    customDescription
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><script src="public/script/before-DOM-load.js" type="text/javascript" defer>\n      <\/script><meta charset="utf-8"><title>', "</title>", `<meta content="width=device-width, initial-scale=1" name="viewport"><link href="/style/inner-pages.css" rel="stylesheet" type="text/css" media="print" onload="this.media='all'; this.onload=null;"><link href="/style/global.css" rel="stylesheet" type="text/css" media="print" onload="this.media='all'; this.onload=null;"><link rel="preload" as="image" href="/assets/images/hero-background-desk.webp"><!-- <link rel="preload" href="../fonts/CormorantGaramond-Regular.ttf" as="font" type="font/ttf" crossorigin="anonymous">
      <link rel="preload" href="../fonts/Outfit-Regular.ttf" as="font" type="font/ttf" crossorigin="anonymous"> --><link rel="preload" href="../fonts/CormorantGaramond-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous"><link rel="preload" href="../fonts/Outfit-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous"><link rel="sitemap" href="/sitemap-index.xml">`, '<noscript><link rel="stylesheet" href="/style/inner-pages.css"></noscript><link href="/assets/icons/favicon.webp" rel="shortcut icon" type="image/x-icon">', "", "</head> ", ' <script src="/script/body_appearance.js" type="text/javascript" defer>\n   <\/script> </html>'])), pageTitle, renderComponent($$result, "SEO", $$SEO, { "title": pageTitle, "description": customDescription }), maybeRenderHead(), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "BodyLayout", $$BodyLayout, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` }));
}, "D:/Astro/eli-mordecai/src/layout/HomeLayout.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="practice-areas-section1 bg-[#161d27] pt-[120px] pb-[110px] min-[1280px]:pt-[120px] min-[1280px]:pb-[110px]"> <div class="max-w-[100%] px-[30px] min-[480px]:px-[40px] min-[1280px]:max-w-[100%] min-[1280px]:px-[40px] min-[1440px]:max-w-[1484px] min-[1440px]:px-[20px] min-[1920px]:px-0 container mx-auto  before:content-[' '] after:content-[' '] before:grid-area-[1/1/2/2] after:grid-area-[1/1/2/2] before:table after:table after:clear-both w-container"> <div class=""> <div class=""> <h2 class="capitalize mb-[12px] text-[30px] leading-[1.3] min-[480px]:text-[32px] min-[768px]:text-[36px] min-[992px]:text-[42px]">My Practice Areas</h2> <img src="/assets/icons/small-separator-gold.svg" loading="lazy" alt="Title Separator" class="w-[95px] h-[44px]"> </div> <div class=""> <p class="pt-[20px] text-[18px] min-[992]:pt-[40px] min-[992]:text-[20px]">Winning a case is a team effort. <span class="text-primaryC">Never go at it alone.</span> I work with a network of top lawyers in every field I practice in, each of whom has decades of experience and whom I bring in to work alongside me on every case. I work to deliver the best results possible for each client. </p> </div> </div> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/practice-area-preview-section/layout.astro", void 0);

const NetworkIcon = new Proxy({"src":"/_astro/network.BtUW_5vJ.webp","width":100,"height":100,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/eli-mordecai/src/assets/icons/trust/network.webp";
							}
							
							return target[name];
						}
					});

const PersonalizedIcon = new Proxy({"src":"/_astro/personalized.D_a72gxK.webp","width":100,"height":100,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/eli-mordecai/src/assets/icons/trust/personalized.webp";
							}
							
							return target[name];
						}
					});

const SatisfactionIcon = new Proxy({"src":"/_astro/satisfaction.DV6HAPeP.webp","width":100,"height":100,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/eli-mordecai/src/assets/icons/trust/satisfaction.webp";
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

const $$Astro = createAstro("https://mordecai-law.com/");
const $$TrustPanel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TrustPanel;
  const {
    label,
    description,
    icon,
    index
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div role="listitem" class="fadeOutIntoBottom fadeInFromBottomTag z-[2]"> <div${addAttribute(`bg-secondaryC min-h-[420px] mb-[30px] px-[20px] pt-[20px] pb-[30px] max-[767px]:min-h-auto max-[767px]:mb-[30px] max-[767px]:px-[30px] !min-h-0 md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:flex-nowrap`, "class")}> <div class="min-w-[150px] w-[150px] h-[150px] m-auto rounded-full border-solid border-2 border-primaryC flex justify-center items-center"> <img${addAttribute(`${label} icon`, "alt")} decoding="async" loading="lazy"${addAttribute(icon.src, "src")} class="object-fit m-auto" width="100" height="100"> </div> <div class="justify-center items-center px-5"> <h3 class="text-primaryC text-2xl mt-5 md:my-auto font-bold">${label}</h3> <p class="w-auto">${description}</p> </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/trust-section/trust-panel.astro", void 0);

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`help-section relative overflow-hidden h-auto bg-no-repeat bg-cover bg-historyBG_mobile md:bg-historyBG before:w-full before:h-full 
before:absolute before:bg-gradient-to-t before:from-transparent before:to-white before:bottom-0 
before:z-[0]`, "class")}> <div class="max-w-[100%] px-[30px] min-[480px]:px-[40px] min-[1280px]:max-w-[100%] min-[1280px]:px-[40px] min-[1440px]:max-w-[1440px] min-[1440px]:px-[20px] min-[1920px]:px-0 container mx-auto  before:content-[' '] after:content-[' '] before:grid-area-[1/1/2/2] after:grid-area-[1/1/2/2] before:table after:table after:clear-both w-container"> <div class="section-title! text-center mb-[30px]"> <h2 class="section-title-text! text-center text-darkBlack capitalize text-[30px] min-w-[480]:text-[32px] min-w-[768px]:text-[36] min-w-[992]:text-[45px] dark-color-title z-[3] relative">Why should you trust your case with me?</h2> ${renderComponent($$result, "BannerTitleSeparator", $$BannerTitleSeparator, { "customStyle": "mx-auto my-10 fadeInFromBottomTag fadeOutIntoBottom z-[3] relative w-[95px] h-[44px]" })} <div class="md:flex md:flex-row md:gap-5"> <div class="flex flex-col" role="list"> ${TrustReasons && TrustReasons.length > 0 && TrustReasons.map((reason, index) => renderTemplate`${renderComponent($$result, "Panel", $$TrustPanel, { ...reason, "index": index })}`)} </div> <div class="hidden xl:block w-full xl:max-h-[687px] z-[2] overflow-hidden"> <img src="/assets/images/blind-justice.webp" loading="lazy" decoding="async" alt="blind justice" class="object-cover" width="417" height="778"> </div> </div> </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/trust-section/index.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$HomeLayout, { "pageTitle": "Eli Mordecai - General Practice Attorney", "customDescription": "Your trusted general practice attorney in Los Angeles, CA." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-secondaryC bg-[url('/assets/images/hero-background-desk.webp')] bg-[50%] bg-no-repeat bg-cover relative hero-section lg:min-h-[605px]"> <div class="bg-[rgba(31,39,50,0.81)] absolute w-[screen] h-[screen] inset-[0%]"></div> ${renderComponent($$result2, "NavBar", $$Index$2, {})} <div class="relative max-w-[991px]:pt-[20px] hero-main-wrap bg-cover pb-[20px] aspect-[2/3] min-[470px]:aspect-[11/13] md:aspect-auto"> <div class="max-w-[100%] px-[30px] min-[480px]:px-[40px] min-[1280px]:max-w-[100%] min-[1280px]:px-[40px] min-[1440px]:max-w-[1440px] min-[1440px]:px-[20px] min-[1920px]:px-0 container mx-auto  before:content-[' '] after:content-[' '] before:grid-area-[1/1/2/2] after:grid-area-[1/1/2/2] before:table after:table after:clear-both w-container"> <div class="flex flex-col md:flex-row gap justify-between items-center"> <div class="hero-content-area max-w-[950px] pt-[60px] pb-[90px] max-[767px]:pt-[0px] max-[767px]:pb-[40px] max-[991px]:pt-[40px] max-[991px]:pb-[40px] min-[1280px]:pt-[40px] min-[1440px]:pt-[40px] min-[1440px]:pb-[60px]"> <img src="/assets/icons/small-separator-gold.svg" loading="eager" alt="Small Separator" class="hidden sm:block fadeInTag fadeOut w-[95px] h-[44px]"> <div class="childrenFadeInFromBottomTag"> <h1 class="hero-area-title1  mt-[15px] text-[50px] leading-[1.2] max-[991px]:text-[50px] max-[767px]:text-[40px] max-[479px]:text-[34px] font-primaryF fadeOutIntoBottom text-center sm:text-left sm:!delay-[750ms] min-h-[2em]">Transforming Legal Hurdles into Success Stories</h1> <p class="hero-area-content1 text-primaryC mt-[15px] mb-[25px] text-[20px] leading-[1.8] max-[767px]:text-[18px] max-[479px]:leading-[1.6] fadeOutIntoBottom text-center sm:text-left !delay-500 sm:!delay-[1000ms]">Your Trusted General Practice Attorney</p> <a href="/contact" role="button" aria-label="Go to Contact Page" class="button! w-button1 border-[1px] border-solid border-primaryC bg-primaryC text-secondaryC font-secondaryF font-500 px-[30px] text-[18px] min-[480]:text-[20px] mx-auto sm:ml-0 sm:mr-auto block sm:inline-block !text-center leading-inherit py-[9px] px-[15px] hover:bg-transparent hover:text-primaryC fadeOutIntoBottom transition-all duration-1000 w-fit !delay-[750ms] sm:!delay-[1250ms]">Get In Touch</a> </div> </div> <div class="hero-image-area1 pt-[40px] m-auto lg:ml-auto lg:mr-0 fadeInTag fadeOut"> ${renderComponent($$result2, "Eli", $$EliHeadshot, { "wrapperStyle": "bg-transparent w-[270px] h-[270px] sm:w-[450px] sm:h-[450px] m-auto", "imgStyle": "w-[270px] h-[270px] sm:w-[400px] sm:h-[400px] object-fit mx-auto lg:ml-auto lg:mr-0 aspect-square", "immediateLoading": true })} </div> </div> </div> </div> </div> <div class="simple-intro-section! pt-[120px] pb-[90px]"> <div class="max-w-[100%] px-[30px] min-[480px]:px-[40px] min-[1280px]:max-w-[100%] min-[1280px]:px-[40px] min-[1440px]:max-w-[1440px] min-[1440px]:px-[20px] min-[1920px]:px-0 container mx-auto  before:content-[' '] after:content-[' '] before:grid-area-[1/1/2/2] after:grid-area-[1/1/2/2] before:table after:table after:clear-both w-container"> <div class="flex flex-col lg:flex-row gap-5"> <div class="fadeInFromBottomTag fadeOutIntoBottom md:min-w-[467px] w-full "> <img src="/assets/images/statue-library.webp" loading="lazy" decoding="async" alt="Simple Intro Image" class="simple-intro-image1 mb-[30px] w-[320px] h-[189px] min-[400px]:w-[400px] min-[400px]:h-[215px] sm:w-[467px] sm:h-[294px] object-fill mx-auto lg:ml-0"> </div> <div class=""> <div class="mb-[20px] min-[768]: mb-[30px]  fadeInFromBottomTag fadeOutIntoBottom"> <h2 class="capitalize mb-[12px] text-[30px] leading-[1.3] min-[480px]:text-[32px] min-[768px]:text-[36px] min-[992px]:text-[42px]">Are you seeking reliable legal advice and representation? <span class="text-primaryC">Look no further.</span></h2> <img src="/assets/icons/small-separator-gold.svg" loading="lazy" alt="Title Separator" class="w-[95px] h-[44px]"> <p class="pt-[20px] text-[18px] min-[992]:pt-[40px] min-[992]:text-[20px]"> As your trusted <b class="text-primaryC capitalize">general practice attorney</b> in Los Angeles, CA, I am here to help you navigate through a wide range of legal matters, ensuring your rights and interests are protected every step of the way. You’re in good hands. </p> </div> <div class="intro-lawyer-area justify-start items-center mt-[35px] flex flex-row max-[479px]:flex-col max-[479px]:items-start fadeInFromBottomTag fadeOutIntoBottom "> <div class="intro-lawyer-wrap"> <img src="/assets/images/authors/eli-mordecai-small.webp" loading="lazy" decoding="async" alt="Eli Mordecai" class="lawyer-radius-image" width="90" height="90"> </div> <h3 class="intro-author-name">Eli Mordecai</h3> </div> <!-- <InfoStatus /> --> </div> </div> </div> </div> ${renderComponent($$result2, "PracticeAreaLayout", $$Layout, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "PracticeAreaSection", $$Index$3, {})} ` })} ${renderComponent($$result2, "TrustSection", $$Index$1, {})} ${renderComponent($$result2, "CTASection", $$Version2, { "title": "Your best legal representation is just a phone call away." })} <div class="divider-section"> <div class="max-w-[100%] px-[30px] min-[480px]:px-[40px] min-[1280px]:max-w-[100%] min-[1280px]:px-[40px] min-[1440px]:max-w-[1440px] min-[1440px]:px-[20px] min-[1920px]:px-0 container mx-auto  before:content-[' '] after:content-[' '] before:grid-area-[1/1/2/2] after:grid-area-[1/1/2/2] before:table after:table after:clear-both w-container"> <div class="divider-line"></div> </div> </div>  ` })}`;
}, "D:/Astro/eli-mordecai/src/pages/index.astro", void 0);

const $$file = "D:/Astro/eli-mordecai/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
