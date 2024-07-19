import { Component } from '@angular/core';
import { CompletedtaskService } from '../completedtask.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  completedList: any[]=[];
  taskList: any[] =[];

  constructor(private taskService: CompletedtaskService){
  }

  ngOnInit(){
    this.completedList = this.taskService.getCompleteTaskList();
    this.taskList = this.taskService.showTasks();
    console.log(this.completedList);
  }

}
