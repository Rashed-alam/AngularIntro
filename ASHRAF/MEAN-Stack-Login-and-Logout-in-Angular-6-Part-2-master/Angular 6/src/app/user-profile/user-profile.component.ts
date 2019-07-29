import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";
import { BlogService } from '../shared/blog.service';
import { Blog } from '../shared/blog.model';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails;

  allblog: Blog[];

  constructor(private userService: UserService, private router: Router,private blogservice: BlogService) { }

  ngOnInit() {
  //  this.getAllPostofUser();


    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        this.blogservice.getAllUserBlog(this.userDetails)
        .subscribe(
          (data : Blog []) => {
          this.allblog = data;
          console.log(this.allblog);
          }
        );
      },
      err => { 
        console.log(err);
        
      }
    );
    
  
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }



  // getAllPostofUser(){ 
  // this.blogservice.getAllUserBlog(this.userDetails)
  //       .subscribe(
  //         (data : Blog []) => {
  //         this.allblog = data;
  //         console.log(this.allblog);
  //         }
  //       );
  // }



}
