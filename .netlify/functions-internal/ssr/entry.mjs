import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BKLitd5C.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_uW8XcsWE.mjs');
const _page1 = () => import('./chunks/404_lhHKZr0E.mjs');
const _page2 = () => import('./chunks/about_D9hJxpGR.mjs');
const _page3 = () => import('./chunks/eli_mordecai_CYPb26In.mjs');
const _page4 = () => import('./chunks/_index__BHDg_RSF.mjs');
const _page5 = () => import('./chunks/_page__DJljouu7.mjs');
const _page6 = () => import('./chunks/_page__BK1HL6B8.mjs');
const _page7 = () => import('./chunks/_page__CjXphoAM.mjs');
const _page8 = () => import('./chunks/contact-us_DAN1rBTB.mjs');
const _page9 = () => import('./chunks/How to Tell Who Is at Fault in a Car Accident_S_zokntU.mjs');
const _page10 = () => import('./chunks/How to Tell Who Is at Fault in a Car Accident2_BdE866b5.mjs');
const _page11 = () => import('./chunks/How to Tell Who Is at Fault in a Car Accident3_hLkcr9Ri.mjs');
const _page12 = () => import('./chunks/How to Tell Who Is at Fault in a Car Accident4_DVAbUJUJ.mjs');
const _page13 = () => import('./chunks/How to Tell Who Is at Fault in a Car Accident5_C_L5L4PF.mjs');
const _page14 = () => import('./chunks/How to Tell Who Is at Fault in a Car Accident6_bXmpIBHq.mjs');
const _page15 = () => import('./chunks/How to Tell Who Is at Fault in a Car Accident7_85ryBKhC.mjs');
const _page16 = () => import('./chunks/criminal-defense-law_COOdR6xM.mjs');
const _page17 = () => import('./chunks/employment-law_DPuT5Hgb.mjs');
const _page18 = () => import('./chunks/personal-injury-law_Cv-6XKR-.mjs');
const _page19 = () => import('./chunks/tenant-law_DtRJa7iS.mjs');
const _page20 = () => import('./chunks/transaction-law_D730Lf--.mjs');
const _page21 = () => import('./chunks/index_Bt6hjh30.mjs');
const _page22 = () => import('./chunks/privacy-policy_d4X-T9dp.mjs');
const _page23 = () => import('./chunks/terms-and-conditions_Cdg_VWg1.mjs');
const _page24 = () => import('./chunks/testimonial_Bp7DTQfo.mjs');
const _page25 = () => import('./chunks/index_TJmew5hx.mjs');
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
    ["src/pages/posts/How to Tell Who Is at Fault in a Car Accident.md", _page9],
    ["src/pages/posts/How to Tell Who Is at Fault in a Car Accident2.md", _page10],
    ["src/pages/posts/How to Tell Who Is at Fault in a Car Accident3.md", _page11],
    ["src/pages/posts/How to Tell Who Is at Fault in a Car Accident4.md", _page12],
    ["src/pages/posts/How to Tell Who Is at Fault in a Car Accident5.md", _page13],
    ["src/pages/posts/How to Tell Who Is at Fault in a Car Accident6.md", _page14],
    ["src/pages/posts/How to Tell Who Is at Fault in a Car Accident7.md", _page15],
    ["src/pages/practice-areas/criminal-defense-law.astro", _page16],
    ["src/pages/practice-areas/employment-law.astro", _page17],
    ["src/pages/practice-areas/personal-injury-law.astro", _page18],
    ["src/pages/practice-areas/tenant-law.astro", _page19],
    ["src/pages/practice-areas/transaction-law.astro", _page20],
    ["src/pages/practice-areas/index.astro", _page21],
    ["src/pages/privacy-policy.astro", _page22],
    ["src/pages/terms-and-conditions.astro", _page23],
    ["src/pages/testimonial.astro", _page24],
    ["src/pages/index.astro", _page25]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "7b866b01-6265-475f-bbbd-da65a26779b5"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
