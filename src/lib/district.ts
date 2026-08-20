export const DISTRICT_NAME =
  "Border & Eastern Cape District";
export const CHURCH_NAME =
  "Wesleyan Church South African National Conference";
export const DISTRICT_SEAT = "Mthatha, Eastern Cape";
export const DISTRICT_BISHOP = "The District Bishop";

export type Circuit = {
  slug: string;
  number: string;
  name: string;
  seat: string;
  minister: string;
  intro: string;
  focus: string;
};

export const circuits: Circuit[] = [
  {
    slug: "mthatha-central",
    number: "501",
    name: "Mthatha Central",
    seat: "Mthatha",
    minister: "Circuit Superintendent (to be confirmed)",
    intro:
      "Circuit 501 sits at the administrative heart of the district. Seated in Mthatha, its congregations carry the older preaching traditions of the region and anchor much of the district's lay-delegate strength at conference.",
    focus: "Town-centre worship, township outreach, lay leader formation.",
  },
  {
    slug: "ngangelizwe",
    number: "502",
    name: "Ngangelizwe",
    seat: "Ngangelizwe, Mthatha",
    minister: "Circuit Minister (to be confirmed)",
    intro:
      "Circuit 502 serves the dense residential communities south of Mthatha, with a strong emphasis on youth work and household discipleship.",
    focus: "Youth ministry, household visitation, midweek class meetings.",
  },
  {
    slug: "butterworth",
    number: "503",
    name: "Butterworth",
    seat: "Butterworth (Gcuwa)",
    minister: "Circuit Superintendent (to be confirmed)",
    intro:
      "Circuit 503 gathers Societies across the Gcuwa valley, holding together town congregations and a wide spread of rural preaching places.",
    focus: "Rural preaching places, catechism, circuit-wide revival services.",
  },
  {
    slug: "king-williams-town",
    number: "504",
    name: "King William's Town",
    seat: "Qonce (King William's Town)",
    minister: "Circuit Minister (to be confirmed)",
    intro:
      "Circuit 504 carries the historic Border witness of the district, with congregations rooted in the mission history of the Buffalo basin.",
    focus: "Border heritage congregations, mission history, pastoral training.",
  },
  {
    slug: "east-london",
    number: "505",
    name: "East London",
    seat: "East London (Monti)",
    minister: "Circuit Superintendent (to be confirmed)",
    intro:
      "Circuit 505 is the district's coastal-urban charge, serving city congregations and the surrounding townships with a settled weekly rhythm of worship.",
    focus: "Urban worship, workplace witness, student and young-adult fellowship.",
  },
  {
    slug: "queenstown",
    number: "506",
    name: "Queenstown",
    seat: "Komani (Queenstown)",
    minister: "Circuit Minister (to be confirmed)",
    intro:
      "Circuit 506 reaches the inland plateau of the district, where Societies are widely spaced and lay leadership carries much of the weekly preaching.",
    focus: "Lay preacher formation, itinerant ministry, holiness conventions.",
  },
  {
    slug: "mount-frere",
    number: "507",
    name: "Mount Frere",
    seat: "KwaBhaca (Mount Frere)",
    minister: "Circuit Superintendent (to be confirmed)",
    intro:
      "Circuit 507 serves the highland communities of the district's interior, with congregations gathered around long-standing rural Societies.",
    focus: "Rural discipleship, agricultural community care, Sunday schools.",
  },
  {
    slug: "lusikisiki",
    number: "508",
    name: "Lusikisiki",
    seat: "Lusikisiki",
    minister: "Circuit Minister (to be confirmed)",
    intro:
      "Circuit 508 is the district's Wild Coast charge, holding a network of coastal and inland Societies under one pastoral oversight.",
    focus: "Coastal outreach, evangelism campaigns, women's and men's fellowships.",
  },
];

export const tiers = [
  {
    tier: "Tier I · Local",
    name: "Society",
    body: "The Society is the local congregation — the fundamental unit of ministry, focused on worship, discipleship, and evangelism.",
  },
  {
    tier: "Tier II · Circuit",
    name: "Circuit",
    body: "A grouping of Societies under one pastoral charge, led by a Circuit Superintendent, Circuit Minister, and Circuit Management Team.",
  },
  {
    tier: "Tier III · Regional",
    name: "District",
    body: "A geographic network of Circuits — here the Border & Eastern Cape District, seated in Mthatha — led by the District Bishop, supported by the District Management Team and gathered in a District Synod.",
  },
  {
    tier: "Tier IV · National",
    name: "Conference",
    body: "The supreme governing and lawmaking body of the denomination, presided over by the Presiding Bishop.",
  },
];
