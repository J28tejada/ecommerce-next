interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
}

type ValidSizes =
  | "64GB"
  | "128GB"
  | "256GB"
  | "512GB"
  | "13-inch"
  | "15-inch"
  | "17-inch"
  | "Standard"
  | "Digital";
type ValidTypes = "iphone" | "laptop" | "console";

interface SeedData {
  categories: string[];
  products: SeedProduct[];
}

export const initialData: SeedData = {
  categories: ["iphone", "laptop", "console"],
  products: [
    // iPhones (8 productos)
    {
      description:
        "El nuevo iPhone 14 Pro ofrece una cámara avanzada, pantalla Super Retina XDR y el chip A16 Bionic para un rendimiento excepcional.",
      images: ["iphone14pro_front.jpg", "iphone14pro_back.jpg"],
      inStock: 15,
      price: 999,
      sizes: ["128GB", "256GB", "512GB"],
      slug: "iphone_14_pro",
      tags: ["smartphone", "apple", "pro"],
      title: "iPhone 14 Pro",
      type: "iphone",
    },
    {
      description:
        "El iPhone 14 cuenta con mejoras en la duración de la batería, cámaras duales y un diseño elegante en varios colores.",
      images: ["iphone14_front.jpg", "iphone14_side.jpg"],
      inStock: 20,
      price: 899,
      sizes: ["128GB", "256GB"],
      slug: "iphone_14",
      tags: ["smartphone", "apple"],
      title: "iPhone 14",
      type: "iphone",
    },
    {
      description:
        "El iPhone 13 ofrece un excelente equilibrio entre rendimiento y duración de batería, con sistema de cámara dual.",
      images: ["iphone13_front.jpg", "iphone13_back.jpg"],
      inStock: 18,
      price: 799,
      sizes: ["128GB", "256GB", "512GB"],
      slug: "iphone_13",
      tags: ["smartphone", "apple"],
      title: "iPhone 13",
      type: "iphone",
    },
    {
      description:
        "El iPhone 13 Mini combina tamaño compacto con potencia, ideal para quienes buscan rendimiento en un formato pequeño.",
      images: ["iphone13mini_front.jpg", "iphone13mini_back.jpg"],
      inStock: 10,
      price: 699,
      sizes: ["64GB", "128GB", "256GB"],
      slug: "iphone_13_mini",
      tags: ["smartphone", "apple", "mini"],
      title: "iPhone 13 Mini",
      type: "iphone",
    },
    {
      description:
        "El iPhone SE combina un diseño clásico con tecnología moderna, perfecto para usuarios que buscan un dispositivo compacto y asequible.",
      images: ["iphonese_front.jpg", "iphonese_back.jpg"],
      inStock: 25,
      price: 429,
      sizes: ["64GB", "128GB"],
      slug: "iphone_se",
      tags: ["smartphone", "apple", "económico"],
      title: "iPhone SE",
      type: "iphone",
    },
    {
      description:
        "El iPhone 12 destaca por su diseño innovador, pantalla OLED y conectividad 5G, para una experiencia de última generación.",
      images: ["iphone12_front.jpg", "iphone12_back.jpg"],
      inStock: 22,
      price: 749,
      sizes: ["64GB", "128GB", "256GB"],
      slug: "iphone_12",
      tags: ["smartphone", "apple", "5G"],
      title: "iPhone 12",
      type: "iphone",
    },
    {
      description:
        "El iPhone 12 Pro maximiza la potencia con su triple cámara y capacidades avanzadas en fotografía y video.",
      images: ["iphone12pro_front.jpg", "iphone12pro_back.jpg"],
      inStock: 14,
      price: 999,
      sizes: ["128GB", "256GB", "512GB"],
      slug: "iphone_12_pro",
      tags: ["smartphone", "apple", "pro"],
      title: "iPhone 12 Pro",
      type: "iphone",
    },
    {
      description:
        "El iPhone 11 ofrece un equilibrio perfecto entre rendimiento y precio, con una cámara dual y un diseño robusto.",
      images: ["iphone11_front.jpg", "iphone11_back.jpg"],
      inStock: 30,
      price: 599,
      sizes: ["64GB", "128GB", "256GB"],
      slug: "iphone_11",
      tags: ["smartphone", "apple"],
      title: "iPhone 11",
      type: "iphone",
    },
    // Laptops (8 productos)
    {
      description:
        "La MacBook Pro de 16 pulgadas con chip M1 Max ofrece un rendimiento inigualable para profesionales creativos.",
      images: ["macbookpro16_front.jpg", "macbookpro16_side.jpg"],
      inStock: 10,
      price: 2499,
      sizes: ["13-inch", "15-inch", "17-inch"],
      slug: "macbook_pro_16",
      tags: ["laptop", "apple", "macbook"],
      title: 'MacBook Pro 16"',
      type: "laptop",
    },
    {
      description:
        "La MacBook Air con chip M1 combina portabilidad y potencia, ideal para tareas diarias y productividad.",
      images: ["macbookair_front.jpg", "macbookair_side.jpg"],
      inStock: 12,
      price: 1199,
      sizes: ["13-inch"],
      slug: "macbook_air_m1",
      tags: ["laptop", "apple", "air"],
      title: "MacBook Air M1",
      type: "laptop",
    },
    {
      description:
        "La Dell XPS 15 ofrece una experiencia visual excepcional con su pantalla InfinityEdge y rendimiento de alta gama.",
      images: ["dellxps15_front.jpg", "dellxps15_side.jpg"],
      inStock: 8,
      price: 1399,
      sizes: ["15-inch"],
      slug: "dell_xps_15",
      tags: ["laptop", "dell", "xps"],
      title: "Dell XPS 15",
      type: "laptop",
    },
    {
      description:
        "La HP Spectre x360 es una laptop convertible con diseño elegante y potencia para multitarea y creatividad.",
      images: ["hpspectrex360_front.jpg", "hpspectrex360_side.jpg"],
      inStock: 9,
      price: 1299,
      sizes: ["13-inch", "15-inch"],
      slug: "hp_spectre_x360",
      tags: ["laptop", "hp", "convertible"],
      title: "HP Spectre x360",
      type: "laptop",
    },
    {
      description:
        "La Lenovo ThinkPad X1 Carbon destaca por su durabilidad y rendimiento, ideal para profesionales exigentes.",
      images: ["thinkpadx1_front.jpg", "thinkpadx1_side.jpg"],
      inStock: 7,
      price: 1599,
      sizes: ["15-inch"],
      slug: "thinkpad_x1_carbon",
      tags: ["laptop", "lenovo", "thinkpad"],
      title: "Lenovo ThinkPad X1 Carbon",
      type: "laptop",
    },
    {
      description:
        "La ASUS ROG Zephyrus es perfecta para gaming, con una pantalla de alta tasa de refresco y componentes de alto rendimiento.",
      images: ["asusrog_front.jpg", "asusrog_side.jpg"],
      inStock: 5,
      price: 1799,
      sizes: ["15-inch", "17-inch"],
      slug: "asus_rog_zephyrus",
      tags: ["laptop", "asus", "gaming"],
      title: "ASUS ROG Zephyrus",
      type: "laptop",
    },
    {
      description:
        "La Microsoft Surface Laptop 4 ofrece un diseño elegante y una experiencia fluida para trabajo y entretenimiento.",
      images: ["surface_laptop4_front.jpg", "surface_laptop4_side.jpg"],
      inStock: 11,
      price: 1499,
      sizes: ["13-inch", "15-inch"],
      slug: "surface_laptop_4",
      tags: ["laptop", "microsoft", "surface"],
      title: "Surface Laptop 4",
      type: "laptop",
    },
    {
      description:
        "La Acer Swift 3 combina rendimiento sólido y construcción ligera, perfecta para estudiantes y profesionales.",
      images: ["acerswift3_front.jpg", "acerswift3_side.jpg"],
      inStock: 13,
      price: 999,
      sizes: ["13-inch", "15-inch"],
      slug: "acer_swift_3",
      tags: ["laptop", "acer", "ultrabook"],
      title: "Acer Swift 3",
      type: "laptop",
    },
    // Consolas de Videojuegos (8 productos)
    {
      description:
        "La PlayStation 5 ofrece gráficos inmersivos y tiempos de carga ultrarrápidos gracias a su SSD de última generación.",
      images: ["ps5_front.jpg", "ps5_controller.jpg"],
      inStock: 20,
      price: 499,
      sizes: ["Standard", "Digital"],
      slug: "playstation_5",
      tags: ["console", "gaming", "playstation"],
      title: "PlayStation 5",
      type: "console",
    },
    {
      description:
        "La Xbox Series X proporciona potencia bruta y un rendimiento excepcional para juegos en 4K.",
      images: ["xbox_seriesx_front.jpg", "xbox_seriesx_side.jpg"],
      inStock: 18,
      price: 499,
      sizes: ["Standard", "Digital"],
      slug: "xbox_series_x",
      tags: ["console", "gaming", "xbox"],
      title: "Xbox Series X",
      type: "console",
    },
    {
      description:
        "La Nintendo Switch ofrece la versatilidad de jugar en casa o en movimiento con su diseño híbrido único.",
      images: ["nintendo_switch_front.jpg", "nintendo_switch_side.jpg"],
      inStock: 25,
      price: 299,
      sizes: ["Standard"],
      slug: "nintendo_switch",
      tags: ["console", "gaming", "nintendo"],
      title: "Nintendo Switch",
      type: "console",
    },
    {
      description:
        "La PlayStation 4 sigue siendo una consola popular con una amplia biblioteca de juegos y un rendimiento estable.",
      images: ["ps4_front.jpg", "ps4_controller.jpg"],
      inStock: 30,
      price: 299,
      sizes: ["Standard"],
      slug: "playstation_4",
      tags: ["console", "gaming", "playstation"],
      title: "PlayStation 4",
      type: "console",
    },
    {
      description:
        "La Xbox One ofrece entretenimiento completo con acceso a una gran variedad de juegos y servicios multimedia.",
      images: ["xbox_one_front.jpg", "xbox_one_controller.jpg"],
      inStock: 28,
      price: 249,
      sizes: ["Standard"],
      slug: "xbox_one",
      tags: ["console", "gaming", "xbox"],
      title: "Xbox One",
      type: "console",
    },
    {
      description:
        "La PlayStation 5 Digital Edition es ideal para quienes prefieren descargar sus juegos sin lector de discos.",
      images: ["ps5_digital_front.jpg", "ps5_digital_controller.jpg"],
      inStock: 16,
      price: 399,
      sizes: ["Digital"],
      slug: "playstation_5_digital",
      tags: ["console", "gaming", "playstation"],
      title: "PlayStation 5 Digital Edition",
      type: "console",
    },
    {
      description:
        "La Xbox Series S ofrece una experiencia de próxima generación en un formato compacto y asequible.",
      images: ["xbox_series_s_front.jpg", "xbox_series_s_side.jpg"],
      inStock: 22,
      price: 299,
      sizes: ["Digital"],
      slug: "xbox_series_s",
      tags: ["console", "gaming", "xbox"],
      title: "Xbox Series S",
      type: "console",
    },
    {
      description:
        "La Nintendo Switch Lite es una versión más pequeña y ligera de la Switch, ideal para juegos portátiles.",
      images: [
        "nintendo_switch_lite_front.jpg",
        "nintendo_switch_lite_side.jpg",
      ],
      inStock: 35,
      price: 199,
      sizes: ["Standard"],
      slug: "nintendo_switch_lite",
      tags: ["console", "gaming", "nintendo"],
      title: "Nintendo Switch Lite",
      type: "console",
    },
  ],
};
