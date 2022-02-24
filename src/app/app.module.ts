import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMaskModule, IConfig} from "ngx-mask";

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfigFunction)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
