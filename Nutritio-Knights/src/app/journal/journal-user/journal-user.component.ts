import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/models/food';
import { FoodEntry } from 'src/app/models/food-entry';
import { FoodService } from 'src/app/services/food.service';
import { JournalService } from 'src/app/services/journal.service';
import { Serving } from 'src/app/models/serving';
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
  constructor(private journalService:JournalService,  private foodService: FoodService, private currRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    // get user's entries for today on init*/
    this.getTodayEntries()
    
    //initialize user activity if they wanna display past entries
    this.getActivity()
  }

  getTodayEntries(){}
  getActivity(){}

  
}
