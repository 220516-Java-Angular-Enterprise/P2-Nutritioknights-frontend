import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Monster } from '../models/monster';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  constructor(private http: HttpClient) { }

  private fightURL = "http://testing-env-1.eba-ve96qwy6.us-east-1.elasticbeanstalk.com/nutritioknights/monsters";

  getAllMonsters(): Promise<Monster[]> {
    return firstValueFrom(this.http.get<Monster[]>(this.fightURL));
  }
}
