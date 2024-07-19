/* empty css                         */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_BWzPTXNg.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_euznmiol.mjs';
import { $ as $$Index } from './index_Z6KWOvVW.mjs';
import { $ as $$BannerTitleSeparator } from './banner-title-separator_BZATBMIA.mjs';

const prerender = true;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "404 Error: Page not found", "customDescription": "The page you are looking for does not exist." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBar", $$Index, {})} ${maybeRenderHead()}<div class="error-section"> <div class="max-w-[100%] px-[30px] min-[480px]:px-[40px] min-[1280px]:max-w-[100%] min-[1280px]:px-[40px] min-[1440px]:max-w-[1440px] min-[1440px]:px-[20px] min-[1920px]:px-0 container mx-auto before:content-[' '] after:content-[' '] before:grid-area-[1/1/2/2] after:grid-area-[1/1/2/2] before:table after:table after:clear-both w-container"> <div class="error-page-wrap"> <div class="error-page-content"> <h1 class="error-number">404</h1> ${renderComponent($$result2, "BannerTitleSeparator", $$BannerTitleSeparator, { "customStyle": "mx-auto" })} <h2 class="error-page-title">Page Not Found</h2> <div class="text-white text-lg">The page you are looking for doesn&#x27;t exist or has been moved.</div> <div class="error-button-wrap"> <a href="/" class="button w-button">Back To Home</a> </div> </div> </div> </div> </div> ` })}`;
}, "D:/Astro/eli-mordecai/src/pages/404.astro", void 0);

const $$file = "D:/Astro/eli-mordecai/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, prerender, $$url as url };
