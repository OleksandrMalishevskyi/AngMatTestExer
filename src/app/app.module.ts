import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule} from '@angular/flex-layout'

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
import { TriggerNameComponent } from './add-form/starselect/triggername.component';
import { CheckselectComponent } from './add-form/checkselect/checkselect.component';
import { SelectComponent } from './add-form/select/select.component';
import { TextareaComponent } from './add-form/textarea/textarea.component';
import { ChildComponent }   from './add-form/starselect/child.component';
import { ConstraintNameComponent } from './add-form/starselect/constraintname.component'
import { DeadLineInfoComponent } from './add-form/starselect/deadlineinfo.component'
import {TriggerDateComponent} from './add-form/radiobtn/triggerdate.component'
import {ConstaintValueComponent} from './add-form/radiobtn/constaintvalue.compopnent'

import { HttpClientModule } from '@angular/common/http';
import { HttptestComponent } from './httptest/httptest.component';

@NgModule({
  declarations: [
    AppComponent,
    AddButtonComponent,
    SortFormComponent,
    AddFormComponent,
    InputComponent,
    CheckboxComponent,
    RadiobtnComponent,
    TriggerNameComponent,
    CheckselectComponent,
    SelectComponent,
    TextareaComponent,
    ChildComponent,
    ConstraintNameComponent,
    DeadLineInfoComponent,
    TriggerDateComponent,
    ConstaintValueComponent,
    HttptestComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
