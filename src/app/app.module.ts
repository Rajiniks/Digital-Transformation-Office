import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FormComponent } from "./form/form.component";
import { AppRoutingModule } from "./app-routing.module";
@NgModule({
  declarations: [AppComponent, NavbarComponent, FormComponent],
  imports: [BrowserModule,ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
