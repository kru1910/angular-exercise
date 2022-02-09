import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task2Component } from './MyTasks/task2/task2.component';
import { Task3Component } from './MyTasks/task3/task3.component';
import { Task4Component } from './MyTasks/task4/task4.component';
import { Task5Component } from './MyTasks/task5/task5.component';
import { Task6Component } from './MyTasks/task6/task6.component';
import { Task7Component } from './MyTasks/task7/task7.component';
import { Task8Component } from './MyTasks/task8/task8.component';
import { Task9Component } from './MyTasks/task9/task9.component';
import { Task7ChildComponent } from './MyTasks/task7-child/task7-child.component';
import { Task3ChildComponent } from './MyTasks/task3-child/task3-child.component';
import { BloglistComponent } from './Task9-Components/bloglist/bloglist.component';
import { AddBlogFormComponent } from './Task9-Components/add-blog-form/add-blog-form.component';
import { BlogItemComponent } from './Task9-Components/blog-item/blog-item.component';

@NgModule({
  declarations: [
    AppComponent,
    Task2Component,
    Task3Component,
    Task4Component,
    Task5Component,
    Task6Component,
    Task7Component,
    Task8Component,
    Task9Component,
    Task7ChildComponent,
    Task3ChildComponent,
    BloglistComponent,
    AddBlogFormComponent,
    BlogItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
