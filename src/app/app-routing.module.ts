import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { AddProductsComponent } from './Components/add-products/add-products.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { CategoryComponent } from './Components/category/category.component';
import { EditCategoryComponent } from './Components/edit-category/edit-category.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { ProductComponent } from './Components/product/product.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: "add-category", component:AddCategoryComponent},
  {path: "home", component:HomePageComponent},
  {path: "categories", component: CategoryComponent},
  {path: 'edit-category/:id', component: EditCategoryComponent},
  {path: 'add-product', component: AddProductsComponent},
  // {path: 'edit-product', component: EditProductComponent},
  {path: 'products', component:ProductComponent},
  {path: 'edit-product/:id', component:EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
