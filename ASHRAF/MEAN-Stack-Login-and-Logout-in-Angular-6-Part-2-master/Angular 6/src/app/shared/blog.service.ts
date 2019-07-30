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

  //this is for getting all posts of dashboard
  getAllBlog(): Observable<Blog[]>{
    return this.httpcall.get<Blog[]>(this.Url+'/all', headerOption);
  }

//this is for creating posts inside dashboard
  createPost(blog : Blog): Observable<Blog> {
    return this.httpcall.post<Blog>(this.Url+'/new', blog , headerOption);
  }

//this is for getting all posts of only the user logged in
getAllUserBlog(userEmail):Observable<Blog[]>{
  return this.httpcall.post<Blog[]>(this.Url+'/all/'+userEmail.email, headerOption);
}

//this is for editing a particular post of the user
updateUserBlog(blog : any): Observable<Blog> {
  return this.httpcall.put<Blog>(this.Url+'/edit/'+ blog._id, blog, headerOption);
}
  
deleteThisPost(_id: any): Observable<Blog[]>{
  return this.httpcall.delete<Blog[]>(this.Url+'/delete/'+ _id, headerOption);
}
}
