/* empty css                         */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from './astro/server_BWzPTXNg.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_euznmiol.mjs';
import { $ as $$BannerTitleSection } from './banner-title-section_DZhE5JNK.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-11/12 mx-auto md:w-8/12"> ${renderComponent($$result, "FeedbackForm", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/Astro/eli-mordecai/src/components/reputation-app/review-form.tsx", "client:component-export": "default" })} </div>`;
}, "D:/Astro/eli-mordecai/src/components/reputation-app/index.astro", void 0);

const $$Feedback = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Feedback", "customDescription": "Let me know how well I handled your case. I value your feedback." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerTitleSection", $$BannerTitleSection, { "title": "Let me know how I am doing" })} ${renderComponent($$result2, "ReputationForm", $$Index, {})} ` })}`;
}, "D:/Astro/eli-mordecai/src/pages/feedback.astro", void 0);

const $$file = "D:/Astro/eli-mordecai/src/pages/feedback.astro";
const $$url = "/feedback";

export { $$Feedback as default, $$file as file, $$url as url };
