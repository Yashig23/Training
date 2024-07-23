import { Component } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../service/shared.service';
import { Router } from '@angular/router';
import { Product } from '../product/product.model';
import { ProductForm } from '../product/product.model';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.scss'
})
export class AddProductsComponent {
  productForm!: ProductForm;
  productList: any[] = [];
  messageSuccess: boolean = false;
  categoryListPro: any;
  db!: number;

  constructor(private productservice: SharedService, private router: Router){
  }

  ngOnInit() {
    this.productForm = new FormGroup({
      brandName: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      categoryId: new FormControl('', Validators.required),
      sellingPrice: new FormControl(0, [Validators.required, Validators.maxLength(7), Validators.minLength(1)]),
      actualPrice: new FormControl(0, [Validators.required, Validators.maxLength(7), Validators.minLength(1)]),
      discount: new FormControl(0, Validators.required),
      productDescription: new FormControl('', Validators.required),
      images: new FormArray([new FormControl('')])
    })

    this.updateProductService();

    this.productForm.controls['actualPrice'].valueChanges.subscribe(() => {
      this.updateDiscount();
    });
    this.productForm.controls['sellingPrice'].valueChanges.subscribe(() => {
      this.updateDiscount();
    });
  }

  private updateProductService(){
    this.productservice.getCategory().subscribe(data=>{
      console.log(data);
      this.categoryListPro = data;
      console.log(this.categoryListPro);
    })
  }
  public SaveForm() {
    if (this.productForm.valid) {
      const productData: Partial<Product> = this.productForm.value;
      console.log("Form Value:", productData);
      this.productList.push(productData);
      console.log("Product List:", this.productList);
      this.productservice.createProduct(productData).subscribe({
        next: (data) =>{
          this.productForm.reset();
          this.router.navigate(['/products'])
        },
        error: (err) => {
          console.log(err);
          window.alert("Error occured");
        },
      });
    }
  }

  private updateDiscount() {
    const actualPrice = this.productForm.controls['actualPrice'].value;
    const sellingPrice = this.productForm.controls['sellingPrice'].value;

    if(actualPrice && sellingPrice){
    if (actualPrice > 0) {
      if (sellingPrice > actualPrice) {
        window.alert("Selling price cannot be greater than actual price");
        this.productForm.patchValue({
          sellingPrice: null, 
          discount: null
        });
      } else {
        const discountedPrice = ((actualPrice - sellingPrice) / actualPrice) * 100;
        const finalDiscountPrice = Math.round(discountedPrice * 100) / 100;
        this.db = finalDiscountPrice;
        console.log(finalDiscountPrice);
        this.productForm.patchValue({
          discount: finalDiscountPrice
        });
      }
    } else {
      throw new Error('Actual Price should be greater than 0');
    }
  }
  }
  
  get images() {
    return <FormArray>this.productForm.controls['images'];
  }

 public addImage() {
    this.images.push(new FormControl(''));
  }

  public removeImage(index: number) {
    this.images.removeAt(index);
  }

  public onSubmit() {
    console.log(this.productForm.value);
  }

}
