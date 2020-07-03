import sample from "lodash.sample";
import { UserData } from ".";

const first = [
  "Harry",
  "Ross",
  "Bruce",
  "Cook",
  "Carolyn",
  "Morgan",
  "Albert",
  "Walker",
  "Randy",
  "Reed",
  "Larry",
  "Barnes",
  "Lois",
  "Wilson",
  "Jesse",
  "Campbell",
  "Ernest",
  "Rogers",
  "Theresa",
  "Patterson",
  "Henry",
  "Simmons",
  "Michelle",
  "Perry",
  "Frank",
  "Butler",
  "Shirley",
];

const middle = [
  "Brooks",
  "Rachel",
  "Edwards",
  "Christopher",
  "Perez",
  "Thomas",
  "Baker",
  "Sara",
  "Moore",
  "Chris",
  "Bailey",
  "Roger",
  "Johnson",
  "Marilyn",
  "Thompson",
  "Anthony",
  "Evans",
  "Julie",
  "Hall",
  "Paula",
  "Phillips",
  "Annie",
  "Hernandez",
  "Dorothy",
  "Murphy",
  "Alice",
  "Howard",
];

const last = [
  "Ruth",
  "Jackson",
  "Debra",
  "Allen",
  "Gerald",
  "Harris",
  "Raymond",
  "Carter",
  "Jacqueline",
  "Torres",
  "Joseph",
  "Nelson",
  "Carlos",
  "Sanchez",
  "Ralph",
  "Clark",
  "Jean",
  "Alexander",
  "Stephen",
  "Roberts",
  "Eric",
  "Long",
  "Amanda",
  "Scott",
  "Teresa",
  "Diaz",
  "Wanda",
  "Thomas",
];

export const generateName = () => {
  if (Math.random() > 0.5) {
    return `${sample(first)} ${sample(last)}`;
  }
  return `${sample(first)} ${sample(middle)} ${sample(last)}`;
};

