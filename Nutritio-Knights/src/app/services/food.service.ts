import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getFood(id:number|string): Observable<Food> {
    const url = 'http://localhost:8080/nutritioknights/foods';
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id",id);
    return this.http.get<Food>(url,{params:queryParams});
}

searchFood(query:string): Observable<FoodSearchResult>{
  const url = 'http://localhost:8080/nutritioknights/foods/search';
  let queryParams = new HttpParams();
  queryParams = queryParams.append("q",query);
  return this.http.get<FoodSearchResult>(url,{params:queryParams});
}

searchFoodPage(query:string,page:number):Observable<CompactFood[]>
}
