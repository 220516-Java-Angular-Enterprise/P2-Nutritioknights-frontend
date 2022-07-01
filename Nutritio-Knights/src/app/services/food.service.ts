import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom, retry } from 'rxjs';
import { Food } from '../models/food';
import { FoodSearchResult } from '../models/food-search-result';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getFood(id:number|string): Promise<Food> {
    const url = 'http://localhost:8080/nutritioknights/foods';
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id",id);
    return firstValueFrom(this.http.get<Food>(url,{params:queryParams, responseType: 'json'}).pipe(retry(5)));
  }
  getFoodWithServing(id:number|string,s:number|string): Promise<Food> {
    const url = 'http://localhost:8080/nutritioknights/foods';
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id",id);
    queryParams = queryParams.append("s",s)
    return firstValueFrom(this.http.get<Food>(url,{params:queryParams, responseType: 'json'}).pipe(retry(5)));
  }

  searchFood(query:string): Promise<FoodSearchResult>{
  const url = 'http://localhost:8080/nutritioknights/foods/search';
  let queryParams = new HttpParams();
  queryParams = queryParams.append("q",query);
  return firstValueFrom(this.http.get<FoodSearchResult>(url,{params:queryParams, responseType: 'json'}).pipe(retry(5)));
  }

  searchFoodPage(query:string,page:number):Promise<FoodSearchResult>{
  const url = 'http://localhost:8080/nutritioknights/foods/search';
  let queryParams = new HttpParams();
  queryParams = queryParams.append("q",query);
  queryParams = queryParams.append("p",page);
  return firstValueFrom(this.http.get<FoodSearchResult>(url,{params:queryParams, responseType: 'json'}).pipe(retry(5)));
  }
}