import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  msgSent: boolean = false;
  orderForm: boolean = false;
  public num1: number = 7.99;
  public num2: number;
  public num3: number;
  
  myGroup:FormGroup;
  constructor(private fb:FormBuilder) {
  this.myGroup = this.fb.group ({
    Address:'',
    Phone:'',
    Quantity:'',
    
  });
   }

  ngOnInit() {
  }
   buyNow() {
     this.orderForm=true;
    
   }
  onClose() {
  this.orderForm=false;
  
  }
  calcNow() {
    this.num3=this.num1 * this.num2;
  }
  orderNow() {
  console.log(this.myGroup.value);
  this.msgSent=true;
  }
  closeOrder() {
   this.msgSent=false;
   this.orderForm=false;

  }
}
