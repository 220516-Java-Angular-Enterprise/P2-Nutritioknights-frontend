import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fight } from 'src/app/models/fight';
import { FightService } from 'src/app/services/fight.service';

@Component({
  selector: 'app-fight-user',
  templateUrl: './fight-user.component.html',
  styleUrls: ['./fight-user.component.css']
})
export class FightUserComponent implements OnInit {

  constructor(private router: Router, private currRouter: ActivatedRoute, private fightService:FightService) { }

  username: string = ''
  fightHistory: Fight[] = [];

  hasHistory: boolean =false;
  hasCurrentFight: boolean=false;

  fight: Fight = {
  id: '',
  monster_id: [],
  username: [],
  fight_monster_hp: 0,
  fight_avatar_hp: 0,
  lastChecked: 0,
  monster_hits: 0,
  active: false
}




  ngOnInit(): void {
    // 1. get user history
    this.currRouter.params.subscribe(p => {
      this.username = p['username'];
      this.fightService.getFightHistory(this.username).then(f => {
        this.fightHistory = f;
        console.log(f[0])
        console.log(f[0].monster_id)
        
      }
      )
      
    })

    // 2. get current fight

  }

}
