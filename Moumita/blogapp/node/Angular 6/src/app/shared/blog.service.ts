import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from './blogModel';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class BlogService {

   Url = "http://localhost:3000/blog";


   
  currentBlog: Blog = { 
    id:null,
    post_title: '',
    post_detail: '',
    post_privacy: '',
    post_location: '',
    post_user: ''
  }
  
  constructor(private httpcall: HttpClient) { }
  //this is for getting all posts of dashboard
  getAllBlog(): Observable<Blog[]>{
    return this.httpcall.get<Blog[]>(this.Url+'/all', headerOption);
  }

//this is for creating posts inside dashboard
  createPost(blog : Blog): Observable<Blog> {
    return this.httpcall.post<Blog>(this.Url+'/insert', blog , headerOption);
  }

//this is for getting all posts of only the user logged in
getAllUserBlog(userEmail: { email: string; }):Observable<Blog[]>{
  return this.httpcall.post<Blog[]>(this.Url+'/all/'+userEmail.email, headerOption);
}

getAllUserData():Observable<Blog[]>{
  return this.httpcall.get<Blog[]>(this.Url+'/all');
}

//this is for editing a particular post of the user
updateUserBlog(blog : any): Observable<Blog> {
  console.log(blog)
  return this.httpcall.put<Blog>(this.Url+'/edit/'+ blog._id, blog, headerOption);
}
 //this is for deleting a particular post when the user is logged in 
deleteThisPost(_id: any): Observable<Blog[]>{
  return this.httpcall.delete<Blog[]>(this.Url+'/delete/'+ _id, headerOption);
}
}

