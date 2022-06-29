import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom, retry } from 'rxjs';
import { Food } from '../models/food';
import { FoodEntry } from '../models/food-entry';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor(private http: HttpClient) { }

  getEntry(id:string): Promise<FoodEntry>{
    const url = 'http://localhost:8080/nutritioknights/journal/entry';
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id",id);
    return firstValueFrom(this.http.get<FoodEntry>(url,{params:queryParams, responseType: 'json'}).pipe(retry(5)));
  }
  getActivity(user:string): Promise<String[]>{
    const url = 'http://localhost:8080/nutritioknights/journal/activity';
    let queryParams = new HttpParams();
    queryParams = queryParams.append("u",user);
    return firstValueFrom(this.http.get<String[]>(url,{params:queryParams, responseType: 'json'}).pipe(retry(5)));
  }

  getUserEntriesByDate(date:number): Promise<FoodEntry[]>{
    const url = 'http://localhost:8080/nutritioknights/journal/date';
    let queryParams = new HttpParams();
    queryParams = queryParams.append("d",date);
    return firstValueFrom(this.http.get<FoodEntry[]>(url,{params:queryParams, responseType: 'json'}).pipe(retry(5)));
    
  }

  getUserEntriesByMealname(mealname:number):Promise<FoodEntry[]>{
    const url = 'http://localhost:8080/nutritioknights/journal/suggest';
    let queryParams = new HttpParams();
    queryParams = queryParams.append("m",mealname);
    return firstValueFrom(this.http.get<FoodEntry[]>(url,{params:queryParams, responseType: 'json'}).pipe(retry(5))); 
  }
  postEntry(request:FoodEntry):Promise<String>{
    const url = 'http://localhost:8080/nutritioknights/journal';
    return firstValueFrom(this.http.post<String>(url,request,{ responseType: 'json' }).pipe(retry(5))); 
  }
/*
  deleteEntry(target:string):{

  }
*/

}
