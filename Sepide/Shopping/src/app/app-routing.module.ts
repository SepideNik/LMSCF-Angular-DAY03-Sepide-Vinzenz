import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MyCartComponent } from './my-cart/my-cart.component';

const routes: Routes = [{
    path: "", component:ProductComponent
  },{
    path: "product-detail/:id", component:ProductDetailComponent
  },{
    path: "myCart", component:MyCartComponent
  }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
