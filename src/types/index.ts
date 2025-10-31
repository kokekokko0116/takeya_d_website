// 共通型定義

export interface Store {
    id: string;
    name: string;
    address: string;
    phone: string;
    hours: string;
    image: string;
    features: string[];
    mapUrl?: string;
    lat?: number;
    lng?: number;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    image: string;
    features: string[];
    link: string;
}

export interface NewsItem {
    id: string;
    date: string;
    category: string;
    title: string;
    excerpt: string;
    image?: string;
    link: string;
}

export interface Testimonial {
    id: string;
    name: string;
    age?: number;
    location: string;
    comment: string;
    rating: number;
    image?: string;
    purchaseItem?: string;
}

export interface Employee {
    id: string;
    name: string;
    position: string;
    department: string;
    image: string;
    message: string;
    joinedYear: number;
}

export interface JobPosting {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string; // 正社員、パート等
    description: string;
    requirements: string[];
    benefits: string[];
}

export interface CompanyInfo {
    name: string;
    founded: string;
    capital: string;
    employees: number;
    ceo: string;
    address: string;
    phone: string;
    business: string[];
}

export interface Achievement {
    value: string;
    label: string;
    suffix?: string;
}

