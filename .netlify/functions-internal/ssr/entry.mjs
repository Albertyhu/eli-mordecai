import { renderers } from './renderers.mjs';
import { manifest } from './manifest_xJiIFfoa.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BonCmntp.mjs');
const _page1 = () => import('./chunks/404_BGSWTjJA.mjs');
const _page2 = () => import('./chunks/about_BvatycQ0.mjs');
const _page3 = () => import('./chunks/eli_mordecai_BU_RALO1.mjs');
const _page4 = () => import('./chunks/_index__COOIffGo.mjs');
const _page5 = () => import('./chunks/_page__C8hMQRBH.mjs');
const _page6 = () => import('./chunks/_page__BvKqqrj0.mjs');
const _page7 = () => import('./chunks/_page__CCVDhz_N.mjs');
const _page8 = () => import('./chunks/contact-us_Btu9reSU.mjs');
const _page9 = () => import('./chunks/home-2_BnSvg0yZ.mjs');
const _page10 = () => import('./chunks/How to Tell Who Is at Fault in a Car Accident_B8TIryPa.mjs');
const _page11 = () => import('./chunks/How to Tell Who Is at Fault in a Car Accident2_WJvt6P-2.mjs');
const _page12 = () => import('./chunks/How to Tell Who Is at Fault in a Car Accident3_DMda1rvN.mjs');
const _page13 = () => import('./chunks/How to Tell Who Is at Fault in a Car Accident4_qgpGCYbA.mjs');
const _page14 = () => import('./chunks/How to Tell Who Is at Fault in a Car Accident5_D-e0kG0C.mjs');
const _page15 = () => import('./chunks/How to Tell Who Is at Fault in a Car Accident6_dht8iX9A.mjs');
const _page16 = () => import('./chunks/How to Tell Who Is at Fault in a Car Accident7_DuoCxC2s.mjs');
const _page17 = () => import('./chunks/criminal-defense-law_Dk725K9H.mjs');
const _page18 = () => import('./chunks/employment-law_DLTXUzCx.mjs');
const _page19 = () => import('./chunks/personal-injury-law_D9sEwsxe.mjs');
const _page20 = () => import('./chunks/tenant-law_DBDpeFs3.mjs');
const _page21 = () => import('./chunks/transaction-law_CneKc3-F.mjs');
const _page22 = () => import('./chunks/index_BRZaKO7T.mjs');
const _page23 = () => import('./chunks/privacy-policy_BLz6nz1v.mjs');
const _page24 = () => import('./chunks/terms-and-conditions_BrjFXuws.mjs');
const _page25 = () => import('./chunks/testimonial_aCCAGbgy.mjs');
const _page26 = () => import('./chunks/index_Daeqyz5o.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/author_profile/eli_mordecai.md", _page3],
    ["src/pages/authors/[index].astro", _page4],
    ["src/pages/blog/category/[category_name]/[page].astro", _page5],
    ["src/pages/blog/search/[search_query]/[page].astro", _page6],
    ["src/pages/blog/[page].astro", _page7],
    ["src/pages/contact-us.astro", _page8],
    ["src/pages/home-2.astro", _page9],
    ["src/pages/posts/How to Tell Who Is at Fault in a Car Accident.md", _page10],
    ["src/pages/posts/How to Tell Who Is at Fault in a Car Accident2.md", _page11],
    ["src/pages/posts/How to Tell Who Is at Fault in a Car Accident3.md", _page12],
    ["src/pages/posts/How to Tell Who Is at Fault in a Car Accident4.md", _page13],
    ["src/pages/posts/How to Tell Who Is at Fault in a Car Accident5.md", _page14],
    ["src/pages/posts/How to Tell Who Is at Fault in a Car Accident6.md", _page15],
    ["src/pages/posts/How to Tell Who Is at Fault in a Car Accident7.md", _page16],
    ["src/pages/practice-areas/criminal-defense-law.astro", _page17],
    ["src/pages/practice-areas/employment-law.astro", _page18],
    ["src/pages/practice-areas/personal-injury-law.astro", _page19],
    ["src/pages/practice-areas/tenant-law.astro", _page20],
    ["src/pages/practice-areas/transaction-law.astro", _page21],
    ["src/pages/practice-areas/index.astro", _page22],
    ["src/pages/privacy-policy.astro", _page23],
    ["src/pages/terms-and-conditions.astro", _page24],
    ["src/pages/testimonial.astro", _page25],
    ["src/pages/index.astro", _page26]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "ceb0b2d5-ccd3-474b-8ead-7cf6c58cc48c"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
