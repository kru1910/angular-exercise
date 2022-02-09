import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
   
  name1: string = 'Interpolation'; 
  name2: string = 'Property Binding';
  disabledBox : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  enableBox(){
    this.disabledBox= false
  }
}
