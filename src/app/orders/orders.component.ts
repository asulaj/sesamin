import { Component, OnInit,Input } from '@angular/core';
import {ICard} from '../models/Card';
import {IProduct} from '../models/Product';
import {IOrder} from '../models/Order';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  @Input() users!: ICard 

  constructor() { }

  ngOnInit(): void {
  }

}
