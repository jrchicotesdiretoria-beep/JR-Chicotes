
export enum UserTier {
  DISTRIBUTOR = 'Distribuidor',
  RETAILER = 'Lojista',
  OEM = 'OEM / Indústria'
}

export interface Product {
  id: string; // JR ID
  price: number;
  ref01: string; // Anteriormente codTC
  ref02: string; // Anteriormente codRainha
  application: string;
  imageUrl: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  appliedPrice: number;
}

export interface UserSession {
  name: string;
  cnpj: string;
  tier: UserTier;
}

export interface PricingFactors {
  [UserTier.DISTRIBUTOR]: number;
  [UserTier.RETAILER]: number;
  [UserTier.OEM]: number;
}
