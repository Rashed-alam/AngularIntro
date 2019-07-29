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


    
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        this.blogservice.getAllUserBlog(this.userDetails)
        .subscribe(
          (data : Blog []) => {
          this.allblog = data;
          
          });
      },
      err => { 
        console.log(err);
      });
      // this.getAllPostofUser();
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }



  // getAllPostofUser(){ 
  //   this.blogservice.getAllUserBlog(this.userDetails)
  //         .subscribe(); 
  //         console.log(this.userDetails);
  // }


  // updateBlog(bl: Blog){
  //   this.blogservice.updateUserBlog(bl)
  //     .subscribe(
  //       (data : Blog []) => {
  //         this.allblog = data;
  //         }
  //     );
     
  //   }

    // edit(bl){
    //   this.blogservice.currentBlog= Object.assign({},bl);
      
    // }

    deletePost(_id: any){
      console.log(_id);
      this.blogservice.deleteThisPost(_id)
      .subscribe(
        (data : Blog[]) =>{
          alert('Post Deleted');
        
        }
      );
    }


}
