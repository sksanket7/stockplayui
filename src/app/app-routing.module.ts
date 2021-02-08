import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MacthDetailsComponent } from './macth-details/macth-details.component';
import { RankDetailsComponent } from './rank-details/rank-details.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path: 'stock-details', component: StockDetailsComponent},
  {path: 'user-details', component: UserDetailsComponent},
  {path: 'match-details', component: MacthDetailsComponent},
  {path: 'rank-details', component: RankDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
