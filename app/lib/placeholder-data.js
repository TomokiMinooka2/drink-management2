// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data

const users = [
  //M1
  {
    name: '佐藤豪',
    email: 'sato.go@ohsuga.lab.uec.ac.jp',
    password: 'satogo',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },
  {
    name: '岡野日翔',
    email: 'okano.haruka@ohsuga.lab.uec.ac.jp',
    password: 'okanoharuka',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },
  {
    name: '美濃岡知樹',
    email: 'minoka.tomoki@ohsuga.lab.uec.ac.jp',
    password: 'minokatomoki',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },
  {
    name: '木村晃和',
    email: 'kimura.akikazu@ohsuga.lab.uec.ac.jp',
    password: 'kimuraakikazu',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },
  {
    name: '関優花',
    email: 'seki.yuka@ohsuga.lab.uec.ac.jp',
    password: 'sekiyuka',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },
  {
    name: '佐々木嵩仁',
    email: 'sasaki.taketo@ohsuga.lab.uec.ac.jp',
    password: 'sasakitaketo',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },
  {
    name: '前島涼弥',
    email: 'maejima.ryoya@ohsuga.lab.uec.ac.jp',
    password: 'maejimaryoya',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },
  {
    name: '藤山仁聖',
    email: 'fujiyama.masatoshi@ohsuga.lab.uec.ac.jp',
    password: 'fujiyamamasatoshi',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },

  //M2
  {
    name: '浅古瑞穂',
    email: 'asako.mizuho@ohsuga.lab.uec.ac.jp',
    password: 'asakomizuho',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },
  {
    name: '大貫泰弘',
    email: 'ohnuki.yasuhiro@ohsuga.lab.uec.ac.jp',
    password: 'ohnukiyasuhiro',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },
  {
    name: '熊倉多香音',
    email: 'kumakura.takane@ohsuga.lab.uec.ac.jp',
    password: 'kumakuratakane',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },
  {
    name: '斎藤健三郎',
    email: 'saito.kenzaburo@ohsuga.lab.uec.ac.jp',
    password: 'saitokenzaburo',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },
  {
    name: '酒井佑旗',
    email: 'sakai.yuki@ohsuga.lab.uec.ac.jp',
    password: 'sakaiyuki',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },
  {
    name: '境田晃大',
    email: 'sakaida.koudai@ohsuga.lab.uec.ac.jp',
    password: 'sakaidakoudai',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },
  {
    name: '田中智大',
    email: 'tanaka.tomohiro@ohsuga.lab.uec.ac.jp',
    password: 'tanakatomohiro',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },
  {
    name: '南智仁',
    email: 'minami.tomohito@ohsuga.lab.uec.ac.jp',
    password: 'minami.tomohito',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },
  {
    name: '山本拓実',
    email: 'yamamoto.takumi@ohsuga.lab.uec.ac.jp',
    password: 'yamamototakumi',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },
  {
    name: '鳥越湧真',
    email: 'torikoshi.yuma@ohsuga.lab.uec.ac.jp',
    password: 'torikoshiyuma',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },
  //B4
  {
    name: '石田泰一',
    email: 'ishida.yasukazu@agent.lab.uec.ac.jp',
    password: '',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },
  {
    name: '長内勇輝',
    email: 'osanai.yuki@agent.lab.uec.ac.jp',
    password: 'osanaiyuki',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },
  {
    name: '幸喜礼佳',
    email: 'koki.raika@agent.lab.uec.ac.jp',
    password: 'kokiraika',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },
  {
    name: '佐藤星弥',
    email: 'sato.seiya@agent.lab.uec.ac.jp',
    password: 'satoseiya',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },
  {
    name: '原亜美佳',
    email: 'hara.amika@agent.lab.uec.ac.jp',
    password: 'haraamika',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },
  {
    name: '二見拓輝',
    email: 'hutami.hiroki@agent.lab.uec.ac.jp',
    password: 'hutamihiroki',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },
  {
    name: '松本良磨',
    email: 'matsumoto.ryoma@agent.lab.uec.ac.jp',
    password: 'matsumotoryoma',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },
  {
    name: '横山治輝',
    email: 'yokoyama.haruki@agent.lab.uec.ac.jp',
    password: 'yokoyamaharuki',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },
  //ゲストがログインする用
  {
    name: 'ゲスト',
    email: 'guest@drink.com',
    password: '123456',
    voted: false,
    sum_voted: 0,
    lastvotereset: '2024-06-04',
  },
];

