import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import {USERS} from '../models/mock-data';
import {ICard} from '../models/Card';
@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  @Input() users!: ICard[];
  @Output() orderShow = new EventEmitter<void>();
  @Output() deleter = new EventEmitter<ICard>();
  constructor() { }

  ngOnInit(): void {
  }
  delete(user: ICard){
    this.deleter.emit(user);
  }

}
