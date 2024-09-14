export interface USFngData {
  fear_and_greed: {
    score: number;
    rating: string;
    timestamp: string;
    previous_close: number;
    previous_1_week: number;
    previous_1_month: number;
    previous_1_year: number;
  };
  fear_and_greed_historical: {
    timestamp: number;
    score: number;
    rating: string;
    data: Array<{
      x: number;
      y: number;
      rating: string;
    }>;
  };
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

export interface CryptoFearAndGreedHistory {
  success: number;
  data: {
    labels: string[];
    datasets: {
      backgroundColor: string;
      borderColor: string;
      data: number[];
      fill: boolean;
      label: string;
    }[];
  };
}
