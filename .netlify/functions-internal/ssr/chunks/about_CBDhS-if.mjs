/* empty css                         */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from './astro/server_BWzPTXNg.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_euznmiol.mjs';
import { $ as $$EliHeadshot, a as $$Version2 } from './version2_gugycLMD.mjs';
import 'clsx';
import { P as PracticeAreas } from './practice-areas_CmOKVCUE.mjs';
import { $ as $$BannerTitleSection } from './banner-title-section_DZhE5JNK.mjs';

const $$Astro$3 = createAstro("https://mordecai-law.com/");
const $$SmallSeparatorGold = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SmallSeparatorGold;
  const { customStyle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<img src="/assets/icons/small-separator-gold.svg" loading="lazy" alt="Title Separator"${addAttribute(`${customStyle ? customStyle : "w-[95px] h-[44px]"}`, "class")}>`;
}, "D:/Astro/eli-mordecai/src/components/graphics/small-separator-gold.astro", void 0);

const $$Astro$2 = createAstro("https://mordecai-law.com/");
const $$PracticeAreaItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PracticeAreaItem;
  const {
    type,
    icon,
    description,
    hasPage
  } = Astro2.props;
  const url = `/practice-areas/${type.toLowerCase().replace(/\s+/g, "-")}`;
  return renderTemplate`${hasPage ? renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")}><div${addAttribute(`our-values-item hover:bg-slate-600 cursor-pointer rotateUpTag rotateDown`, "class")}><div class="values-icon-wrap"><img${addAttribute(icon.src, "src")} loading="lazy" alt="Values Icon" class="w-[40px] h-[40px]"></div><div class="our-values-content-area"><h3 class="our-values-title">${type}</h3><p>${description}</p></div></div></a>` : renderTemplate`<div${addAttribute(`our-values-item hover:bg-slate-600 rotateUpTag rotateDown`, "class")}><div class="values-icon-wrap"><img${addAttribute(icon.src, "src")} loading="lazy" alt="Values Icon" class="w-[40px] h-[40px]"></div><div class="our-values-content-area"><h3 class="our-values-title">${type}</h3><p>${description}</p></div></div>`}`;
}, "D:/Astro/eli-mordecai/src/components/about-page/practice-area-section/practice-area-item.astro", void 0);

const PlusIcon = new Proxy({"src":"/_astro/plus_icon.jRvQ07gC.png","width":40,"height":40,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/eli-mordecai/src/assets/icons/practice-areas/plus_icon.png";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://mordecai-law.com/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const currentPathInAbout = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<div class="our-values-section" id="our-value-section"> <div class="max-w-[100%] px-[30px] min-[480px]:px-[40px] min-[1280px]:max-w-[100%] min-[1280px]:px-[40px] min-[1440px]:max-w-[1440px] min-[1440px]:px-[20px] min-[1920px]:px-0 container mx-auto  before:content-[' '] after:content-[' '] before:grid-area-[1/1/2/2] after:grid-area-[1/1/2/2] before:table after:table after:clear-both w-container"> <div class="our-values-wrap"> <div class="w-layout-grid our-values-grid"> <div class="our-values-title-wrap"> <div class="our-values-title-content" id="our-values-title-content"> <div class="mb-[20px] min-[768]: mb-[30px] childrenFadeInFromBottomTag"> <h2 class="capitalize mb-[12px] text-[30px] leading-[1.3] min-[480px]:text-[32px] min-[768px]:text-[36px] min-[992px]:text-[42px] fadeOutIntoBottom">From Business Deals to Dispute Resolution <br></h2> ${renderComponent($$result, "SmallSeparatorGold", $$SmallSeparatorGold, { "customStyle": "w-[95px] h-[44px] fadeOutIntoBottom !delay-[500ms]" })} <p class="pt-[20px] text-[18px] min-[992]:pt-[40px] min-[992]:text-[20px] fadeOutIntoBottom !delay-[1000ms]">Whether you're navigating a complex business transaction, facing a legal challenge, or planning for the future, I'm here to guide you through the process. My experience covers a wide range of legal areas, including: <br></p> </div> </div> </div> <div class="our-values-content-wrap"> ${PracticeAreas && PracticeAreas.length > 0 && PracticeAreas.map((area) => renderTemplate`${renderComponent($$result, "PracticeAreaItem", $$PracticeAreaItem, { ...area })}`)} <a href="/practice-areas"> <div${addAttribute(`our-values-item hover:bg-slate-600 cursor-pointer`, "class")}> <div class="values-icon-wrap"> <img${addAttribute(PlusIcon.src, "src")} loading="lazy" alt="Values Icon" class="w-[40px] h-[40px]"> </div> <div class="our-values-content-area"> <h3 class="our-values-title">And more...</h3> </div> </div> </a> </div> </div> </div> </div> ${currentPathInAbout.toLowerCase().replace(/\//g, "") === "about" && renderTemplate(_a || (_a = __template(['<script>\n    document.addEventListener("astro:page-load", () => {\n        const OverValueSection = document.getElementById("our-value-section"); \n        const OverValueContent = document.getElementById("our-values-title-content"); \n        const ShiftContentDown = () =>{\n            try{\n                let TopHeight = OverValueSection?.getBoundingClientRect().top; \n                if(window.innerWidth > 991 && TopHeight < 45){\n                    OverValueContent.style.top = "160px"; \n                }\n            }catch(e){\n                console.log("ShiftContentDown Error: ", e)\n            }\n        }\n        window.addEventListener("scroll", ShiftContentDown)\n    })\n<\/script>'])))}</div>`;
}, "D:/Astro/eli-mordecai/src/components/about-page/practice-area-section/index.astro", void 0);

