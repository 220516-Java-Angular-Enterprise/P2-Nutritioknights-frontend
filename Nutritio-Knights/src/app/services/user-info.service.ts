import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, retry } from 'rxjs';
import { UserInfo } from '../models/userinfo';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private http: HttpClient) { }

  private userURL = "http://localhost:8080/nutritioknights/userinfo";

  getUserInfoByEmail(email: string): Promise<UserInfo> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("e",email);
    return firstValueFrom(this.http.get<UserInfo>(this.userURL,{params:queryParams}).pipe(retry(5)));
  }

  getUserInfoByUsername(username: string): Promise<UserInfo> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("u", username);
    return firstValueFrom(this.http.get<UserInfo>(this.userURL, { params: queryParams }).pipe(retry(5)));
  }

  createNewUserInfo(email: string, quest: UserInfo) {
    return firstValueFrom(this.http.post(this.userURL, quest, { responseType: 'text' })); // this is a post request
  }


}
