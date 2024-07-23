import { Component } from '@angular/core';
import {SharedService} from '../../service/shared.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  constructor(private shared: SharedService, private http: HttpClient){}
  productList: any;
  ngOnInit(): void{
    this.shared.getProducts().subscribe(data=>{
      this.productList = data;
      console.log(this.productList)
    });
  }

  public deleteProducts(id: any){
    this.shared.deleteProduct(id).subscribe(()=>{
     console.log("deleted");
     this.ngOnInit();
    })
 }

}
