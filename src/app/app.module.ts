import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { SingleCountryComponent } from './components/single-country/single-country.component';
import { ButtonDisableComponent } from "./components/button-disable/button-disable.component"
import { OtherComponent } from "./components/other/other.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from "@angular/material/list"
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CountryInfoComponent } from './components/country-info/country-info.component';

const appRoutes: Routes = [
  { path: 'countryInformation/:name', component: CountryInfoComponent },
  {
    path: 'home',
    component: HomeComponent,
    // data: { title: 'Heroes List' }
  },
  {
    path: 'countries',
    component: CountriesListComponent}
    // data: { title: 'Heroes List' }
  // },{
  //   path:"countryInformation",
  //   component:CountryInfoComponent
  // },
  ,
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];






@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent,
    SingleCountryComponent,
    HomeComponent,
    CountryInfoComponent,
    // ButtonDisableComponent,
    // OtherComponent
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: false } // <-- debugging purposes only
  ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
