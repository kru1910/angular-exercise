import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task7',
  templateUrl: './task7.component.html',
  styleUrls: ['./task7.component.css']
})
export class Task7Component implements OnInit {

  @Input() users:{
    name:string,
    age:string
  } = {name: '' ,age: ''}

  constructor() { }

  ngOnInit(): void {
  }

}
