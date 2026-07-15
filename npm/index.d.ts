declare module '@apiverve/textsimilarity' {
  export interface textsimilarityOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface textsimilarityResponse {
    status: string;
    error: string | null;
    data: TextSimilarityData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface TextSimilarityData {
      simiarity:               number | null;
      similarityCaseSensitive: number | null;
      difference:              Difference;
  }
  
  interface Difference {
      count:      number | null;
      percentage: number | null;
  }

  export default class textsimilarityWrapper {
    constructor(options: textsimilarityOptions);

    execute(callback: (error: any, data: textsimilarityResponse | null) => void): Promise<textsimilarityResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: textsimilarityResponse | null) => void): Promise<textsimilarityResponse>;
    execute(query?: Record<string, any>): Promise<textsimilarityResponse>;
  }
}
