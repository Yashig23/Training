import { Component } from '@angular/core';
import {ContactService} from '../service/contact.service'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent{
  public firstName = 'Yashi';
  public contactList :any;
  public conatactList2 = [
    {id: 1, firstName: 'Yashi', lastName: 'Gupta'},
    {id: 1, firstName: 'Khushi', lastName: 'Gupta'}, 
    {id: 1, firstName: 'Zoya', lastName: 'Gupta'}
  ]

  constructor( private contact2: ContactService){
  }

  ngOnInit(): void{
    debugger;
   this.contact2.getContacts().subscribe(data=> {
    this.contactList = data as any;
    console.log(this.contactList);
    console.log(this.conatactList2)
   })
  }

  addNewContactForm(form: NgForm): void{
     const newContact = form.value;
     this.contactList.push(newContact);
     form.reset();
  }
}
