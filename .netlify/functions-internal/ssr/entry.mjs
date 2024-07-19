import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DXvJjKNZ.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/author_profile/eli_mordecai.astro.mjs');
const _page4 = () => import('./pages/authors/_index_.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/feedback.astro.mjs');
const _page7 = () => import('./pages/posts/how to tell who is at fault in a car accident.astro.mjs');
const _page8 = () => import('./pages/practice-areas/criminal-defense-law.astro.mjs');
const _page9 = () => import('./pages/practice-areas/employment-law.astro.mjs');
const _page10 = () => import('./pages/practice-areas/landlord-tenant-law.astro.mjs');
const _page11 = () => import('./pages/practice-areas/personal-injury-law.astro.mjs');
const _page12 = () => import('./pages/practice-areas/transactional-law.astro.mjs');
const _page13 = () => import('./pages/practice-areas.astro.mjs');
const _page14 = () => import('./pages/privacy-policy.astro.mjs');
const _page15 = () => import('./pages/robots.txt.astro.mjs');
const _page16 = () => import('./pages/terms-and-conditions.astro.mjs');
const _page17 = () => import('./pages/testimonial.astro.mjs');
const _page18 = () => import('./pages/undermaintenance.astro.mjs');
const _page19 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/author_profile/eli_mordecai.md", _page3],
    ["src/pages/authors/[index].astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/feedback.astro", _page6],
    ["src/pages/posts/How to Tell Who Is at Fault in a Car Accident.md", _page7],
    ["src/pages/practice-areas/criminal-defense-law.astro", _page8],
    ["src/pages/practice-areas/employment-law.astro", _page9],
    ["src/pages/practice-areas/landlord-tenant-law.astro", _page10],
    ["src/pages/practice-areas/personal-injury-law.astro", _page11],
    ["src/pages/practice-areas/transactional-law.astro", _page12],
    ["src/pages/practice-areas/index.astro", _page13],
    ["src/pages/privacy-policy.astro", _page14],
    ["src/pages/robots.txt.ts", _page15],
    ["src/pages/terms-and-conditions.astro", _page16],
    ["src/pages/testimonial.astro", _page17],
    ["src/pages/undermaintenance.astro", _page18],
    ["src/pages/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "16424450-adf1-48d9-9a0f-c26340ce9179"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
