import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { WrapperModule } from './wrapper/wrapper.module';
import { LoginModule } from './login/login.module';
import { StoreModule } from '@ngrx/store';
import { cartReducer, metaReducerLocalStorage } from './cart/store/reducer';





@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    RouterModule,
    WrapperModule,
    LoginModule,
    StoreModule.forRoot({ cartEntries: cartReducer}, { metaReducers: [metaReducerLocalStorage]})
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
