import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { Category2Component } from './category2/category2.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SubHomeComponent } from './home/sub-home/sub-home.component';
import { authGuard } from './auth.guard';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'', redirectTo: '/HomeComponent', pathMatch: 'full'}, // redirect route
  {path:'home', component: HomeComponent },
  {path:'home/subHome', component: SubHomeComponent },
  {path:'aboutUs', component: ProductComponent },
  {path:'contactUs', component: CategoryComponent},
  // {path: 'admin', component: Category2Component, canActivate: [authGuard], 
  // },
  // {
  //   path:'admin/:id', component: NewIdComponent    // child route and parametric route
  // },
  {path: 'todo', component: TodoComponent,},
  {path: 'todo_list', component: TodoListComponent, 

  },
  {path: 'todo_list/:id', component: DetailsComponent},
  // {path: 'todo_list/:id', component: NewIdComponent},
  // {path: 'admin/:id', component: NewIdComponent},
  {path: '**', component: PagenotfoundComponent} // wildcart route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  input1: any;

  saveChanges(e: any){
   console.log(e);
  }
}
