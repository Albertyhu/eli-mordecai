/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, f as createAstro, d as addAttribute } from '../astro_7lB2f1hd.mjs';
import 'kleur/colors';
import { f as formatPhone, B as BusinessInfo, a as $$Index, b as $$BaseLayout } from './How to Tell Who Is at Fault in a Car Accident_BYeqSR5U.mjs';
import { $ as $$BannerTitleSeparator } from './_page__DwRUCVIt.mjs';
import 'clsx';

const $$Astro = createAstro();
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

const $$ContactUs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Contact Us", "customDescription": "Lawyer site" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="banner-title-area"> <div class="banner-title-overlay"></div> ${renderComponent($$result2, "NavBar", $$Index, {})} <div class="container w-container"> <div class="banner-title-wrap childrenFadeInFromBottomTag"> <h1 class="banner-area-title fadeOutIntoBottom">Contact Us</h1> ${renderComponent($$result2, "BannerTitleSeparator", $$BannerTitleSeparator, { "customStyle": "mx-auto fadeOutIntoBottom" })} </div> </div> </div> <div class="contact-form-section"> <div class="container w-container"> <div class="contact-info-wrap"> <div class="w-layout-grid contact-info-grid"> <div class="info-intro-item"> <h3 class="contact-info-title">Say Hello To Attorney law</h3> <p>If you have any questions about the services we simply use the form below. We try and its respond to all queries and comments within 24 hours.<br></p> </div> <div class="info-intro-item"> <h3 class="contact-info-title">Las Vegas</h3> <p class="info-office-address">124 New Street, Las Vegas, USA.</p> <a href="mailto:contact@attoorneylaw.com" class="contact-intro-link">contact@attoorneylaw.com</a><a href="tel:+012365478910" class="contact-intro-link">+0 123 654 78910</a> </div> <div class="info-intro-item last-info-item"> <h3 class="contact-info-title">New York</h3> <p class="info-office-address">Main Office, Law Street Av,</p> <a href="mailto:contact@attoorneylaw.com" class="contact-intro-link">contact@attoorneylaw.com</a><a href="tel:+012365478910" class="contact-intro-link">+0 123 654 78910</a> </div> </div> </div> <div class="contact-form-wrap"> <div class="contact-form-item"> <div class="w-form"> <form id="email-form" name="email-form" data-name="Email Form" method="get" class="contact-form" data-wf-page-id="663690b06ff2152d9a1b9e1c" data-wf-element-id="578df7e1-f4ff-e7a7-6436-8847b1666e0e"> <div class="contact-input-fields"> <div class="contact-form-left-wrap"> <div class="input-wrap"><input class="input-field contact-form-input w-input" maxlength="256" name="email" data-name="Email" placeholder="Your Mail Here" type="email" id="email" required=""></div> <div class="input-wrap"><input class="input-field contact-form-input w-input" maxlength="256" name="name" data-name="Name" placeholder="Your Name Here" type="text" id="name" required=""></div> </div> <div class="contact-form-right-wrap"> <div class="input-wrap"><input class="input-field contact-form-input w-input" maxlength="256" name="Subject" data-name="Subject" placeholder="What Service You Want" type="text" id="Subject"></div> <div class="input-wrap"><input class="input-field contact-form-input w-input" maxlength="256" name="Phone-Number" data-name="Phone Number" placeholder="Your Phone Number" type="text" id="Phone-Number"></div> </div> </div> <div class="input-wrap"><input class="input-field text-area w-input" maxlength="256" name="Your-Message" data-name="Your Message" placeholder="Your Message" type="text" id="Your-Message"></div> <div class="contact-form-button"><input type="submit" data-wait="Please wait..." class="button-large w-button" value="Send Message"></div> </form> <div class="success-message w-form-done"> <div>Thank you! Your submission has been received!</div> </div> <div class="error-message w-form-fail"> <div>Oops! Something went wrong while submitting the form.</div> </div> </div> </div> </div> <div class="contact-links-wrap"> <div class="w-layout-grid contact-links-grid"> <div class="contact-link-infos"> <div class="contact-link-info"> <!-- <div class="header-contact-item contact-info-item">
                           <div class="header-contact-icon-wrap header-link-wrap">
                              <img src="https://assets-global.website-files.com/663690af6ff2152d9a1b9618/663690b06ff2152d9a1b9e42_header-call-icon.svg" loading="lazy" alt="Header Contact Icon"/>
                           </div>
                           <div class="header-contact-link-wrap">
                              <p class="header-contact-title">Call Us On:</p>
                              <a href={\`tel:\${BusinessInfo.phone}\`} class="header-contact-link">{formatPhone(BusinessInfo.phone)}</a>
                           </div>
                        </div> --> ${renderComponent($$result2, "PhoneIcon", $$PhoneIcon, {})} </div> <div class="contact-link-info"> <!-- <div class="header-contact-item contact-info-item">
                           <div class="header-contact-icon-wrap header-link-wrap">
                              <img src="https://assets-global.website-files.com/663690af6ff2152d9a1b9618/663690b06ff2152d9a1b9e41_header-mail-icon.svg" loading="lazy" alt="Header Contact Icon"/>
                           </div>
                           <div class="header-contact-link-wrap">
                              <p class="header-contact-title">Email Us On:</p>
                              <a href={\`mailto:\${BusinessInfo.email}\`}class="header-contact-link">{BusinessInfo.email}</a>
                           </div>
                        </div> --> ${renderComponent($$result2, "EmailIcon", $$EmailIcon, {})} </div> </div> <div id="w-node-_66a806ef-97b1-b9d7-c04b-0e3d21e2bd07-9a1b9e1c" class="contact-address-info"> <div class="header-contact-item"> <div class="header-contact-icon-wrap header-link-wrap"> <img src="/assets/icons/header-mail-icon.svg" loading="lazy" alt="Header Contact Icon"> </div> <div class="header-contact-link-wrap"> <p class="header-contact-title">Main Office :</p> <p class="contact-info-address">124, New Street, Las Vegas 90027, USA.</p> </div> </div> </div> </div> </div> </div> </div> ${renderComponent($$result2, "FAQComponent", $$FaqComponent, { "FAQ": General_FAQ })} ` })}`;
}, "D:/Astro/eli-mordecai/src/pages/contact-us.astro", void 0);

const $$file = "D:/Astro/eli-mordecai/src/pages/contact-us.astro";
const $$url = "/contact-us";

export { $$ContactUs as default, $$file as file, $$url as url };
