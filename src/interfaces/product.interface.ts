export interface Product {
    // id: string
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: Size[];
    slug: string;
    tags: string[];
    title: string;
    type: Type;
}

export type Size = '64GB' | '128GB' | '256GB' | '512GB' | '13-inch' | '15-inch' | '17-inch' | 'Standard' | 'Digital';
export type Type = 'iphone' | 'laptop' | 'console'; 