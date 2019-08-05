import { PostService } from './../shared/post.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from "@angular/router";
import { post } from '../shared/post.model';
import { LocationService } from './../shared/location.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails;
  allblog:post[];
  newLocation: any = [];
  showsuccessmessage:boolean;
  today_date=new Date();
  constructor(private userService: UserService, private router: Router,private PostService:PostService,private list: LocationService) { }

  ngOnInit() {

    
    this.getLocationlist();
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
          this.getnewpost();
      },
      err => { 
        console.log(err);
        
      }
    );
   // this.getnewpost();
  //  this.getLocationlist();
  }

//location
getLocationlist(): void {
  this.list.getAllLocation()
    .subscribe(data => {
      this.newLocation = data;
      //console.log(data);
    })

}
createAndUpdate(a: any) {
  // console.log(currentEmployee);
  if (a._id != null) {
    console.log('update');
    this.updatepost(a);
  } else {
    console.log('create');
    this.createnewpost(a);
    // this.ecom.getAllEmployeeCall();
  }
  this.getnewpost();
}



//create post
createnewpost(a:any) {
  a.fullName = this.userDetails.fullName;
  a.email = this.userDetails.email;
  a.det=this.today_date;
  // const email = a.email;
   console.log(a);
  // this.http.post('http://localhost:3000/post/data',a, headerOption).subscribe(res=>{
  //   console.log(res);
  this.PostService.createPost(a).subscribe(
    res=>{
      console.log('ok');
      this.showsuccessmessage=true;
      setTimeout(()=>this.showsuccessmessage=false,4000);
    },
  );
  this.clearAll();
  this.getnewpost();
  }

  //update
  updatepost(a:any) {
    this.PostService.updatepost(a).subscribe();
    this.clearAll();
    this.getnewpost();
  }

deletenewpost(_id:any){
  alert('Confirm:Delete');
  this.PostService.deletepost(_id).subscribe();
  this.getnewpost();
}

getnewpost(){
  this.PostService.getAllUserPost(this.userDetails)
  .subscribe((data : post[])=> {
    this.allblog=data;
  }
   )
  
}

edit(a){
  this.PostService.currentPost=Object.assign({},a);
  this.getnewpost();
}

clearAll() {
  this.PostService.currentPost = {
    fullName: '',
    email: '',
    location: '',
    post: '',
    security: '',
    det:null
  }
}

  onLogout(){
    alert('Confirm:LogOut');
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}
