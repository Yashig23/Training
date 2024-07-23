import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormArrayName, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { SharedService } from '../../service/shared.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Product } from '../product/product.model';
import { ProductForm } from '../product/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent implements OnInit {
  productForm!: ProductForm;
  productList: Product[] = [];
  data: any;
  final: any;
  brandn!: string;
  name1!: string;
  cid!: string;
  sp!: number;
  ap!: number;
  categoryListPro: any[] = [];
  discountp!: number;
  dp!: number;
  routingConfirm: boolean = false;
  proDiscription!: string;
  // formValue: Product[]=[];

  constructor(private productservice: SharedService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.data = params;
      console.log('Route Params:', this.data);

      this.updateDataProduct(this.data)
    });

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

    this.getCategories();

    this.productForm.controls['actualPrice'].valueChanges.subscribe(() => {
      this.updateDiscount();
    });
    this.productForm.controls['sellingPrice'].valueChanges.subscribe(() => {
      this.updateDiscount();
    });
  }

  private getCategories(){
    this.productservice.getCategory().subscribe(data => {
      console.log(data);
      this.categoryListPro.push(data);
      console.log(this.categoryListPro);
    });
  }

  private updateDataProduct(data: any) {
    if (data && data.id) {
      this.productservice.getProductById(this.data.id).subscribe(data => {
        this.final = data;
        console.log('Product Details:', this.final);
        this.brandn = this.final.brandName;
        this.name1 = this.final.name;
        this.ap = this.final.actualPrice;
        this.sp = this.final.sellingPrice;
        this.cid = this.final.categoryId;
        this.discountp = this.final.discount;
        this.proDiscription = this.final.productDescription;
        console.log(this.brandn, this.ap);
        const subImagesArray = this.productForm.get('images') as FormArray;
        this.final.images.forEach((image: any) => {
            subImagesArray.push(new FormControl(image));
        });

        //patch val
        this.productForm.patchValue({
          brandName: this.brandn,
          name: this.name1,
          categoryId: this.cid,
          sellingPrice: this.sp,
          actualPrice: this.ap,
          productDescription: this.proDiscription,
        })
      });
    }
  }

  get images(): FormArray {
    return this.productForm.controls['images'] as FormArray;
  }

  public addImage() {
    this.productForm.controls['images']
    this.images.push(new FormControl(''));
  }

  public removeImage(index: number) {
    this.images.removeAt(index);
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
        this.dp = finalDiscountPrice;
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

  public SaveForm() {
    // if (this.productForm.valid) {
    //   const productData: Partial<Product> = this.productForm.value;
    //   console.log(this.productForm.value);
    //   //TODO: map this correctly
    //   this.productList.push(productData);
    //   const newProData = this.productForm.value;
    //   console.log("new data", newProData);
    //   console.log(this.productList)
    //     //TODO: Learn Next and Error
    //   this.productservice.updateProduct(this.data.id, this.productList).subscribe({
    //     next: (data) =>{
    //       this.productForm.reset();
    //       this.router.navigate(['/products'])
    //     },
    //     error: (err) => {
    //       console.log(err);
    //       window.alert("Error occured");
    //     },
    //   })
    // }

    if(this.productForm.valid){
      // transform the data into the correct format for Product
      const formValue = this.productForm.value;
      const productData: Product ={
        brandName: formValue.brandName || '',
        name: formValue.name || '',
        categoryId: formValue.categoryId || '',
        sellingPrice: formValue.sellingPrice || 0,
        actualPrice: formValue.actualPrice || 0,
        discount: formValue.discount || 0,
        productDescription: formValue.productDescription || '',
        images: formValue.images || []
      }
      console.log("Form Value:", formValue);
      console.log("Mapped Product Data:", productData);
      this.productList.push(productData);
      console.log("Updated Product List:", this.productList);
      this.productservice.updateProduct(this.data.id, this.productList).subscribe({
        next: (data) => {
            this.productForm.reset();
            this.router.navigate(['/products']);
        },
        error: (err) => {
            console.log(err);
            window.alert("Error occurred");
        },
    });
    }


  }
}
