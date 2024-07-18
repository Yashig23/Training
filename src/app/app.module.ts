import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { Category2Component } from './category2/category2.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubHomeComponent } from './home/sub-home/sub-home.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NewIdComponent } from './new-id/new-id.component';
// import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    CategoryComponent,
    Category2Component,
    PagenotfoundComponent,
    NavbarComponent,
    SubHomeComponent,
    ReactiveComponent,
    TodoComponent,
    TodoListComponent,
    NewIdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    // TaskService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
