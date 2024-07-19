import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_BWzPTXNg.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://mordecai-law.com/");
const $$ListComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ListComponent;
  const {
    ordered,
    list,
    wrapperStyle
  } = Astro2.props;
  return renderTemplate`${ordered ? renderTemplate`${maybeRenderHead()}<ol${addAttribute(`[&>li]:list-decimal list-inside w-11/12 mx-auto ${wrapperStyle}`, "class")}>${list && list.length > 0 && list.map(
    (item) => {
      return item.label ? renderTemplate`<li><h4 class="inline-block align-top font-bold sm:text-lg md:text-2xl">${item.label}</h4><p>${item.description}</p></li>` : renderTemplate`<li>${item.description}</li>`;
    }
  )}</ol>` : renderTemplate`<ul${addAttribute(`[&>li]:list-disc list-inside w-11/12 mx-auto ${wrapperStyle}`, "class")}>${list && list.length > 0 && list.map(
    (item) => {
      return item.label ? renderTemplate`<li><h4 class="inline-block align-top font-bold sm:text-lg md:text-2xl">${item.label}</h4><p>${item.description}</p></li>` : renderTemplate`<li>${item.description}</li>`;
    }
  )}</ul>`}`;
}, "D:/Astro/eli-mordecai/src/components/listComponent.astro", void 0);

export { $$ListComponent as $ };