export const listOfNames: UserData[] = [
  {
    name: "Jason Storm",
    id: "7e78d55f-c30e-4b40-b9f9-a95c06d738b7",
    signUpDate: 1476619336345,
  },
  {
    name: "Lorenza Geil",
    id: "32db2a94-7a94-4b73-b62b-aeed9ff3c9e8",
    signUpDate: 1578388995552,
  },
  {
    name: "Jaquelyn Searles",
    id: "6861e474-a040-4b00-adad-b89a1835df61",
    signUpDate: 1590370989549,
  },
  {
    name: "Dewayne Cassinelli",
    id: "a09c78d9-7922-457a-8b53-28fc6708065d",
    signUpDate: 1504511368801,
  },
  {
    name: "Marybelle Mease",
    id: "ad8f549e-9a18-4cc1-8797-9398e0f0700e",
    signUpDate: 1554159537811,
  },
  {
    name: "Emerson Bryd",
    id: "12d1a641-25f2-44c7-bf0d-13c029122f40",
    signUpDate: 1592684178716,
  },
  {
    name: "Linda Raynes",
    id: "4a9280c0-c20f-440b-8923-7116f0d95c77",
    signUpDate: 1563718872757,
  },
  {
    name: "Petrina Garg",
    id: "27b81086-e0cf-43b2-ad13-c3d0581e8320",
    signUpDate: 1592855642087,
  },
  {
    name: "Lan Goodall",
    id: "2be3a322-88f9-451c-9da8-1edd7dbf21dd",
    signUpDate: 1559676153773,
  },
  {
    name: "Salvador Buckwalter",
    id: "f8cd8466-bea3-48c5-88cd-1384c1dd5789",
    signUpDate: 1470886384628,
  },
  {
    name: "Hanna Landi",
    id: "2b0f1f94-ecfd-4fd5-a904-cd15be101c5c",
    signUpDate: 1472271811602,
  },
  {
    name: "Angelia Drewes",
    id: "4da97e31-5b2b-4e5d-a739-90d3f764cfb2",
    signUpDate: 1500543025742,
  },
  {
    name: "Kylie Prow",
    id: "25deacf6-98e3-4d9c-8b58-8abd29094cea",
    signUpDate: 1589279593601,
  },
  {
    name: "Manual Wagaman",
    id: "611f685a-413c-41b1-bdc4-37c4606ff1cc",
    signUpDate: 1576333448505,
  },
  {
    name: "Valeria Manfredi",
    id: "1cf9503c-63d6-461c-b05b-b696e2095ff1",
    signUpDate: 1575303300928,
  },
  {
    name: "Elanor Kuchera",
    id: "942bfe9f-4d4f-40a2-bf3d-355568c37bff",
    signUpDate: 1589956567365,
  },
  {
    name: "Ronnie Laiche",
    id: "ff39a10f-7bfe-4b61-a416-4c356d8cd06c",
    signUpDate: 1496596370297,
  },
  {
    name: "Krystina Jamieson",
    id: "65016d53-baa8-46b0-9e92-167b831294a2",
    signUpDate: 1488504122634,
  },
  {
    name: "Gertrudis Acuna",
    id: "6c739aaf-a525-4d77-b0a9-0c83be95307c",
    signUpDate: 1474861042543,
  },
  {
    name: "Brett Kneeland",
    id: "9d3520d9-8a56-4a24-82f2-5defff9785cb",
    signUpDate: 1514243258952,
  },
  {
    name: "Glynis Mascarenas",
    id: "4f678375-ecdf-4949-b78e-a71f367228bf",
    signUpDate: 1577662076449,
  },
  {
    name: "Sari Claypoole",
    id: "23d7dc98-afe7-40cf-9ad8-608deec6f8c3",
    signUpDate: 1530235864774,
  },
  {
    name: "Rosaria Dillingham",
    id: "8795fe1d-ab65-414f-bb9c-4f6b5675f9e2",
    signUpDate: 1524425678490,
  },
  {
    name: "Serafina Sepe",
    id: "d19eaff6-56be-4728-818e-70cb85038c4e",
    signUpDate: 1569406070084,
  },
  {
    name: "Marquita Rollin",
    id: "cd6f64ed-9aed-4149-8806-94c1ce7fa64e",
    signUpDate: 1542593961204,
  },
  {
    name: "Taryn Singler",
    id: "632b7331-e4dd-4679-b09d-749614e0f7bc",
    signUpDate: 1508347990475,
  },
  {
    name: "Jacinda Mushrush",
    id: "55a48812-1f96-40c4-bb59-9cd11649a5ec",
    signUpDate: 1587880383289,
  },
  {
    name: "Rickey Fickett",
    id: "b3a89b7a-be70-4601-83ce-78e8c462cd87",
    signUpDate: 1589585213618,
  },
  {
    name: "Ruthe Holliman",
    id: "dfee1ad9-2a26-4f08-bc0f-4a70d9b4cda3",
    signUpDate: 1491203023766,
  },
  {
    name: "Nanci Guthmiller",
    id: "e2f44f29-239a-42fa-8049-55050f3cc6e4",
    signUpDate: 1561120192486,
  },
  {
    name: "Lindsay Fahnestock",
    id: "18029b79-73f6-44cd-9a7e-3df4757a6b24",
    signUpDate: 1483911831058,
  },
  {
    name: "Sommer Norcross",
    id: "ae0dd970-43d1-48b9-bd92-3a5ac4a6dcfd",
    signUpDate: 1575786367605,
  },
  {
    name: "Keeley Brinkerhoff",
    id: "9d5f5eab-4eac-47c8-9f84-8816942f660a",
    signUpDate: 1500660626029,
  },
  {
    name: "Reid Nutt",
    id: "ded66667-d878-420e-8586-cc1a7c387939",
    signUpDate: 1481736390937,
  },
  {
    name: "Toni Costantino",
    id: "1579c72c-ff6d-43e6-bc37-27e3dbb16cf6",
    signUpDate: 1482622603219,
  },
  {
    name: "Lynette Terrazas",
    id: "e8d992d0-7888-4043-9fb1-e2dec61391a2",
    signUpDate: 1561877204320,
  },
  {
    name: "Iraida Geeter",
    id: "adc86bc8-b41f-4f36-9a60-4158ba2761e4",
    signUpDate: 1498819014785,
  },
  {
    name: "Alfred Washburn",
    id: "173305e6-bdc5-40e2-8fb5-a4e2e05fdee9",
    signUpDate: 1488941031625,
  },
  {
    name: "Rachal Hutchinson",
    id: "011dae33-4f4d-41ce-8cdf-31a652154a6a",
    signUpDate: 1540413659435,
  },
  {
    name: "Jacquetta Daily",
    id: "450563ac-6ec5-4843-bcda-e167afe7fcda",
    signUpDate: 1551742818027,
  },
  {
    name: "Alina Hosack",
    id: "5741c34f-4718-46c7-bd90-ddcecfb478b3",
    signUpDate: 1528311656965,
  },
  {
    name: "Providencia Huett",
    id: "c750de2a-05b5-484c-bf66-8f47b8818718",
    signUpDate: 1540232766349,
  },
  {
    name: "Nilda Balboa",
    id: "b69be13f-794f-4ce9-aa43-7c0d58e8a4f1",
    signUpDate: 1469580865926,
  },
  {
    name: "Ebonie Amos",
    id: "4ad87303-12d3-4432-ad6f-62b5e1b368a5",
    signUpDate: 1582460871403,
  },
  {
    name: "Kasey Bostick",
    id: "9a07fedf-bfbd-4f74-8834-8012790979a6",
    signUpDate: 1469489409837,
  },
  {
    name: "Bebe Dowden",
    id: "9a5411ca-ee24-4a7d-9bf0-603f7027db7e",
    signUpDate: 1581427973904,
  },
  {
    name: "Luna Moreton",
    id: "de11cb19-2b3b-41b4-a9a2-ba9ad2cd6a55",
    signUpDate: 1551547712452,
  },
  {
    name: "Venice Clardy",
    id: "fce18790-561d-4aeb-a9ca-6a83beda13db",
    signUpDate: 1502501036635,
  },
  {
    name: "So Acebedo",
    id: "2cf978b9-8798-4c39-a019-4b3acafd1c77",
    signUpDate: 1504862531483,
  },
  {
    name: "Janay Kirst",
    id: "78e57127-357a-40c6-8828-9ed9a6d3f6d7",
    signUpDate: 1588267238040,
  },
  {
    id: "a79f5539-a4d7-4426-bd31-4eb51686210e",
    name: "Theresa Phillips Torres",
    signUpDate: 1571097488939,
  },
  {
    id: "9355f9be-8f96-47ec-b670-3a9cf4ab41bb",
    name: "Frank Wanda",
    signUpDate: 1588650936090,
  },
  {
    id: "eb155e39-4d01-4637-807d-ff688365402f",
    name: "Reed Sara Scott",
    signUpDate: 1473213055788,
  },
  {
    id: "ff6413db-48ab-4153-ad35-86f53e032afb",
    name: "Jesse Phillips Carlos",
    signUpDate: 1545371288586,
  },
  {
    id: "fb10cee4-10d9-45ae-9398-40f14b279eb0",
    name: "Bruce Nelson",
    signUpDate: 1566576371229,
  },
  {
    id: "bc5b6f9d-1d68-4ddd-a598-cf541bc32656",
    name: "Wilson Carlos",
    signUpDate: 1524140242481,
  },
  {
    id: "e6b98a21-2bce-4f5c-becd-ff24ad0d1352",
    name: "Patterson Ralph",
    signUpDate: 1541975948158,
  },
  {
    id: "65ea3389-1ff4-4af8-9629-639b59b370a8",
    name: "Henry Marilyn Roberts",
    signUpDate: 1587161691747,
  },
  {
    id: "a06b8b6f-7a0b-46a6-82c2-b19b921dda73",
    name: "Perry Carlos",
    signUpDate: 1585889379709,
  },
  {
    id: "c7304156-a696-462e-a9e8-5d18bc88a94a",
    name: "Reed Roberts",
    signUpDate: 1524076867728,
  },
  {
    id: "618513ab-2651-426d-a4a4-9be2b8dee1c1",
    name: "Frank Wanda",
    signUpDate: 1558514541929,
  },
  {
    id: "d4324477-36c1-4d49-8501-a35f4e9a88c4",
    name: "Patterson Wanda",
    signUpDate: 1477439646532,
  },
  {
    id: "b14593f5-eed3-4a51-8cd3-96ed0544c7b4",
    name: "Simmons Annie Amanda",
    signUpDate: 1561079199902,
  },
  {
    id: "32f9cd8d-b4db-4cd7-93b3-159c61e9d236",
    name: "Larry Scott",
    signUpDate: 1571751928979,
  },
  {
    id: "4c39e575-efb0-46e8-8aca-3ba81ef2cebe",
    name: "Bruce Debra",
    signUpDate: 1579366405331,
  },
  {
    id: "53c02da3-fa57-4108-9fd2-66d395c0543c",
    name: "Carolyn Alexander",
    signUpDate: 1550438001960,
  },
  {
    id: "7a566846-2718-4076-b125-103d73d2a5fd",
    name: "Michelle Raymond",
    signUpDate: 1471793750288,
  },
  {
    id: "28647928-a66c-4c0c-a215-0b7ca903181e",
    name: "Henry Phillips Scott",
    signUpDate: 1463036897732,
  },
  {
    id: "70a63d5a-823a-4026-b899-d0783887e5a7",
    name: "Albert Harris",
    signUpDate: 1579751921074,
  },
  {
    id: "27802a91-3c06-406c-be72-a9826adfb7e1",
    name: "Jesse Jackson",
    signUpDate: 1533639032117,
  },
  {
    id: "02494aa1-b1bc-4544-a789-7472ef582fa8",
    name: "Frank Clark",
    signUpDate: 1473885898049,
  },
  {
    id: "7639f2d5-7550-4160-9b37-f3cc55c8c089",
    name: "Albert Murphy Thomas",
    signUpDate: 1465121470603,
  },
  {
    id: "6c46c74e-fa7b-4882-92ca-b9410c3bee55",
    name: "Frank Bailey Diaz",
    signUpDate: 1555344457227,
  },
  {
    id: "ab5d43f9-a543-44a2-b74b-bfa70957e374",
    name: "Jesse Jackson",
    signUpDate: 1532929079738,
  },
  {
    id: "837456ac-b90d-4d7b-a42f-7057c60965e3",
    name: "Simmons Diaz",
    signUpDate: 1507938632717,
  },
  {
    id: "1ddc4574-fede-400b-9fbc-54bd06e3cd17",
    name: "Barnes Anthony Carlos",
    signUpDate: 1571471550553,
  },
  {
    id: "edeb6781-bf6a-43b1-a13e-e1c12d03f763",
    name: "Butler Baker Ralph",
    signUpDate: 1572933679040,
  },
  {
    id: "c7bedd0e-f970-4da0-b149-ed1340e5a1e6",
    name: "Ernest Alice Torres",
    signUpDate: 1518545184840,
  },
  {
    id: "aeb99ffe-d691-47af-a009-cb81f556894c",
    name: "Ross Chris Eric",
    signUpDate: 1517513899712,
  },
  {
    id: "94f61cf0-433b-49a8-b373-e8954fb198a7",
    name: "Albert Nelson",
    signUpDate: 1585333137447,
  },
];
