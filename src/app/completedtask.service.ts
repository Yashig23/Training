import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompletedtaskService {

  constructor() { }

  completedTaskListArray: any[] = [];

public  getCompleteTaskList() {

    console.log(this.completedTaskListArray);
    return this.completedTaskListArray;
  }

public  addCompletedTasks(data: any) {
    // debugger;
    const list = this.completedTaskListArray.push(...data);
    console.log(list);

  }

 public showTasks() {
    const tasks = [
      { id: 1, name: 'abhi', class: '10' },
      { id: 2, name: 'sunil', class: '11' },
      { id: 3, name: 'yashi', class: '12' }
    ]

    return tasks;
  }
}

