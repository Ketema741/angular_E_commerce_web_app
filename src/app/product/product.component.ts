import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CLOSEPRODUCTS, CUSTOMER, Product, PRODUCTS } from './product.object';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // nike: Product= {
  //   id: 101,
  //   name: 'Nike',
  //   price: 10,
  //   imageUrl: '',
  //   description: 'Nike Shoes Newest Sneakers All Shoes Lifestyle Running Basketball \
  //   Jordan Football Gym and Training Skateboarding Tennis Sandals and Slides \
  //   Customise with Nike By ODC All Sale Shoes And Clothing All Clothing'
  // }
  

  productList = PRODUCTS;
  productList2 = CLOSEPRODUCTS;

  // customer1=CUSTOMER;
  
 

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigateByUrl('product')
  }

  // onShowCustomer(id:number){
  //   this.router.navigateByUrl('/customer/show/' + id);
  //   console.log(id);
  //   // when we learn routi
  // }

  onViewDetail(id: number){
    this.router.navigateByUrl('/product/detail/' + id);
    console.log(id);
    // when we learn routing we will route(move) to a different component
     // (product detail component) with this id 
  }

}
