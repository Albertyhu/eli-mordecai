import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from './astro/server_BWzPTXNg.mjs';
import 'kleur/colors';
import { P as PracticeAreas } from './practice-areas_CmOKVCUE.mjs';
import 'clsx';

const $$Astro = createAstro("https://mordecai-law.com/");
const $$Panel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Panel;
  const {
    type,
    description,
    icon
  } = Astro2.props;
  const url = `/practice-areas/${type.toLowerCase().replace(/\s+/g, "-")}`;
  return renderTemplate`${maybeRenderHead()}<div role="listitem" class="md:w-[300px] min-[992px]:w-[375px] 2xl:w-[468px] h-full md:min-w-[280px] lg:min-w-[380px]"> <div class="practice-area-item1 bg-secondaryC min-h-[420px] mb-[30px] pt-[20px] px-[20px] pb-[30px] min-[480]:min-h-auto min-[480]:mb-[30px] min-[480]:px-[30px] min-[768]:min-h-[500px] min-[768]:mb-[10px] min-[1280]:min-h-auto min-[1280]:pt-[55px] min-[1280]:px-[50px] min-[1280]:pb-[70px] h-auto hover:bg-slate-700 transition-all duration-1000"> <div class="practice-listing-content-wrap1 mb-[25px] pb-[10px] border-1px min-[480]:mb-[38px] min-[480]:pb-[20px] border-solid border-[#4e555f] !pb-[40px]"> <div class="h-[110px]"> <a${addAttribute(url, "href")} class="practice-area-title1 text-white hover:text-primaryC pb-[5px] font-primaryF text-[26px] min-[992]:text-[28px] font-700 inline-block min-[1280]:text-[35px]">${type}</a> </div> <p class="h-[235px] md:h-[300px] min-[991px]:h-[250px] max-h-[250px]">${description}</p> </div> <div class="grid [&>div]:mx-auto mb-0 mt-auto text-center sm:flex sm:flex-row sm:align-start"> <div class="mx-auto w-[53px] min-[788px]:w-[53px] sm:mt-[20px]"> <img${addAttribute(type, "alt")} decoding="async" loading="lazy"${addAttribute(icon.src, "src")} width="53" height="53"> </div> <div class=""> <a${addAttribute(url, "href")} class="practice-button1 w-button1 bg-darkBlack capitalize text-[18px] font-medium mt-[20px] px-[30px] py-[13px] min-[1280]:text-[20px] min-[1280]:px-[42px] hover:bg-primaryC text-white leading-[inherit] cursor-pointer no-underline block px-[15px] py-[9px] rounded-none border-0 hover:text-secondaryC transition-all duration-1000">View More</a> </div> </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/practice-area-preview-section/panel.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-[#161d27] pt-10"> <div class="w-dyn-list"> <div role="list" class="flex flex-col sm:flex-row sm:flex-wrap md:gap-x-5 justify-center mx-auto w-10/12 xl:w-full"> ${PracticeAreas && PracticeAreas.length > 0 && PracticeAreas.map((area) => {
    if (area.hasPage) {
      return renderTemplate`${renderComponent($$result, "Panel", $$Panel, { ...area })}`;
    }
    return null;
  })} </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/practice-area-preview-section/index.astro", void 0);

export { $$Index as $ };
