import { ClientSizeService } from './../shared/client-size.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit {
  public a: any;
  allsize;
  showsuccessmessage: boolean;
  showdeletemessage: boolean;
  showupdatemessage: boolean;
  selectadd: boolean = false;
  serverErrorMessages: string;
  Bid;
  today: any = Date.now();
  archievedate: any = Date.now();
  changeUser = "rashed";
  changeDate = this.today;
  deleteevent = "delete";
  editevent = "edit";
  b_old;
  constructor(private ClientSize: ClientSizeService, private DP: DatePipe) { }

  ngOnInit() {
    const datewithtime = this.DP.transform(this.archievedate, "medium");
    this.archievedate = datewithtime;
    this.getId();
    this.getSize();
    //console.log(this.a.size_id);
  }

  selectSize() {
    this.selectadd = true;
  }
  getId() {
    this.ClientSize.getsizeid()
      .subscribe(
        res => {
          this.a = res['size_id'];

          //console.log(this.a);
        },
        err => {
          console.log(err);

        }
      );
  }
  getSize() {
    this.ClientSize.getallsize().subscribe(
      (data) => {
        this.allsize = data;
        //console.log(this.allsize);
      }
    );
  }
  createAndUpdate(a: any) {
    // console.log(currentEmployee);
    if (a._id != null) {
      //console.log('update');
      this.updatepost(a);
    } else {
      console.log('create');
      this.create(a);
    }
    this.getSize();
    this.clearAll();
  }

  create(a: any) {
    this.ClientSize.createPost(a).subscribe(
      res => {


        this.showsuccessmessage = true;
        setTimeout(() => this.showsuccessmessage = false, 4000);

      },
      err => {

        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else {
          this.serverErrorMessages = 'Something went wrong.Please contact admin';
        }
      }
    );
    this.getSize();
    this.clearAll();

  }
  del(a) {
    this.Bid = a;
  }
  //delete and store in archive
  deletesize(p: any) {
    // console.log('check='+_id);
    p.changeUser = this.changeUser;
    p.changeDate = this.archievedate;
    p.event = this.deleteevent;
    this.ClientSize.createsizeArchive(p).subscribe(res => {
      this.ClientSize.deletesize(p._id).subscribe(
        res => {
          console.log('ok');
          this.showdeletemessage = true;
          setTimeout(() => this.showdeletemessage = false, 4000);
        },
      );
      this.getSize();

    });

  }
  edit(a) {
    this.ClientSize.currentSize = Object.assign({}, a);
    this.getSize();
    this.selectadd = true;
    this.b_old = a;

  }
  updatepost(n) {


    this.b_old.changeUser = this.changeUser;
    this.b_old.changeDate = this.archievedate;
    this.b_old.event = this.editevent;
    this.b_old._id = null;
   // console.log(this.b_old);

    this.ClientSize.createsizeArchive(this.b_old).subscribe(res => {
      this.ClientSize.updatepost(n).subscribe(
        res => {
          console.log(res);
          this.showupdatemessage = true;
          setTimeout(() => this.showupdatemessage = false, 4000);
        },
        err => {

          if (err.status === 422) {
            this.serverErrorMessages = err.error.join('<br/>');
          }
          else {
            this.serverErrorMessages = 'Something went wrong.Please contact admin';
          }
        }
      );
      this.clearAll();
      this.getSize();
      this.selectadd = false;
    });

  }
  clearAll() {
    this.ClientSize.currentSize = {
      size_name: '',
      size_id: null,
      track_Id: null,
      changeUser: '',
      changeDate: '',
      event: ''
    };
    this.serverErrorMessages = '';

  }

}


