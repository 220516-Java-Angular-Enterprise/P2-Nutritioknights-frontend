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
  
  username: string = ''
  activity: String[] = [];
  todayEntries: FoodEntry[] = [];
  selectedFood:Food = {
    name: '',
    url: '',
    type: '',
    id: 0,
    description: '',
    brandName: '',
    servings: []
  }

  selectedServing:Serving = {
    servingId: 0,
    servingDescription: '',
    servingUrl: '',
    metricServingAmount: 0,
    metricServingUnit: '',
    numberOfUnits: 0,
    measurementDescription: '',
    calories: 0,
    carbohydrate: 0,
    protein: 0,
    fat: 0,
    saturatedFat: 0,
    polyunsaturatedFat: 0,
    monounsaturatedFat: 0,
    transFat: undefined,
    cholesterol: 0,
    sodium: 0,
    potassium: 0,
    fiber: 0,
    sugar: 0,
    vitaminA: 0,
    vitaminC: 0,
    calcium: 0,
    iron: 0
  }
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
      this.journalService.getUserEntriesByDate(this.journalService.getDateInt(),this.username).then(entries => {
      
      })
      //get user activity in order to display past entries
      this.getActivity(this.username)
  })  
  }
  

  getActivity(u:string){
    this.journalService.getActivity(u).then(a => {
      this.activity = a;
      console.log(a)
    }
    )
  }

  //populates selectedFood with values
  selectFood(){}
  
  //populates selectedServing with values
  selectServing(){}
  
  //save an entry.  
  saveEntry(){}
  
  //deletes an entry given an id. Means we must pull it from the database in order to be able to delete it.
  deleteEntry(){}

  //search food database given a search term.
  searchFood(query:string){
    this.foodService.searchFood(query).then(r => {
      this.searchResult= r;        
    }
    )
  }
  //same as searchfood, but gets the selected  page if there is one.
  searchFoodPage(){}
}
