import { Component, OnInit, OnDestroy } from '@angular/core';
import countriesService from "../../services/countries.service"
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})

export class CountryInfoComponent implements OnInit, OnDestroy {
  private countriesArr: Array<object>
  private result: any
  private country: any
  constructor(private countriesServices: countriesService, private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.countriesArr = this.countriesServices.getCountries()
    this.result = this.route.params.subscribe(params => { this.country = this.countriesServices.getSingleCountry(params.name) })
  }

  ngOnDestroy() {
    this.result.unsubscribe()
  }

}
