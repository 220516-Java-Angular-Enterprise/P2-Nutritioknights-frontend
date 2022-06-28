export interface Food {
    name: string;
    url: string;
    type: string;
    id: number;
    description: any;
    brandName: string;
    servings: Serving[];
  };
  
  export interface Serving {
    servingId: number;
    servingDescription: string;
    servingUrl: string;
    metricServingAmount: number;
    metricServingUnit: string;
    numberOfUnits: number;
    measurementDescription: string;
    calories: number;
    carbohydrate: number;
    protein: number;
    fat: number;
    saturatedFat: number;
    polyunsaturatedFat: number;
    monounsaturatedFat: number;
    transFat: any;
    cholesterol: number;
    sodium: number;
    potassium: number;
    fiber: number;
    sugar: number;
    vitaminA: number;
    vitaminC: number;
    calcium: number;
    iron: number;
  }
  
