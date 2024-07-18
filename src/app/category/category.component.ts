import { Component } from '@angular/core';
import { Category } from './category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  categories: Category[] = [
    new Category(1, 'Category 1', 'Admin', 'Admin'),
    new Category(2, 'Category 2', 'Admin', 'Admin')
  ];

  newCategoryData = {
    id: 0,
    name: '',
    createdBy: ''
  };

  constructor() {
    console.log(this.categories);
  }

  addCategory(): void {
    const newCategory = new Category(
      this.newCategoryData.id,
      this.newCategoryData.name,
      this.newCategoryData.createdBy,
      this.newCategoryData.createdBy 
    );
    this.categories.push(newCategory);
    this.newCategoryData = { id: 0, name: '', createdBy: '' };
  }

  updateCategory(updatedCategory: Category, categoryId: number): void {
    const index = this.categories.findIndex(c => c.getId() === updatedCategory.getId());
    if (index !== -1) {
      this.categories[index] = new Category(
        updatedCategory.getId(),
        updatedCategory.getName(),
        updatedCategory.getCreatedBy(),
        updatedCategory.getUpdatedBy()
      );
      this.categories[index].setUpdatedBy(updatedCategory.getUpdatedBy());
    }
  }

  deleteCategory(categoryId: number): void {
    this.categories = this.categories.filter(c => c.getId() !== categoryId);
  }
}
