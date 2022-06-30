import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/models/food';
import { FoodEntry } from 'src/app/models/food-entry';
import { FoodService } from 'src/app/services/food.service';
import { JournalService } from 'src/app/services/journal.service';
import { Serving } from 'src/app/models/serving';
import { FoodSearchResult } from 'src/app/models/food-search-result';

@Component({
  selector: 'app-journal-user',
  templateUrl: './journal-user.component.html',
  styleUrls: ['./journal-user.component.css']
})
export class JournalUserComponent implements OnInit {
  
  
  hasEntriesToday: boolean = false;
  username: string = '';
  activity: String[] = [];
  todayEntries: FoodEntry[] = [];
  todayFoods: Food[] =[];
  hasSearched: boolean = false;
  query: string = '';
  selectedFood: Food= {} as Food;
  hasSelectedFood: boolean= true;
  numServings: number =  0;
  selectedServingId: number = 0;

  searchResult:FoodSearchResult = {
    pageNumber: 0,
    maxResults: 50,
    totalResults: 0,
    results: []
  }

  constructor(private journalService:JournalService,  private foodService: FoodService, private currRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //assign username, then initialize
    this.currRouter.params.subscribe(p=> {
      this.username = p['username'];
      //get userentries for today
      this.getTodayEntries(p['username'])
      //get user activity in order to display past entries
      this.getActivity(p['username'])
    })  
  }
  

  getActivity(u:string){
    this.journalService.getActivity(u).then(a => {
      this.activity = a;
    }
    )
  }
  getTodayEntries(u:string){
    this.journalService.getUserEntriesByDate(this.journalService.getDateInt(),u).then( entries => {
      this.todayEntries = entries;
    }).then(entries => {
      for (var foodEntry of this.todayEntries){
        this.foodService.getFoodWithServing(foodEntry.food_id,foodEntry.serving_id).then(food => {          
          this.todayFoods.push(structuredClone(food));
        })          
      }
    }).catch(error => {
      this.hasEntriesToday = false;
      this.todayEntries = [];
      this.todayFoods = [];
    }).then( done =>{
      this.hasEntriesToday = true;
    })
    
  }
  //populates selectedFood with values
  selectFood(id:string|number){
    this.foodService.getFood(id).then(food => {
      this.selectedFood=food;
  }).catch(error =>{
  })
    console.log(this.selectedFood);
    this.hasSelectedFood=true;
  }

  //populates selectedServing with values
  selectServing(id:number){
    this.selectedServingId=id;
  }
  
  //save an entry.  
  saveEntry(){}
  
  //deletes an entry given an id. Means we must pull it from the database in order to be able to delete it.
  deleteEntry(){}

  //search food database given a search term.
  searchFood(query:string){
    this.foodService.searchFood(query).then(r => {
      this.searchResult= r;        
    }).then(searched => {this.hasSearched=true;})
  }
  //same as searchfood, but gets the selected  page if there is one.
  searchFoodPage(){}
  addToJournal(numServings:number){
    console.log(this.numServings);
  }
}
