import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from './astro/server_BWzPTXNg.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$2 = createAstro("https://mordecai-law.com/");
const $$EliHeadshot = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$EliHeadshot;
  const {
    wrapperStyle,
    imgStyle,
    immediateLoading = true,
    animationTag
  } = Astro2.props;
  return renderTemplate`${immediateLoading ? renderTemplate`${maybeRenderHead()}<div${addAttribute(`${wrapperStyle ? wrapperStyle : "bg-transparent w-fit h-fit"} ${animationTag}`, "class")}><img alt="Eli Mordecai" src="/assets/images/authors/eli_mordecai.webp" loading="eager"${addAttribute(`${imgStyle ? imgStyle : "w-[270px] h-[270px] sm:w-[400px] sm:h-[400px] object-fit mx-auto"}`, "class")}></div>` : renderTemplate`<div${addAttribute(`${wrapperStyle ? wrapperStyle : "bg-transparent w-fit h-fit"} ${animationTag}`, "class")}><img alt="Eli Mordecai" src="/assets/images/authors/eli_mordecai.webp" loading="lazy"${addAttribute(`${imgStyle ? imgStyle : "w-[270px] h-[270px] sm:w-[400px] sm:h-[400px] object-fit mx-auto"}`, "class")}></div>`}`;
}, "D:/Astro/eli-mordecai/src/components/eli-headshot.astro", void 0);

const $$Astro$1 = createAstro("https://mordecai-law.com/");
const $$CourthouseCorner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CourthouseCorner;
  const {
    text,
    wrapperStyle
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${wrapperStyle ? wrapperStyle : "image-section"}`, "class")}> <img src="/assets/images/divider-image.webp" loading="lazy" decoding="async" srcset="/assets/images/divider-image-500.webp 500w, 
    /assets/images/divider-image-800.webp 800w, 
    /assets/images/divider-image-1080.webp  1080w, 
    /assets/images/divider-image.webp 1920w" alt="Divider Image" class="background-image h-[100px] sm:h-[110px] md:h-[140px] lg:h-[185px] xl:h-[220px]"> ${text && renderTemplate`<h4 class="text-center text-white text-2xl md:text-3xl m-auto">${text}</h4>`} </div>`;
}, "D:/Astro/eli-mordecai/src/components/image-dividers/courthouse-corner.astro", void 0);

const $$Astro = createAstro("https://mordecai-law.com/");
const $$Version2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Version2;
  const {
    title = "Do you think you have a case?",
    leftContent = "I'm ready to offer my expertise to get you the best results. Send me a message and I'll get in touch with you shortly, or you can call me between 9:00 am and 8:00 pm Monday to Saturday."
  } = Astro2.props;
  const responsiveSize = "sm:w-[400px] sm:h-[400px] min-[992px]:w-[340px] min-[992px]:h-[340px]  min-[1100px]:w-[400px] min-[1100px]:h-[400px]";
  return renderTemplate`${maybeRenderHead()}<div class="consultation-section1 py-[60px] min-[768]:pt-[100px] min-[768]:pb-0 lg:pt-0 overflow-hidden"> <div class="max-w-[100%] px-[30px] min-[480px]:px-[40px] min-[1280px]:max-w-[100%] min-[1280px]:px-[40px] min-[1440px]:max-w-[1440px] min-[1440px]:px-[20px] min-[1920px]:px-0 container mx-auto before:content-[' '] after:content-[' '] before:grid-area-[1/1/2/2] after:grid-area-[1/1/2/2] before:table after:table after:clear-both w-container"> <div class="consultation-wrap"> <div class="w-layout-grid consultation-grid"> <!-- <div class="flex flex-col lg:flex-row"> --> <div class="consultation-intro-wrap"> <div class="mb-[20px] min-[768]: mb-[30px] childrenFadeInFromBottomTag"> <h2 class="capitalize mb-[12px] text-[30px] leading-[1.3] min-[480px]:text-[32px] min-[768px]:text-[36px] min-[992px]:text-[42px] fadeOutIntoBottom ">${title}</h2> <img src="/assets/icons/small-separator-gold.svg" loading="lazy" alt="Call For Consultation" class="w-[95px] h-[44px] fadeOutIntoBottom !delay-[250ms]"> <p class="pt-[20px] text-[18px] min-[992]:pt-[40px] min-[992]:text-[20px] fadeOutIntoBottom !delay-[500ms]">${leftContent}<br></p> </div> <div class="consultation-button-wrap"> <a href="/contact" class="button w-button hover:bg-transparent hover:text-primaryC transition-all duration-1000 w-fit">Get in touch!</a> </div> </div> <div class="relative mx-auto lg:ml-0 sm:h-[560px] w-full my-10 childrenFadeInFromBottomTag"> ${renderComponent($$result, "EliHeadshot", $$EliHeadshot, { "wrapperStyle": "sm:absolute bg-transparent z-[1] sm:h-[400px] md:left-[75px] min-[991px]:left-0 min-[991px]:translate-x-[0px] fadeOutIntoBottom", "imgStyle": `object-fit w-[300px] h-[300px] min-[400px]:w-[400px] min-[400px]:h-[400px] ${responsiveSize} mx-auto block`, "immediateLoading": false })} <div${addAttribute(`hidden sm:block absolute rounded-full overflow-hidden w-[300px] h-[300px] fadeOutIntoBottom
                  ${responsiveSize} translate-x-[140px] md:right-[75px] md:translate-x-[0px] min-[991px]:translate-x-[150px] min-[991px]:translate-y-[150px] lg:translate-x-[150px] xl:translate-x-[50px] translate-y-[100px]`, "class")}> <img src="/assets/images/court-house.webp" alt="court house" class="object-cover m-auto w-full h-full" loading="lazy" decoding="async" class="object-fit w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]"> </div> </div> </div> </div> </div> </div> ${renderComponent($$result, "ImageDivider", $$CourthouseCorner, {})}`;
}, "D:/Astro/eli-mordecai/src/components/call-to-action/version2.astro", void 0);

export { $$EliHeadshot as $, $$Version2 as a };
