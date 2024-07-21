import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
            // userData : this.fb.group({
                createdBy: ['', Validators.required],
                gender: ['', Validators.required],
            // }),
            task: ['', Validators.required],
            createdAt: ['', Validators.required],
            hobbies: this.fb.array([])
        });
    }

    // ngOnInit(): void { 
    //     this.taskForm.setValue({ // setting the value of whole form using setValue
    //         createdAt: "2024-07-19",
    //         createdBy: "Yashi Gupta",
    //         gender: "female",
    //         task: "Complete angular"
    //     })
    // }

    // ngOnInit(): void{ // use patch value for setting values of specific field
    //     this.taskForm.patchValue({
    //         createdAt: "2024-08-19",
    //         createdBy: "Yashi"
    //     })
    // }

    // value changes method in reactive form.
    // ngOnInit(): void {
    //     this.taskForm.get('task')!.valueChanges.subscribe(data => {
    //         console.log(data);
    //     })
    // }

    //value chnages method in reactive form when whole value of form gets changed
    // ngOnInit(): void {
    //     this.taskForm.valueChanges.subscribe(data =>{
    //         console.log(data);
    //     })
    // }

    // status changes
    // ngOnInit(): void {
    //     this.taskForm.get('task').statusChanges.susbcribe((data => console.log(data))   
    // }

    ngOnInit(): void {
        
    }

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
            console.log(this.taskForm);
            this.Getitems();
            console.log(this.taskForm.value);
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

    public Getitems(){
        const dommy = this.taskForm.get('task') as FormArray;
        console.log(dommy);
    }

    // whenever user clicks on add new botton, a new field will get added
    // public Addnewrow(){
    //     const itemLength = this.items1.length;
    //     const newItem = this.fb.group({
    //         id: [itemLength+1],
    //         task: [''],
    //         createdBy: [''],
    //         gender: [''],
    //         createdAt: [''],
    //     })
    //     console.log("new row added")
    // }

    public Addnewrow(){
        console.log("new row added")
    }

    public Addhobby(){
        const control = this.fb.control('', Validators.required);
        (<FormArray>this.taskForm.get('hobbies')).push(control)
        this.taskForm.controls
    }

}

//