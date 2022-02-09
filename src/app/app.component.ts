import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practice-task';

  data:{
    name:string,
    age:string
  }[] = [
    {name: 'Malone', age: '25'},
    {name: 'Scofield', age: '24'},
    {name: 'Burrows', age: '25'}
  ]
  
  emittedData:string = ''
  
  parenttochildfun(text:string){
    this.emittedData = text
  }
}

