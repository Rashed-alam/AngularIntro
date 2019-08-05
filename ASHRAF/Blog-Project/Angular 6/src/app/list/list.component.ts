import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/blog.service';
import { Blog } from '../shared/blog.model';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Router } from "@angular/router";
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  allblog: Blog[];

  constructor(private blog: BlogService,private router: Router,private userService: UserService) { }

  ngOnInit() {
    this.getAllPost();
  }

  //to get all the posts by everyone in the dashboard page
  getAllPost(){
    this.blog.getAllBlog()
    .subscribe(
       (data : Blog[]) =>{
         this.allblog = data;
        console.log(data);
       }
    );
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }


}
