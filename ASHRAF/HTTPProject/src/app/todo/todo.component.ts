import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  todos: any; //array of objects any t

  private url = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) {
    
   this.http.get(this.url)
    .subscribe( response => {
        console.log(response); 
        this.todos = response;
        
    });

   }
   CreateData(todo){
    let data = {
      title : todo.value
    };
    this.http.post(this.url, data)
    .subscribe( response =>
      {
        console.log(response);
        todo.value = ' ';
        this.todos.splice(0, 0, data);

      });
   }

  ngOnInit() {
  }

}
