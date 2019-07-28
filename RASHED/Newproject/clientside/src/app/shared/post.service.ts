import { post } from './post.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class PostService {
  url='http://localhost:3000/post/';
  constructor(private httpcall: HttpClient) { }
  
  
  currentPost:post={
    fullName:'',
    location:'',
    post:'',
    security:''
  }
  getallpost(): Observable<post[]> {
    return this.httpcall.get<post[]>(this.url, headerOption);
  }

  createPost(a:post): Observable<post[]> {
    return this.httpcall.post<post[]>(this.url,a, headerOption);
  }
  
}
