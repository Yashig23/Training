import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Components/product/product.model';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpClient: HttpClient) { }

  //TODO: if getting a list then name must be a plural, same with route
  public getCategory(){
   return this.httpClient.get('http://localhost:3000/categories')
  }

  public createCategory(createResource: any){
    return this.httpClient.post('http://localhost:3000/categories', createResource)
  }

  public createProduct(createResource: any){
    return this.httpClient.post('http://localhost:3000/products', createResource)
  }

  public getCategoryById(id: any){
    return this.httpClient.get(`http://localhost:3000/categories/${id}`)
  }

  public getProductById(id: any){
    return this.httpClient.get(`http://localhost:3000/products/${id}`)
  }

  public getProducts(){
    return this.httpClient.get('http://localhost:3000/products')
  }

  public updateCategory(id: any, category: any) {
    const endPointUrl = 'http://localhost:3000/categories/' + id;
    return this.httpClient.put(endPointUrl, category);
  }

  public updateProduct(id: any, products: Product[]){
    const endPointUrl = 'http://localhost:3000/products/' + id;
    return this.httpClient.put(endPointUrl, products)
  }

  public deleteCategory(categoryId: number){
    const deleteEndpoint = 'http://localhost:3000/categories/' + categoryId;
    return this.httpClient.delete(deleteEndpoint);
  }

  public deleteProduct(productId: number){
    const deleteEndpoint = 'http://localhost:3000/products/' + productId;
    return this.httpClient.delete(deleteEndpoint);
  }
}
