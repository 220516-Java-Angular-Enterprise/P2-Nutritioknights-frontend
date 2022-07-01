import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom, retry } from 'rxjs';
import { Food } from '../models/food';
import { FoodEntry } from '../models/food-entry';
import { FoodEntryPretty } from '../models/food-entry-pretty';
@Injectable({
  providedIn: 'root'
})
export class JournalService {

  constructor(private http: HttpClient) { }

  getEntry(id:string): Promise<FoodEntry>{
    const url = 'http://testing-env-1.eba-ve96qwy6.us-east-1.elasticbeanstalk.com/nutritioknights/journal/entry';
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id",id);
    return firstValueFrom(this.http.get<FoodEntry>(url,{params:queryParams, responseType: 'json'}).pipe(retry(5)));
  }
  getActivity(username:string): Promise<String[]>{
    const url = 'http://testing-env-1.eba-ve96qwy6.us-east-1.elasticbeanstalk.com/nutritioknights/journal/activity';
    let queryParams = new HttpParams();
    queryParams = queryParams.append("u",username);
    return firstValueFrom(this.http.get<String[]>(url,{params:queryParams, responseType: 'json'}).pipe(retry(5)));
  }

  getUserEntriesByDate(date:number,username:string): Promise<FoodEntry[]>{
    const url = 'http://testing-env-1.eba-ve96qwy6.us-east-1.elasticbeanstalk.com/nutritioknights/journal/date';
    let queryParams = new HttpParams();
    queryParams = queryParams.append("d",date);
    queryParams = queryParams.append("u",username);
    return firstValueFrom(this.http.get<FoodEntry[]>(url,{params:queryParams, responseType: 'json'}).pipe(retry(5)));
    
  }
  getUserEntriesByDatePretty(date:number,username:string): Promise<FoodEntryPretty[]>{
    const url = 'http://testing-env-1.eba-ve96qwy6.us-east-1.elasticbeanstalk.com/nutritioknights/journal/pretty';
    let queryParams = new HttpParams();
    queryParams = queryParams.append("d",date);
    queryParams = queryParams.append("u",username);
    return firstValueFrom(this.http.get<FoodEntryPretty[]>(url,{params:queryParams, responseType: 'json'}).pipe(retry(5)));
    
  }
  getUserEntriesByMealname(mealname:number, username:string):Promise<FoodEntry[]>{
    const url = 'http://testing-env-1.eba-ve96qwy6.us-east-1.elasticbeanstalk.com/nutritioknights/journal/suggest';
    let queryParams = new HttpParams();
    queryParams = queryParams.append("m",mealname);
    queryParams = queryParams.append("u",username);
    return firstValueFrom(this.http.get<FoodEntry[]>(url,{params:queryParams, responseType: 'json'}).pipe(retry(5))); 
  }
  postEntry(request:FoodEntry):Promise<String>{
    const url = 'http://testing-env-1.eba-ve96qwy6.us-east-1.elasticbeanstalk.com/nutritioknights/journal/';
    console.log(request);
    return firstValueFrom(this.http.post<String>(url,request,{ responseType: 'json' })); 
  }
  getDateInt():number{
    return Math.floor(Date.now()/(1000*60*60*24));
  }
  
  // deleteEntry(target:string){
  //   const url = 'http://localhost:8080/nutritioknights/journal';
  // }
  async deleteEntry(target:string|undefined):Promise<String>{
    try {
      const response = await fetch('http://testing-env-1.eba-ve96qwy6.us-east-1.elasticbeanstalk.com/nutritioknights/journal/'+target, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      console.log('Entry deleted successfully');
  
      return 'Entry deleted successfully';
    } catch (error) {
      if (error instanceof Error) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }
}
