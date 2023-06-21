import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { WrapperRoutingModule } from './wrapper/wrapper-routing.module';
import { LoginComponent } from './login/login.component';



const routes: Routes = [ 
  {path: '', component: WrapperComponent, children: [] },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  WrapperRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
