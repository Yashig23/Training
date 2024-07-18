import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  constructor() { }

  completedTaskList: any[] =[];

  getCompleteTaskList(){

    console.log(this.completedTaskList);
    return this.completedTaskList;
  }

  addCompletedTasks(data: any){
debugger;
   const list = this.completedTaskList.push(data);
   console.log(list);
  
  }

  showTasks(){
     const tasks = [
      {id:1, name:'abhi', class:'10'},
      {id:2, name:'sunil', class:'11'},
      {id:3, name:'yashi', class:'12'}
     ]

     return tasks;
    }
}

