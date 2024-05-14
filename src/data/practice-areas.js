import BusinessLawIcon from "@/assets/icons/practice-areas/business-law.svg";
import TenantLawIcon from "@/assets/icons/practice-areas/tenant.png";
import EmploymentLawIcon from "@/assets/icons/practice-areas/employment.png";
import CriminalLawIcon from "@/assets/icons/practice-areas/criminal-law.svg";
import PersonalInjuryIcon from "@/assets/icons/practice-areas/injury.png";

const PracticeAreas = [
  {
    type: "Employment Law",
    description:
      "From workplace discrimination and wrongful termination to wage disputes and employment contracts, I provide strategic guidance and advocacy for employees and employers alike.",
    icon: EmploymentLawIcon,
  },
  {
    type: "Personal Injury Law",
    description:
      "If you've been injured due to someone else's negligence, I will fight for your rights and pursue fair compensation for your injuries and losses.",
    icon: PersonalInjuryIcon,
  },
  {
    type: "Landlord Tenant Law",
    description:
      "Whether you're a landlord dealing with tenant disputes or a tenant facing eviction or lease issues, I offer knowledgeable legal advice and representation to protect your rights and interests.",
    icon: TenantLawIcon,
  },
  {
    type: "Transactional Law",
    description:
      "From business contracts and negotiations to mergers and acquisitions, my transactional law expertise ensures smooth and legally sound transactions for businesses and individuals.",
    icon: BusinessLawIcon,
  },
  {
    type: "Criminal Defense Law",
    description:
      "If you're facing criminal charges, I will vigorously defend your rights and work towards achieving the best possible results for your case.",
    icon: CriminalLawIcon,
  },
];

export default PracticeAreas;
