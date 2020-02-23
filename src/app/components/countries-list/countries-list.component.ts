import { Component, OnInit } from '@angular/core';
import countriesService from "../../services/countries.service"

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {
  private cArrFather: Array<any>

  constructor(private countriesServices: countriesService) {

  }

  deleteCountryFromFather(i) {
    this.cArrFather.splice(i, 1)
  }


  editCountryInFather(e, index) {
    console.log(e)
    this.cArrFather[index].name = e
    console.log(this.cArrFather[index].name)
  }

  ngOnInit() {
    this.cArrFather = this.countriesServices.getCountries()
    // console.log(this.cArrFather)


  }



}
