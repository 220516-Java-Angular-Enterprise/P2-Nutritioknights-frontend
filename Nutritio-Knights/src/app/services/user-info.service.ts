import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { UserInfo } from '../models/userinfo';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private http: HttpClient) { }

  private restoURL = "http://localhost:8080/nutritioknights/userinfo";

  // getUserInfoByEmail(email: string): Promise<UserInfo> {
  //   return firstValueFrom(this.http.get<UserInfo>(this.restoURL + "/e=" + email));
  // }

  createNewquestionnaire(email: string, quest: UserInfo) {
    return firstValueFrom(this.http.post(this.restoURL, quest)); // this is a post request
  }

  getUserInfoByEmail(email: string, cache: boolean): Promise<UserInfo>  {
    let headers: HttpHeaders;
    if (cache) {
      headers = new HttpHeaders({ 'cache-response': 'true' });
    } else{
      headers = new HttpHeaders();
    }
    return firstValueFrom(this.http.get<UserInfo>(this.restoURL + "/e=" + email,{ headers }))
    ;
  }




}
