import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category2Component } from './category2/category2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Ensure your styles are linked properly
})
export class AppComponent {
  taskArray = [{ taskName: 'brush Teeth', iscompleted: false, isEditing: false }];
  task: string = '';

  onSubmit(form: NgForm) {
    this.taskArray.push({
      taskName: form.controls['task'].value,
      iscompleted: false,
      isEditing: false
    });
    form.reset();
  }

  on_delete(index: number) {
    this.taskArray.splice(index, 1);
  }

  onCheck(index: number) {
    this.taskArray[index].iscompleted = !this.taskArray[index].iscompleted;
  }

  on_edit(index: number) {
    this.taskArray[index].isEditing = true;
  }

  submitChanges(index: number) {
    this.taskArray[index].isEditing = false;
  }
}
