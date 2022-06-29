import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, retry } from 'rxjs';
import { Fight } from '../models/fight';

@Injectable({
  providedIn: 'root'
})
export class FightService {

  constructor(private http: HttpClient) { }

  private fightURL = "http://localhost:8080/nutritioknights/fight";

  getCurrentFight(username: string): Promise<Fight> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("u", username);
    return firstValueFrom(this.http.put<Fight>(this.fightURL, {}, { params: queryParams }).pipe(retry(5)));
  }

  getFightHistory(username: string): Promise<Fight[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("u", username);
    return firstValueFrom(this.http.get<Fight[]>(this.fightURL + "/history", { params: queryParams }));
  }

}
