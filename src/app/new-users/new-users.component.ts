import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ICard } from '../models/Card';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.css']
})
export class NewUsersComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  @Output() submitParent = new EventEmitter<ICard>();
  constructor() { }

  ngOnInit(): void {
  }
  toParent(form: NgForm){
    this.submitParent.emit({...form.value})
  }

}
