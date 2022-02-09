import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task6',
  templateUrl: './task6.component.html',
  styleUrls: ['./task6.component.css']
})
export class Task6Component implements OnInit {

  name: string = "Krupa";
  today : number = Date.now();
  str : string = "Kru Kotia";
  cur: number = 100;
  constructor() { }

  ngOnInit(): void {
  }

}
