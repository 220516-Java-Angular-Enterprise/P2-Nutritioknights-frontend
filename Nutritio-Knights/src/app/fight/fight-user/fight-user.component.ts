import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Avatar } from 'src/app/models/avatar';
import { Fight } from 'src/app/models/fight';
import { Monster } from 'src/app/models/monster';
import { AvatarService } from 'src/app/services/avatar.service';
import { FightService } from 'src/app/services/fight.service';
import { MonsterService } from 'src/app/services/monster.service';

@Component({
  selector: 'app-fight-user',
  templateUrl: './fight-user.component.html',
  styleUrls: ['./fight-user.component.css']
})
export class FightUserComponent implements OnInit {

  constructor(private router: Router, private currRouter: ActivatedRoute, private fightService:FightService, private monsterService: MonsterService, private avatarService: AvatarService) { }

  username: string = ''
  fightHistory: Fight[] = [];
  monsterList: Monster[] = [];

  hasHistory: boolean =false;
  hasCurrentFight: boolean=false;



  currentFight: Fight = {
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

    //must have avatar so it must insure

    this.currRouter.params.subscribe(p => {
      this.username = p['username'];
      this.avatarService.getAvatarByUsername(this.username).then(ava => {
        // 1. get user history

        this.getFightHistory()

        // 2. get current fight
        this.getCurrentFight()

        //3. get all monsters
        this.getAllMonsters()
      }).catch(err =>{
        // redirect to create avatar
      })
    })


  }

  progressFight(){
    this.fightService.progressCurrentFight(this.username).then( uf =>{
      this.currentFight = uf;
      if(uf.fight_monster_hp === 0 || uf.fight_avatar_hp === 0){
        this.hasCurrentFight = false;
        this.getFightHistory()
      }
    })
  }

  getFightHistory(){

    this.currRouter.params.subscribe(p => {
      this.username = p['username'];
      this.fightService.getFightHistory(this.username).then(f => {
        this.fightHistory = f;
        console.log(f)
        console.log(f[0].monster_id)
      }
      )
    })

  }

  getCurrentFight(){
    this.currRouter.params.subscribe(p => {
      this.username = p['username'];
      this.fightService.getCurrentFight(this.username).then(cf => {
        this.hasCurrentFight = true;
        this.currentFight = cf;

      }).catch(error => {
        this.hasCurrentFight = false;
      })
    })

  }

  getAllMonsters(){
    this.monsterService.getAllMonsters().then( m => {
      this.monsterList = m;
    })
  }

  selectedMonster: string = '';
  selectedMonsterName: string = '';

  assignMonster(userMonster: string, userMonsterName: string){
    this.selectedMonster = userMonster;
    this.selectedMonsterName = userMonsterName;
  }

  changeMonster(){
    this.selectedMonster = '';
    this.selectedMonsterName = '';
  }

  userNewFight: boolean = false;

  newFight(){
    this.userNewFight = true
  }

  cancelNewFight(){
    this.userNewFight = false;
  }

  // confirm does post request

  canCreateNewFight = false;

  validFightRequest(){
    if(this.selectedMonster !== ''){
      this.canCreateNewFight = true;
    }else{
      this.canCreateNewFight = false;
    }
  }

  showFightRequestError: boolean = false;

  confirmNewFight(){
    this.validFightRequest();
    if(this.canCreateNewFight){
      this.showFightRequestError = false;
      this.userNewFight = false;
      // do post
      this.fightService.createNewFight(this.username,this.selectedMonster).then(nf =>{
        console.log(nf)
        this.currentFight = nf;
        this.hasCurrentFight = true;
      })
    }else{
      this.showFightRequestError = true;
    }
  }



}
