import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { AddProductsComponent } from './Components/add-products/add-products.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './Components/category/category.component';
import {HttpClientModule} from '@angular/common/http';
import { EditCategoryComponent } from './Components/edit-category/edit-category.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';
import { ProductComponent } from './Components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponent,
    AddProductsComponent,
    NavbarComponent,
    HomePageComponent,
    CategoryComponent,
    EditCategoryComponent,
    EditProductComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
