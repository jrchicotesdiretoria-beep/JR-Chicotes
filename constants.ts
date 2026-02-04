import { Product, UserTier, PricingFactors } from './types.ts';

export const COLORS = {
  primary: '#F26522', // JR Orange
  secondary: '#1A1A1B', // JR Black
  accent: '#E55410'
};

export const PRICING_TIER_FACTORS: PricingFactors = {
  [UserTier.DISTRIBUTOR]: 0.85, // 15% discount
  [UserTier.RETAILER]: 0.95,    // 5% discount
  [UserTier.OEM]: 0.75          // 25% discount
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'JR 02-001',
    price: 1.89,
    ref01: '1.021.005',
    ref02: '7743',
    application: 'Chicote do Sensor de Temperatura',
    imageUrl: 'https://picsum.photos/seed/jr1/400/400'
  },
  {
    id: 'JR 02-003',
    price: 1.69,
    ref01: '1.021.018',
    ref02: '7731',
    application: 'Chicote da Bomba de Combustível',
    imageUrl: 'https://picsum.photos/seed/jr2/400/400'
  },
  {
    id: 'JR 02-007',
    price: 1.99,
    ref01: '1.021.138',
    ref02: '7179',
    application: 'Chicote Lanterna Traseira',
    imageUrl: 'https://picsum.photos/seed/jr3/400/400'
  },
  {
    id: 'JR 02-031',
    price: 3.49,
    ref01: '1.021.129',
    ref02: '7663',
    application: 'Chicote Bico Injetor',
    imageUrl: 'https://picsum.photos/seed/jr4/400/400'
  },
  {
    id: 'JR 04-010',
    price: 9.75,
    ref01: '1.041.439',
    ref02: '7664',
    application: 'Chicote Farol Milha',
    imageUrl: 'https://picsum.photos/seed/jr5/400/400'
  },
  {
    id: 'JR 04-019',
    price: 9.55,
    ref01: 'N/A',
    ref02: '7687',
    application: 'Chicote do Alternador',
    imageUrl: 'https://picsum.photos/seed/jr6/400/400'
  },
  {
    id: 'JR 05-002',
    price: 4.99,
    ref01: '1.051.088',
    ref02: '7760',
    application: 'Chicote Bobina Ignição',
    imageUrl: 'https://picsum.photos/seed/jr7/400/400'
  },
  {
    id: 'JR 05-003',
    price: 18.79,
    ref01: '5.000.726',
    ref02: '7599',
    application: 'Chicote ABS Dianteiro',
    imageUrl: 'https://picsum.photos/seed/jr8/400/400'
  },
  {
    id: 'JR 07-002',
    price: 9.99,
    ref01: '1.071.417',
    ref02: '7665',
    application: 'Chicote Sensor Estacionamento',
    imageUrl: 'https://picsum.photos/seed/jr9/400/400'
  },
  {
    id: 'JR 07-005',
    price: 24.75,
    ref01: '1.071.933',
    ref02: '5659',
    application: 'Chicote Porta Traseira',
    imageUrl: 'https://picsum.photos/seed/jr10/400/400'
  }
];

export const WHATSAPP_NUMBER = '5511941984234';