import { Component, OnInit } from '@angular/core';
import { PostType } from '../models/post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts!: PostType[];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.getInitPosts();
  }

  getInitPosts(): void {
    this.postsService.getPosts().subscribe((data: PostType[]) => {
      this.posts = [...data];
    });
  }
}
