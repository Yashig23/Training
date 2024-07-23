import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../service/shared.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

  constructor(private shared: SharedService){}

  categoryList: any;
  ngOnInit(): void{
    this.shared.getCategory().subscribe(data=>{
      this.categoryList = data;
    });
  }

  public delete(id: any){
    window.confirm("Are you sure you want to delete it");
    if(confirm())
     this.shared.deleteCategory(id).subscribe(data=>{
      console.log("deleted");
      this.ngOnInit();
     })
  }
}
