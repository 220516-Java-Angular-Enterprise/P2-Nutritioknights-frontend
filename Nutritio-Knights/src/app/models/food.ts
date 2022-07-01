import { Serving } from 'src/app/models/serving';
export interface Food {
    name: string;
    url: string;
    type: string;
    id: number;
    description: any;
    brandName: string;
    servings: Serving[];
    entryId?:string;
  };
  