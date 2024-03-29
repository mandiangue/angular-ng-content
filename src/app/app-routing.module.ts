

import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  {path:'', redirectTo: 'products', pathMatch:'full'},
  {path:'products', component:ProductsComponent},
  {path: 'listProduct',component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
