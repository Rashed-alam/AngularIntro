import { Component, OnInit } from '@angular/core';
import { ClientSizeService } from './../shared/client-size.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  allsize;

  constructor(private ClientSize: ClientSizeService) { }

  ngOnInit() {
    this.getSize();
  }
  getSize() {
    this.ClientSize.getallsize().subscribe(
      (data) => {
      this.allsize = data;
        console.log(this.allsize);
      }
    );
  }
}
