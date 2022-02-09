import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-task7-child',
  templateUrl: './task7-child.component.html',
  styleUrls: ['./task7-child.component.css']
})
export class Task7ChildComponent implements OnInit {

  @Output() metdata = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
