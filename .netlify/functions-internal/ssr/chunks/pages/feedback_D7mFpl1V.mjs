/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../astro_BD0Lb4GF.mjs';
import 'kleur/colors';
import { b as $$BaseLayout } from './_page__BKngyi8y.mjs';
import { $ as $$BannerTitleSection } from './contact_bAKECUX2.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-11/12 mx-auto md:w-8/12"> ${renderComponent($$result, "FeedbackForm", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "D:/Astro/eli-mordecai/src/components/reputation-app/review-form.tsx", "client:component-export": "default" })} </div>`;
}, "D:/Astro/eli-mordecai/src/components/reputation-app/index.astro", void 0);

const $$Feedback = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Feedback", "customDescription": "Let me know how well I handled your case. I value your feedback." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerTitleSection", $$BannerTitleSection, { "title": "Let me know how I am doing" })} ${renderComponent($$result2, "ReputationForm", $$Index, {})} ` })}`;
}, "D:/Astro/eli-mordecai/src/pages/feedback.astro", void 0);

const $$file = "D:/Astro/eli-mordecai/src/pages/feedback.astro";
const $$url = "/feedback";

export { $$Feedback as default, $$file as file, $$url as url };
