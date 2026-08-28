import { privateClientsMenu } from "./privateClientServices";
import { commercialMenu } from "./commercialServices";
import { reinsuranceMenu } from "./reinsuranceServices";

export const serviceSections = [
  {
    label: "Private Clients",
    value: "private-clients",
    categories: privateClientsMenu,
  },
  {
    label: "Commercial",
    value: "commercial",
    categories: commercialMenu,
  },
  {
    label: "Reinsurance",
    value: "reinsurance",
    categories: reinsuranceMenu,
  },
];