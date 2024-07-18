import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {TaskListService} from '../task-list.service'

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
    taskForm: FormGroup;
    tasks: any[] = [];

    // constructor(private fb: FormBuilder, private taskService: TaskService) {
    constructor(private fb: FormBuilder, private taskservice: TaskListService) {
        this.taskForm = this.fb.group({
            task: ['', Validators.required],
            createdBy: ['', Validators.required],

        });
    }

    ngOnInit(): void {}

    addTask(): void {
        if (this.taskForm.valid) {
            const newTask = {
                id: this.tasks.length + 1,
                ...this.taskForm.value,
                isEditing: false,
                checked: false,
                completed: false
            };
            this.tasks.push(newTask);
            this.taskForm.reset();
        }
    }

    selectAll(): void {
        this.tasks.forEach(task => task.checked = true);
    }

    markCompleted(): void {
        const completedTasks = this.tasks.filter(task => task.checked == true);
        // this.taskService.addCompletedTasks(completedTasks);
        this.taskservice.addCompletedTasks(completedTasks);
        this.tasks = this.tasks.filter(task => !task.checked);
    }

    cancelSelected(): void {
        this.tasks.forEach(task => task.checked = false);
    }

    editTask(id: number): void {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.isEditing = true;
        }
    }

    save(id: number): void {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.isEditing = false;
        }
    }

    cancelEdit(id: number): void {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.isEditing = false;
        }
    }

    deleteTask(id: number): void {
        this.tasks = this.tasks.filter(t => t.id !== id);
    }

    checked(id: number): void {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.checked = !task.checked;
        }
    }
}
