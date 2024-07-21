import { Component } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent {

  orderStatus: any = '';
  data!: Observable<any>;

  constructor(){}

  ngOnInit(): void{

    new Observable(observer => {

    setTimeout(() => {
      observer.next('In Progress');
    }, 4000);

    //buisness logic comes here
    setTimeout(()=>{
      observer.next('Processing');
    }, 5000); 

    setTimeout(()=>{
      observer.next('Completed');
    }, 8000);

    //how to complete the observable
    setTimeout(()=>{
    observer.complete(); // it will no more listen or track for changes
    }, 8000);
  }).subscribe(val => {
    this.orderStatus = val;
  });
}

}
