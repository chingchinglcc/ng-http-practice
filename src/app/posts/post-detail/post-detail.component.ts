import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostType } from 'src/app/models/post';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  post!: PostType;
  id!: number;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getPost();
  }

  getPost() {
    this.postsService.getPost(this.id).subscribe((data: PostType) => {
      this.post = { ...data };
    });
  }
}
