/* empty css                          */
import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, e as addAttribute } from '../astro_BD0Lb4GF.mjs';
import 'kleur/colors';
import { $ as $$Index, a as $$BannerTitleSeparator, f as formatPhone, B as BusinessInfo, b as $$BaseLayout } from './_page__BKngyi8y.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://mordecai-law.com/");
const $$BannerTitleSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BannerTitleSection;
  const {
    title
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="banner-title-area"> <div class="banner-title-overlay"></div> ${renderComponent($$result, "NavBar", $$Index, {})} <div class="container w-container"> <div class="banner-title-wrap childrenFadeInFromBottomTag"> <h1 class="text-3xl sm:text-6xl fadeOutIntoBottom ">${title}</h1> ${renderComponent($$result, "BannerTitleSeparator", $$BannerTitleSeparator, { "customStyle": "w-[95px] h-[44px] fadeOutIntoBottom mx-auto" })} </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/banner-title-section.astro", void 0);

const $$Astro = createAstro("https://mordecai-law.com/");
const $$FaqComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FaqComponent;
  const {
    FAQ
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="faq-section"> <div class="container w-container"> <div class="faq-content-wrap"> <div class="section-title"> <h2 class="section-title-text dark-color-title">Frequently Asked Questions</h2> ${renderComponent($$result, "BannerTitleSeparator", $$BannerTitleSeparator, { "customStyle": "mx-auto" })} </div> <div class="faq-content-area"> <div class="w-layout-grid faq-grid"> ${FAQ && FAQ.length > 0 && FAQ.map(
    (faq, index) => renderTemplate`<div class="faq-item"> <h3 class="faq-title">${faq.title}</h3> <p class="faq-content">${faq.content}</p> </div>`
  )} </div> </div> </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/faqComponent.astro", void 0);

const General_FAQ = [
  {
    title: "What types of cases does your law firm handle?",
    content:
      "At Attorney Law Firm we handle claims at all levels of litigation. Our areas of practice include Business Law, Employment and Labor Law, Intellectual Property/Technology Transactions, and Litigation  another attorney may perform certain duties within the case itself.",
  },
  {
    title: "How will I know which attorney in the group is best for me?",
    content:
      "Our leadership team at the Thurman Law firm will determine which attorney can best represent you in handling your case. It may not be possible, or advantageous, to have one attorney handle all of your legal matters of the case, but from time to time.",
  },
  {
    title: "How can I avoid being sued if a claim is made against me?",
    content:
      "No one can stop a lawsuit from being filed. However, if there is a legitimate dispute that arises and a claim made against you, consult a lawyer behind-the-scenes work is being completed so that on the day your matter is ready, nothing will be overlooked.",
  },
  {
    title: "What is the difference between divorce and legal separation?",
    content:
      "In addition to ending your marriage, a divorce addresses all issues within the marriage, including property, finances, and child-related issues. This is the most common way to deal with marital issues, as Florida does not recognize legal separation.",
  },
  {
    title: "Why should I have a lawyer representing me during divorce?",
    content:
      "While many individuals proceed through the divorce process, having the help of an attorney with family law experience can go a long way toward protecting your interests. Florida’s family laws have developed over many decades and are complicated.",
  },
  {
    title: "Do I need an attorney to start a business?",
    content:
      "There are certain matters that are fairly straightforward or not unduly difficult to learn and, therefore, do not require the services of an attorney, like writing a business plan, researching and picking a name for your business or reserving a domain.",
  },
];

const $$PhoneIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="header-contact-item contact-info-item"> <div class="header-contact-icon-wrap header-link-wrap"> <img src="/assets/icons/header-call-icon.svg" loading="lazy" alt="Phone Icon"> </div> <div class="header-contact-link-wrap"> <p class="header-contact-title">Call Us On:</p> <a${addAttribute(`tel:${BusinessInfo.phone}`, "href")} class="">${formatPhone(BusinessInfo.phone)}</a> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/graphics/phone-icon.astro", void 0);

const $$EmailIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="header-contact-item contact-info-item"> <div class="header-contact-icon-wrap header-link-wrap"> <img src="/assets/icons/header-mail-icon.svg" loading="lazy" alt="Email Icon"> </div> <div class="header-contact-link-wrap"> <p class="header-contact-title">Email Us On:</p> <a${addAttribute(`mailto:${BusinessInfo.email}`, "href")} class="">${BusinessInfo.email}</a> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/graphics/email-icon.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Contact Me", "customDescription": "Lawyer site" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BannerTitleSection", $$BannerTitleSection, { "title": "Contact Me" })} ${maybeRenderHead()}<div class="contact-form-section"> <div class="container w-container"> <div class="contact-info-wrap"> <div class="grid md:grid-cols-2 md:gap-x-10 w-full"> <div class="md:border-r-[1px] md:border-r-[rgba(255,255,255,0.3)] md:text-right md:pr-10"> <h3 class="contact-info-title">${BusinessInfo.city}</h3> <p class="info-office-address">${BusinessInfo.street},<br> ${BusinessInfo.city}, ${BusinessInfo.state} ${BusinessInfo.zip}</p> </div> <div class="mt-10 md:mt-0"> <div class="flex flex-row gap-5"> <div class="flex border-2 border-solid border-primaryC rounded-full justify-center align-center w-[62px] h-[62px] min-w-[62px] p-4 sm:p-5"> <img src="/assets/icons/header-mail-icon.svg" loading="lazy" alt="Email Icon" class=""> </div> <a${addAttribute(`mailto:${BusinessInfo.email}`, "href")} class="contact-intro-link my-auto">${BusinessInfo.email}</a> </div> <div class="flex flex-row gap-5 my-5"> <div class="flex border-2 border-solid border-primaryC rounded-full justify-center align-center w-[62px] h-[62px] min-w-[62px] p-4 sm:p-5"> <img src="/assets/icons/header-call-icon.svg" loading="lazy" alt="Phone Icon" class=""> </div> <a${addAttribute(`tel:${BusinessInfo.phone}`, "href")} class="contact-intro-link">${formatPhone(BusinessInfo.phone)}</a> </div> </div> </div> </div> <div class="contact-form-wrap"> <div class="contact-form-item"> <div class="w-form"> <h2 class="text-primaryC text-3xl sm:text-4xl">Send me a message</h2> ${renderComponent($$result2, "ContactForm", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/contact-form.tsx", "client:component-export": "default" })} <div class="success-message w-form-done"> <div>Thank you! Your submission has been received!</div> </div> <div class="error-message w-form-fail"> <div>Oops! Something went wrong while submitting the form.</div> </div> </div> </div> </div> <div class="contact-links-wrap"> <div class="w-layout-grid contact-links-grid"> <div class="hidden contact-link-infos"> ${renderComponent($$result2, "PhoneIcon", $$PhoneIcon, {})} ${renderComponent($$result2, "EmailIcon", $$EmailIcon, {})} </div> <div class="contact-link-info"></div> </div> </div> </div> </div> ${renderComponent($$result2, "FAQComponent", $$FaqComponent, { "FAQ": General_FAQ })} ` })}`;
}, "D:/Astro/eli-mordecai/src/pages/contact.astro", void 0);

const $$file = "D:/Astro/eli-mordecai/src/pages/contact.astro";
const $$url = "/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BannerTitleSection as $, contact as c };
