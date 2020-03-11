import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CalculatePageComponent } from './calculate-page/calculate-page.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
{path:'login-page',component:LoginPageComponent},
{path:'main-page',component:MainPageComponent},
{path:'calculate-page',component:CalculatePageComponent},
{path:'product',component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[LoginPageComponent,MainPageComponent,CalculatePageComponent,ProductComponent]