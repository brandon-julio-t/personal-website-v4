export type BanterBubblesDataResponse = CryptoAsset[];

export interface CryptoAsset {
  id: string;
  name: string;
  image: string;
  marketCap: number;
  fully_diluted_valuation?: number;
  circulating_supply: number;
  total_supply?: number;
  rank: number;
  performance: Performance;
  priceHistory: any[];
  price: number;
  volume: number;
  symbol: string;
  categories?: string[];
  detail_platforms?: Record<string, PlatformDetails>;
  contract_address?: string;
  localImage?: string;
  bubbleColorOverride: any;
}

export interface Performance {
  m1: number;
  m4: number;
  m5: number;
  m15: number;
  h: number;
  h4: number;
  d: number;
  w: number;
  m: number;
  y: number;
}

interface PlatformDetails {
  decimal_place?: number;
  contract_address: string;
}
