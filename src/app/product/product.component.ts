import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products: Product[] = [
    new Product(1, 'Product 1', 'Admin', 'Admin'),
    new Product(2, 'Product 2', 'Admin', 'Admin')
  ];

  newProductData = {
    id: 0,
    name: '',
    createdBy: ''
  };

  constructor() {
  }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(): void {
    const newProduct = new Product(
      this.newProductData.id,
      this.newProductData.name,
      this.newProductData.createdBy,
      this.newProductData.createdBy 
    );
    this.products.push(newProduct);
    this.newProductData = { id: 0, name: '', createdBy: '' };
  }

  updateProduct(updatedProduct: Product): void {
    const index = this.products.findIndex(p => p.getId() === updatedProduct.getId());
    if (index !== -1) {
      this.products[index] = new Product(
        updatedProduct.getId(),
        updatedProduct.getName(),
        updatedProduct.getCreatedBy(),
        updatedProduct.getUpdatedBy()
      );
      this.products[index].setUpdatedBy(updatedProduct.getUpdatedBy());
    }
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter(p => p.getId() !== productId);
  }
}

