import { Component, CSP_NONCE } from '@angular/core';
import { Admin } from './category2.model';

@Component({
  selector: 'app-category2',
  templateUrl: './category2.component.html',
  styleUrl: './category2.component.scss'
})
export class Category2Component {
  admin: Admin[] = [
    new Admin(1, 'Preeti Dubey', 'Yashi Gupta', 'Yashi Gupta', false, false),
    new Admin(2, 'Akansha Rao', 'Yashi Gupta', 'Yahsi Gupta', false, false)
  ];

  constructor(){
    console.log(this.admin);
  }

  newAdminData = {
    id: 0,
    name: '',
    createdBy: '',
    updatedBy: '',
    editing: false,
    checked: false
  };

  public addAdmin(): void{
     const newAdmin = new Admin(
       this.newAdminData.id,
       this.newAdminData.name,
       this.newAdminData.createdBy,
       this.newAdminData.updatedBy,
       this.newAdminData.editing,
       this.newAdminData.checked

     )
     this.admin.push(newAdmin);
     this.newAdminData = {id: 0, name:'', createdBy: '', updatedBy: '', editing: false, checked: false}
  }

  public deleteAdmin(index: number ): void{
    this.admin = this.admin.filter( a => a.getId() != index );
  }

  public updateAdmin(index: number): void{
    
    const newAdmin = this.admin.find(a => a.getId() === index);
    if (newAdmin) {
      newAdmin.toggleEditing();
      console.log(newAdmin);
    } else {
      console.log(`Admin with id ${index} not found`);
    }
  }

  cancleEvent(index: number): void{
     const newAdmin = this.admin.find(a=> a.getId() == index);
     if(newAdmin){
      newAdmin.toggleEditing();
     }
  }

  public save(index: number){
    const admin = this.admin.find(a => a.getId() === index);
    if (admin) {
      admin.setName(this.newAdminData.name);
      admin.toggleEditing();
      this.newAdminData = { id: 0, name: '', createdBy: '', updatedBy: '', editing: false, checked:false };
    }
  }

  public checked(index: number){
    const admin = this.admin.find(a => a.getId() === index);
    if(admin){
      admin.toggleChecked();
      console.log(admin)
    }
  }

  public selectAll(): void {
    console.log("selected");
    this.admin.forEach((admin, index) => {
      admin.setChecked(true);
      admin.setId(index + 1);
      console.log(admin);
    });
  }
  
  public deleteAll() :void{
     this.admin = this.admin.filter((e)=> e.checked != true )
     console.log("delted")
  }

  public cancleSelected(): void {
    console.log("cancel");
    this.admin.forEach(admin => {
      if (admin.isChecked()) {
        admin.setChecked(false);
        console.log(admin);
      }
    });
  }
  
}
