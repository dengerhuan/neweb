import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DefaultLayoutComponent} from '../theme/default-layout/default-layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {IconComponent} from './icon/icon.component';
import {CardComponent} from './card/card.component';

const routes: Routes = [{
  path: '', component: DefaultLayoutComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'icon', component: IconComponent},
    {path: 'card', component: CardComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
