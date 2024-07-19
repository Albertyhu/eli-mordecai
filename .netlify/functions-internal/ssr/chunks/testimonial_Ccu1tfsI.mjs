/* empty css                         */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from './astro/server_BWzPTXNg.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_euznmiol.mjs';
import { $ as $$Index } from './index_Z6KWOvVW.mjs';
import 'clsx';
import { $ as $$BannerTitleSeparator } from './banner-title-separator_BZATBMIA.mjs';
import { f as formatPhone, B as BusinessInfo } from './Eli_Mordecai-Logo-216_u2v_MXNV.mjs';

const sample_testimonials = [
  {
    name: "Hannah Butler",
    jobTitle: "Business Sector",
    body: "Could you please thank Paul personally for me, the stars are for his forehead. The perfect way of handling the case based on the situation.",
    profilePicture:
      "https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fbae57a630f96868007bab_testimonial-client-1.jpg",
  },
  {
    name: "Natasha",
    jobTitle: "Private Employee",
    body: "Attorney law firm really helped me with all my family law and custody issues at the right time. Words are not enough to thank the firm.",
    profilePicture:
      "https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fbae58110fea6eec9b9360_testimonial-client-2.jpg",
  },
  {
    name: "Pamela Carlson",
    jobTitle: "Search Optimizer",
    body: "Thank you for the way in which your team handling the matter on a perfect way. The perfect way of handling the case based on the situation.",
    profilePicture:
      "https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fbae57fbc188cbc7aa2c5a_testimonial-client-3.jpg",
  },
  {
    name: "Douglas Rose",
    jobTitle: "Creative Manager",
    body: "Best Lawyers is a valuable resource for insurance claims people in attorney law firm. They really helped me with all my family law and custody issues.",
    profilePicture:
      "https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fbae57581866f3124d2296_testimonial-client-4.jpg",
  },
  {
    name: "Phillip Arnold",
    jobTitle: "Bus Driver",
    body: "Thank you for the way in which your team handling the matter on a perfect way. They give me a big relief in this case with more confident.",
    profilePicture:
      "https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fbae58cf57ba7db91bd04e_testimonial-client-6.jpg",
  },
  {
    name: "Joshua Warren",
    jobTitle: "Private Engineer",
    body: "I frequently check the Best Lawyers list to select an attorney in areas too familiar with at the end they came and lead to achieve the justice.",
    profilePicture:
      "https://assets-global.website-files.com/61fa5f4b4224e925032ca047/61fbae58fbc1887850aa2c60_testimonial-client-5.jpg",
  },
];

