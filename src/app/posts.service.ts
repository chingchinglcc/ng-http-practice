import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostType } from './models/post';
import { HttpClient } from '@angular/common/http';
import { postsUrl } from './api/api';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<PostType[]>(postsUrl);
  }

  getPost(id: number) {
    return this.http.get<PostType>(`${postsUrl}/${id}`);
  }
}
