import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DtcncTUb.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BWGsIXzY.mjs');
const _page1 = () => import('./chunks/404_BTGmZurK.mjs');
const _page2 = () => import('./chunks/about_D909qtFI.mjs');
const _page3 = () => import('./chunks/eli_mordecai_bfEQeXhl.mjs');
const _page4 = () => import('./chunks/_index__BGppvwub.mjs');
const _page5 = () => import('./chunks/_page__CGniXPLd.mjs');
const _page6 = () => import('./chunks/_page__DYAMk0ig.mjs');
const _page7 = () => import('./chunks/_page__DL5o3afp.mjs');
const _page8 = () => import('./chunks/contact_CrkhwHfc.mjs');
const _page9 = () => import('./chunks/feedback_DMJ1fa4r.mjs');
const _page10 = () => import('./chunks/criminal-defense-law_QPmpgV94.mjs');
const _page11 = () => import('./chunks/employment-law_BCAL4XDH.mjs');
const _page12 = () => import('./chunks/personal-injury-law_C4onpUHm.mjs');
const _page13 = () => import('./chunks/tenant-law_VwwaGDyl.mjs');
const _page14 = () => import('./chunks/transaction-law_0l7HwHKt.mjs');
const _page15 = () => import('./chunks/index_BXTz5EMI.mjs');
const _page16 = () => import('./chunks/privacy-policy_Qr0MiCOp.mjs');
const _page17 = () => import('./chunks/robots_DwJquhf6.mjs');
const _page18 = () => import('./chunks/terms-and-conditions_DfeC6Po5.mjs');
const _page19 = () => import('./chunks/testimonial_OG-O3gZz.mjs');
const _page20 = () => import('./chunks/index_C2qvlvhD.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/author_profile/eli_mordecai.md", _page3],
    ["src/pages/authors/[index].astro", _page4],
    ["src/pages/blog/category/[category_name]/[page].astro", _page5],
    ["src/pages/blog/search/[search_query]/[page].astro", _page6],
    ["src/pages/blog/[page].astro", _page7],
    ["src/pages/contact.astro", _page8],
    ["src/pages/feedback.astro", _page9],
    ["src/pages/practice-areas/criminal-defense-law.astro", _page10],
    ["src/pages/practice-areas/employment-law.astro", _page11],
    ["src/pages/practice-areas/personal-injury-law.astro", _page12],
    ["src/pages/practice-areas/tenant-law.astro", _page13],
    ["src/pages/practice-areas/transaction-law.astro", _page14],
    ["src/pages/practice-areas/index.astro", _page15],
    ["src/pages/privacy-policy.astro", _page16],
    ["src/pages/robots.txt.ts", _page17],
    ["src/pages/terms-and-conditions.astro", _page18],
    ["src/pages/testimonial.astro", _page19],
    ["src/pages/index.astro", _page20]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "615ef701-23fa-42b6-beab-8df781118d6b"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
