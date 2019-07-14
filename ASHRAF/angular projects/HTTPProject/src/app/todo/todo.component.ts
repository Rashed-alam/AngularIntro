import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  //this needs to be imported in order to get/post anything to server

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  todos: any = []; //array of objects 

  private url = "https://jsonplaceholder.typicode.com/todos"; //the main URL link from where datas are fetched

  constructor(private http: HttpClient) { //http= is an object of HTTPClient
    
   this.http.get(this.url) //this will get the data from the above mentioned link
    .subscribe( response => {    
        this.todos = response; //putting all the data into the array list      
    });

   }
   //after pressing 'enter' this is where the function comes
   CreateData(todo){
    let data = { //this is an object whatever the user is giving input 
      title : todo.value, //we're assigning the given value to title
      id: todo.value
     
    };

    this.http.post(this.url, data)//this will post the data to the server
    .subscribe( response =>
      {
        
        todo.value = ' '; //this is for emptying after user has inputted 
        this.todos.splice(0, 0, data); //this is for showing the data at the top of list 

      });
   }

  ngOnInit() {
  }

}
