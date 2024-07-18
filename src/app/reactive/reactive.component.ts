import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.scss'
})
export class ReactiveComponent {
  addReactiveForm! : FormGroup ;

  constructor(private fb: FormBuilder){

  }

  ngOnInit() :void{

  //  this.addReactiveForm = new FormGroup({
  //     'adminName': new FormControl(),
  //     'adminDescription': new FormControl()
  //  })

  // form builder

  // first way of assigning the value to form
  // this.addReactiveForm = this.fb.group({
  //   'adminName': new FormControl(' Admin Name'),
  //   'adminDescription': new FormControl('He/she is an admin')
  // })

  // second way of assiging the value to form
  this.addReactiveForm = this.fb.group({
    'adminName': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    'adminDescription': new FormControl('',Validators.required)
  })

  // const newAdmin ={
  //   'adminName': 'Sahab/sahiba',
  //   'adminDescription': 'he/she is an admin'
  // }

// another way of setting values
  // this.addReactiveForm.setValue(newAdmin);

  // patch value , help us setting value not in the form of key and value pairs
  // this.addReactiveForm.patchValue(newAdmin)
  }

  

  public saveReactive(): void{
    // give value of full form
    // console.log(this.addReactiveForm.value)

    // give value of specific field
    console.log(this.addReactiveForm.get('adminName')!.value)

    //give value only when it get changed
    // this.addReactiveForm.valueChanges.subscribe(data => {
    //   console.log(data);
    // })
  }

}

// form builder is for complex forms
// for managing dynamic data, like array of inputs, removal of data. etc
// it has its own
// form group
// form control
// form array


// Read Reactive form Vlaues
// get value of entire form
// this.addLoanTypes.value

// get value of specific form control
// this.addLoanTypes.get('loanName').value

//get value on chnages
// this.addLoanTypes.valueChnages

//reactive from - form states
//.ng-valid
//.ng-invalid
//.ng-pending
//.ng-dirty
//.ng-untouched
//.ng-touched


// form is valid or not
// check if the form is valid or not

// form controls were edited-dirty
// for was modified by the user

// form fileds are pristine
// form was not been modified by the user

// form fields were touched
// form fileds were touched
