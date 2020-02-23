import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-disable',
  templateUrl: './button-disable.component.html',
  styleUrls: ['./button-disable.component.css']
})
export class ButtonDisableComponent implements OnInit {
  public makeTrue: any
  public h5Title: string

  constructor() {
    this.makeTrue = false
    this.h5Title = ""
  }

  
  tryout() {
    this.makeTrue = true

  }

  clickable() {
    alert("u can click me now")
    this.makeTrue = false
  }

  inputLogger(event: Event) {
    console.log((<HTMLInputElement>event.target).value)
    this.h5Title = (<HTMLInputElement>event.target).value
  }


  ngOnInit() {
  }



}
