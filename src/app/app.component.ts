import { TmplAstHoverDeferredTrigger } from '@angular/compiler';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'angular-vedio-series';
  todoValue!: string;
  list!: Todo[];

  ngOnInit() {
    this.list = [];
    this.todoValue = "";
  }
  onKey(event:any){
    this.todoValue =  event
  }
  addItem() {
  
    if (this.todoValue !== "") {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      }
      this.list.push(newItem);
    }
    this.todoValue = ""
  }
  deleteItem(id: number) {
    this.list = this.list.filter(item => item.id !== id);
  }
}
