import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, f as renderSlot } from './astro/server_BWzPTXNg.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_euznmiol.mjs';
import { $ as $$Index } from './index_Z6KWOvVW.mjs';
import { $ as $$BannerTitleSeparator } from './banner-title-separator_BZATBMIA.mjs';
import { a as $$Version2 } from './version2_gugycLMD.mjs';

const $$Astro = createAstro("https://mordecai-law.com/");
const $$PracticeAreaLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PracticeAreaLayout;
  const {
    title,
    keyword,
    customDescription,
    CTAHeader,
    CTAleftContent
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": keyword, "customDescription": customDescription }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="practice-area-banner"> <div class="banner-title-overlay"></div> ${renderComponent($$result2, "NavBar", $$Index, {})} <div class="max-w-[100%] px-[30px] min-[480px]:px-[40px] min-[1280px]:max-w-[100%] min-[1280px]:px-[40px] min-[1440px]:max-w-[1440px] min-[1440px]:px-[20px] min-[1920px]:px-0 container mx-auto before:content-[' '] after:content-[' '] before:grid-area-[1/1/2/2] after:grid-area-[1/1/2/2] before:table after:table after:clear-both w-container"> <div class="banner-title-wrap childrenFadeInFromBottomTag"> <div class="fadeOutIntoBottom banner-area-title fadeOutIntoBottom font-primaryF"> <p class="text-4xl lg:!text-6xl">${title}</p> </div> ${renderComponent($$result2, "BannerTitleSeparator", $$BannerTitleSeparator, { "customStyle": "fadeOutIntoBottom mx-auto delay-500" })} </div> </div> </div> <div class="practice-area-single-section1"> <div class="max-w-[100%] px-[30px] min-[480px]:px-[40px] min-[1280px]:max-w-[100%] min-[1280px]:px-[40px] min-[1440px]:max-w-[1440px] min-[1440px]:px-[20px] min-[1920px]:px-0 container mx-auto before:content-[' '] after:content-[' '] before:grid-area-[1/1/2/2] after:grid-area-[1/1/2/2] before:table after:table after:clear-both w-container"> <div class="practice-content-wrap"> <div class="practice-single-content"> <div class="w-richtext [&>p]:mb-10"> ${renderSlot($$result2, $$slots["default"])} </div> </div> </div> </div> </div> ${renderComponent($$result2, "CTASection", $$Version2, { "title": CTAHeader, "leftContent": CTAleftContent })} ` })}`;
}, "D:/Astro/eli-mordecai/src/layout/PracticeAreaLayout.astro", void 0);

export { $$PracticeAreaLayout as $ };
