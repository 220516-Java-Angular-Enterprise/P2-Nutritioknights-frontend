import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/models/food';
import { FoodEntry } from 'src/app/models/food-entry';
import { FoodService } from 'src/app/services/food.service';
import { JournalService } from 'src/app/services/journal.service';
import { Serving } from 'src/app/models/serving';
import { FoodSearchResult } from 'src/app/models/food-search-result';
import { FoodEntryPretty } from 'src/app/models/food-entry-pretty';

@Component({
  selector: 'app-journal-user',
  templateUrl: './journal-user.component.html',
  styleUrls: ['./journal-user.component.css']
})
export class JournalUserComponent implements OnInit {
  
  
  hasEntriesToday: boolean = false;
  username: string = '';
  activity: String[] = [];
  todayEntries: FoodEntryPretty[] = [];
  todayFoods: Food[] =[];
  hasSearched: boolean = false;
  query: string = '';
  selectedFood: Food= {} as Food;
  hasSelectedFood: boolean= true;
  numServings: number =  1;
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
  

  refreshTodayEntries(){
    this.currRouter.params.subscribe(p=> {
      this.username = p['username'];
      //get userentries for today
      this.getTodayEntries(p['username'])
    })

  }
  getActivity(u:string){
    this.journalService.getActivity(u).then(a => {
      this.activity = a;
    }
    )
  }
  getTodayEntries(u:string){
    this.journalService.getUserEntriesByDatePretty(this.journalService.getDateInt(),u).then( entries => {
      this.todayEntries = entries;
    }).catch(error => {
      this.hasEntriesToday = false;
      this.todayEntries = [];
      this.todayFoods = [];
    }).then( done =>{
      this.hasEntriesToday = true;
      console.log(this.todayFoods);
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
  
  //deletes an entry given an id. Means we must pull it from the database in order to be able to delete it.
  deleteEntry(id: string){
    this.journalService.deleteEntry(id).then(response =>{
  }).then(redirect =>{
    this.router.navigateByUrl('journal');
  }).catch(error =>{
    console.log(error.message);
    this.router.navigateByUrl('journal');
  })
  }

  //search food database given a search term.
  searchFood(query:string){
    this.foodService.searchFood(query).then(r => {
      this.searchResult= r;        
    }).then(searched => {this.hasSearched=true;})
  }
  //same as searchfood, but gets the selected  page if there is one.
  addToJournal(numServings:number,food:Food,servingId:number){
    const foodEntry = {entry_id: "",
      mealname_id: 1,
      dateInt: 0,
      food_id: food.id,
      serving_id: servingId,
      serving_amt: numServings,
      username: this.username  } as FoodEntry
    this.journalService.postEntry(foodEntry).then( resp => {
      console.log(resp);
    }).then(redirect =>{
      this.router.navigateByUrl('journal');
    }).catch(err =>{
      console.log(err.message);
      this.router.navigateByUrl('journal');
    })
  }
  enterToSearch(event:any) {
    if (event.keyCode ==13){
      this.searchFood(this.query);
    }
  }
}
