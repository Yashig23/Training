import { Component , Input} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sub-home',
  templateUrl: './sub-home.component.html',
  styleUrl: './sub-home.component.scss'
})
export class SubHomeComponent{
  @Input()
  name!: string;
  @Output() FirstEvent = new EventEmitter<string>();
  @Output() SecondEvent = new EventEmitter<string>();
userPlanet!: string;
favPlanet: any;

addNewItem(value: string){
  this.FirstEvent.emit(value);
}


}
