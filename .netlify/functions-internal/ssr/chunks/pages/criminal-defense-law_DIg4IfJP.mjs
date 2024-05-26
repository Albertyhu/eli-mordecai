/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as createAstro, e as renderComponent, g as renderSlot } from '../astro_7lB2f1hd.mjs';
import 'kleur/colors';
import { a as $$Index, b as $$BaseLayout, c as $$ResponsiveImage } from './How to Tell Who Is at Fault in a Car Accident_BYeqSR5U.mjs';
import { $ as $$BannerTitleSeparator } from './_page__DwRUCVIt.mjs';
import 'clsx';

const $$Astro$4 = createAstro();
const $$EliHeadshot = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$EliHeadshot;
  const {
    wrapperStyle,
    imgStyle,
    immediateLoading = true,
    animationTag
  } = Astro2.props;
  return renderTemplate`${immediateLoading ? renderTemplate`${maybeRenderHead()}<div${addAttribute(`${wrapperStyle ? wrapperStyle : "bg-transparent w-[270px] h-[270px] sm:w-[400px] sm:h-[400px]"} ${animationTag}`, "class")}><img alt="Eli Mordecai" src="/assets/images/authors/eli_mordecai.webp" loading="eager"${addAttribute(`${imgStyle ? imgStyle : "w-full h-full object-fit"}`, "class")}></div>` : renderTemplate`<div${addAttribute(`${wrapperStyle ? wrapperStyle : "bg-transparent w-[270px] h-[270px] sm:w-[400px] sm:h-[400px]"} ${animationTag}`, "class")}><img alt="Eli Mordecai" src="/assets/images/authors/eli_mordecai.webp" loading="lazy"${addAttribute(`${imgStyle ? imgStyle : "w-full h-full object-fit"}`, "class")}></div>`}`;
}, "D:/Astro/eli-mordecai/src/components/eli-headshot.astro", void 0);

const $$Astro$3 = createAstro();
const $$CourthouseCorner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CourthouseCorner;
  const {
    text,
    wrapperStyle
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${wrapperStyle ? wrapperStyle : "image-section"}`, "class")}> <img src="/assets/images/divider-image.webp" loading="lazy" decoding="async" sizes="100vw" srcset="/assets/images/divider-image-500.webp 500w, /assets/images/divider-image-800.webp 800w, /assets/images/divider-image-1080.webp  1080w, /assets/images/divider-image.webp 1920w" alt="Divider Image" class="background-image"> ${text && renderTemplate`<h4 class="text-center text-white text-2xl md:text-3xl m-auto">${text}</h4>`} </div>`;
}, "D:/Astro/eli-mordecai/src/components/image-dividers/courthouse-corner.astro", void 0);

