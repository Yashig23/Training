import { Component } from '@angular/core';
import {TaskListService} from '../task-list.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  completedList: any[]=[];
  listss: any[] =[];

  constructor(private taskService: TaskListService){
  }

  ngOnInit(){
    
    this.completedList = this.taskService.getCompleteTaskList();
    this.listss = this.taskService.showTasks();
    console.log(this.completedList);
  }

}
