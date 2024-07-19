import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompletedtaskService } from '../completedtask.service';


@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
    taskForm: FormGroup;
    tasks: any[] = [];

    constructor(private fb: FormBuilder, private taskservice: CompletedtaskService) {
        this.taskForm = this.fb.group({
            task: ['', Validators.required],
            createdBy: ['', Validators.required],
            gender: ['', Validators.required],
            createdAt: ['', Validators.required],
        });
    }

    ngOnInit(): void { }

    public Addtask(): void {

        if (this.taskForm.valid) {
            const newTask = {
                id: this.tasks.length + 1,
                ...this.taskForm.value,
                isEditing: false,
                checked: false,
                completed: false,
            };
            this.tasks.push(newTask);
            this.taskForm.reset();
            console.log(newTask.createdAt);
        }
    }

    public Selectall(): void {
        this.tasks.forEach(task => task.checked = true);
    }

    public Markcompleted(): void {
        const completedTasks = this.tasks.filter(task => task.checked == true);
        this.taskservice.addCompletedTasks(completedTasks);
        this.tasks = this.tasks.filter(task => !task.checked);
    }

    public Cancelselected(): void {
        this.tasks.forEach(task => task.checked = false);
    }

    public Edittask(id: number): void {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.isEditing = true;
        }
    }

    public Save(id: number): void {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.isEditing = false;
        }
    }

    public Canceledit(id: number): void {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.isEditing = false;
        }
    }

    public Deletetask(id: number): void {
        this.tasks = this.tasks.filter(t => t.id !== id);
    }

    public Checked(id: number): void {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.checked = !task.checked;
        }
    }
}
