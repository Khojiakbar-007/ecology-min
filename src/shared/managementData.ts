type IWorkerType = {
  name?: string;
  position?: string;
  phoneNumber?: string[];
  email?: string;
  region?: string;
  regionId: number;
};

const managementData: IWorkerType[] = [
  {
    name: 'Nurillaev Marat Azatovich',
    position: "Qoraqalpog'iston Respublikasi Hududiy Filial Rahbari",
    phoneNumber: ['+998612240877'],
    email: 'm.nurillayev@sanitation.uz',
    region: "Qoraqalpog'iston Respublikasi",
    regionId: 0,
  },
  {
    name: 'Sattorov Zokir Roziqovich',
    position: 'Buxoro Viloyati Hududiy Filial Rahbari',
    phoneNumber: ['+998914435344'],
    email: 'z.sattarov@sanitation.uz',
    region: 'Buxoro Viloyati',
    regionId: 1,
  },
  {
    name: 'Salimov Oybek Bahodirovich',
    position: 'Jizzax Viloyati Hududiy Filial Rahbari',
    phoneNumber: ['+998903115533'],
    email: 'o.salimov@sanitation.uz',
    region: 'Jizzax Viloyati',
    regionId: 2,
  },
  {
    name: 'Baxromov Abbos Bexzodovich',
    position: 'Qashqadaryo Viloyati Hududiy Filial Rahbari',
    phoneNumber: ['+998916351177'],
    email: 'a.bahromov@sanitation.uz',
    region: 'Qashqadaryo Viloyati',
    regionId: 3,
  },
  {
    name: 'Toshonov Ilxom Maxmudovich',
    position: 'Navoiy Viloyati Hududiy Filial Rahbari',
    phoneNumber: ['+998942510085'],
    email: 'i.toshonov@sanitation.uz',
    region: 'Navoiy Viloyati',
    regionId: 4,
  },
  {
    name: 'Abidov Raxmatillo Ibroximjonovich',
    position: 'Namangan Viloyati Hududiy Filial Rahbari',
    phoneNumber: ['+998945001101'],
    email: 'r.abidov@sanitation.uz',
    region: 'Namangan Viloyati',
    regionId: 5,
  },
  {
    name: 'Munavvarov Umidjon Uchkunovich',
    position: 'Samarqand Viloyati Hududiy Filial Rahbari',
    phoneNumber: ['+998933465050'],
    email: 'u.munavvarov@sanitation.uz',
    region: 'Samarqand Viloyati',
    regionId: 6,
  },
  {
    name: 'Axmedov Rustam Namazovich',
    position: 'Surxondaryo Viloyati Hududiy Filial Rahbari',
    phoneNumber: ['+998993797440'],
    email: 'r.axmedov@sanitation.uz',
    region: 'Surxondaryo Viloyati',
    regionId: 7,
  },
  {
    name: 'Sulaymonov Kamolitdin Nurbaevich',
    position: 'Sirdaryo Viloyati Hududiy Filial Rahbari',
    phoneNumber: ['+998949149493'],
    email: 'k.sulaymonov@sanitation.uz',
    region: 'Sirdaryo Viloyati',
    regionId: 8,
  },
  {
    name: 'Ismailov Xayrulla Kurultaevich',
    position: 'Toshkent Viloyati Hududiy Filial Rahbari',
    phoneNumber: ['+998988123344', '+998998263344'],
    email: 'x.ismailov@sanitation.uz',
    region: 'Toshkent Viloyati',
    regionId: 9,
  },
  {
    name: 'Nurmanov Abdulla Ibragimovich',
    position: 'Toshkent Shahri Hududiy Filial Rahbari',
    phoneNumber: ['+998938126645'],
    email: 'a.nurmanov@sanitation.uz',
    region: 'Toshkent Shahri',
    regionId: 10,
  },
  {
    name: 'Xoliqov Abdulaziz Sodiqjonovich',
    position: "Farg'ona Viloyati Hududiy Filial Rahbari",
    phoneNumber: ['+998884153858'],
    email: 'a.xoliqov@sanitation.uz',
    region: "Farg'ona Viloyati",
    regionId: 11,
  },
  {
    name: 'Raxmanov Oybek Odilbekovich',
    position: 'Xorazm Viloyati Hududiy Filial Rahbari',
    phoneNumber: ['+998937920100'],
    email: 'o.raxmanov@sanitation.uz',
    region: 'Xorazm Viloyati',
    regionId: 12,
  },
  {
    // name: 'Ro‘ziboyev Rustambek Dostonbek o‘g‘li',
    position: 'Andijon Viloyati Hududiy Filial Rahbari',
    email: 'r.roziboyev@sanitation.uz',
    region: 'Andijon Viloyati',
    regionId: 13,
  },
];

export type { IWorkerType };
export { managementData };
