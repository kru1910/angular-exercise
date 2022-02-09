import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component implements OnInit {

  customers!: {
    customerNo: number;
    name: string;
    city: string;
  }[];

  show: boolean = true;
  
  constructor() { 
    this.customers=[
      {
        customerNo: 1,
        name:'Kru',
        city:'Porbandar'
      },
      {
        customerNo: 2,
        name:'Dis',
        city:'Ahmedabad'
      }
    ]
  }

  ngOnInit(): void {
  }
  
}
