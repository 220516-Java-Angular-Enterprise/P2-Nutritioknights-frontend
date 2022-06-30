import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Avatar } from 'src/app/models/avatar';
import { AvatarService } from 'src/app/services/avatar.service';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.css']
})
export class UserAvatarComponent implements OnInit {

  constructor(private avatarService: AvatarService, private router: Router) { }

  username: string = ''
  ngOnInit(): void {

    // if no avatar redirect to make an avatar

    this.avatarService.getAvatarByUsername(this.username).then(a =>{
      this.avatar = a;
    }).catch(error=>{
    })

  }

  avatar: Avatar = {
    username: '',
    gender: '',
    level: [],
    xp: 0,
    attacks: 0
  }

}
