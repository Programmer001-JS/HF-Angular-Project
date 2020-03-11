import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-calculate-page',
  templateUrl: './calculate-page.component.html',
  styleUrls: ['./calculate-page.component.css']
})
export class CalculatePageComponent implements OnInit {
  orderMeal:boolean = false; 
  name:string = '';
  form = new FormGroup ({
    Address : new FormControl('',Validators.required),
    Phone : new FormControl('',[Validators.required,Validators.minLength(6)]),
    
   })
constructor () {}
ngOnInit() {


}

buyNow() {
this.orderMeal=true;
}
onSubmit() {
  alert(JSON.stringify(this.form.value));
  this.name='Message has been sent!';
  
  

 } 
 closeNow() {
 this.orderMeal=false;


 }
}