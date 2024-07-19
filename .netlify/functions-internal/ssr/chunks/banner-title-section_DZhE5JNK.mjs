import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from './astro/server_BWzPTXNg.mjs';
import 'kleur/colors';
import { $ as $$Index } from './index_Z6KWOvVW.mjs';
import { $ as $$BannerTitleSeparator } from './banner-title-separator_BZATBMIA.mjs';

const $$Astro = createAstro("https://mordecai-law.com/");
const $$BannerTitleSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BannerTitleSection;
  const {
    title
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="banner-title-area"> <div class="banner-title-overlay"></div> ${renderComponent($$result, "NavBar", $$Index, {})} <div class="max-w-[100%] px-[30px] min-[480px]:px-[40px] min-[1280px]:max-w-[100%] min-[1280px]:px-[40px] min-[1440px]:max-w-[1440px] min-[1440px]:px-[20px] min-[1920px]:px-0 container mx-auto before:content-[' '] after:content-[' '] before:grid-area-[1/1/2/2] after:grid-area-[1/1/2/2] before:table after:table after:clear-both w-container"> <div class="banner-title-wrap childrenFadeInFromBottomTag"> <h1 class="text-3xl sm:text-6xl fadeOutIntoBottom ">${title}</h1> ${renderComponent($$result, "BannerTitleSeparator", $$BannerTitleSeparator, { "customStyle": "w-[95px] h-[44px] fadeOutIntoBottom mx-auto" })} </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/banner-title-section.astro", void 0);

export { $$BannerTitleSection as $ };
