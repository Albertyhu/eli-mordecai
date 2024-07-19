/* empty css                         */
import { a as createComponent, r as renderTemplate, d as renderComponent } from './astro/server_BWzPTXNg.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_euznmiol.mjs';
import { a as $$Version2 } from './version2_gugycLMD.mjs';
import { $ as $$Index$1 } from './index_CnhfKYOF.mjs';
import { $ as $$BannerTitleSection } from './banner-title-section_DZhE5JNK.mjs';

const prerender = true;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Practice Areas", "customDescription": "Lawyer site" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerTitleSection", $$BannerTitleSection, { "title": "Practice Areas" })} ${renderComponent($$result2, "PracticeAreaSection", $$Index$1, {})} ${renderComponent($$result2, "ConsultationSection", $$Version2, {})} ` })}`;
}, "D:/Astro/eli-mordecai/src/pages/practice-areas/index.astro", void 0);

const $$file = "D:/Astro/eli-mordecai/src/pages/practice-areas/index.astro";
const $$url = "/practice-areas";

export { $$Index as default, $$file as file, prerender, $$url as url };
