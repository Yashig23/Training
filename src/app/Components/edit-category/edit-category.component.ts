import { Component } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormArrayName, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { SharedService } from '../../service/shared.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {CategoryForm} from '../product/product.model'

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.scss'
})
export class EditCategoryComponent {
  categoryForm!: FormGroup;
  categoryList: any[] = [];
  serviceList: any = [];
  data: any;
  text: any;
  final: any;
  time: any;
  subCateg: any[] = []
  messageSuccess: boolean = false;
  routingConfirm: boolean = false;

  constructor(private catservice: SharedService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
      this.categoryForm = new FormGroup({
        formDescription: new FormControl('', Validators.required),
        createdAt: new FormControl(new Date()),
        subCategories: new FormArray([])
      });
    
      this.route.params.subscribe(params => {
        this.data = params;
        console.log('Route Params:', this.data);
        if (this.data && this.data.id) {
          this.catservice.getCategoryById(this.data.id).subscribe(data => {
            this.final = data;
            console.log('Category Details:', this.final);
            this.categoryForm.patchValue({
              formDescription: this.final.formDescription
            });
            const subCategoriesArray = <FormArray>this.categoryForm.controls['subCategories'];
            this.final.subCategories.forEach((subCategory: string) => {
              subCategoriesArray.push(new FormControl(subCategory));
            });
          });
        }
      });
  }

  public SaveForm() {
    if (this.categoryForm.valid) {
      console.log(this.categoryForm.value);
      this.categoryList.push(this.categoryForm.value);
      const newCatData = this.categoryForm.value;
      console.log("new data", newCatData);
      console.log(this.categoryList);
      this.catservice.updateCategory(this.data.id, newCatData).subscribe({
          next: (data) =>{
            this.categoryForm.reset();
            this.router.navigate(['/categories'])
          },
          error: (err) => {
            console.log(err);
            window.alert("Error occured");
          },
    })
    }
  }

  get subCategories() {
    return <FormArray>this.categoryForm.controls['subCategories'];
  }

  public addSubCat(): void {
    this.subCategories.push(new FormControl(''));
  }


  public removeSub(index: number) {
    this.subCategories.removeAt(index);
  }

}
