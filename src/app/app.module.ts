import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { TextComponent } from './text/text.component';
import { CartComponent } from './cart/cart.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HttpModule }   from '@angular/http';
import { SubjectComponent } from './subject/subject.component';
import { HeroService } from './hero.service';
import { JsonpComponent } from './jsonp/jsonp.component';
import { JsonpModule } from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';
import { HeroeditComponent } from './heroedit/heroedit.component';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { MiddleComponent } from './middle/middle.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AddheroComponent } from './addhero/addhero.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    TextComponent,
    CartComponent,
    HeroDetailComponent,
    SubjectComponent,
    JsonpComponent,
    HeroeditComponent,
    TopComponent,
    BottomComponent,
    MiddleComponent,
    AddheroComponent,
    FormsComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