const drink = [
  {
    id: 'd0',
    name: 'saida-',
    japanesename: 'サイダー',
    voted: 0,
    price: 150,
    path: '/drink/cider.png',
    totalvoted: 0,
  },
  {
    id: 'd1',
    name: 'kokako-ra',
    japanesename: 'コカコーラ',
    voted: 0,
    price: 150,
    path: '/drink/cocacola.png',
    totalvoted: 0,
  },
  {
    id: 'd2',
    name: 'karupisu',
    japanesename: 'カルピス',
    voted: 0,
    price: 150,
    path: '/drink/calpis.png',
    totalvoted: 0,
  },
  {
    id: 'd3',
    name: 'gure-pukarupisu',
    japanesename: 'グレープカルピス',
    voted: 0,
    price: 150,
    path: '/drink/grape_calpis.png',
    totalvoted: 0,
  },
  {
    id: 'd4',
    name: 'fanntaorennji',
    japanesename: 'ファンタオレンジ',
    voted: 0,
    price: 150,
    path: '/drink/fanta_orange.png',
    totalvoted: 0,
  },
  {
    id: 'd5',
    name: 'karupisuso-da',
    japanesename: 'カルピスソーダ',
    voted: 0,
    price: 150,
    path: '/drink/calpis_soda.png',
    totalvoted: 0,
  },
  {
    id: 'd6',
    name: 'ccremon',
    japanesename: 'CCレモン',
    voted: 0,
    price: 150,
    path: '/drink/cclemon.png',
    totalvoted: 0,
  },
  {
    id: 'd7',
    name: 'mettuko-ra',
    japanesename: 'メッツコーラ',
    voted: 0,
    price: 150,
    path: '/drink/mets_cola.png',
    totalvoted: 0,
  },
  {
    id: 'd8',
    name: 'oranngi-na',
    japanesename: 'オランジーナ',
    voted: 0,
    price: 150,
    path: '/drink/orangina.png',
    totalvoted: 0,
  },
  {
    id: 'd9',
    name: 'iemon',
    japanesename: '伊右衛門',
    voted: 0,
    price: 150,
    path: '/drink/iemon.png',
    totalvoted: 0,
  },
  {
    id: 'd10',
    name: 'kirinnremonn',
    japanesename: 'キリンレモン',
    voted: 0,
    price: 150,
    path: '/drink/kirin_lemon.png',
    totalvoted: 0,
  },
  {
    id: 'd11',
    name: 'pepusizero',
    japanesename: 'ペプシゼロ',
    voted: 0,
    price: 150,
    path: '/drink/pepsi_zero.png',
    totalvoted: 0,
  },
  {
    id: 'd12',
    name: 'soukennbicha',
    japanesename: '爽健美茶',
    voted: 0,
    price: 150,
    path: '/drink/soukenbicha.png',
    totalvoted: 0,
  },
  {
    id: 'd13',
    name: 'suja-tanomukajituorenji',
    japanesename: 'スジャータ のむ果実 オレンジ',
    voted: 0,
    price: 150,
    path: '/drink/sujata_orange.png',
    totalvoted: 0,
  },
  {
    id: 'd14',
    name: 'gogonokouchasutore-to',
    japanesename: '午後の紅茶ストレート',
    voted: 0,
    price: 150,
    path: '/drink/tea_straight.png',
    totalvoted: 0,
  },
  {
    id: 'd15',
    name: 'gogonokouchamiruku',
    japanesename: '午後の紅茶ミルク',
    voted: 0,
    price: 150,
    path: '/drink/tea_milk.png',
    totalvoted: 0,
  },
  {
    id: 'd16',
    name: 'gogonokoucharemon',
    japanesename: '午後の紅茶レモン',
    voted: 0,
    price: 150,
    path: '/drink/tea_lemon.png',
    totalvoted: 0,
  },
  {
    id: 'd17',
    name: 'gogonokouchamutou',
    japanesename: '午後の紅茶無糖',
    voted: 0,
    price: 150,
    path: '/drink/tea_nonsugar.png',
    totalvoted: 0,
  },
  {
    id: 'd18',
    name: 'fanntagure-pu',
    japanesename: 'ファンタ グレープ',
    voted: 0,
    price: 150,
    path: '/drink/fanta_grape.png',
    totalvoted: 0,
  },
  {
    id: 'd19',
    name: 'gyuunyuu',
    japanesename: '牛乳',
    voted: 0,
    price: 150,
    path: '/drink/milk.png',
    totalvoted: 0,
  },
  {
    id: 'd20',
    name: 'ko-hi-gyuunyuu',
    japanesename: 'コーヒー牛乳',
    voted: 0,
    price: 150,
    path: '/drink/coffeemilk.png',
    totalvoted: 0,
  },
  {
    id: 'd21',
    name: 'kokako-razero',
    japanesename: 'コカ・コーラゼロ',
    voted: 0,
    price: 150,
    path: '/drink/cocacola_zero.png',
    totalvoted: 0,
  },
  {
    id: 'd22',
    name: 'budoukarupisu',
    japanesename: 'ぶどう&カルピス',
    voted: 0,
    price: 150,
    path: '/drink/budou_calpis.png',
    totalvoted: 0,
  },
  {
    id: 'd23',
    name: 'yasaiappuru',
    japanesename: '野菜生活アップル',
    voted: 0,
    price: 150,
    path: '/drink/yasaiapple.png',
    totalvoted: 0,
  },
  {
    id: 'd24',
    name: 'yasaimango-',
    japanesename: '野菜生活マンゴー',
    voted: 0,
    price: 150,
    path: '/drink/yasaimango.png',
    totalvoted: 0,
  },
];

const vote = [];

const system = [
  {
    lastTotalization: '2024-05-01',
  },
];

const result = [
  {
    date: '2024-07-01',
    name: 'yasaimango-',
    japanesename: '野菜生活マンゴー',
    price: 150,
    path: '/drink/yasaimango.png',
  },
  {
    date: '2024-07-01',
    name: 'kokako-razero',
    japanesename: 'コカ・コーラゼロ',
    path: '/drink/cocacola_zero.png',
    price: 340,
  },
  {
    date: '2024-07-01',
    name: 'fanntagure-pu',
    japanesename: 'ファンタ グレープ',
    price: 500,
    path: '/drink/fanta_grape.png',
  },
  {
    date: '2024-07-01',
    name: 'suja-tanomukajituorenji',
    japanesename: 'スジャータ のむ果実 オレンジ',
    price: 274,
    path: '/drink/sujata_orange.png',
  },
];

module.exports = {
  users,
  drink,
  vote,
  system,
  result,
};
