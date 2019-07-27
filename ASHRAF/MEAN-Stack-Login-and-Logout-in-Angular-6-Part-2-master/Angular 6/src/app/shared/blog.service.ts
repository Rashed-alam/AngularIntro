import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from './blog.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};
 @Injectable()
// @Injectable({
//   providedIn: 'root'
// })
export class BlogService {

  Url = "http://localhost:4000/blogs";

  currentBlog: Blog = {
        
    post_title: '',
    post_description: '',
    post_location: '',
    post_privacy: '',
    post_user: ''
  }

  constructor(private httpcall: HttpClient) { }


  getAllBlog(): Observable<Blog[]>{
    return this.httpcall.get<Blog[]>(this.Url+'/all', headerOption);
  }


  createPost(blog : Blog): Observable<Blog> {
    return this.httpcall.post<Blog>(this.Url+'/new', blog , headerOption);
  }
  
}