const $$Astro$2 = createAstro();
const $$Version2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Version2;
  const {
    title = "Do you think you have a case?",
    leftContent = "I'm ready to offer my expertise to get you the best results. Send me a message and I'll get in touch with you shortly, or you can call me between 9:00 am and 8:00 pm Monday to Saturday."
  } = Astro2.props;
  const responsiveSize = "sm:w-[400px] sm:h-[400px] min-[992px]:w-[340px] min-[992px]:h-[340px]  min-[1100px]:w-[400px] min-[1100px]:h-[400px]";
  return renderTemplate`${maybeRenderHead()}<div class="consultation-section lg:pt-0 overflow-hidden"> <div class="container w-container"> <div class="consultation-wrap"> <div class="w-layout-grid consultation-grid"> <!-- <div class="flex flex-col lg:flex-row"> --> <div class="consultation-intro-wrap"> <div class="section-title-left childrenFadeInFromBottomTag"> <h2 class="section-left-title-text fadeOutIntoBottom ">${title}</h2> <img src="/assets/icons/small-separator-gold.svg" loading="lazy" alt="Call For Consultation" class="w-[95px] h-[44px] fadeOutIntoBottom !delay-[250ms]"> <p class="section-left-content fadeOutIntoBottom !delay-[500ms]">${leftContent}<br></p> </div> <div class="consultation-button-wrap"> <a href="/contact-us" class="button w-button hover:bg-transparent hover:text-primaryC transition-all duration-1000 w-fit">Get in touch!</a> </div> </div> <div class="relative mx-auto lg:ml-0 sm:h-[560px] w-full my-10 childrenFadeInFromBottomTag"> ${renderComponent($$result, "EliHeadshot", $$EliHeadshot, { "wrapperStyle": "sm:absolute bg-transparent z-[1] sm:h-[400px] md:left-[75px] min-[991px]:left-0 min-[991px]:translate-x-[0px] fadeOutIntoBottom", "imgStyle": `object-fit w-[300px] h-[300px] min-[400px]:w-[400px] min-[400px]:h-[400px] ${responsiveSize} mx-auto block`, "immediateLoading": false })} <div${addAttribute(`hidden sm:block absolute rounded-full overflow-hidden w-[300px] h-[300px] fadeOutIntoBottom
                  ${responsiveSize} translate-x-[140px] md:right-[75px] md:translate-x-[0px] min-[991px]:translate-x-[150px] min-[991px]:translate-y-[150px] lg:translate-x-[150px] xl:translate-x-[50px] translate-y-[100px]`, "class")}> <img src="/assets/images/court-house.webp" alt="court house" class="object-cover m-auto w-full h-full" loading="lazy" decoding="async" class="object-fit w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]"> </div> </div> </div> </div> </div> </div> ${renderComponent($$result, "ImageDivider", $$CourthouseCorner, {})}`;
}, "D:/Astro/eli-mordecai/src/components/call-to-action/version2.astro", void 0);

const $$Astro$1 = createAstro();
const $$PracticeAreaLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PracticeAreaLayout;
  const {
    title,
    keyword,
    customDescription,
    CTAHeader,
    CTAleftContent
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": keyword, "customDescription": customDescription }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="practice-area-banner"> <div class="banner-title-overlay"></div> ${renderComponent($$result2, "NavBar", $$Index, {})} <div class="container w-container"> <div class="banner-title-wrap childrenFadeInFromBottomTag"> <div class="fadeOutIntoBottom banner-area-title fadeOutIntoBottom font-primaryF"> <p class="text-4xl lg:!text-6xl">${title}</p> </div> ${renderComponent($$result2, "BannerTitleSeparator", $$BannerTitleSeparator, { "customStyle": "fadeOutIntoBottom mx-auto delay-500" })} </div> </div> </div> <div class="practice-area-single-section1"> <div class="container w-container"> <div class="practice-content-wrap"> <div class="practice-single-content"> <div class="w-richtext [&>p]:mb-10"> ${renderSlot($$result2, $$slots["default"])} </div> </div> </div> </div> </div> ${renderComponent($$result2, "CTASection", $$Version2, { "title": CTAHeader, "leftContent": CTAleftContent })} ` })}`;
}, "D:/Astro/eli-mordecai/src/layout/PracticeAreaLayout.astro", void 0);

const $$Astro = createAstro();
const $$ListComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ListComponent;
  const {
    ordered,
    list,
    wrapperStyle
  } = Astro2.props;
  return renderTemplate`${ordered ? renderTemplate`${maybeRenderHead()}<ol${addAttribute(`[&>li]:list-decimal list-inside w-11/12 mx-auto ${wrapperStyle}`, "class")}>${list && list.length > 0 && list.map(
    (item) => {
      return item.label ? renderTemplate`<li><h4 class="inline-block align-top font-bold sm:text-lg md:text-2xl">${item.label}</h4><p>${item.description}</p></li>` : renderTemplate`<li>${item.description}</li>`;
    }
  )}</ol>` : renderTemplate`<ul${addAttribute(`[&>li]:list-disc list-inside w-11/12 mx-auto ${wrapperStyle}`, "class")}>${list && list.length > 0 && list.map(
    (item) => {
      return item.label ? renderTemplate`<li><h4 class="inline-block align-top font-bold sm:text-lg md:text-2xl">${item.label}</h4><p>${item.description}</p></li>` : renderTemplate`<li>${item.description}</li>`;
    }
  )}</ul>`}`;
}, "D:/Astro/eli-mordecai/src/components/listComponent.astro", void 0);

