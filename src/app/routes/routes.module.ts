import {NgModule} from '@angular/core';

import {MustModule} from '../must/must.module';
import {AppRoutingModule} from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IconComponent } from './icon/icon.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [DashboardComponent, IconComponent, CardComponent],
  imports: [
    AppRoutingModule,
    MustModule
  ]
})
export class RoutesModule {
}
