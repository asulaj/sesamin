import { Component, OnInit } from '@angular/core';
import { ICard } from '../models/Card';
import { USERS } from '../models/mock-data';
import { IOrder } from '../models/Order';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  showCard: boolean = false;
  showList: boolean = false;
  showNew: boolean = false;
  showOrder: boolean = false;
  users = USERS;

  constructor() { 

  }

  ngOnInit(): void {
  }
  addUsers(u:ICard){
    u.imageUrl = "https://marketresearchtelecast.com/wp-content/uploads/2022/03/a-1.webp";
    this.users.push({...u});
  }
  delete(user: ICard){
    const a = this.users.indexOf(user);
    this.users.splice(a, 1);
  }

}
