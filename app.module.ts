import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpService } from './http.service';
import { CalculatePageComponent } from './calculate-page/calculate-page.component';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CalculatePageComponent,
    ProductComponent,
    MainPageComponent,
    LoginPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
