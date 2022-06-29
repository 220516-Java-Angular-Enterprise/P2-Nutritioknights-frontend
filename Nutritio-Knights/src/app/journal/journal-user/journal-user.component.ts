import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JournalService } from 'src/app/services/journal.service';

@Component({
  selector: 'app-journal-user',
  templateUrl: './journal-user.component.html',
  styleUrls: ['./journal-user.component.css']
})
export class JournalUserComponent implements OnInit {
  
  username: string = ''
  activity: String[] = [];
  constructor(private journalService:JournalService,  private currRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    /* get user's activity on init*/
    this.currRouter.params.subscribe(p => {
      this.username = p['username'];
      this.journalService.getActivity(this.username).then(a => {
        this.activity = a;
        console.log(a[0])        
      }
      )
      
    })

  }

}
