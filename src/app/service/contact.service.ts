import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  getContacts(): Observable<any[]>{

    //headers
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');

    //get http method 
    //get will not required any parameter
    return this.httpClient.get<any[]>('http://localhost:3000/contacts');

  }

  // http post method
  // post will require parameters
  createContact(createResource: any){
    return this.httpClient.post('http://localhost:3000/contacts', createResource)
  }
}
