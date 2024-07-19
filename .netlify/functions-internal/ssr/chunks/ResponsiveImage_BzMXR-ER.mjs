import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_BWzPTXNg.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://mordecai-law.com/");
const $$ResponsiveImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
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

export { $$ResponsiveImage as $ };
