export interface USFngData {
  score: number;
  rating: string;
  timestamp: string;
  previous_close: number;
  previous_1_week: number;
  previous_1_month: number;
  previous_1_year: number;
}

export interface CryptoFngDataItem {
  value: string;
  value_classification: string;
  timestamp: string;
  time_until_update: string;
}

export interface CryptoFngData {
  name: string;
  data: CryptoFngDataItem[];
  metadata: {
    error: null | string;
  };
}
