import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
