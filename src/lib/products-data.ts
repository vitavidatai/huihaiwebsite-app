import { Language } from './i18n';

export interface ProductItem {
  id: string;
  modelNumber: string;
  category: 'dusters' | 'mops';
  name: Record<Language, string>;
  summary: Record<Language, string>;
  applications: Record<Language, string[]>;
  placeholderText: string;
  placeholderAspect: string;
  heroImage: string;
  sceneImage: string;
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'szhh-01',
    modelNumber: 'SZHH-01',
    category: 'dusters',
    name: {
      en: '360 Duster (Omnidirectional Electrostatic Duster)',
      ja: '360°可抛式静電気ダスター (360 Duster)',
      zh: '360°可抛式静电除尘掸'
    },
    summary: {
      en: 'Original design omnidirectional 360-degree disposable electrostatic duster head for full-angle dust trapping.',
      ja: '360度全方位の立体静電気ファイバーで、あらゆる角度のホコリをしっかりキャッチする使い捨てダスター。',
      zh: '原创设计360度全方位蓬松静电吸尘除尘掸头，高效锁尘死角不扬尘。'
    },
    applications: {
      en: ['TV Cabinet & Electronic Screens', 'Ceiling Corners & Air Conditioners', 'Sofas & Furniture Lacunes', 'Chandeliers & Lamps', 'Bookcases & Shelves', 'Plant Leaves', 'Bicycles & Car Interior'],
      ja: ['テレビ画面・家電', '天井の角・エアコン', 'ソファ・家具の隙間', '照明器具・吊灯', '本棚・家具の角', '観葉植物の叶', '自転車・車内インテリア'],
      zh: ['电视机屏幕', '天花板角落及空调', '沙发及家具缝隙', '吊灯及照明灯具', '书架及椅角', '植物叶片', '自行车及车内饰面']
    },
    placeholderText: 'Product Photo Slot: # NO.SZHH-01 (360 Duster)',
    placeholderAspect: 'aspect-[4/3]',
    heroImage: '/images/products/szhh-01-hero.jpg',
    sceneImage: '/images/products/szhh-01-scene.jpg'
  },
  {
    id: 'szhh-02',
    modelNumber: 'SZHH-02',
    category: 'dusters',
    name: {
      en: '180 Duster (Flexible Angle Electrostatic Duster)',
      ja: '180°可抛式静電気ダスター (180 Duster)',
      zh: '180°可抛式静电除尘掸'
    },
    summary: {
      en: '180-degree pivoting head disposable electrostatic duster designed for flat surfaces, high shelves, and narrow cracks.',
      ja: '180度角度調整可能な可動ヘッドを搭載。高い場所や隙間の埃をスマートに除去。',
      zh: '180度灵活弯折抓头设计，轻松擦拭高处搁板、柜顶及狭长缝隙。'
    },
    applications: {
      en: ['TV Cabinets & Electronics', 'High Shelves & Bookshelves', 'Radiators & Heater Grids', 'Ceiling Edges', 'Furniture Lacunes', 'Window Sills'],
      ja: ['テレビ台・家電表面', '棚上・本棚', '暖房器具・ラジエーター', '天井のフチ', '家具の狭い隙間', '窓枠・サッシ'],
      zh: ['电视柜及电子屏幕', '高处搁板及书架', '暖气片缝隙', '天花板边缘', '家具缝隙', '窗台缝隙']
    },
    placeholderText: 'Product Photo Slot: # NO.SZHH-02 (180 Duster)',
    placeholderAspect: 'aspect-[4/3]',
    heroImage: '/images/products/szhh-02-hero.jpg',
    sceneImage: '/images/products/szhh-02-scene.jpg'
  },
  {
    id: 'szhh-03',
    modelNumber: 'SZHH-03',
    category: 'dusters',
    name: {
      en: '270 Duster (Adjustable Angle Electrostatic Duster)',
      ja: '270°可抛式静電気ダスター (270 Duster)',
      zh: '270°可抛式静电除尘掸'
    },
    summary: {
      en: '270-degree adjustable head electrostatic duster engineered for targeted corner dust pickup.',
      ja: '270度角度調整可能な可動ヘッド静電気ダスター。家具や家電の表面を効率的に清掃。',
      zh: '270度多角度可调静电吸尘除尘掸，专为高处及窄缝表面抓尘设计。'
    },
    applications: {
      en: ['Hardwood & Flat Surfaces', 'Cabinet Tops', 'Ceiling Edges', 'Wall Frames', 'Furniture Lacunes'],
      ja: ['フローリング・平坦面', 'キャビネット天板', '天井のフチ', '壁掛け額縁', '家具の狭い隙間'],
      zh: ['木地板及平整面', '柜顶及阁板', '天花板边缘', '挂画及框饰', '家具缝隙']
    },
    placeholderText: 'Product Photo Slot: # NO.SZHH-03 (270 Duster)',
    placeholderAspect: 'aspect-[4/3]',
    heroImage: '/images/products/szhh-03-hero.jpg',
    sceneImage: '/images/products/szhh-03-scene.jpg'
  },
  {
    id: 'szhh-04',
    modelNumber: 'SZHH-04',
    category: 'mops',
    name: {
      en: 'Sweeper with Pure Fiber',
      ja: '純繊維 拖地干巾 (Sweeper with Pure Fiber)',
      zh: '纯纤维拖地干巾'
    },
    summary: {
      en: 'Pure fiber static charged dry mopping refill sheet for multi-surface floor sweeping.',
      ja: '純繊維構造のドライモップ取替シート。フローリングや大理石の埃・髪の毛を絡め取ります。',
      zh: '纯纤维静电干式拖地巾，专为地面毛发及灰尘去尘除尘设计。'
    },
    applications: {
      en: ['Hardwood Floors', 'Tile Floors', 'Vinyl Floors', 'Marble & Natural Stone'],
      ja: ['木製フローリング', 'タイル床', 'ビニール床・クッションフロア', '大理石・天然石床'],
      zh: ['木地板', '瓷砖地面', 'PVC乙烯基地面', '大理石及石材地面']
    },
    placeholderText: 'Product Photo Slot: # NO.SZHH-04 (Sweeper with Pure Fiber)',
    placeholderAspect: 'aspect-[4/3]',
    heroImage: '/images/products/szhh-04-hero.jpg',
    sceneImage: '/images/products/szhh-04-scene.jpg'
  },
  {
    id: 'szhh-05',
    modelNumber: 'SZHH-05',
    category: 'mops',
    name: {
      en: 'Sweeper with Bio Fiber',
      ja: '双組份 拖地干巾 (Sweeper with Bio Fiber)',
      zh: '双组份拖地干巾'
    },
    summary: {
      en: 'Advanced bi-component textured nonwoven dry floor refill sheets engineered for static dust and pet hair capture.',
      ja: '双組份（バイコンポーネント）不織布を採用。立体エンボス構造で床の髪の毛やペットの毛を吸着。',
      zh: '双组份复合无纺布立体凹凸结构干拖巾，强效抓取地面毛发细尘。'
    },
    applications: {
      en: ['Hardwood Floors', 'Tile Floors', 'Vinyl Floors', 'Marble & Natural Stone'],
      ja: ['木製フローリング', 'タイル床', 'ビニール床・クッションフロア', '大理石・天然石床'],
      zh: ['木地板', '瓷砖地面', 'PVC乙烯基地面', '大理石及石材地面']
    },
    placeholderText: 'Product Photo Slot: # NO.SZHH-05 (Sweeper with Bio Fiber)',
    placeholderAspect: 'aspect-[4/3]',
    heroImage: '/images/products/szhh-05-hero.jpg',
    sceneImage: '/images/products/szhh-05-scene.jpg'
  }
];
