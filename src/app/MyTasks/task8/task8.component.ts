import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-task8',
  templateUrl: './task8.component.html',
  styleUrls: ['./task8.component.css']
})
export class Task8Component implements OnInit {

  loginForm : FormGroup = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('')
  
  })

  constructor() { }

  ngOnInit(): void {
  }
}
