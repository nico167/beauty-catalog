import { Product, CategoryInfo } from '@/types/product';

export const categories: CategoryInfo[] = [
  {
    id: 'skincare',
    name: 'Cuidado de la Piel',
    description: 'Productos para el cuidado facial y corporal',
    icon: '🧴'
  },
  {
    id: 'makeup',
    name: 'Maquillaje',
    description: 'Productos de maquillaje y color',
    icon: '💄'
  },
  {
    id: 'haircare',
    name: 'Cuidado Capilar',
    description: 'Productos para el cuidado del cabello',
    icon: '💇‍♀️'
  },
  {
    id: 'bodycare',
    name: 'Cuidado Corporal',
    description: 'Productos para el cuidado del cuerpo',
    icon: '🧴'
  },
  {
    id: 'fragrance',
    name: 'Fragancias',
    description: 'Perfumes y fragancias',
    icon: '🌸'
  },
  {
    id: 'tools',
    name: 'Herramientas',
    description: 'Herramientas y accesorios de belleza',
    icon: '🔧'
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Serum de Vitamina C',
    brand: 'GlowSkin',
    category: 'skincare',
    subcategory: 'Serums',
    price: 35.000,
    description: 'Serum concentrado con vitamina C que ilumina y unifica el tono de la piel, reduciendo manchas y signos de envejecimiento.',
    ingredients: [
      'Ácido L-Ascórbico (Vitamina C)',
      'Ácido Hialurónico',
      'Vitamina E',
      'Agua destilada',
      'Glicerina'
    ],
    benefits: [
      'Ilumina el rostro',
      'Reduce manchas oscuras',
      'Estimula la producción de colágeno',
      'Protege contra radicales libres'
    ],
    usage: 'Aplicar 2-3 gotas en rostro limpio por las mañanas. Seguir con protector solar.',
    images: [
      {
        url: 'https://drive.google.com/uc?export=view&id=1nFq-3-_rYqKYsKxVEwCijPKCURDf28Zp',
        alt: 'Serum de Vitamina C - Vista principal',
        isMain: true
      },
      {
        url: 'https://drive.google.com/uc?export=view&id=1_a5MBMeog0CMXzpcWHaSkMF9bASHQQop',
        alt: 'Serum de Vitamina C - Textura',
        isMain: false
      }
    ],    
    tags: ['antioxidante', 'iluminador', 'anti-edad']
  },
  {
    id: '2',
    name: 'Base de Maquillaje Natural',
    brand: 'PureBeauty',
    category: 'makeup',
    subcategory: 'Base',
    price: 65.99,
    description: 'Base de cobertura media a completa con acabado natural. Fórmula libre de parabenos y apta para todo tipo de piel.',
    ingredients: [
      'Agua',
      'Dimeticona',
      'Óxidos de hierro',
      'Glicerina',
      'Ácido hialurónico'
    ],
    benefits: [
      'Cobertura natural',
      'Larga duración',
      'No comedogénica',
      'SPF 20'
    ],
    usage: 'Aplicar con brocha o esponja húmeda sobre la piel limpia e hidratada.',
    images: [
      {
        url: '/images/products/makeup/foundation-natural-main.jpg',
        alt: 'Base de Maquillaje Natural - Vista principal',
        isMain: true
      }
    ],
    tags: ['natural', 'cobertura-media', 'spf']
  },
  {
    id: '3',
    name: 'Shampoo Reparador',
    brand: 'HairLux',
    category: 'haircare',
    subcategory: 'Shampoo',
    price: 45.99,
    description: 'Shampoo reparador intensivo para cabello dañado y quebradizo. Con keratina y aceite de argán.',
    ingredients: [
      'Keratina hidrolizada',
      'Aceite de argán',
      'Proteínas de seda',
      'Agua',
      'Sulfatos suaves'
    ],
    benefits: [
      'Repara el cabello dañado',
      'Aporta brillo y suavidad',
      'Fortalece la fibra capilar',
      'Reduce la rotura'
    ],
    usage: 'Aplicar sobre cabello húmedo, masajear y enjuagar. Repetir si es necesario.',
    images: [
      {
        url: '/images/products/haircare/shampoo-repair-main.jpg',
        alt: 'Shampoo Reparador - Vista principal',
        isMain: true
      }
    ],
    tags: ['reparador', 'keratina', 'cabello-dañado']
  },
  {
    id: '4',
    name: 'Crema Hidratante Corporal',
    brand: 'SoftSkin',
    category: 'bodycare',
    subcategory: 'Hidratantes',
    price: 35.99,
    description: 'Crema hidratante corporal de absorción rápida con manteca de karité y aceite de coco.',
    ingredients: [
      'Manteca de karité',
      'Aceite de coco',
      'Glicerina',
      'Agua',
      'Vitamina E'
    ],
    benefits: [
      'Hidratación profunda',
      'Absorción rápida',
      'Piel suave y sedosa',
      'Aroma delicado'
    ],
    usage: 'Aplicar sobre piel limpia y seca con movimientos circulares hasta completa absorción.',
    images: [
      {
        url: '/images/products/bodycare/body-cream-main.jpg',
        alt: 'Crema Hidratante Corporal - Vista principal',
        isMain: true
      }
    ],
    tags: ['hidratante', 'karité', 'absorción-rápida']
  },
  {
    id: '5',
    name: 'Perfume Floral Elegante',
    brand: 'Essence',
    category: 'fragrance',
    subcategory: 'Perfumes',
    price: 125.99,
    description: 'Fragancia femenina con notas florales de jazmín, rosa y peonía. Perfecta para ocasiones especiales.',
    ingredients: [
      'Alcohol denat.',
      'Parfum',
      'Aqua',
      'Limonene',
      'Linalool'
    ],
    benefits: [
      'Aroma duradero',
      'Notas florales elegantes',
      'Proyección moderada',
      'Versatil día/noche'
    ],
    usage: 'Pulverizar sobre puntos de pulso: muñecas, cuello y detrás de las orejas.',
    images: [
      {
        url: '/images/products/fragrance/perfume-floral-main.jpg',
        alt: 'Perfume Floral Elegante - Vista principal',
        isMain: true
      }
    ],
    tags: ['floral', 'elegante', 'duradero']
  },
  {
    id: '6',
    name: 'Set de Brochas Profesionales',
    brand: 'ProMakeup',
    category: 'tools',
    subcategory: 'Brochas',
    price: 78.99,
    description: 'Set completo de 12 brochas profesionales para maquillaje con estuche incluido.',
    ingredients: [
      'Cerdas sintéticas',
      'Mango de madera',
      'Férula de aluminio',
      'Estuche de cuero sintético'
    ],
    benefits: [
      'Aplicación profesional',
      'Cerdas suaves y densas',
      'Fácil limpieza',
      'Incluye estuche'
    ],
    usage: 'Usar cada brocha según su función específica. Limpiar regularmente con limpiador de brochas.',
    images: [
      {
        url: '/images/products/tools/brush-set-main.jpg',
        alt: 'Set de Brochas Profesionales - Vista principal',
        isMain: true
      }
    ],
    tags: ['profesional', 'set-completo', 'sintéticas']
  }
];
