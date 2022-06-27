import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { UserInfo } from '../models/userinfo';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private http: HttpClient) { }

  private restoURL = "http://localhost:8080/nutritioknights/userinfo";

  getUserInfoByEmail(email: string): Promise<UserInfo> {
    return firstValueFrom(this.http.get<UserInfo>(this.restoURL + "/e=" + email));
  }

  createNewUserInfo(email: string, quest: UserInfo) {
    return firstValueFrom(this.http.post(this.restoURL, quest, { responseType: 'text' })); // this is a post request
  }

}
