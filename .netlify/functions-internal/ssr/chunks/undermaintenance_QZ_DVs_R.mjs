/* empty css                         */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderHead, d as renderComponent } from './astro/server_BWzPTXNg.mjs';
import 'kleur/colors';
import 'clsx';
import { B as BusinessInfo, f as formatPhone, L as Logo216 } from './Eli_Mordecai-Logo-216_u2v_MXNV.mjs';

const $$Astro = createAstro("https://mordecai-law.com/");
const $$ContactInfoComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactInfoComponent;
  const {
    horizontal,
    customDiv
  } = Astro2.props;
  const size = 30;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`my-10 text-2xl leading-10 ${customDiv ? customDiv : ""}`, "class")}> <a${addAttribute(`mailto:${BusinessInfo.email}`, "href")}> <div class="flex flex-row gap-10 w-fit"> <img src="/assets/icons/header-mail-icon.svg" alt="email"${addAttribute(size, "width")}${addAttribute(size, "height")}> <div class="my-auto"> <p>${BusinessInfo.email}</p> </div> </div> </a> <a${addAttribute(`tel:${BusinessInfo.phone}`, "href")}> <div class="flex flex-row gap-10 w-fit"> <img src="/assets/icons/header-mail-icon.svg" alt="email"${addAttribute(size, "width")}${addAttribute(size, "height")}> <div class="my-auto"> <p>${formatPhone(BusinessInfo.phone)}</p> </div> </div> </a> </div>`;
}, "D:/Astro/eli-mordecai/src/components/contact-info-component.astro", void 0);

const $$Undermaintenance = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><title>Website is under maintenance</title><meta content="width=device-width, initial-scale=1" name="viewport"><link href="/style/inner-pages.css" rel="stylesheet" type="text/css" media="print" onload="this.media='all'; this.onload=null;">${maybeRenderHead()}<noscript><link rel="stylesheet" href="/style/inner-pages.css"></noscript><link href="/assets/icons/favicon.webp" rel="shortcut icon" type="image/x-icon"><!-- <link rel="preload" href="../fonts/CormorantGaramond-Regular.ttf" as="font" type="font/ttf" crossorigin="anonymous">
      <link rel="preload" href="../fonts/Outfit-Regular.ttf" as="font" type="font/ttf" crossorigin="anonymous"> --><link rel="preload" href="../fonts/CormorantGaramond-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous"><link rel="preload" href="../fonts/Outfit-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous"><link rel="sitemap" href="/sitemap-index.xml">${renderHead()}</head> <body> <div class="w-full h-screen bg-secondaryC text-white py-10 font-primaryF"> <div class="w-10/12 sm:w-6/12 lg:w-5/12 mx-auto [&>p]:my-5 [&>p]:text-center"> <div${addAttribute(`header-logo`, "class")}> <img${addAttribute(Logo216.src, "src")} loading="eager" class="w-[218px] aspect-[3/1] mx-auto" alt="General Practice Attorney Logo"> </div> <h1 class="text-white text-2xl text-center font-bold my-10">The website is currently under maintenance.</h1> <p class="text-lg">You can expect to hear back from us in the near future.</p> <p class="text-lg">If you have any business inquiries for Mordecai Law, you can contact us with the following information:</p> ${renderComponent($$result, "ContactInfoComponent", $$ContactInfoComponent, { "customDiv": "mx-auto w-fit" })} </div> </div> </body></html>`;
}, "D:/Astro/eli-mordecai/src/pages/undermaintenance.astro", void 0);

const $$file = "D:/Astro/eli-mordecai/src/pages/undermaintenance.astro";
const $$url = "/undermaintenance";

export { $$Undermaintenance as default, $$file as file, $$url as url };
