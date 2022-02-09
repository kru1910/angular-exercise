import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from '../Blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  @Input() blog!: Blog;
  @Output() blogDelete: EventEmitter<Blog> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(blog: Blog){
    this.blogDelete.emit(blog);
    console.log("OnClick triggered")
  }

}
