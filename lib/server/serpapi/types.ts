export interface SerpApiGoogleTrendsResponse {
  search_metadata: {
    id: string;
    status: string;
    json_endpoint: string;
    created_at: string;
    processed_at: string;
    google_trends_url: string;
    raw_html_file: string;
    prettify_html_file: string;
    total_time_taken: number;
  };
  search_parameters: {
    engine: string;
    q: string;
    hl: string;
    date: string;
    tz: string;
    data_type: string;
  };
  interest_over_time: {
    timeline_data: Array<{
      date: string;
      timestamp: string;
      values: Array<{
        query: string;
        value: string;
        extracted_value: number;
      }>;
    }>;
    averages: Array<{
      query: string;
      value: number;
    }>;
  };
}