const $$CriminalDefenseLaw = createComponent(($$result, $$props, $$slots) => {
  const steps = [
    {
      "label": "Legal Consultation",
      "description": "We begin by conducting a thorough legal consultation to understand your case, assess the charges against you, and discuss your legal options. My service includes providing clear and honest guidance to help you make informed decisions about your defense strategy."
    },
    {
      "label": "Case Investigation",
      "description": "My service includes conducting meticulous investigations to gather evidence, interview witnesses, review police reports, and examine all aspects of your case. I leave no stone unturned in building a strong defense on your behalf."
    },
    {
      "label": "Court Representation",
      "description": "Whether you're facing misdemeanor or felony charges, I will represent you in court, providing aggressive advocacy, strategic defense arguments, and courtroom experience to fight for the best possible outcome."
    },
    {
      "label": "Negotiation and Plea Bargaining",
      "description": "In some cases, negotiation and plea bargaining may be viable options to achieve reduced charges or sentencing. I will negotiate with prosecutors to seek favorable plea deals when appropriate."
    },
    {
      "label": "Trial Defense",
      "description": "If your case goes to trial, I will meticulously prepare for trial, present compelling evidence, cross-examine witnesses, and make persuasive arguments to defend your innocence."
    }
  ];
  return renderTemplate`${renderComponent($$result, "PracticeAreaLayout", $$PracticeAreaLayout, { "keyword": "Top Defense Attorney in Los Angeles", "title": "Criminal Defense Law", "customDescription": "If you are facing criminal charges in Los Angeles, finding the right criminal defense attorney is critical to maintaining your freedom, innocence, and reputation. ", "CTAHeader": "Are you looking for the best criminal defense attorney in Los Angeles? ", "CTAleftContent": "Get in touch with Eli Mordecai. " }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col lg:flex-row-reverse flex-nowrap gap-10 mb-10 justify-center"> ${renderComponent($$result2, "ResponsiveImage", $$ResponsiveImage, { "defaultImg": "/assets/images/criminal-law.webp", "phoneImg": "/assets/images/criminal-law-320.webp", "mediumTabImg": "/assets/images/criminal-law-600.webp", "tabletImg": "/assets/images/criminal-law--1080.webp", "altText": "Top Defense Attorney in Los Angeles" })} <h1 class="text-4xl md:text-5xl my-auto">In legal trouble? Secure the services of the <span class="text-primaryC">top defense attorney</span> in Los Angeles.</h1> </div> <p>If you are facing criminal charges in Los Angeles, finding the right criminal defense attorney is critical to maintaining your freedom, innocence, and reputation. A conviction can lead to far-reaching consequences such as heavy fines and a lengthy prison sentence. Furthermore, getting a criminal record will impede you from getting hired into good jobs after you leave prison.</p> <p>Therefore, it is in your best interest to build the strongest defense strategy for yourself.</p> <p>With my expertise and legal counsel, I am here to advocate for your rights, protect your interests, and provide you with the comprehensive legal representation you deserve. Multiple steps are followed to help build your defense case.</p> ${renderComponent($$result2, "ListComponent", $$ListComponent, { "ordered": false, "list": steps, "wrapperStyle": "mb-10" })} ` })}`;
}, "D:/Astro/eli-mordecai/src/pages/practice-areas/criminal-defense-law.astro", void 0);

const $$file = "D:/Astro/eli-mordecai/src/pages/practice-areas/criminal-defense-law.astro";
const $$url = "/practice-areas/criminal-defense-law";

const criminalDefenseLaw = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$CriminalDefenseLaw,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ListComponent as $, $$PracticeAreaLayout as a, $$EliHeadshot as b, $$Version2 as c, $$CourthouseCorner as d, criminalDefenseLaw as e };
