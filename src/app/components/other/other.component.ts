import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  
  public userName: Array<string>
  public temp: string
  public checker: boolean
  public alerter: boolean
  
  constructor() {
    this.userName = []
    this.temp = ""
    this.checker = false
    this.alerter = false
  }

  takeUserName(event: any) {
    this.temp = event.target.value
    if (this.temp === "") {
      this.checker = false
    }
    else {
      this.checker = true
    }
  }


  takeValueAndReset() {
    this.userName.push(this.temp)
    this.temp = ""
    this.checker = false

    console.log(this.userName)
  }

  getColor() {
    if (this.temp === "") {
      return "white"
    } else {
      return "red"
    }
  }








  ngOnInit() {
  }

}

