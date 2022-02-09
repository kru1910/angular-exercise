import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Blog } from '../Blog';

@Component({
  selector: 'app-add-blog-form',
  templateUrl: './add-blog-form.component.html',
  styleUrls: ['./add-blog-form.component.css']
})
export class AddBlogFormComponent implements OnInit {

  title!: string;
  content!: string;
  author!: string;

  @Output() blogAdd: EventEmitter<Blog> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const blog = {
      title:this.title,
      content: this.content,
      author:this.author
    }
    this.blogAdd.emit(blog);
  }

}
