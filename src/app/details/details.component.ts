import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompletedtaskService } from '../completedtask.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  data!: any;
  completedList: any[] = [];
  final: any = {};

 demo: any[] =[
    {name:'yashi', gender: 'female', completed: true},
    {name:'shruti', gender: 'female', completed: true},
    {name:'aayush', gender: 'male', completed: true},
  ];

  constructor(private route: ActivatedRoute, private taskService: CompletedtaskService) {}

  ngOnInit() {
    this.completedList = this.taskService.getCompleteTaskList();
    console.log('Completed List:', this.completedList);
    this.route.params.subscribe(params => {
      this.data = params;
      console.log('Route Params:', this.data);
      this.showDetails(this.data.id);
    });
  }

  showDetails(id: string) {
    console.log('ID in showDetails:', id);
    this.final = this.completedList.find(item => item.id === parseInt(id));
    console.log('Final:', this.final);
  }
}
