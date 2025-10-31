// 定数定義

import { Store, Service, Achievement, CompanyInfo } from '@/types';

// 会社情報
export const COMPANY_INFO: CompanyInfo = {
    name: 'タケヤ電機株式会社',
    founded: '1953年',
    capital: '9,600万円',
    employees: 120,
    ceo: '竹家 聡',
    address: '〒761-0113 香川県高松市屋島西町1911-1',
    phone: '087-841-8338',
    business: [
        '家庭用電気製品・電子機器の販売および修理',
        'リフォーム事業',
        '太陽光発電システムの販売・施工',
        '住宅設備機器の販売・施工',
    ],
};

// キーメッセージ
export const KEY_MESSAGES = {
    hero: '運命の１台 届けます',
    subHero: '家電+リフォーム＝２倍の幸せ',
    anniversary: '創業70周年の信頼と実績',
    region: '香川県で愛される地域密着型サービス',
};

// 実績数値
export const ACHIEVEMENTS: Achievement[] = [
    { value: '70', label: '創業年数', suffix: '年' },
    { value: '120', label: '従業員数', suffix: '名' },
    { value: '4', label: '店舗数', suffix: '店舗' },
    { value: '50000', label: '年間販売台数', suffix: '台+' },
];

// 店舗情報
export const STORES: Store[] = [
    {
        id: 'yashima',
        name: '屋島店',
        address: '〒761-0113 香川県高松市屋島西町1911-1',
        phone: '087-841-8338',
        hours: '10:00～19:00',
        image: '/images/stores/yashima.jpg',
        features: ['本店', '大型駐車場完備', '家電フルラインナップ', 'リフォーム相談'],
        mapUrl: 'https://goo.gl/maps/example1',
    },
    {
        id: 'ougimachi',
        name: '高松扇町店',
        address: '〒761-8074 香川県高松市太田上町507-1',
        phone: '087-868-2733',
        hours: '10:00～19:00',
        image: '/images/stores/ougimachi.jpg',
        features: ['駅近アクセス良好', '都市型店舗', '最新家電展示'],
        mapUrl: 'https://goo.gl/maps/example2',
    },
    {
        id: 'shido',
        name: 'さぬき志度店',
        address: '〒769-2101 香川県さぬき市志度1899-1',
        phone: '087-894-1129',
        hours: '10:00～19:00',
        image: '/images/stores/shido.jpg',
        features: ['広々とした店内', '家族連れ歓迎', '豊富な在庫'],
        mapUrl: 'https://goo.gl/maps/example3',
    },
    {
        id: 'miki',
        name: 'さぬき三木店',
        address: '〒761-0702 香川県木田郡三木町平木750-1',
        phone: '087-813-5580',
        hours: '10:00～19:00',
        image: '/images/stores/miki.jpg',
        features: ['新店舗', '駐車場広々', '最新設備'],
        mapUrl: 'https://goo.gl/maps/example4',
    },
];

// サービス情報
export const SERVICES: Service[] = [
    {
        id: 'appliances',
        title: '家電販売',
        description: '最新の家電製品から定番商品まで、幅広い品揃え。お客様のライフスタイルに合わせた最適な商品をご提案します。',
        icon: 'devices',
        image: '/images/services/appliances.jpg',
        features: [
            '大手メーカー全商品取扱い',
            '専門スタッフによる丁寧な説明',
            '配送・設置・アフターサービス',
            '下取り・買取サービス',
        ],
        link: '/services/appliances',
    },
    {
        id: 'reform',
        title: 'リフォーム',
        description: 'キッチン、バス、トイレなどの水回りから、内装・外装まで。住まいの快適性を高めるリフォームをトータルサポート。',
        icon: 'construction',
        image: '/images/services/reform.jpg',
        features: [
            'キッチン・バス・トイレ',
            '内装・外装リフォーム',
            '太陽光発電システム',
            'オール電化',
        ],
        link: '/services/reform',
    },
    {
        id: 'support',
        title: 'アフターサービス',
        description: '購入後も安心。専門の技術スタッフが迅速に対応。修理、メンテナンス、使い方のご相談まで。',
        icon: 'support_agent',
        image: '/images/services/support.jpg',
        features: [
            '修理・メンテナンス',
            '使い方サポート',
            '出張サービス',
            '長期保証プラン',
        ],
        link: '/services/support',
    },
    {
        id: 'consultation',
        title: '技術サポート',
        description: '家電選びからリフォーム計画まで、専門知識を持ったスタッフが無料でご相談に応じます。',
        icon: 'chat',
        image: '/images/services/consultation.jpg',
        features: [
            '無料相談',
            '見積もり作成',
            'ライフスタイル提案',
            '省エネアドバイス',
        ],
        link: '/services/consultation',
    },
];

// ナビゲーションメニュー
export const NAVIGATION_ITEMS = [
    { label: 'ホーム', path: '/' },
    {
        label: '会社案内',
        path: '/about',
        children: [
            { label: 'これがタケヤデンキ', path: '/about' },
            { label: '企業理念', path: '/philosophy' },
            { label: '経営戦略', path: '/strategy' },
            { label: '会社概要', path: '/company' },
        ]
    },
    {
        label: 'サービス',
        path: '/services',
        children: [
            { label: '家電販売', path: '/services/appliances' },
            { label: 'リフォーム', path: '/services/reform' },
            { label: 'アフターサービス', path: '/services/support' },
        ]
    },
    { label: '店舗情報', path: '/stores' },
    { label: '採用情報', path: '/careers' },
    { label: 'お問い合わせ', path: '/contact' },
];

// SNS・外部リンク
export const SOCIAL_LINKS = {
    facebook: 'https://www.facebook.com/takeya-d',
    twitter: 'https://twitter.com/takeya-d',
    instagram: 'https://www.instagram.com/takeya-d',
    line: 'https://line.me/R/ti/p/@takeya-d',
};

