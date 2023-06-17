import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { WrapperRoutingModule } from './wrapper/wrapper-routing.module';



const routes: Routes = [ {path: '', component: WrapperComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  WrapperRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
