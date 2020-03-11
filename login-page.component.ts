import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  name:string = '';
   form = new FormGroup ({
    userName : new FormControl('',Validators.required),
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl ('',[Validators.required,Validators.minLength(6)]),
    textarea : new FormControl ('',)
   })
   
  constructor () { }
  ngOnInit() {
  }
  onSubmit() {
   alert(JSON.stringify(this.form.value))
   this.name = 'Vasa poruka je poslata!';

  } 
}
