import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { StockDetailsFetchService } from './services/stock-details-fetch.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MacthDetailsComponent } from './macth-details/macth-details.component';
import { RankDetailsComponent } from './rank-details/rank-details.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    StockDetailsComponent,
    UserDetailsComponent,
    MacthDetailsComponent,
    RankDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatTableModule
  ],
  providers: [
    StockDetailsFetchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
