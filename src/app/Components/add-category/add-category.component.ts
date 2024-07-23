import { Component } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormArrayName, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../service/shared.service';
import { Router } from '@angular/router';
import {CategoryForm} from '../product/product.model'

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent {
  
  categoryForm!: FormGroup;
  categoryList: any[]=[];
  messageSuccess: boolean = false;

  constructor(private catservice: SharedService, private router: Router ){}

  ngOnInit() {
    this.categoryForm = new FormGroup({
      formDescription: new FormControl('', Validators.required),
      createdAt: new FormControl(new Date),
      subCategories: new FormArray([new FormControl('')])
    });
    // as CategoryForm;
  }

  public SaveForm() {
    if(this.categoryForm.valid){
    console.log(this.categoryForm.value);
    this.categoryList.push(this.categoryForm.value);
    const newCatData = this.categoryForm.value;
    console.log("new data", newCatData);
    console.log(this.categoryList)
    this.catservice.createCategory(newCatData).subscribe(data => {
      console.log(data);
      this.messageSuccess = true;
      if(this.messageSuccess){
        window.alert("Category created successfully")
        this.categoryForm.reset();
        this.router.navigate(['/categories']);
      }
      else{
        window.alert("Error occured")
      }
    })
  }
  else{
    window.alert("fill the fields");
  }
  }

  get subCategories() {
    return <FormArray>this.categoryForm.controls['subCategories'];
  }

  public addSubCat(): void {
    this.subCategories.push(new FormControl(''));
  }


  public removeSub(index: number){
    this.subCategories.removeAt(index);
  }

}