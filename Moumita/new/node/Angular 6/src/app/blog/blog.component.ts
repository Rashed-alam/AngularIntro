import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/blog.service';
import {Router} from '@angular/router';
import { Blog } from '../shared/blogModel';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog:any={}
  emp:any={}
  userslist: any = [];
  userService: any;
  updateEnable=false;
  constructor(private blogService:BlogService, private router: Router) { }

  ngOnInit() {
   this.getUser();
  }
getUser(){
  this.blogService.getAllUserData()
  .subscribe(data =>{
    console.log(data);
    this.getAllUserDataFunc(data);
 })
}
  getAllUserDataFunc(data) {
    this.userslist = data;
  }

  reset(){
    var form:any= document.getElementById('blogForm');
    form.reset();
  }
  createPost(){
     this.blogService.createPost(this.blog).subscribe()
  }
  selectArea(){
     
  }
  deleteThisPost(_id: any)
  {
    
    var confirmMessage = confirm('do u want to del');
    if(confirmMessage){
      console. log(_id)      
      this.blogService.deleteThisPost(_id).subscribe(data=>{
       this.getUser()

      })
    }
   
  //   this. getAllUserData();
  
     };
  getAllUserData() {
    throw new Error("Method not implemented.");
  }
  onLogout(){
  
    this.router.navigate(['']);
  }
// update blog---------------------------------------------------------

updateUserBlog(blog: Blog){
  console.log(blog);
  this.blog=blog;

  this.blogService.currentBlog = Object.assign({}, blog);
  // this.getUser();

   this.updateEnable = true
 
}


// post data to database---------------------

  onSubmit(){

    if(this.updateEnable!=true)
     {
    
   console.log('submit clicked');
     
   console.log('model data before submit',this.blog);
      this.blogService.createPost(this.blog).subscribe(data=>{
          console.log('after submit',data);
          this.reset();

          //fetch data database to table-------------------------

          this.blogService.getAllUserData()
          .subscribe(data =>{
            console.log(data);
            this.getAllUserDataFunc(data)
      });
      });
    
   }
   else{
     this.blogService.updateUserBlog(this.blog).subscribe()
      this.updateEnable=false;
   }

  }
 
  }




