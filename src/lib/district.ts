export const DISTRICT_NAME =
  "Border & Eastern Cape District";
export const CHURCH_NAME =
  "Wesleyan Church South African National Conference";
export const DISTRICT_SEAT = "Mthatha, Eastern Cape";
export const DISTRICT_BISHOP = "The District Bishop";

export type Person = {
  name: string;
  phone?: string;
};

export type Society = {
  name: string;
  steward?: Person;
};

export type Circuit = {
  slug: string;
  index: number;
  number?: string;
  name: string;
  address?: string;
  ministers: Person[];
  stewards: Person[];
  societies: Society[];
};

export const circuits: Circuit[] = [
  {
    slug: "mthatha-central",
    index: 1,
    number: "0101",
    name: "Mthatha Central",
    ministers: [{ name: "Rev. C.L. Madaza", phone: "083 683 0728" }],
    stewards: [],
    societies: [],
  },
  {
    slug: "mthatha-south",
    index: 2,
    name: "Mthatha South",
    address: "Ncambele A/A",
    ministers: [
      { name: "Rev. V. Balabala", phone: "083 769 0657" },
      { name: "Rev. T. Mpengesi", phone: "083 429 6527" },
    ],
    stewards: [{ name: "Ms V. Gwama", phone: "083 304 4655" }],
    societies: [
      { name: "Bongweni", steward: { name: "Ms S. Xhelo", phone: "083 941 2422" } },
      { name: "Ncise", steward: { name: "Ms T. Manyifolo", phone: "073 403 3488" } },
      { name: "Qweqwe & Luthuthu", steward: { name: "Ms Madkane", phone: "073 362 3783" } },
    ],
  },
  {
    slug: "mthatha-west",
    index: 3,
    name: "Mthatha West",
    address: "Ncise A/A",
    ministers: [{ name: "Rev. N.A. Madaza" }],
    stewards: [],
    societies: [],
  },
  {
    slug: "mputi",
    index: 4,
    name: "Mputi",
    ministers: [{ name: "Rev. Z. Ngcayi" }],
    stewards: [],
    societies: [
      { name: "Makaula", steward: { name: "Ms Kula", phone: "060 389 4258" } },
      { name: "Jungqe", steward: { name: "Ms Mapotiyela", phone: "069 258 1832" } },
      { name: "Lwandleni", steward: { name: "Ms W. Gageni", phone: "063 593 9050" } },
      { name: "Mdeni", steward: { name: "Vacant" } },
      { name: "Mputi Phezulu", steward: { name: "Vacant" } },
    ],
  },
  {
    slug: "majola",
    index: 5,
    name: "Majola",
    ministers: [{ name: "Rev. C.L. Madaza" }, { name: "Rev. Gwazela", phone: "078 555 7529" }],
    stewards: [
      { name: "Ms Makaula", phone: "073 986 6999" },
      { name: "Ms T. Nyingwa", phone: "078 843 347" },
    ],
    societies: [],
  },
  {
    slug: "ugie",
    index: 6,
    name: "Ugie",
    ministers: [{ name: "Rev. N.A. Madaza" }],
    stewards: [{ name: "Ms N. Mose" }],
    societies: [],
  },
  {
    slug: "mqanduli",
    index: 7,
    name: "Mqanduli",
    ministers: [{ name: "Rev. C.L. Madaza" }, { name: "Rev. Fadana" }],
    stewards: [],
    societies: [],
  },
  {
    slug: "libode",
    index: 8,
    number: "0108",
    name: "Libode",
    address: "Masameni A/A, Libode 5160",
    ministers: [{ name: "Rev. C.L. Madaza" }],
    stewards: [{ name: "Ms N. Tiya", phone: "078 168 3791" }],
    societies: [],
  },
  {
    slug: "qumbu-central",
    index: 9,
    number: "0105",
    name: "Qumbu Central",
    address: "Balasi A/A, Qumbu",
    ministers: [{ name: "Rev. K. Mlandu", phone: "060 357 1857" }],
    stewards: [{ name: "Mrs N. Masiza" }],
    societies: [
      { name: "Balasi", steward: { name: "Mrs N. Gwayi", phone: "081 052 4462" } },
      { name: "Luqolweni" },
    ],
  },
  {
    slug: "tina",
    index: 10,
    name: "Tina",
    address: "Gqwesa A/A",
    ministers: [{ name: "Rev. N.P. Bulo" }],
    stewards: [{ name: "Ms N. Ntsalu", phone: "082 660 9254" }],
    societies: [
      { name: "Mjikelweni", steward: { name: "Mr S. Skele", phone: "072 813 0574" } },
    ],
  },
  {
    slug: "matatielle",
    index: 11,
    name: "Matatielle",
    ministers: [{ name: "Rev. C.L. Madaza" }, { name: "Rev. Mpela" }],
    stewards: [],
    societies: [],
  },
  {
    slug: "butterworth-1",
    index: 12,
    number: "0112",
    name: "Butterworth 1",
    address: "No. 1179 Zagwityi P.S., Butterworth",
    ministers: [
      { name: "Rev. C.L. Madaza" },
      { name: "Rev. N.L. Madaza", phone: "072 808 8998" },
    ],
    stewards: [{ name: "Ms N. Gongxeka", phone: "078 450 0865" }],
    societies: [
      { name: "Zagwityi", steward: { name: "Mr Langeni", phone: "078 545 0994" } },
    ],
  },
  {
    slug: "butterworth-2",
    index: 13,
    name: "Butterworth 2",
    address: "Thoboshane A/A, Butterworth",
    ministers: [
      { name: "Rev. Hintsho", phone: "073 835 3923" },
      { name: "Rev. N. Mayosi", phone: "072 209 0705" },
    ],
    stewards: [{ name: "Ms N. Tswela", phone: "081 369 9176" }],
    societies: [],
  },
  {
    slug: "newlands",
    index: 14,
    name: "Newlands",
    ministers: [{ name: "Rev. M. Mpingololo" }],
    stewards: [],
    societies: [],
  },
  {
    slug: "ncera",
    index: 15,
    name: "Ncera",
    address: "Ncera Village, Emaqgazeni",
    ministers: [{ name: "Rev. C.L. Madaza" }, { name: "Rev. Mati" }],
    stewards: [{ name: "Ms Fumba", phone: "078 173 0550" }],
    societies: [],
  },
  {
    slug: "rustenburg",
    index: 16,
    name: "Rustenburg",
    address: "House 7485 Extra 4, Platinum Village, Rustenburg 0300",
    ministers: [{ name: "Rev. C.L. Madaza" }, { name: "Rev. Dzingwe", phone: "083 281 8969" }],
    stewards: [{ name: "Mr Mavumbengwe", phone: "073 007 696" }],
    societies: [],
  },
  {
    slug: "tiberia",
    index: 17,
    name: "Tiberia",
    ministers: [{ name: "Rev. C.L. Madaza" }, { name: "Rev. B. Gqoboza" }],
    stewards: [],
    societies: [],
  },
  {
    slug: "burning-bush",
    index: 18,
    name: "Burning Bush",
    address: "2902 Freedom Park Phase 2, Rustenburg 0300",
    ministers: [{ name: "Rev. C.L. Madaza" }, { name: "Rev. Silimela", phone: "078 116 3366" }],
    stewards: [{ name: "Ms N. Binca", phone: "073 103 6584" }],
    societies: [],
  },
];

export const CIRCUIT_COUNT = circuits.length;

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
