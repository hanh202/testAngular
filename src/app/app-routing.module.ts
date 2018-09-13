import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
const appRoutes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'addNew', component: AddProductComponent },
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  { path: 'cart/:id', component: CartComponent },
  { path: '**', redirectTo: '/product', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRouting {}
