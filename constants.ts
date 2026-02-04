
import { Product, UserTier, PricingFactors } from './types';

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

export const WHOLESALE_MIN_QTY = 250;
export const WHOLESALE_DISCOUNT = 0.9; // Additional 10% off for bulk

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'JR 02-001',
    price: 1.89,
    codTC: '1.021.005',
    codRainha: 'ETE 7743',
    application: 'Chicote do Sensor de Temperatura',
    imageUrl: 'https://picsum.photos/seed/jr1/400/400'
  },
  {
    id: 'JR 02-003',
    price: 1.69,
    codTC: '1.021.018',
    codRainha: 'ETE 7731',
    application: 'Chicote da Bomba de Combustível',
    imageUrl: 'https://picsum.photos/seed/jr2/400/400'
  },
  {
    id: 'JR 02-007',
    price: 1.99,
    codTC: '1.021.138',
    codRainha: 'ETE 7179',
    application: 'Chicote Lanterna Traseira',
    imageUrl: 'https://picsum.photos/seed/jr3/400/400'
  },
  {
    id: 'JR 02-031',
    price: 3.49,
    codTC: '1.021.129',
    codRainha: 'ETE 7663',
    application: 'Chicote Bico Injetor',
    imageUrl: 'https://picsum.photos/seed/jr4/400/400'
  },
  {
    id: 'JR 04-010',
    price: 9.75,
    codTC: '1.041.439',
    codRainha: 'ETE 7664',
    application: 'Chicote Farol Milha',
    imageUrl: 'https://picsum.photos/seed/jr5/400/400'
  },
  {
    id: 'JR 04-019',
    price: 9.55,
    codTC: 'N/A',
    codRainha: 'ETE 7687',
    application: 'Chicote do Alternador',
    imageUrl: 'https://picsum.photos/seed/jr6/400/400'
  },
  {
    id: 'JR 05-002',
    price: 4.99,
    codTC: '1.051.088',
    codRainha: 'ETE 7760',
    application: 'Chicote Bobina Ignição',
    imageUrl: 'https://picsum.photos/seed/jr7/400/400'
  },
  {
    id: 'JR 05-003',
    price: 18.79,
    codTC: '5.000.726',
    codRainha: 'ETE 7599',
    application: 'Chicote ABS Dianteiro',
    imageUrl: 'https://picsum.photos/seed/jr8/400/400'
  },
  {
    id: 'JR 07-002',
    price: 9.99,
    codTC: '1.071.417',
    codRainha: 'ETE 7665',
    application: 'Chicote Sensor Estacionamento',
    imageUrl: 'https://picsum.photos/seed/jr9/400/400'
  },
  {
    id: 'JR 07-005',
    price: 24.75,
    codTC: '1.071.933',
    codRainha: 'ETE 5659',
    application: 'Chicote Porta Traseira',
    imageUrl: 'https://picsum.photos/seed/jr10/400/400'
  }
];

export const WHATSAPP_NUMBER = '5511941984234';
