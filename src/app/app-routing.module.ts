import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: "product/detail/:id",
    component: ProductDetailComponent
  },
  {
    path: "customer/update/:id",
    component: CustomersComponent,
  },
  {
    path:"customers",
    component:CustomersComponent,

  },
  {
    path:"home",
    component:HomeComponent,

  },

  {
    path:"product",
    component:ProductComponent,

  },

  // {
  //   path:'/customer/show/:id',
  //   component: CustomersComponent,
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
