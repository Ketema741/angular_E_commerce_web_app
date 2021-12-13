import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer,CUSTOMERS} from './customer.object';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  type: string = 'view';
  constructor(private route:Router) { }

  customerList = CUSTOMERS
  newCustomer = new Customer()
  ngOnInit(): void {
    this.route.navigateByUrl('customers')
    
  }
  onUpdate(id: number){
    this.route.navigateByUrl('/customer/update/' + id);
    console.log(id);
    // when we learn routing we will route(move) to a different component
     // (product detail component) with this id 
  }
  
  onAdd(){
    this. type = 'add';
  }

  addCustomer(){
    this. customerList. push(this. newCustomer);
    this. newCustomer = new Customer();
    this. type = 'view';
  }

  deleteCustomer(name: string){
    this.customerList = this.customerList.filter((customer)=> { 
      return customer.name != name; 
  });
}

}