import { Component, OnInit } from '@angular/core';
import { Blog } from '../Blog';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})
export class BloglistComponent implements OnInit {

  localItem: string | null;
  blogs: Blog[];

  constructor() {
    this.localItem = localStorage.getItem('blogs');
    if(this.localItem === null){
      this.blogs = [];
    }
    else{
      this.blogs = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {}

  deleteBlog(blog: Blog) {
    console.log(blog);
    const index = this.blogs.indexOf(blog);
    this.blogs.splice(index, 1);
    localStorage.setItem('blogs', JSON.stringify(this.blogs));
  }
  addBlog(blog: Blog) {
    console.log(blog);
    this.blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(this.blogs));
  }
}
