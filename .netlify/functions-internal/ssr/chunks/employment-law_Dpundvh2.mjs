/* empty css                         */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_BWzPTXNg.mjs';
import 'kleur/colors';
import { $ as $$PracticeAreaLayout } from './PracticeAreaLayout_C8npzcRK.mjs';
import { $ as $$ListComponent } from './listComponent_H0lnnqWt.mjs';
import { $ as $$ResponsiveImage } from './ResponsiveImage_BzMXR-ER.mjs';

const $$EmploymentLaw = createComponent(($$result, $$props, $$slots) => {
  const scenarios = [
    {
      "label": "Discrimination",
      "description": "If an employee believes they have been discriminated against based on protected characteristics such as race, gender, age, disability, religion, or sexual orientation, it may be a legal case. Discrimination can manifest in hiring, promotions, job assignments, or termination decisions."
    },
    {
      "label": "Harassment",
      "description": "Workplace harassment, including sexual harassment, creates a hostile work environment and violates employees' rights. Employees experiencing harassment should document incidents and seek legal advice to determine if legal action is necessary."
    },
    {
      "label": "Wrongful Termination",
      "description": "If an employee is fired unlawfully, such as for discriminatory reasons, whistleblowing, or exercising legal rights (such as taking medical leave), it can be a legal case for wrongful termination."
    },
    {
      "label": "Wage and Hour Violations",
      "description": "Employers must comply with wage and hour laws regarding minimum wage, overtime pay, meal breaks, and rest periods. Employees who are not paid fairly or denied proper breaks may have a legal case for wage and hour violations."
    },
    {
      "label": "Retaliation",
      "description": "Employers cannot retaliate against employees for reporting illegal activities, participating in investigations, or exercising their legal rights. Retaliation cases can arise if an employee faces adverse actions after engaging in protected activities."
    },
    {
      "label": "Breach of Contract",
      "description": "Disputes over employment contracts, non-compete agreements, severance packages, or other contractual terms can lead to legal cases if one party breaches the contract terms."
    },
    {
      "label": "Family and Medical Leave Act (FMLA) Violations",
      "description": "Employers must provide eligible employees with leave under FMLA for qualified medical or family reasons. Violations of FMLA rights can result in legal action."
    },
    {
      "label": "Unsafe Working Conditions",
      "description": "If an employer fails to provide a safe work environment, leading to injuries or health hazards for employees, it may be a legal case under occupational safety and health laws."
    },
    {
      "label": "Employee Benefits Disputes",
      "description": "Issues related to health insurance, retirement plans, stock options, or other employee benefits can lead to legal cases if employees' rights are violated."
    },
    {
      "label": "Whistleblower Protections",
      "description": "Employees who report illegal activities, fraud, or safety violations within the company are protected by whistleblower laws. Any retaliation against whistleblowers can result in legal action."
    }
  ];
  const reasons = [
    {
      "label": "",
      "description": "Personalized Approach: Every case is unique. I have a flexible approach that a big law firm can\u2019t provide. I provide personalized attention and tailored legal strategies to meet your specific needs and goals."
    },
    {
      "label": "",
      "description": "Access to Extensive of Top Network: I bring together a network of top lawyers in every field of practice, each with decades of experience. We collaborate closely on every case, leveraging our collective expertise to deliver the best possible results for each client. With our combined knowledge and dedication, you can trust us to provide unmatched legal representation and strategic solutions tailored to your needs."
    },
    {
      "label": "",
      "description": "Client Satisfaction: Your satisfaction is my top priority. I am dedicated to achieving the best possible results for you."
    }
  ];
  return renderTemplate`${renderComponent($$result, "PracticeAreaLayout", $$PracticeAreaLayout, { "keyword": "Employment Attorney in Los Angeles", "title": "Employment Law", "customDescription": "If you are facing discrimination, harassment, or wage issues at a workplace, it is essential to see the expertise of an employment attorney in Los Angeles.", "CTAHeader": "Take the first step towards resolving your employment issues.", "CTAleftContent": "Don\u2019t go at it alone and get professional legal consultation. Let's discuss. " }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col lg:flex-row-reverse flex-nowrap gap-10 mb-10 justify-center"> ${renderComponent($$result2, "ResponsiveImage", $$ResponsiveImage, { "defaultImg": "/assets/images/employment-law.webp", "phoneImg": "/assets/images/employment-law-320.webp", "mediumTabImg": "/assets/images/employment-law-600.webp", "tabletImg": "/assets/images/employment-law-1080.webp", "altText": "Employment Attorney in Los Angeles" })} <h1 class="text-4xl md:text-5xl my-auto">Protect Your Rights: Your trusted <span class="text-primaryC capitalize">employment attorney</span></h1> </div> <h2 class="text-4xl md:text-5xl my-5">Identifying Legal Cases for Employment Issues: When Legal Action Is Necessary</h2><br> <p>Employment issues can arise in various situations, and some instances may warrant legal action to protect employees' rights and interests. Here are common scenarios that can be identified as legal cases for employment issues:</p> ${renderComponent($$result2, "ListComponent", $$ListComponent, { "ordered": true, "list": scenarios, "wrapperStyle": "mb-10" })} <p>Do you identify with any of these situations? As a licensed employment attorney in Los Angeles, I will help you navigate through the complexities of employment to achieve the best results for you. </p> <h3 class="text-4xl md:text-5xl my-5">Why trust your case with me?</h3> ${renderComponent($$result2, "ListComponent", $$ListComponent, { "ordered": false, "list": reasons })} ` })}`;
}, "D:/Astro/eli-mordecai/src/pages/practice-areas/employment-law.astro", void 0);

const $$file = "D:/Astro/eli-mordecai/src/pages/practice-areas/employment-law.astro";
const $$url = "/practice-areas/employment-law";

export { $$EmploymentLaw as default, $$file as file, $$url as url };
