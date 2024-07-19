import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, e as renderHead, f as renderSlot } from './astro/server_BWzPTXNg.mjs';
import 'kleur/colors';
import { a as $$BodyLayout, b as $$ViewTransitions, c as $$SEO } from './index_Z6KWOvVW.mjs';
/* empty css                                */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://mordecai-law.com/");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    pageTitle,
    customDescription
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><script src="public/script/before-DOM-load.js" type="text/javascript" defer>\n      <\/script><meta charset="utf-8"><title>', "</title>", `<meta content="width=device-width, initial-scale=1" name="viewport"><link href="/style/inner-pages.css" rel="stylesheet" type="text/css" media="print" onload="this.media='all'; this.onload=null;"><link href="/style/global.css" rel="stylesheet" type="text/css" media="print" onload="this.media='all'; this.onload=null;"><!-- <noscript>
         <link rel="stylesheet" href="/style/inner-pages.css">
      </noscript> --><link href="/assets/icons/favicon.webp" rel="shortcut icon" type="image/x-icon"><!-- <link rel="preload" href="../fonts/CormorantGaramond-Regular.ttf" as="font" type="font/ttf" crossorigin="anonymous">
      <link rel="preload" href="../fonts/Outfit-Regular.ttf" as="font" type="font/ttf" crossorigin="anonymous"> --><link rel="preload" href="../fonts/CormorantGaramond-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous"><link rel="preload" href="../fonts/Outfit-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous"><link rel="sitemap" href="/sitemap-index.xml">`, "", "</head> ", ' <script src="/script/body_appearance.js" type="text/javascript" defer>\n   <\/script> </html>'])), pageTitle, renderComponent($$result, "SEO", $$SEO, { "title": pageTitle, "description": customDescription }), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "BodyLayout", $$BodyLayout, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` }));
}, "D:/Astro/eli-mordecai/src/layout/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