const $$Astro = createAstro("https://mordecai-law.com/");
const $$SmallSeparatorBlack = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SmallSeparatorBlack;
  const { customStyle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<img src="/assets/icons/banner-title-separator-black.svg" loading="lazy" alt="Title Separator"${addAttribute(`${customStyle ? customStyle : "w-[95px] h-[44px]"}`, "class")}>`;
}, "D:/Astro/eli-mordecai/src/components/graphics/small-separator-black.astro", void 0);

const $$SpecializedSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="specialized-section"> <div class="specialized-wrap"> <div class="w-layout-grid specialized-grid"> <div class="overflow-hidden h-[250px] sm:h-[350px] min-[991px]:h-full"> <picture class=""> <source media="(min-width:400px)" srcset="/assets/images/handshake-800.webp"> <source media="(min-width:800px)" srcset="/assets/images/handshake.webp"> <img src="/assets/images/handshake-400.webp" loading="lazy" decoding="async" class="object-cover h-[523px] w-[992px] translate-y-[-100px] sm:translate-y-[0px] lg:h-full" alt="Specialized Image"> </picture> </div> <div class="specialized-content-wrap"> <div class="progress-title-wrap mt-10"> <div class="mb-[20px] min-[768]: mb-[30px] childrenFadeInFromBottomTag"> <h2 class="capitalize mb-[12px] text-[30px] leading-[1.3] min-[480px]:text-[32px] min-[768px]:text-[36px] min-[992px]:text-[42px] dark-color-title fadeOutIntoBottom">Building Strong Relationships </h2> ${renderComponent($$result, "SmallSeparatorBlack", $$SmallSeparatorBlack, { "customStyle": "w-[95px] h-[44px] fadeOutIntoBottom !delay-[250ms]" })} <p class="pt-[20px] text-[18px] min-[992]:pt-[40px] min-[992]:text-[20px] dark-color-content fadeOutIntoBottom !delay-[500ms]">I understand that legal matters can be stressful and confusing. That's why I take the time to build strong relationships with my clients, listening carefully to their needs and concerns. I'll explain your options in clear, concise language, and work collaboratively with you to develop a legal strategy that meets your unique goals.♥<br><br></p> </div> </div> </div> </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/about-page/specialized-section.astro", void 0);

const prerender = true;
const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "About Eli Mordecai", "customDescription": "I'm Eli Mordecai, a general practice attorney in Venice, CA." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerTitleSection", $$BannerTitleSection, { "title": "About Me" })} ${maybeRenderHead()}<div class="about-intro-section"> <div class="max-w-[100%] px-[30px] min-[480px]:px-[40px] min-[1280px]:max-w-[100%] min-[1280px]:px-[40px] min-[1440px]:max-w-[1440px] min-[1440px]:px-[20px] min-[1920px]:px-0 container mx-auto  before:content-[' '] after:content-[' '] before:grid-area-[1/1/2/2] after:grid-area-[1/1/2/2] before:table after:table after:clear-both w-container"> <div class="about-intro-wrap"> <div class="w-layout-grid about-intro-grid"> <div class="about-intro-image-wrap"> ${renderComponent($$result2, "EliHeadshot", $$EliHeadshot, { "wrapperStyle": "mx-auto bg-transparent w-[270px] h-[270px] sm:w-[450px] sm:h-[450px]", "animationTag": "fadeInFromBottomTag fadeOutIntoBottom", "immediateLoading": true })} </div> <div class="about-intro-content-wrap"> <div class="mb-[20px] min-[768]: mb-[30px] childrenFadeInFromBottomTag"> <h2 class="capitalize mb-[12px] text-[30px] leading-[1.3] min-[480px]:text-[32px] min-[768px]:text-[36px] min-[992px]:text-[42px] fadeOutIntoBottom text-5xl lg:text-6xl">I’m Eli Mordecai</h2> <h2 class="capitalize mb-[12px] text-[30px] leading-[1.3] min-[480px]:text-[32px] min-[768px]:text-[36px] min-[992px]:text-[42px] fadeOutIntoBottom !delay-[250ms]">A <span class="text-primaryC">General Practice Attorney</span> in Venice, CA</h2> ${renderComponent($$result2, "SmallSeparatorGold", $$SmallSeparatorGold, { "customStyle": "w-[95px] h-[44px] fadeOutIntoBottom !delay-[500ms]" })} <p class="pt-[20px] text-[18px] min-[992]:pt-[40px] min-[992]:text-[20px] fadeOutIntoBottom !delay-[750ms]">But I'm more than just someone who knows the law.<br></p> <p class="pt-[20px] text-[18px] min-[992]:pt-[40px] min-[992]:text-[20px] fadeOutIntoBottom !delay-[1000ms]">I'm a passionate advocate, a creative problem-solver, and a firm believer in achieving the best outcome for every client.<br></p> </div> </div> </div> </div> </div> </div> ${renderComponent($$result2, "PracticeAreaSection", $$Index, {})} ${renderComponent($$result2, "SpecializedSection", $$SpecializedSection, {})} ${renderComponent($$result2, "CTASection", $$Version2, { "title": "Do you think you have a case?", ",": true, "leftContent": "I'm ready to offer my expertise to get you the best results. Send me a message and I'll get in touch with you shortly, or you can call me between 9:00 am and 8:00 pm Monday to Saturday." })} ` })}`;
}, "D:/Astro/eli-mordecai/src/pages/about.astro", void 0);

const $$file = "D:/Astro/eli-mordecai/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, prerender, $$url as url };
