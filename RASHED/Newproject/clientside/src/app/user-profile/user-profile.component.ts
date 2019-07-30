import { PostService } from './../shared/post.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";
import { post } from '../shared/post.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails;
  allblog:post[];
  constructor(private userService: UserService, private router: Router,private postservice:PostService) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        this.postservice.getAllUserPost(this.userDetails)
        .subscribe((data : post[])=> {
          this.allblog=data;
        }
         )},
      err => { 
        console.log(err);
        
      }
    );
  }
deletenewpost(_id:any){
  this.postservice.deletepost(_id).subscribe();
}
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}
