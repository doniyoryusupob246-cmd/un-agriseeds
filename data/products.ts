export interface Product {
  id: string;
  title: string;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Absalyut',
    image: '/products/absolute.jpg',
    description: `
🍅 Absalyut — bu gibrid tur bo‘lib, asosan issiqxona va ochiq maydonda yetishtirish uchun mos.

🔹 Umumiy xususiyatlari
- Turi: Gibrid
- Pishish muddati: Erta–o‘rtacha (95–105 kun)
- O‘sish turi: Indeterminant (uzun bo‘yli, doimiy o‘sadi)
- Yetishtirish joyi: Issiqxona va ochiq dala

🔹 Mevasi
- Shakli: Dumaloq–bir oz yassi
- Rangi: To‘q qizil
- O‘rtacha vazni: 180–220 g
- Ta’mi: Shirin-nordon, suvli, zich go‘shtli
- Po‘sti: Qalinroq – tashishga va saqlashga chidamli

🔹 Hosildorligi
- Juda serhosil
- Bir tupdan 4–6 kg, yaxshi agrotexnika bilan undan ham ko‘p
- Mevalari bir xil, bozorbop

🔹 Kasalliklarga chidamliligi
- Fusarioz
- Vertitsillez
- Tamaki mozaikasi virusi (TMV)
- Bu jihati uni fermerlar orasida mashhur qilgan.

🔹 Afzalliklari
✅ Bozorda talab yuqori
✅ Uzoq masofaga tashishga yaroqli
✅ Issiqda ham yaxshi bog‘laydi
✅ Saqlash muddati yaxshi
`,
  },
  {
    id: '2',
    title: 'AMARA bulg‘or qalampiri',
    image: '/products/amara.jpg',
    description: `
🫑 AMARA bulg‘or qalampiri

🔹 Umumiy tavsif
- Turi: Nav (ko‘pincha gibrid emas)
- Pishish muddati: Erta–o‘rtacha, 100–110 kun
- O‘sish turi: O‘rtacha bo‘yli (60–80 sm)
- Yetishtirish joyi: Ochiq dala va issiqxona
- Iqlimga mosligi: Issiqni yaxshi ko‘radi

🔹 Mevasi
- Rangi: Oq–krem (to‘liq pishganda och sariq rangga o‘tadi)
- Shakli: Kubiksimon yoki keng konus
- O‘rtacha vazni: 120–180 g
- Devor qalinligi: 6–8 mm
- Ta’mi: Juda shirin, achchiqligi yo‘q
- Go‘shti: Zich, shirador

🔹 Hosildorligi
- Yaxshi va barqaror
- Bir tupdan 2–3 kg
- Mevalari bir xil, bozorbop

🔹 Afzalliklari
✅ Chiroyli rang — bozorda ajralib turadi  
✅ Shirin ta’m (salat uchun juda mos)  
✅ Issiqda ham yaxshi meva bog‘laydi  
✅ O‘zidan urug‘ olish mumkin (nav bo‘lsa)
`,
  },
  {
    id: '3',
    title: 'Copenhagen',
    image: '/products/copenhagen.jpg',
    description: `
🥬 Copenhagen

🔹 Nomi va kelib chiqishi
- Bu nav klassik karam navlaridan biri bo‘lib, Evropada va boshqa mintaqalarda bozorda juda mashhur.
- Copenhagen nomi bilan tanilgan — Daniyada mashhur bo‘lgan navdan kelib chiqqan.

🔹 Pishish muddati
- Pishish muddati: 60–80 kun

🔹 Mevasi xususiyatlari
- Shakli: Yumaloq, zich boshli karam
- Rangi: Yashil yoki ko‘k-yashil
- Og‘irligi: 1,5–2,5 kg
- To‘qimli go‘shti: Qalin va juda mazali
- Bosh tuzilishi: Qattiq va zich, yorilishi kam

🔹 Hosildorligi va moslashuvchanlik
- Turli iqlim sharoitlariga mos va turli tuproq turlarida yaxshi o‘sadi
- Ochiq dalada yoki sovuq havoda ham barqaror hosil beradi

🔹 Afzalliklari
✅ Erta yoki o‘rtacha pishish — bozor uchun juda mos  
✅ Qattiq boshli va mustahkam — tashishga va saqlashga chidamli  
✅ Yaxshi ta’m — salatlar va konservalar uchun qulay  
✅ Keng maydonda yetishtiriladi — katta ekin maydonlari uchun ham mos
`,
  },
  {
    id: '4',
    title: 'Elina',
    image: '/products/elina.jpg',
    description: `
🍆 Elina

🔹 Umumiy tavsif
- Turi: Nav (baqlajon)
- Nav turi: O‘rtapishar
- O‘sish sharoiti: Ochiq dala uchun mos
- Rangi: Jilolangan qora
- O‘lchami: 15–17 sm uzunlikda
- Ichki tuzilish: Qattiq go‘shtli, urug‘i kam; tashishga mos

🔹 Hosildorlik va sifat
- Hosildorlik: Yuqori — barqaror, bir xil o‘lchamda hosil beradi
- Meva sifati: Jilolangan qora teri, zich go‘sht; bozorga juda mos ko‘rinish
- Tashish/saqlash: Mevalar mustahkam va yaxshi tashishga mos

🔹 Afzalliklari
✅ Bozorga mos meva: Jilolangan qora rangi va chiroyli shakli bozor talabiga mos  
✅ Yuqori hosildorlik: Nav sifatida barqaror hosil beradi  
✅ Mos yetishtirish joylari: Ochiq dala uchun mos  
✅ Kam urug‘li va qattiq go‘shtli: Tayyor taomlar uchun qulay
`,
  },
  {
    id: '5',
    title: 'Ella',
    image: '/products/ella.jpg',
    description: `
🌶 Ella

🔹 Umumiy tavsif
- Turi: Achchiq qalampir
- Pishish muddati: Erta–o‘rtacha (60–70 kun)
- Yetishtirish joyi: Ochiq dala
- Iqlimga mosligi: Issiq iqlimga juda mos

🔹 O‘simlik xususiyatlari
- Butasi: Kuchli, tik o‘suvchi
- Balandligi: 60–80 sm
- Shoxlanishi: Yaxshi
- Bog‘lanishi: Juda kuchli, to‘kilmaydi

🔹 Meva tavsifi
- Shakli: Uzunchoq, ingichka
- Uzunligi: 14–18 sm
- Qalinligi: Ingichka devorli
- Rangi: Texnik pishishda — to‘q yashil / ko‘kimtir; to‘liq pishganda — qizil
- Ta’mi: Juda achchiq 🌶️🌶️🌶️
- Yuzasi: Silliq, yaltiroq

🔹 Hosildorligi
- Juda yuqori
- Har tugunda 2–3 ta meva
- Uzoq muddat meva beradi

🔹 Chidamliligi
- Issiq stressga chidamli
- Achchiq qalampir kasalliklariga barqaror
- Ochiq dalada ishonchli natija beradi

🔹 Foydalanish
✅ Yangi iste’mol  
✅ Quritish  
✅ Tuzlash  
✅ Achchiq sous va ziravorlar
`,
  },
  {
    id: '6',
    title: 'Flamingo pushti pomidor (Pink Flamingo)',
    image: '/products/flamingo.jpg',
    description: `
      🔹 Umumiy tavsif
      - Turi: Nav (gibrid emas)
      - Pishish muddati: O‘rtacha 110–115 kun
      - O‘sish turi: Indeterminant (baland bo‘yli)
      - Yetishtirish joyi: Ochiq dala va issiqxona

      🔹 Mevasi
      - Rangi: Chiroyli pushti
      - Shakli: Dumaloq, ba’zan biroz cho‘zinchoq
      - O‘rtacha vazni: 200–300 g (parvarishi yaxshi bo‘lsa 400 g gacha)
      - Ta’mi: Juda shirin, nordonligi kam
      - Go‘shti: Zich, shirador
      - Po‘sti: Yupqaroq

      🔹 Hosildorligi
      - O‘rtacha hosil
      - Bir tupdan taxminan 3–5 kg
      - Asosan yangi iste’mol (salat) uchun juda mos

      🔹 Afzalliklari
      ✅ Ta’mi juda mazali
      ✅ Yirik mevali
      ✅ O‘zidan urug‘ olish mumkin
      ✅ Uy tomorqa va bozor uchun yaxshi
      `,
  },
  {
    id: '7',
    title: 'Lastochka bulg‘or qalampiri',
    image: '/products/lastochka.jpg',
    description: `
🫑 Lastochka bulg‘or qalampiri

🔹 Umumiy tavsif
- Turi: Nav
- Pishish muddati: Erta–o‘rtacha, 90–100 kun
- O‘sish turi: O‘rtacha bo‘yli (50–70 sm)
- Yetishtirish joyi: Ochiq dala va issiqxona
- Iqlimga mosligi: Issiq va o‘rtacha sovuqqa chidamli

🔹 Mevasi
- Rangi: To‘q qizil (pishganda)
- Shakli: Kubik yoki biroz konusga yaqin
- O‘rtacha vazni: 120–150 g
- Devor qalinligi: 6–8 mm
- Ta’mi: Shirin, nordonligi minimal
- Go‘shti: Zich, shirador

🔹 Hosildorligi
- Bir tupdan 2,5–3,5 kg
- Mevalari bir xil kattalikda, terim va saralash oson

🔹 Afzalliklari
✅ Bozorda chiroyli va talab yuqori  
✅ Shirin ta’mi bilan salat uchun ideal  
✅ Tashishga va saqlashga chidamli  
✅ Ochiq dala va issiqxonaga mos
`,
  },
  {
    id: '8',
    title: 'Mandur pomidori',
    image: '/products/mandur.jpg',
    description: `
🍅 Mandur pomidori

🔹 Umumiy ma’lumot
- Turi: Gibrid
- Pishish muddati: Erta–o‘rtacha, 90–105 kun
- O‘sish turi: Determinant (past–o‘rtacha bo‘yli)
- Yetishtirish joyi: Ochiq dala va issiqxona
- Issiqqa chidamlilik: Yuqori

🔹 Mevasi
- Rangi: Qizil
- Shakli: Dumaloq, tekis
- O‘rtacha vazni: 150–220 g
- Go‘shti: Zich, suv kam
- Po‘sti: Qalin — yorilmaydi
- Ta’mi: Shirin-nordon, bozorbop

🔹 Hosildorligi
- Yuqori hosil
- Bir tupdan 4–6 kg
- Mevalari bir xil kattalikda, saralash oson

🔹 Kasalliklarga chidamliligi
- Fusarioz
- Vertitsillez
- Tamaki mozaikasi (TMV)
- Issiq stressiga yaxshi moslashgan

🔹 Afzalliklari
✅ Erta hosil beradi  
✅ Ochiq dalada ishonchli  
✅ Tashishga va saqlashga juda qulay  
✅ Bozor va qayta ishlash uchun ideal
`,
  },
  {
    id: '9',
    title: 'Bella Cherry',
    image: '/products/bella-cherry.jpg',
    description: `
🌱 Bella Cherri Rediska

🔹 Umumiy tavsif
- Turi: Redis (mayda, tez pishadigan nav), ko‘pincha gibrid
- Pishish muddati: Juda erta — 25–30 kun
- O‘sish turi: Past, kompakt, shoxlanmaydi
- Yetishtirish joyi: Ochiq dala va issiqxona
- Iqlimga mosligi: Issiq va o‘rtacha sovuqqa chidamli

🔹 Mevasi
- Rangi: Yorqin qizil
- Shakli: Dumaloq
- O‘rtacha vazni: 15–30 g
- Ta’mi: Shirin, nordonligi minimal
- Po‘sti: Yupqa, ammo tez pishadi va dekorativ

🔹 Hosildorligi
- Mevalari bir xil kattalikda, terim oson

🔹 Afzalliklari
✅ Juda tez pishadi (25–30 kun)  
✅ Salat va yangi iste’mol uchun ideal  
✅ Ochiq dala va issiqxonaga mos  
✅ Bolalar va dekorativ salatlar uchun jozibador
`,
  },
  {
    id: '10',
    title: 'White Star',
    image: '/products/white-star.png',
    description: `
🧅 White Star

🔹 Umumiy tavsif
- Turi: Oq piyoz (White Onion)
- Gibrid: F1
- Kompaniya: UNagriseds

🔹 Asosiy xususiyatlari
- Pishish muddati: O‘rtacha erta–o‘rtacha (110–120 kun)
- Boshi: Yirik, dumaloq, bir xil o‘lchamli
- Rangi: Ichki va tashqi qismi sof oq
- Po‘sti: Yupqa, silliq
- Ta’mi: Yumshoq, achchiqligi past — salat va yangi iste’mol uchun juda qulay

🔹 Hosildorligi
- 80–120 t/ga
- Yuqori, maydonda bir xil pishadi

🔹 Saqlanishi va moslashuvchanligi
- Oqartirilgan piyozlar ichida yaxshi saqlanadigan navlardan
- Turli iqlim sharoitlariga mos
- Sanoat ekinlari uchun qulay

🔹 Afzalliklari
✅ Bozorbop ko‘rinish (oq, yirik, bir xil)  
✅ Transportga chidamli  
✅ Kasalliklarga nisbatan barqaror  
✅ Ulgurji savdo va eksport uchun mos
`,
  },
  {
    id: '11',
    title: 'Yellow Spanish',
    image: '/products/yellow-spanish.jpg',
    description: `
🧅 Yellow Spanish

🔹 Umumiy tavsif
- Turi: Sariq piyoz (Yellow onion)
- Mashhur nomi: Yellow Spanish / Sweet Spanish
- Qo‘llanilishi: Universal (yangi iste’mol va pishirish uchun mos)

🔹 Asosiy xususiyatlari
- Pishish muddati: 100–120 kun (o‘rtacha)
- Boshi: Yirik, dumaloq yoki biroz yassi
- Rangi: Tashqi po‘sti sariq–oltinrang, ichi oq
- Ta’mi: Yumshoq, biroz shirin, achchiqligi past
- Og‘irligi: 200–400 g (parvarishga qarab undan ham yirik bo‘ladi)

🔹 Afzalliklari
✅ Juda hosildor  
✅ Bozorbop ko‘rinish (katta va bir xil)  
✅ Saqlanishi yaxshi (3–5 oy)  
✅ Transportga chidamli
`,
  },
  {
    id: '12',
    title: "Shantane sabzi urug'i",
    image: '/products/shantane.jpg',
    description: `
🥕 Shantane (Chantenay)

🔹 Umumiy tavsif
- Turi: Stolbop sabzi
- Nav guruhi: Chantenay (Shantane)
- Kelib chiqishi: Fransiya

🔹 Asosiy xususiyatlari
- Pishish muddati: O‘rtacha (90–110 kun)
- Shakli: Kalta, konussimon, uchi to‘mtoq
- Uzunligi: 12–15 sm
- Diametri: Keng, yo‘g‘on
- Rangi: To‘q qizil
- Yadrosi: Kichik, rang jihatdan bir xil

🔹 Ta’mi va sifati
- Juda shirin
- Go‘shti zich, suvli
- Yorilishga va shakl buzilishiga kam moyil

🔹 Afzalliklari
✅ Og‘ir tuproqlarda ham yaxshi o‘sadi  
✅ Bir xil o‘lchamli hosil  
✅ Hosildorligi yuqori  
✅ Mexanik yig‘im-terimga mos  
✅ Saqlashga chidamli  

🔹 Yetishtirish sharoiti
- Tuproq: O‘rtacha va og‘ir tuproqlarga mos
- Ekish chuqurligi: 1,5–2 sm
- Qator oralig‘i: 25–30 sm
- Sug‘orish: Me’yorida, muntazam

🔹 Hosildorligi
- O‘rtacha 40–60 t/ga
- Yaxshi agrotexnikada undan ham yuqori

🔹 Bozor uchun qulayligi
- Ko‘rinishi chiroyli
- Transportga chidamli
`,
  },
  {
    id: '13',
    title: 'Sofiya Rediska',
    image: '/products/sofiya.jpg',
    description: `
🌱 Sofiya Rediska

🔹 Umumiy tavsif
- Turi: Redis (nav), ko‘pincha gibrid
- Pishish muddati: 30–35 kun
- O‘sish turi: Past, kompakt, shoxlanmaydi
- Yetishtirish joyi: Ochiq dala
- Iqlimga mosligi: Issiq va o‘rtacha sovuqqa chidamli

🔹 Mevasi
- Rangi: Qizil
- Shakli: Dumaloq
- O‘rtacha vazni: 25–35 g
- Ta’mi: Shirin, nordonligi minimal
- Po‘sti: Yupqa, tez pishadi va dekorativ

🔹 Hosildorligi
- Mevalari bir xil kattalikda, terim oson

🔹 Afzalliklari
✅ Juda tez pishadi (30–35 kun)  
✅ Salat va yangi iste’mol uchun ideal  
✅ Ochiq dala uchun mos  
✅ Bolalar va dekorativ salatlar uchun jozibador
`,
  },
  {
    id: '14',
    title: 'Bomba Tarvuz AU',
    image: '/products/bomba.jpg',
    description: `
🍉 Bomba Tarvuz AU

🔹 Umumiy tavsif
- Turi: Tarvuz
- Nav: Bomba F1 (AU tipidagi)
- Gibrid: F1
- Pishish muddati: O‘rtacha–kech (75–85 kun)
- Yetishtirish joyi: Ochiq dala
- Iqlimga mosligi: Issiq va mo‘tadil iqlimga juda mos

🔹 O‘simlik xususiyatlari
- Poyasi: Kuchli, mustahkam, uzoq yoyiluvchi
- Barglanishi: Katta, quyoshdan himoyalovchi
- Bog‘lanishi: Barqaror

🔹 Meva tavsifi
- Shakli: Dumaloq–oval
- O‘rtacha vazni: 10–15 kg (ba’zi sharoitda 18 kg gacha)
- Po‘stlog‘i: To‘q yashil chiziqli, qalin va mustahkam
- Ichki rangi: Yorqin qizil
- Ta’mi: Juda shirin, qarsildoq
- Urug‘i: O‘rtacha, qora

🔹 Hosildorligi
- Juda yuqori va barqaror
- Har tupdan 2–3 ta yirik meva
- Tashishga va uzoq masofaga bardoshli

🔹 Chidamliligi
- Issiq stressga bardoshli
- Fusarioz va antraknozga nisbatan barqaror
- Yorilib ketishga kam moyil

🔹 Foydalanish
✅ Bozor savdosi  
✅ Uzoq masofaga tashish  
✅ Yangi iste’mol  
✅ Chakana va ulgurji savdo
`,
  },
  {
    id: '15',
    title: 'Watermelon Parlament',
    image: '/products/parlament.jpg',
    description: `
🍉 PARLAMENT AU

🔹 Umumiy tavsif
- Turi: Tarvuz
- Nav: Parlament (AU tipidagi)
- Gibrid: F1
- Pishish muddati: Erta–o‘rtacha (70–75 kun)
- Yetishtirish joyi: Ochiq dala
- Iqlimga mosligi: Issiq va mo‘tadil iqlimga juda mos

🔹 O‘simlik xususiyatlari
- Poyasi: Kuchli, mustahkam
- Barglanishi: Yirik, qorayib ketmaydigan
- Bog‘lanishi: Barqaror

🔹 Meva tavsifi
- Shakli: Dumaloq–oval
- O‘rtacha vazni: 10–15 kg (ba’zi sharoitda 18–20 kg)
- Po‘stlog‘i: To‘q yashil chiziqli, qalin va mustahkam
- Ichki rangi: Yorqin qizil
- Ta’mi: Juda shirin, qarsildoq
- Urug‘i: O‘rtacha, qora

🔹 Hosildorligi
- Yuqori va barqaror
- Har tupdan 2–3 ta yirik meva
- Tashishga va uzoq masofaga bardoshli

🔹 Chidamliligi
- Issiq stressga chidamli
- Fusarioz va antraknozga nisbatan bardoshli
- Meva yorilishiga kam moyil

🔹 Foydalanish
✅ Bozor uchun  
✅ Uzoq masofaga tashish  
✅ Yangi iste’mol  
✅ Chakana va ulgurji savdo
`,
  },
  {
    id: '16',
    title: 'Evie',
    image: '/products/evie.jpg',
    description: `
🌶 Evie

🔹 Umumiy tavsif
- Turi: Nav
- O‘sish sharoiti: Ochiq dala

🔹 Pishish muddati
- Ko‘chatdan mevaga: 70–85 kun
- Xususiyati: Tez pishadi, bir tupdan ko‘p hosil olinadi

🔹 Mevasi va tuzilishi
- Uzunligi: 2–5 cm
- Vazni: 5–10 g
- Rangi: Yashildan qizil yoki sariqqa o‘tadi (pishgandan keyin)
- Ta’mi: Achchiq
- Shoxlanish: Buta o‘rta balandlikda, kompakt o‘sadi

🔹 Hosildorlik
- Bir tupdan hosil: 1–2 kg
- 1 m²: 6–10 kg (parvarish sharoitiga qarab)
- Kasalliklarga chidamlilik: Viruslar va qo‘ziqorin kasalliklariga nisbatan yuqori, odatda barqaror

🔹 Afzalliklari
✅ Tez pishadi, bir tupdan ko‘p meva beradi  
✅ Mevalari kichik, chiroyli va bir xil  
✅ Barqaror hosil, kasalliklarga chidamli  
✅ Achchiqlik darajasi yuqori — yangi iste’mol uchun ideal  
✅ Ochiq dala uchun mos, oson yetishtiriladi
`,
  },
  {
    id: '17',
    title: 'Dina qovun',
    image: '/products/dina.jpg',
    description: `
🍈 Dina qovun

🔹 Umumiy tavsif
- Turi: Qovun (Cucumis melo)
- Nav: Dina F1
- Pishish muddati: Erta–o‘rtacha (80–90 kun)
- Yetishtirish joyi: Ochiq dala
- Iqlimga mosligi: Issiq va mo‘tadil iqlimga mos, ideal

🔹 O‘simlik xususiyatlari
- Poyasi: Kuchli, shoxlangan
- Barglanishi: Yirik, ko‘p bargli, quyoshdan himoyalovchi
- Meva bog‘lanishi: Barqaror, mevalar bir xil o‘lchamda

🔹 Meva tavsifi
- Shakli: Cho‘zinchoq
- Uzunligi: 40–60 sm
- Po‘stlog‘i: Yorqin sariq
- Ichki rangi: Sariq
- Ta’mi: Juda shirin, qarsildoq
- Urug‘i: O‘rtacha, oq yoki sariq rangli

🔹 Hosildorligi
- Yuqori va barqaror
- Har tupdan 3–5 ta meva bog‘laydi
- Bozorda chiroyli ko‘rinish bilan sotiladi

🔹 Chidamliligi
- Issiq stressga bardoshli
- Kasalliklarga nisbatan barqaror

🔹 Foydalanish
✅ Yangi iste’mol  
✅ Bozor savdosi (chakana va ulgurji)  
✅ Eksportga mos
`,
  },

  {
    id: '18',
    title: 'Mabel',
    image: '/products/mabel.jpg',
    description: `
🥒 Mabel

🔹 Umumiy tavsif
- Turi: Gibrid bodring
- Partenokarpik (changlatish shart emas)
- Pishish muddati: 36–40 kun — juda erta
- Sharoit: Issiqxona va ochiq dala uchun mos

🔹 Mevasi va tuzilishi
- Uzunligi: 10–12 sm
- Vazni: 85–110 g
- Rangi: To‘q yashil, rang barqaror
- Teri: Silliq, chiroyli
- Ta’mi: Shirin, yangi iste’molga mos

🔹 Hosildorligi
- Bir tupidan o‘rtacha 4–5 kg
- Issiqxonada 6,5–7,5 kg/m²

🔹 Kasallik va chidamliligi
- Dew disease va boshqa kasalliklarga yaxshi bardoshli

🔹 Afzalliklari
✅ Juda erta pishadi  
✅ Mevalari bozorga mos va chiroyli  
✅ Kasalliklarga chidamli  
✅ Partenokarpik nav — changlatish talab qilinmaydi  
✅ Issiqxona va ochiq dalada yuqori hosil beradi
`,
  },
];
