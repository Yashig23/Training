import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-id',
  templateUrl: './new-id.component.html',
  styleUrl: './new-id.component.scss'
})
export class NewIdComponent {

  constructor(private router: ActivatedRoute){}

  ngOnInit(){
    console.log(this.router.snapshot.paramMap.get('id'));
  }
}
