const BusinessLawIcon = new Proxy({"src":"/_astro/business-law.D7dHx1Yo.svg","width":55,"height":51,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/eli-mordecai/src/assets/icons/practice-areas/business-law.svg";
							}
							
							return target[name];
						}
					});

const TenantLawIcon = new Proxy({"src":"/_astro/tenant.2VmqzHI2.png","width":128,"height":128,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/eli-mordecai/src/assets/icons/practice-areas/tenant.png";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/employment.YvhBn8Nj.png","width":128,"height":128,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/eli-mordecai/src/assets/icons/practice-areas/employment.png";
							}
							
							return target[name];
						}
					});

const CriminalLawIcon = new Proxy({"src":"/_astro/criminal-law.BB4ckVQZ.svg","width":53,"height":56,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/eli-mordecai/src/assets/icons/practice-areas/criminal-law.svg";
							}
							
							return target[name];
						}
					});

const PersonalInjuryIcon = new Proxy({"src":"/_astro/injury.B_Im4Ion.png","width":128,"height":128,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/eli-mordecai/src/assets/icons/practice-areas/injury.png";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/_astro/estate-planning.7sP1QNSy.png","width":128,"height":128,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Astro/eli-mordecai/src/assets/icons/practice-areas/estate-planning.png";
							}
							
							return target[name];
						}
					});

const PracticeAreas = [
  // {
  //   type: "Employment Law",
  //   description:
  //     "From workplace discrimination and wrongful termination to wage disputes and employment contracts, I provide strategic guidance and advocacy for employees and employers alike.",
  //   icon: EmploymentLawIcon,
  //   hasPage: true,
  // },
  {
    type: "Personal Injury Law",
    description:
      "If you've been injured due to someone else's negligence, I am dedicated to advocating for your rights and ensuring you receive the compensation you deserve for your injuries and losses.",
    icon: PersonalInjuryIcon,
    hasPage: true,
  },
  {
    type: "Landlord-Tenant Law",
    description:
      "Whether you're a landlord dealing with a dispute with a tenant or a tenant facing eviction or lease issues, I offer legal representation to protect your rights and interests.",
    icon: TenantLawIcon,
    hasPage: true,
  },
  {
    type: "Transactional Law",
    description:
      "From business contracts and negotiations to mergers and acquisitions, my transactional law expertise ensures smooth and legally sound transactions for businesses and individuals.",
    icon: BusinessLawIcon,
    hasPage: true,
  },
  {
    type: "Criminal Defense Law",
    description:
      "If you're facing criminal charges, I will vigorously defend your rights and work towards achieving the best possible results for your case.",
    icon: CriminalLawIcon,
    hasPage: true,
  },
];

export { PracticeAreas as P };
