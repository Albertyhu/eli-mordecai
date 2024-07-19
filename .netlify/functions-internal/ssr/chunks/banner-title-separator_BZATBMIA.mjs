import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_BWzPTXNg.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://mordecai-law.com/");
const $$BannerTitleSeparator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BannerTitleSeparator;
  const {
    customStyle = "w-[95px] h-[44px]"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<img src="/assets/icons/banner-title-separator.svg" loading="lazy" alt="Title Large Separator" decoding="async"${addAttribute(`${customStyle}`, "class")} width="95" height="44">`;
}, "D:/Astro/eli-mordecai/src/components/graphics/banner-title-separator.astro", void 0);

export { $$BannerTitleSeparator as $ };
