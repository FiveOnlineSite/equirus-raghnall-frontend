export const commercialMenu = [
  {
    title: "Property",
    links: [
      {
        label: "Industrial All Risk (IAR)",
        slug: "industrial-all-risk-insurance",
      },
      { label: "Property All Risk (PAR)", slug: "property-all-risk-insurance" },
      { label: "Small Commercial", slug: "small-commercial-insurance" },
      { label: "Miscellaneous", slug: "miscellaneous-insurance" },
    ],
  },
  {
    title: "Engineering",
    links: [
      {
        label: "Contractors All Risk (CAR)",
        slug: "contractors-all-risk-insurance",
      },
      {
        label: "Errection All Risk (EAR)",
        slug: "erection-all-risk-insurance",
      },
      {
        label: "Contractors Plant & Machinery (CPM)",
        slug: "contractors-plant-machinery-insurance",
      },
      { label: "MBD", slug: "machinery-breakdown-insurance" },
      { label: "Electronic Equipment", slug: "electronic-equipment-insurance" },
    ],
  },
  {
    title: "Employee Benefits",
    links: [
      { label: "Group Health Insurance", slug: "group-health-insurance" },
      { label: "Group Term Life Insurance", slug: "group-term-life-insurance" },
      {
        label: "Group Personal Accident",
        slug: "group-personal-accident-insurance",
      },
      {
        label: "Group Gratuity & Superannuation",
        slug: "group-gratuity-superannuation",
      },
    ],
  },
  {
    title: "Speciality",
    links: [
      { label: "Surety Bonds", slug: "surety-bonds" },
      { label: "Trade Credit Insurance", slug: "trade-credit-insurance" },
      {
        label: "Marine Hull & Aviation",
        slug: "marine-hull-aviation-insurance",
      },
    ],
  },
  {
    title: "Liability",
    links: [
      { label: "Cyber & Crime", slug: "cyber-crime-insurance" },
      {
        label: "Commercial General Liability",
        slug: "commercial-general-liability-insurance",
      },
      {
        label: "Professional Indemnity",
        slug: "professional-indemnity-insurance",
      },
      {
        label: "Directors & Office (D & O)",
        slug: "directors-officers-liability-insurance",
      },
      { label: "Employers Liability", slug: "employers-liability-insurance" },
    ],
  },
  {
    title: "Cyber",
    links: [
      { label: "Corporate Cyber Insurance", slug: "corporate-cyber-insurance" },
      { label: "Personal Cyber Insurance", slug: "personal-cyber-insurance" },
      { label: "Group Cyber Insurance", slug: "group-cyber-insurance" },
    ],
  },
  {
    title: "Affinity & Partnership",
    links: [
      { label: "Affinity & Partnership Insurance", slug: "affinity-partnership-insurance" },
    ],
  },
];

export const commercialServices = commercialMenu.flatMap((group) =>
  group.links.map((service) => ({ ...service, category: group.title })),
);

export function getCommercialService(slug) {
  return commercialServices.find((service) => service.slug === slug);
}
