const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

let events = [
  {
    title: 'מפגש זמנזוגי בתמול שלשום בהנחיית הרבה תמר גור קראוזה',
    date: 'SUN, 26 MAR AT 20:00 UTC+03',
    location: 'תמול שלשום Tmol Shilshom Cafe',
    link: 'https://www.facebook.com/events/933077927886677/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/336215628_532017659012978_4251771993664367117_n.jpg?stp=c13.0.116.80a_dst-jpg_p110x80&_nc_cat=107&ccb=1-7&_nc_sid=036dc3&_nc_ohc=UjlqOuxr6asAX8l6Kn1&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfC1BAzbEhRMACYFkk1zNIlyVqOfR2GwPE15bj5Mr44yyQ&oe=64257BFC',
    _id: 'c82c342ee8d2c484c9c0d18820b21901be04f03f'
  },
  {
    title: 'WACKELKONTAKT ▰ AQUADOME: The Making of the Babymother ▰ 29.3',
    date: 'WED, 29 MAR AT 20:00 UTC+03',
    location: 'Mazkeka מזקקה مزكيكا',
    link: 'https://www.facebook.com/events/867822644287918/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/336650841_878729076552933_3817140627217842351_n.jpg?stp=c15.0.116.80a_dst-jpg_p110x80&_nc_cat=102&ccb=1-7&_nc_sid=036dc3&_nc_ohc=3WEYpUemcTkAX-oXrKu&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfDPXIwv9BSFXAAGlASZf8tiT6xy2kujDeZUDG43DKdOvA&oe=6425EB40',
    _id: '54ab4d7423bfcdf557819696067d704f766b10dd'
  },
  {
    title: 'דניאל סלבוסקי  ▄ "מפחיד" ▄ השקה / מזקקה 30.3',
    date: 'THURS, 30 MAR AT 21:30 UTC+03',
    location: 'Mazkeka מזקקה مزكيكا',
    link: 'https://www.facebook.com/events/1595915820915865/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/332232447_534247588821974_1442137636841597768_n.jpg?stp=c15.0.116.80a_dst-jpg_p110x80&_nc_cat=107&ccb=1-7&_nc_sid=036dc3&_nc_ohc=6HfscCgDP1wAX_f-m1G&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfALu0dZVSCUcxqNa9tpeVFu8Qpi4Wna_sJnZOiTZ9ccdA&oe=64257633',
    _id: 'ae4686fb0cf2ce45a014f62f2147e1103c5442eb'
  },
  {
    title: 'עדן דרסו ✚ מזקקה 1.4',
    date: 'SAT, 1 APR AT 21:00 UTC+03',
    location: 'Mazkeka מזקקה مزكيكا',
    link: 'https://www.facebook.com/events/940215677133377/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/337559329_664946098971724_4266688620607446322_n.jpg?stp=c0.22.118.81a_dst-jpg_p118x90&_nc_cat=100&ccb=1-7&_nc_sid=036dc3&_nc_ohc=WrO7pnORaNIAX_e65Zc&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfASgmnBQnv3f4nAoeTR8PCpvZcIZ4eaJiZoauaFxGaaNA&oe=64249E58',
    _id: '820b0d8cb5fc72bdaf588d2b22828b615bfd49e2'
  },
  {
    title: 'David Lerner /  Horses Intense ⋇  Mazkeka 4.4',
    date: 'TUES, 4 APR AT 11:00 PDT',
    location: 'Mazkeka מזקקה مزكيكا',
    link: 'https://www.facebook.com/events/742328020779558/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/337145164_917299412908538_7170676618521028109_n.jpg?stp=c15.0.116.80a_dst-jpg_p110x80&_nc_cat=101&ccb=1-7&_nc_sid=036dc3&_nc_ohc=COdiMqkdBdoAX_tx0Uv&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfCMMaQUZFm4Vti1c2qxHWOaDROp3-gKolAohufzaVascA&oe=6424DBFA',
    _id: '8e8f754fbc88077f68af3d210564ebccf269cf35'
  },
  {
    title: 'לעצב ניסיון: איך כל התנסות יכולה להפוך לשורה בקורות החיים',
    date: 'TUES, 28 MAR AT 19:00 UTC+03',
    location: 'ברוטינה Barutina',
    link: 'https://www.facebook.com/events/241281924994256/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/337360262_602724898566551_8645547768989005965_n.jpg?stp=c39.0.116.80a_dst-jpg_p110x80&_nc_cat=108&ccb=1-7&_nc_sid=036dc3&_nc_ohc=LpKehB0qywEAX8CY6mp&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfCHS-889rvz-Gx9Yl6UIeGtk1SbCK5L9jiYeDqWkUKvTQ&oe=64258261',
    _id: '9ce72270d2701bbcbcc5c62b7f08033ab24f1173'
  },
  {
    title: 'אמנות מסתובבת בקרוסלה',
    date: 'WED, 29 MAR AT 19:30 UTC+03',
    location: 'קרוסלה Carousela',
    link: 'https://www.facebook.com/events/546754334025932/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/336807343_771904800843555_4422926781979352603_n.jpg?stp=c18.0.116.80a_dst-jpg_p110x80&_nc_cat=101&ccb=1-7&_nc_sid=036dc3&_nc_ohc=IAwY77cdko4AX_P_6Bv&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfBMnMlwnLE_y6vdRoFfWCCRBt-6hJAPnli3xz-TkIZZBg&oe=6425B92E',
    _id: '4e9a49ccaed9401cf8d0534f6c5f81dd101dd445'
  },
  {
    title: 'בִּתְרֵי זוּזֵי - יריד אמנות ועיצוב חגיגי לכבוד חג הפסח',
    date: 'THURS, 30 MAR AT 17:00 UTC+03',
    location: 'ברוטינה Barutina',
    link: 'https://www.facebook.com/events/225071623413626/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/336907299_3544060895918510_8896444324947646322_n.jpg?stp=dst-jpg_p110x80&_nc_cat=109&ccb=1-7&_nc_sid=036dc3&_nc_ohc=qQcAqCuitdUAX_dEgzy&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfD0v49eBSPWXZOls2lRdpveVOKY526w3WYRDRUuAnmQ-w&oe=6424F0B9',
    _id: '85fc7319935919a56b7ee48909a036c91d826242'
  },
  {
    title: 'תהל לוי במופע אקוסטי בירושלים',
    date: 'WED, 29 MAR AT 21:00 UTC+03',
    location: 'BeerBazaar Jerusalem בירבזאר ירושלים',
    link: 'https://www.facebook.com/events/572296168264825/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/332988070_1241149983474261_3201987231877900582_n.jpg?stp=c0.25.118.81a_dst-jpg_p118x90&_nc_cat=109&ccb=1-7&_nc_sid=036dc3&_nc_ohc=V-_dEOnoccMAX9EgnrY&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfCD0IrUXk2pC_Qd4wB1SW0Q3eiIwCsg-_FWJiaMQ0ot9A&oe=64245EEB',
    _id: '5a9ead288c9f0a5de74596ffa04125b3204d0dcb'
  },
  {
    title: 'שי נחייסי - טריו אקוסטי בירושלים',
    date: 'THURS, 30 MAR AT 21:00 UTC+03',
    location: 'BeerBazaar Jerusalem בירבזאר ירושלים',
    link: 'https://www.facebook.com/events/1633150523794966/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/332902888_787171409585056_6129366807659615086_n.jpg?stp=c2.0.116.80a_dst-jpg_p110x80&_nc_cat=101&ccb=1-7&_nc_sid=036dc3&_nc_ohc=q43xN2vIkcQAX8TJlMO&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfBLzhxhyej6unAvZ-FyGnOL3BnVMdkYCHlupmG1Kytk6Q&oe=64258F7D',
    _id: 'ab365f5d183f29a83e4ed7fdef52dadc4e3f30d9'
  },
  {
    title: 'לעצב ניסיון: איך כל התנסות יכולה להפוך לשורה בקורות החיים',
    date: 'TUES, 28 MAR AT 19:00 UTC+03',
    location: 'ברוטינה Barutina',
    link: 'https://www.facebook.com/events/241281924994256/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/337360262_602724898566551_8645547768989005965_n.jpg?stp=c39.0.116.80a_dst-jpg_p110x80&_nc_cat=108&ccb=1-7&_nc_sid=036dc3&_nc_ohc=LpKehB0qywEAX8CY6mp&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfCHS-889rvz-Gx9Yl6UIeGtk1SbCK5L9jiYeDqWkUKvTQ&oe=64258261',
    _id: '9ce72270d2701bbcbcc5c62b7f08033ab24f1173'
  },
  {
    title: 'אמנות מסתובבת בקרוסלה',
    date: 'WED, 29 MAR AT 19:30 UTC+03',
    location: 'קרוסלה Carousela',
    link: 'https://www.facebook.com/events/546754334025932/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/336807343_771904800843555_4422926781979352603_n.jpg?stp=c18.0.116.80a_dst-jpg_p110x80&_nc_cat=101&ccb=1-7&_nc_sid=036dc3&_nc_ohc=IAwY77cdko4AX_P_6Bv&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfBMnMlwnLE_y6vdRoFfWCCRBt-6hJAPnli3xz-TkIZZBg&oe=6425B92E',
    _id: '4e9a49ccaed9401cf8d0534f6c5f81dd101dd445'
  },
  {
    title: 'בִּתְרֵי זוּזֵי - יריד אמנות ועיצוב חגיגי לכבוד חג הפסח',
    date: 'THURS, 30 MAR AT 17:00 UTC+03',
    location: 'ברוטינה Barutina',
    link: 'https://www.facebook.com/events/225071623413626/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/336907299_3544060895918510_8896444324947646322_n.jpg?stp=dst-jpg_p110x80&_nc_cat=109&ccb=1-7&_nc_sid=036dc3&_nc_ohc=qQcAqCuitdUAX_dEgzy&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfD0v49eBSPWXZOls2lRdpveVOKY526w3WYRDRUuAnmQ-w&oe=6424F0B9',
    _id: '85fc7319935919a56b7ee48909a036c91d826242'
  },
  {
    title: "ערב ג'אז לייב Live Jazz Night",
    date: 'SUN, 26 MAR AT 19:30 UTC+03 AND 13 MORE',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/617067706634804/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/329529878_668120355086829_4962307021538136117_n.jpg?stp=c18.0.116.80a_dst-jpg_p110x80&_nc_cat=111&ccb=1-7&_nc_sid=036dc3&_nc_ohc=KJxBz6f93eEAX_fc-NE&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfCQ9DPoAPGrtUS4zWIHwgf3-YVy1GaHRCT1CCuds_K-_A&oe=6425782F',
    _id: '3ac8ee5b8b8990598837791f8c23e5f9e82c1d20'
  },
  {
    title: 'Paint & Pint Night at Abraham Jerusalem',
    date: 'WED, 29 MAR AT 18:30 UTC+03 AND 11 MORE',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/656541756227336/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/323869876_913027049709847_4812384881287894228_n.jpg?stp=c18.0.116.80a_dst-jpg_p110x80&_nc_cat=106&ccb=1-7&_nc_sid=036dc3&_nc_ohc=nSLtX880jkEAX9gBhyw&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAd4OJ-WJWDQ5XFE_KDiEnDSDE_Kp-px8qrcjC8mWskjQ&oe=6424DA75',
    _id: '6b5b9648797acb63419a6ebfb68379b9f2daa855'
  },
  {
    title: 'Fem Jam | Abraham Jerusalem',
    date: 'WED, 29 MAR AT 20:00 UTC+03 AND 24 MORE',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/640205751441124/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/325864778_1931465923851907_3610681971893029421_n.jpg?stp=c18.0.116.80a_dst-jpg_p110x80&_nc_cat=107&ccb=1-7&_nc_sid=036dc3&_nc_ohc=umlc1g8M4oEAX_CY5A6&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfADlfSP_VKg-sI9yCqT_oOxaizW8cDVlO1TmUXQaXcONA&oe=642574F6',
    _id: 'b644649ca150242a6bffbd5d0d7b03931f24939d'
  },
  {
    title: 'Yoga with Ronny in Abraham Jerusalem',
    date: 'MON, 27 MAR AT 18:30 UTC+03 AND 17 MORE',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/8829290167111290/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/326403789_716129456689411_6610073398061816761_n.jpg?stp=c18.0.116.80a_dst-jpg_p110x80&_nc_cat=105&ccb=1-7&_nc_sid=036dc3&_nc_ohc=w_lfPq8Zx-AAX_T3CoQ&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfCyVo1iMkF5J-3yq1EB9hA0FWHz1i_CNBmXeH2ma7vtuA&oe=6424455B',
    _id: '1dab4ed7d6833d7c4cf443299fa970e341a26fe2'
  },
  {
    title: 'קלסיקאלטת באברהם ירושלים | Classic Cassette in Abraham Jerusalem',
    date: 'MON, 27 MAR AT 21:00 UTC+03 AND 9 MORE',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/914213809903924/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/335462215_734876214774350_2548982942103970711_n.jpg?stp=c18.0.116.80a_dst-jpg_p110x80&_nc_cat=107&ccb=1-7&_nc_sid=036dc3&_nc_ohc=EJs2SmhTCuEAX-lAuoU&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfBbN9o0tY75hEcmiXVhKIJO2vg-Gm3p370OLtVEfe38yg&oe=6425650E',
    _id: '8a7aa3acf64dd7f6003fa0062e95235c9c7e971b'
  },
  {
    title: 'Language Exchange at Abraham Jerusalem ערב חילופי שפות تبادل اللغات',
    date: 'THU, 20 APR AT 20:00 UTC+03 AND 6 MORE',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/983869612577588/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/333043060_169854385446058_6409426619700187691_n.jpg?stp=c18.0.116.80a_dst-jpg_p110x80&_nc_cat=101&ccb=1-7&_nc_sid=036dc3&_nc_ohc=rwgsaDfD2YoAX8j3IEz&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfC24xHoy1k8tMoaAcayCZSWQeZN_hpMhbqWsFcPAzgkDQ&oe=64255738',
    _id: '501b321ccd73afeae11f98767e4caae2976eadea'
  },
  {
    title: 'Soup Night in Abraham Jerusalem',
    date: 'TUE, 28 MAR AT 19:00 UTC+03 AND 9 MORE',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/559458769319643/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/337517687_788654048820676_2485393744982663686_n.jpg?stp=c18.0.116.80a_dst-jpg_p110x80&_nc_cat=101&ccb=1-7&_nc_sid=036dc3&_nc_ohc=aIcJO9_K_BYAX9Nxc5y&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfBIIognqcG-8jZSeGDOOJ-SnLEH1U6D1rVA1tZnmwAyLA&oe=6425142E',
    _id: 'bacd47b00995cffe035c193192a5a6e81eca2019'
  },
  {
    title: 'Paint & Pint Night at Abraham Jerusalem',
    date: 'WED, 29 MAR AT 18:30 UTC+03',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/656541756227336/?event_time_id=656541846227327',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.30497-1/84668831_168042434612076_74269678289027072_n.jpg?stp=c5.0.116.80a_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=036dc3&_nc_ohc=sre0sBlZiwsAX_1b0Gn&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAOPnsb0nCpj54zfLRZPJHluAoGx5KT5kW_L8ECgfIE5Q&oe=6447990C',
    _id: 'badf97bc5796427b0ff339858646e625ba676b37'
  },
  {
    title: 'Fem Jam | Abraham Jerusalem',
    date: 'WED, 29 MAR AT 20:00 UTC+03',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/640205751441124/?event_time_id=640208714774161',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.30497-1/84668831_168042434612076_74269678289027072_n.jpg?stp=c5.0.116.80a_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=036dc3&_nc_ohc=sre0sBlZiwsAX_1b0Gn&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAOPnsb0nCpj54zfLRZPJHluAoGx5KT5kW_L8ECgfIE5Q&oe=6447990C',
    _id: 'ee2a5d67a4a872c3d992e115a11c06c1c5d14dfa'
  },
  {
    title: 'Yoga with Ronny in Abraham Jerusalem',
    date: 'THURS, 30 MAR AT 18:30 UTC+03',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/8829290167111290/?event_time_id=8829298207110486',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.30497-1/84668831_168042434612076_74269678289027072_n.jpg?stp=c5.0.116.80a_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=036dc3&_nc_ohc=sre0sBlZiwsAX_1b0Gn&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAOPnsb0nCpj54zfLRZPJHluAoGx5KT5kW_L8ECgfIE5Q&oe=6447990C',
    _id: '5ac63b562ee1e98fb427302f3eaf731c03178248'
  },
  {
    title: 'Harry Potter Themed Nights in Abraham Jerusalem',
    date: 'THU, 30 MAR AT 19:00 UTC+03 AND 1 MORE',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/861444504936999/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/336872887_1207035666667676_5288688611375806327_n.jpg?stp=c18.0.116.80a_dst-jpg_p110x80&_nc_cat=102&ccb=1-7&_nc_sid=036dc3&_nc_ohc=6cUbZhByO7wAX_CwhCT&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfCUHiBD73Gb-hJU-wqcgIxdwLsLX45LM2l2uFPCW_hMUw&oe=64259BBA',
    _id: '30559fc89fb70c321d0d4312ad7812c1f0a596a6'
  },
  {
    title: "אברהם ירושלים מארחים מסיבת סלסה בצ'אטה",
    date: 'SAT, 1 APR AT 21:00 UTC+03',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/216552920921628/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/338010333_975490186940391_7462418373596315912_n.jpg?stp=c13.0.116.80a_dst-jpg_p110x80&_nc_cat=109&ccb=1-7&_nc_sid=036dc3&_nc_ohc=4BA1-ryjNUcAX99IEhe&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfDjuC1_gGh6wuPRpamh_UQB9DvaOAlVdsiOtAL81v9bQw&oe=6425AF67',
    _id: 'c287830e36a605abe300b917600951d56c5e1a96'
  },
  {
    title: "ערב ג'אז לייב Live Jazz Night",
    date: 'SUN, 2 APR AT 19:30 UTC+03',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/617067706634804/?event_time_id=711087390566168',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.30497-1/84668831_168042434612076_74269678289027072_n.jpg?stp=c5.0.116.80a_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=036dc3&_nc_ohc=sre0sBlZiwsAX_1b0Gn&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAOPnsb0nCpj54zfLRZPJHluAoGx5KT5kW_L8ECgfIE5Q&oe=6447990C',
    _id: '5b85701a53e3e0b7931aee1e5502df98145cf847'
  },
  {
    title: 'Yoga with Ronny in Abraham Jerusalem',
    date: 'MON, 3 APR AT 18:30 UTC+03',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/8829290167111290/?event_time_id=8829298200443820',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.30497-1/84668831_168042434612076_74269678289027072_n.jpg?stp=c5.0.116.80a_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=036dc3&_nc_ohc=sre0sBlZiwsAX_1b0Gn&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAOPnsb0nCpj54zfLRZPJHluAoGx5KT5kW_L8ECgfIE5Q&oe=6447990C',
    _id: 'b6d679fe5c1209e4250f3c7bb0b1c8233ae2188c'
  },
  {
    title: 'קלסיקאלטת באברהם ירושלים | Classic Cassette in Abraham Jerusalem',
    date: 'MON, 3 APR AT 21:00 UTC+03',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/914213809903924/?event_time_id=914218193236819',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.30497-1/84668831_168042434612076_74269678289027072_n.jpg?stp=c5.0.116.80a_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=036dc3&_nc_ohc=sre0sBlZiwsAX_1b0Gn&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAOPnsb0nCpj54zfLRZPJHluAoGx5KT5kW_L8ECgfIE5Q&oe=6447990C',
    _id: '32997fd4ba1410b1dc075e988f3d04f635ec5787'
  },
  {
    title: 'Soup Night in Abraham Jerusalem',
    date: 'TUES, 4 APR AT 19:00 UTC+03',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/559458769319643/?event_time_id=559458779319642',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.30497-1/84668831_168042434612076_74269678289027072_n.jpg?stp=c5.0.116.80a_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=036dc3&_nc_ohc=sre0sBlZiwsAX_1b0Gn&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAOPnsb0nCpj54zfLRZPJHluAoGx5KT5kW_L8ECgfIE5Q&oe=6447990C',
    _id: 'cca03bd437b224e286911bd9707a678c13473a12'
  },
  {
    title: "ערב ג'אז לייב Live Jazz Night",
    date: 'SUN, 9 APR AT 19:30 UTC+03',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/617067706634804/?event_time_id=711087377232836',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.30497-1/84668831_168042434612076_74269678289027072_n.jpg?stp=c5.0.116.80a_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=036dc3&_nc_ohc=sre0sBlZiwsAX_1b0Gn&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAOPnsb0nCpj54zfLRZPJHluAoGx5KT5kW_L8ECgfIE5Q&oe=6447990C',
    _id: 'f4aef8af0206c8758f3ea4edc7e30ca198db615d'
  },
  {
    title: 'Yoga with Ronny in Abraham Jerusalem',
    date: 'MON, 10 APR AT 18:30 UTC+03',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/8829290167111290/?event_time_id=8829298263777147',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.30497-1/84668831_168042434612076_74269678289027072_n.jpg?stp=c5.0.116.80a_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=036dc3&_nc_ohc=sre0sBlZiwsAX_1b0Gn&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAOPnsb0nCpj54zfLRZPJHluAoGx5KT5kW_L8ECgfIE5Q&oe=6447990C',
    _id: '9e0cf87bff50d4d915013bd33786506a11876a40'
  },
  {
    title: 'קלסיקאלטת באברהם ירושלים | Classic Cassette in Abraham Jerusalem',
    date: 'MON, 10 APR AT 21:00 UTC+03',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/914213809903924/?event_time_id=919213169403988',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.30497-1/84668831_168042434612076_74269678289027072_n.jpg?stp=c5.0.116.80a_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=036dc3&_nc_ohc=sre0sBlZiwsAX_1b0Gn&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAOPnsb0nCpj54zfLRZPJHluAoGx5KT5kW_L8ECgfIE5Q&oe=6447990C',
    _id: 'f7828e3bac1921eddcdcd79a0e81d91a0135d54e'
  },
  {
    title: 'Soup Night in Abraham Jerusalem',
    date: 'TUES, 11 APR AT 19:00 UTC+03',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/559458769319643/?event_time_id=559458792652974',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.30497-1/84668831_168042434612076_74269678289027072_n.jpg?stp=c5.0.116.80a_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=036dc3&_nc_ohc=sre0sBlZiwsAX_1b0Gn&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAOPnsb0nCpj54zfLRZPJHluAoGx5KT5kW_L8ECgfIE5Q&oe=6447990C',
    _id: '62e753ddd5ed270f3c1eabd8137a05c23993a465'
  },
  {
    title: 'Paint & Pint Night at Abraham Jerusalem',
    date: 'WED, 12 APR AT 18:30 UTC+03',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/656541756227336/?event_time_id=656541836227328',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.30497-1/84668831_168042434612076_74269678289027072_n.jpg?stp=c5.0.116.80a_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=036dc3&_nc_ohc=sre0sBlZiwsAX_1b0Gn&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAOPnsb0nCpj54zfLRZPJHluAoGx5KT5kW_L8ECgfIE5Q&oe=6447990C',
    _id: 'e3b94815e8f620e101131904bc0fa37aafc12f93'
  },
  {
    title: 'Fem Jam | Abraham Jerusalem',
    date: 'WED, 12 APR AT 20:00 UTC+03',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/640205751441124/?event_time_id=640208718107494',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.30497-1/84668831_168042434612076_74269678289027072_n.jpg?stp=c5.0.116.80a_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=036dc3&_nc_ohc=sre0sBlZiwsAX_1b0Gn&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAOPnsb0nCpj54zfLRZPJHluAoGx5KT5kW_L8ECgfIE5Q&oe=6447990C',
    _id: 'b877b4be99ca7324b698f3269b9cb60054a92287'
  },
  {
    title: 'Yoga with Ronny in Abraham Jerusalem',
    date: 'THURS, 13 APR AT 18:30 UTC+03',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/8829290167111290/?event_time_id=8829298217110485',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.30497-1/84668831_168042434612076_74269678289027072_n.jpg?stp=c5.0.116.80a_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=036dc3&_nc_ohc=sre0sBlZiwsAX_1b0Gn&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAOPnsb0nCpj54zfLRZPJHluAoGx5KT5kW_L8ECgfIE5Q&oe=6447990C',
    _id: '6ad4aba2e2d7b4f8eae221c307c7e75145677497'
  },
  {
    title: 'Harry Potter Themed Nights in Abraham Jerusalem',
    date: 'THURS, 13 APR AT 19:00 UTC+03',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/861444504936999/?event_time_id=878118576602925',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.30497-1/84668831_168042434612076_74269678289027072_n.jpg?stp=c5.0.116.80a_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=036dc3&_nc_ohc=sre0sBlZiwsAX_1b0Gn&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAOPnsb0nCpj54zfLRZPJHluAoGx5KT5kW_L8ECgfIE5Q&oe=6447990C',
    _id: '513078e72d23dee5e6004379861324471bcebc6e'
  },
  {
    title: "ערב ג'אז לייב Live Jazz Night",
    date: 'SUN, 16 APR AT 19:30 UTC+03',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/617067706634804/?event_time_id=711087393899501',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.30497-1/84668831_168042434612076_74269678289027072_n.jpg?stp=c5.0.116.80a_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=036dc3&_nc_ohc=sre0sBlZiwsAX_1b0Gn&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAOPnsb0nCpj54zfLRZPJHluAoGx5KT5kW_L8ECgfIE5Q&oe=6447990C',
    _id: '680b1d99ec2dbb283f4cbdebafb2a992d77b0a0f'
  },
  {
    title: 'Yoga with Ronny in Abraham Jerusalem',
    date: 'MON, 17 APR AT 18:30 UTC+03',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/8829290167111290/?event_time_id=8829298233777150',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.30497-1/84668831_168042434612076_74269678289027072_n.jpg?stp=c5.0.116.80a_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=036dc3&_nc_ohc=sre0sBlZiwsAX_1b0Gn&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAOPnsb0nCpj54zfLRZPJHluAoGx5KT5kW_L8ECgfIE5Q&oe=6447990C',
    _id: 'b71944a411e7cc0f6d1346b228a2292af5f2fe7b'
  },
  {
    title: 'קלסיקאלטת באברהם ירושלים | Classic Cassette in Abraham Jerusalem',
    date: 'MON, 17 APR AT 21:00 UTC+03',
    location: 'Abraham Jerusalem',
    link: 'https://www.facebook.com/events/914213809903924/?event_time_id=919213189403986',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.30497-1/84668831_168042434612076_74269678289027072_n.jpg?stp=c5.0.116.80a_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=036dc3&_nc_ohc=sre0sBlZiwsAX_1b0Gn&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAOPnsb0nCpj54zfLRZPJHluAoGx5KT5kW_L8ECgfIE5Q&oe=6447990C',
    _id: 'eb05e99ad0702cb2153ebd4a2a2740280851cce6'
  },
  {
    title: 'BlazeBall',
    date: 'THURS, 30 MAR AT 22:00 UTC+03',
    location: 'Mighty Phine Jews',
    link: 'https://www.facebook.com/events/718072686433953/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/334759978_727706905639948_7265338474911205354_n.jpg?stp=c13.0.116.80a_dst-jpg_p110x80&_nc_cat=111&ccb=1-7&_nc_sid=036dc3&_nc_ohc=wmn7aCI4XtUAX-sRl48&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfBRBPopvBit8UTJtOfexlqOqPtGpeATYKlUD1ZEmblIKg&oe=6424B9B7',
    _id: '487f2c2e5d38a027e619f0338c5321202aa5f92d'
  },
  {
    title: 'FOOLSFEST#23',
    date: 'SAT, 1 APR AT 20:45 UTC+03',
    location: 'Blaze Rock Bar',
    link: 'https://www.facebook.com/events/768896474773408/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/336741088_189599313788543_5570875510915584089_n.jpg?stp=c18.0.116.80a_dst-jpg_p110x80&_nc_cat=110&ccb=1-7&_nc_sid=036dc3&_nc_ohc=DC8d3cgoCDgAX85NFp_&_nc_oc=AQnQQFkcr3PCMd-wBPVr5df5T3TxjeJjVk3TrKFQJY79I5AILbikDYal31GuGnlDmQ4&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfBeuWccuPkzaN9guJmfJhQhUCjIK-nzAD378iMat26nQA&oe=64260A2F',
    _id: '2b8dbee102ef7cac6083d7e3906a0b62c8bbec5c'
  },
  {
    title: 'Liat Dagan Live I 3.5.23 I ליאת דגן בהופעה',
    date: 'WED, 3 MAY AT 21:00 UTC+03',
    location: 'Liat Dagan Music',
    link: 'https://www.facebook.com/events/950454746130586/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/335869174_237456132179988_1461225423464493582_n.jpg?stp=c22.0.116.80a_dst-jpg_p110x80&_nc_cat=110&ccb=1-7&_nc_sid=036dc3&_nc_ohc=3esAYuXOShMAX9NniCN&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfD4tZb2K3E6iFzhSPw8rTvHH5Q0HBPXXYh4BDSfgvGajQ&oe=6424A877',
    _id: '8e671d1e36ebd364056782f943a87eaf9dcc54d0'
  },
  {
    title: 'Jam Session & Bottomless Wine',
    date: 'TUE, 28 MAR AT 20:00 UTC+03 AND 4 MORE',
    location: 'ORION • אוריון',
    link: 'https://www.facebook.com/events/1500979397067837/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/335273062_1873919159632750_4792121986700579707_n.jpg?stp=c18.0.116.80a_dst-jpg_p110x80&_nc_cat=100&ccb=1-7&_nc_sid=036dc3&_nc_ohc=2sAvB4UdcJcAX8T2FuL&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfCdOzfFpW6P61gocni399b17N48pl0n_zq4tKBv82Jpyw&oe=6424F7F9',
    _id: '688661d1398addaa5656ea295d4ff8908e29d9c8'
  },
  {
    title: 'Jam Session & Bottomless Wine',
    date: 'TUES, 28 MAR AT 20:00 UTC+03',
    location: 'ORION • אוריון',
    link: 'https://www.facebook.com/events/1500979397067837/?event_time_id=1538821239950319',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.30497-1/84668831_168042434612076_74269678289027072_n.jpg?stp=c5.0.116.80a_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=036dc3&_nc_ohc=sre0sBlZiwsAX_1b0Gn&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAOPnsb0nCpj54zfLRZPJHluAoGx5KT5kW_L8ECgfIE5Q&oe=6447990C',
    _id: '73a1702c1a055d619a56e91e7e762fce07c482d9'
  },
  {
    title: 'Noa Wincour & Alon Lifshitz Music Show',
    date: 'WED, 29 MAR AT 20:00 UTC+03',
    location: 'ORION • אוריון',
    link: 'https://www.facebook.com/events/182830064495366/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/336167166_219644450584856_1464073096303784562_n.jpg?stp=c18.0.116.80a_dst-jpg_p110x80&_nc_cat=111&ccb=1-7&_nc_sid=036dc3&_nc_ohc=srk2SowP_gIAX_55WZN&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfDJy4xonyXntXFxsdUnxopAVhuQdg7RB1j37IlR9qajAw&oe=64248DC1',
    _id: '76780794cb0fff7011058753628b43dd895eee5c'
  },
  {
    title: 'Pub Quiz',
    date: 'SUN, 2 APR AT 20:00 UTC+03',
    location: 'ORION • אוריון',
    link: 'https://www.facebook.com/events/1827824297584896/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/336755487_563058325890589_1410027239075391088_n.jpg?stp=c18.0.116.80a_dst-jpg_p110x80&_nc_cat=102&ccb=1-7&_nc_sid=036dc3&_nc_ohc=ASHvBP9mwvEAX-ZqVnK&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfD4BwKXvbNhLXNvdFdpuUI-K4t9fwTOLBSMWFmdWGMcGQ&oe=64255AFD',
    _id: 'e21757e99d6941d4dc045420ca20759d21cd5006'
  },
  {
    title: 'Jam Session & Bottomless Wine',
    date: 'TUES, 4 APR AT 20:00 UTC+03',
    location: 'ORION • אוריון',
    link: 'https://www.facebook.com/events/1500979397067837/?event_time_id=1538821243283652',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.30497-1/84668831_168042434612076_74269678289027072_n.jpg?stp=c5.0.116.80a_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=036dc3&_nc_ohc=sre0sBlZiwsAX_1b0Gn&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAOPnsb0nCpj54zfLRZPJHluAoGx5KT5kW_L8ECgfIE5Q&oe=6447990C',
    _id: 'e5c91b098af3b62389f9ec5a9794a1aa59672a09'
  },
  {
    title: 'Jam Session & Bottomless Wine',
    date: 'TUES, 11 APR AT 20:00 UTC+03',
    location: 'ORION • אוריון',
    link: 'https://www.facebook.com/events/1500979397067837/?event_time_id=1538821249950318',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.30497-1/84668831_168042434612076_74269678289027072_n.jpg?stp=c5.0.116.80a_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=036dc3&_nc_ohc=sre0sBlZiwsAX_1b0Gn&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAOPnsb0nCpj54zfLRZPJHluAoGx5KT5kW_L8ECgfIE5Q&oe=6447990C',
    _id: 'd96e871ee2cc504f380f2e9180b7abf0631791f2'
  },
  {
    title: 'Jam Session & Bottomless Wine',
    date: 'TUES, 18 APR AT 20:00 UTC+03',
    location: 'ORION • אוריון',
    link: 'https://www.facebook.com/events/1500979397067837/?event_time_id=1538821246616985',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.30497-1/84668831_168042434612076_74269678289027072_n.jpg?stp=c5.0.116.80a_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=036dc3&_nc_ohc=sre0sBlZiwsAX_1b0Gn&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAOPnsb0nCpj54zfLRZPJHluAoGx5KT5kW_L8ECgfIE5Q&oe=6447990C',
    _id: 'fd4d64ff3b74342f3f0fbaf6e25a6e3fa826606a'
  },
  {
    title: 'Jam Session & Bottomless Wine',
    date: 'TUES, 25 APR AT 20:00 UTC+03',
    location: 'ORION • אוריון',
    link: 'https://www.facebook.com/events/1500979397067837/?event_time_id=1538821233283653',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.30497-1/84668831_168042434612076_74269678289027072_n.jpg?stp=c5.0.116.80a_dst-jpg_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=036dc3&_nc_ohc=sre0sBlZiwsAX_1b0Gn&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAOPnsb0nCpj54zfLRZPJHluAoGx5KT5kW_L8ECgfIE5Q&oe=6447990C',
    _id: '91e6b18ce4474e0d2392723f33720c0709c263fc'
  },
  {
    title: 'Trombanote Music Show',
    date: 'WED, 14 JUN AT 21:00 UTC+03',
    location: 'ORION • אוריון',
    link: 'https://www.facebook.com/events/6028805937164289/',
    img: 'https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/321379972_1281301805748940_9078948213321310321_n.jpg?stp=c12.0.116.80a_dst-jpg_p110x80&_nc_cat=103&ccb=1-7&_nc_sid=036dc3&_nc_ohc=Q-41ouFyrHgAX_m7fbN&_nc_ht=scontent.ftlv5-1.fna&oh=00_AfAbosB9f7SydMDw2mbBgIP2rUooQLFpph5vJEvw7FVTJA&oe=642557CB',
    _id: '9a31bd0cae8155e17ad0e46c4a705663c29fcaed'
  }
]

