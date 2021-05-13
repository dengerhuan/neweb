import {NgModule} from '@angular/core';
import {MustModule} from '../must/must.module';
import {DefaultLayoutComponent} from './default-layout/default-layout.component';


@NgModule({
  declarations: [DefaultLayoutComponent],
  imports: [
    MustModule
  ]
})
export class ThemeModule {
}
