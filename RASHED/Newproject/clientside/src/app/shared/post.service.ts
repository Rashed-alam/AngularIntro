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
    security:'',
    email: ''
   
  }
  getallpost(): Observable<post[]> {
    return this.httpcall.get<post[]>(this.url, headerOption);
  }

  createPost(a:any): Observable<post[]> {
   // console.log(a);
   
   return this.httpcall.post<post[]>(this.url,a, headerOption);
  }
  //this is for getting all posts of only the user logged in
  getAllUserPost(userEmail):Observable<post[]>{
  return this.httpcall.post<post[]>(this.url+'/all/'+userEmail.email, headerOption);
}



deletepost(id):Observable<post[]>{
  return this.httpcall.delete<post[]>(this.url+'delete/'+id,headerOption);
}
updatepost(a:any): Observable<post> {
  return this.httpcall.put<post>(this.url+'edit/'+a._id,a,headerOption)
}
  
}
