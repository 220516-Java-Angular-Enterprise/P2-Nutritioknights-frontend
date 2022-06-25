import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Healthinfo} from '../models/healthinfo';
// services are our get requests. Our HTTP verbs
//your interface needs to match your jason.
//you will be using forms in order to make post requests

@Injectable({
  providedIn: 'root'
})
export class HealthinfoService {

  /* Dependency Injection. */
  constructor(private http: HttpClient) { }
//double curly bracelets is how you print out the Json values
  private restoURL = "http://localhost:8080/nutritioknights/healthinfo";

  // getAllRestaurants(): Promise<Restaurant[]> { //this is a promise of restaurants of array. returns array of restaurants. Imported from models. 
  //   return firstValueFrom(this.http.get<Restaurant[]>(this.restoURL));// first service to talk to our backend API and retrieve json file. Doing a get request to that URL like postman.
  // }

  // getRestaurantById(id: string): Promise<Restaurant> {
  //   return firstValueFrom(this.http.get<Restaurant>(this.restoURL + "/" + id)); //after this go to app routing module to specify new path
  // }

  createNewquestionnaire(quest: Healthinfo) {
    return firstValueFrom(this.http.post(this.restoURL, quest)); // this is a post request
  }
}

