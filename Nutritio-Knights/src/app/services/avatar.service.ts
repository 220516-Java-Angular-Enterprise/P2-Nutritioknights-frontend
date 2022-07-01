import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, retry } from 'rxjs';
import { Avatar } from '../models/avatar';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private http: HttpClient) {}

  private avatarURL = "http://testing-env-1.eba-ve96qwy6.us-east-1.elasticbeanstalk.com/nutritioknights/avatar";


  createNewAvatar(username: string, gender: string) {
    return firstValueFrom(this.http.post(this.avatarURL, {'username':username, 'gender':gender }, { responseType: 'text' })); // this is a post request
  }

  getAvatarByUsername(username: string): Promise<Avatar> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("u", username);
    return firstValueFrom(this.http.get<Avatar>(this.avatarURL, { params: queryParams }));
  }
}
