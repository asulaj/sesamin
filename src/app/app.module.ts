import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardViewComponent } from './card-view/card-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListViewComponent } from './list-view/list-view.component';
import { NewUsersComponent } from './new-users/new-users.component';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    CardViewComponent,
    ListViewComponent,
    NewUsersComponent,
    UsersComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
