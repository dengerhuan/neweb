import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';

import {MustModule} from './must/must.module';
import {RoutesModule} from './routes/routes.module';
import {ThemeModule} from './theme/theme.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MustModule,
    RoutesModule,
    ThemeModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
