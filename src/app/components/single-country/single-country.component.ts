import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css']
})
export class SingleCountryComponent implements OnInit {
  @Input() country: any
  @Output() onDelete: EventEmitter<any> = new EventEmitter();
  @Output() onEdit: EventEmitter<string> = new EventEmitter()

  public lol: string
  public showEdit: boolean
  constructor() {
  }

  delete() {
    this.onDelete.emit()
  }


  inputHandler(e: any) {
    // console.log(e.target.value)
  }

  save() {
    this.showEdit = false
    this.onEdit.emit(this.lol)
  }


  ngOnInit() {
    this.lol = this.country.name

  }

}