const $$Astro$1 = createAstro("https://mordecai-law.com/");
const $$Item = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Item;
  const {
    profilePicture,
    name,
    jobTitle,
    body
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="testimonial-item"> <div class="testimonial-top-wrap"> <div class="testimonial-client-wrap"> <div class="testimonial-client-image-wrap"> <img${addAttribute(profilePicture ? profilePicture : "/assets/icons/quote.svg", "src")} loading="lazy" decoding="async" alt="Testimonial Client" class="testimonial-client-image"></div> <div class="testimonial-client-name-wrap"> ${name && renderTemplate`<h3 class="client-name">${name}</h3>`} ${jobTitle && renderTemplate`<p class="client-job">${jobTitle}</p>`} </div> </div> <div class="testimonial-quote-wrap"> <div class="quote-icon-wrap"> <img src="/assets/icons/quote.svg" loading="lazy" alt="Testimonial Quote"></div> </div> </div> <div class="testimonial-content-wrap"> <p>${body}</p> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/testimonialComponent/item.astro", void 0);

const $$Astro = createAstro("https://mordecai-law.com/");
const $$Version1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Version1;
  const {
    title,
    leftContent = "We're always available for new cases big or small. Send us an email and we'll get in touch shortly, or phone between 8:00 am and 7:00 pm Monday to Saturday."
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="consultation-section"> <div class="max-w-[100%] px-[30px] min-[480px]:px-[40px] min-[1280px]:max-w-[100%] min-[1280px]:px-[40px] min-[1440px]:max-w-[1440px] min-[1440px]:px-[20px] min-[1920px]:px-0 container mx-auto before:content-[' '] after:content-[' '] before:grid-area-[1/1/2/2] after:grid-area-[1/1/2/2] before:table after:table after:clear-both w-container"> <div class="consultation-wrap"> <div class="w-layout-grid consultation-grid"> <div class="consultation-intro-wrap"> <div class="mb-[20px] min-[768]: mb-[30px]"> ${title ? renderTemplate`<h2 class="section-left-title-text">${title}</h2>` : renderTemplate`<h2 class="section-left-title-text">Our professional Expert law team is always ready to serve you </h2>`} <img src="/assets/icons/small-separator-gold.svg" loading="lazy" alt="Call For Consultation"> <p class="section-left-content">${leftContent}<br></p> </div> <div class="consultation-button-wrap"> <a href="/contact" class="button w-button">Contact Us</a> </div> </div> <div class="consultation-detail-wrap"> <div class="consultation-detail-area"> <div class="consultation-content-area"> <h3 class="consultation-heading">Get a Free Consultation</h3> <p class="consultation-content">You can get free consultation and case evaluation from us via the following contact number</p> <div class="consultation-call-wrap"> <div class="consultation-call-icon-wrap"> <img src="/assets/icons/consultation-call-icon.svg" alt="phone icon" loading="lazy" decoding="async"> </div> <div class="cosultation-call-link-wrap"> <p class="consultation-call-title">Call Us On:</p> <a${addAttribute(`tel:${BusinessInfo.phone}`, "href")} class="consultation-phone-number">${formatPhone(BusinessInfo.phone)}</a> </div> </div> </div> </div> </div> </div> </div> </div> </div> <div class="appointment-section"> <div class="max-w-[100%] px-[30px] min-[480px]:px-[40px] min-[1280px]:max-w-[100%] min-[1280px]:px-[40px] min-[1440px]:max-w-[1440px] min-[1440px]:px-[20px] min-[1920px]:px-0 container mx-auto before:content-[' '] after:content-[' '] before:grid-area-[1/1/2/2] after:grid-area-[1/1/2/2] before:table after:table after:clear-both w-container"> <div class="appointment-form-wrap"> <div class="w-form"> <form id="email-form" name="email-form" data-name="Email Form" method="get" class="appointment-form" data-wf-page-id="61fcc5ec0803af737de5f139" data-wf-element-id="0c9f643d-56bb-a80e-7fd6-1464eea22925"> <div class="appointment-input-form"> <div class="input-wrap half-width"><input class="input-field w-input" maxlength="256" name="name" data-name="Name" placeholder="Full Name*" type="text" id="name"></div> <div class="input-wrap half-width"><input class="input-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email Address*" type="email" id="email" required=""></div> </div> <div class="appointment-input-form"> <div class="input-wrap half-width"><input class="input-field w-input" maxlength="256" name="Phone-Number" data-name="Phone Number" placeholder="Phone Number" type="text" id="Phone-Number"></div> <div class="input-wrap half-width"><input class="input-field w-input" maxlength="256" name="Subject" data-name="Subject" placeholder="Subject" type="text" id="Subject"></div> </div> <div class="input-wrap"><input class="input-field text-area w-input" maxlength="256" name="Your-Message" data-name="Your Message" placeholder="Your Message" type="text" id="Your-Message"></div> <div class="appointment-button-wrap"><input type="submit" data-wait="Please wait..." class="button-white w-button" value="Get An Appointment"></div> </form> <div class="success-message w-form-done"> <div>Thank you! Your submission has been received!</div> </div> <div class="error-message w-form-fail"> <div>Oops! Something went wrong while submitting the form.</div> </div> </div> </div> </div> </div>`;
}, "D:/Astro/eli-mordecai/src/components/call-to-action/version1.astro", void 0);

const prerender = true;
const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Testimonials", "customDescription": "Hear what our clients say about our business." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="banner-title-area"> <div class="banner-title-overlay"></div> ${renderComponent($$result2, "NavBar", $$Index, {})} <div class="max-w-[100%] px-[30px] min-[480px]:px-[40px] min-[1280px]:max-w-[100%] min-[1280px]:px-[40px] min-[1440px]:max-w-[1440px] min-[1440px]:px-[20px] min-[1920px]:px-0 container mx-auto before:content-[' '] after:content-[' '] before:grid-area-[1/1/2/2] after:grid-area-[1/1/2/2] before:table after:table after:clear-both w-container"> <div class="banner-title-wrap"> <h1 class="banner-area-title">Testimonial</h1> ${renderComponent($$result2, "BannerTitleSeparator", $$BannerTitleSeparator, { "customStyle": "mx-auto" })} </div> </div> </div> <div class="testimonial-section"> <div class="max-w-[100%] px-[30px] min-[480px]:px-[40px] min-[1280px]:max-w-[100%] min-[1280px]:px-[40px] min-[1440px]:max-w-[1440px] min-[1440px]:px-[20px] min-[1920px]:px-0 container mx-auto before:content-[' '] after:content-[' '] before:grid-area-[1/1/2/2] after:grid-area-[1/1/2/2] before:table after:table after:clear-both w-container"> <div class="testimonial-wrap"> <div class="w-layout-grid testimonial-grid"> ${sample_testimonials && sample_testimonials.length > 0 && sample_testimonials.map((item) => renderTemplate`${renderComponent($$result2, "TestimonialItem", $$Item, { ...item })}`)} </div> </div> </div> </div> ${renderComponent($$result2, "ConsultationSection", $$Version1, {})} ` })}`;
}, "D:/Astro/eli-mordecai/src/pages/testimonial.astro", void 0);

const $$file = "D:/Astro/eli-mordecai/src/pages/testimonial.astro";
const $$url = "/testimonial";

export { $$Testimonial as default, $$file as file, prerender, $$url as url };