function sortByDate(evs) {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  evs.sort((a, b) => {

    if (a.date && b.date) {
      try {
        let aShortDate = a.date.split(' AT ')[0].split(',')[1].trim();
        let bShortDate = b.date.split(' AT ')[0].split(',')[1].trim();
        const [dayA, monthA] = aShortDate.split(' ');
        const [dayB, monthB] = bShortDate.split(' ');
        const monthIndexA = months.indexOf(monthA);
        const monthIndexB = months.indexOf(monthB);

        if (monthIndexA === monthIndexB) {
          return parseInt(dayA) - parseInt(dayB);
        }

        return monthIndexA - monthIndexB;
      } catch (e) {
        console.log(e);
        return;
      }
    } else {
      return;
    }
  });
  return evs;
}

// Sorting events by date
events.sort((a, b) => {
  if (a.date && b.date) {
    try {
      aShortDate = a.date.split(' AT ')[0];
      aShortDate = aShortDate.split(',')[1].trim();
      bShortDate = b.date.split(' AT ')[0];
      bShortDate = bShortDate.split(',')[1].trim();

      const [dayA, monthA] = aShortDate.split(' ');
      const [dayB, monthB] = bShortDate.split(' ');
      const monthIndexA = months.indexOf(monthA);
      const monthIndexB = months.indexOf(monthB);

      if (monthIndexA === monthIndexB) {
        return parseInt(dayA) - parseInt(dayB);
      }

      return monthIndexA - monthIndexB;
    } catch (e) {
      console.log(e);
      return;
    }
  } else {
    return;
  }
});

console.log(events);