import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { ICard } from '../models/Card';
import {USERS} from '../models/mock-data'
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  @Input() users: ICard[] = [];
  @Output() orderShow = new EventEmitter<void>();
  @Output() deleter = new EventEmitter<ICard>();
  constructor() { }

  ngOnInit(): void {
  }
  delete(user: ICard){
    this.deleter.emit(user);
  }
}
