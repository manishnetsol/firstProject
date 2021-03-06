import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AngularFireModule } from 'angularfire2'; 
import { AngularFireAuthModule } from 'angularfire2/auth'; 
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { WordDetailComponent } from './word-detail/word-detail.component';
import { SearchComponent } from './search/search.component';
import { SynonymComponent } from './synonym/synonym.component';
import { FetchVowelsPipe } from './fetch-vowels.pipe';
import { HttpClientModule } from '@angular/common/http'; 

import { environment } from '../environments/environment';
import { SearchDirective } from './directives/search.directive';
import { AddWordComponent } from './add-word/add-word.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    WordDetailComponent,
    SearchComponent,
    SynonymComponent,
    FetchVowelsPipe,
    SearchDirective,
    AddWordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),   
     AngularFireAuthModule,    
     AngularFirestoreModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
