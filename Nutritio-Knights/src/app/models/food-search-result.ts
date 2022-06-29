export interface FoodSearchResult {

}
export interface FoodSearchResult {
    pageNumber: number;
    maxResults: number;
    totalResults: number;
    results: CompactFood[];
  }
  
  export interface CompactFood {
    name: string;
    url: string;
    type: string;
    id: number;
    description: string;
    brandName: any;
  }
  
