import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from '../material.module';
import { AddButtonComponent } from './add-button/add-button.component';
import { SortFormComponent } from './sort-form/sort-form.component';
import { AddFormComponent } from './add-form/add-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InputComponent } from './add-form/input/input.component';
import { CheckboxComponent } from './add-form/checkbox/checkbox.component';
import { RadiobtnComponent } from './add-form/radiobtn/radiobtn.component';
import { StarselectComponent } from './add-form/starselect/starselect.component';
import { TestscompComponent } from './add-form/testscomp/testscomp.component';
import { CheckselectComponent } from './add-form/checkselect/checkselect.component';



@NgModule({
  declarations: [
    AppComponent,
    AddButtonComponent,
    SortFormComponent,
    AddFormComponent,
    InputComponent,
    CheckboxComponent,
    RadiobtnComponent,
    StarselectComponent,
    TestscompComponent,
    CheckselectComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
