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
import { TriggerNameComponent } from './add-form/starselect/triggername.component';
import { TestscompComponent } from './add-form/testscomp/testscomp.component';
import { CheckselectComponent } from './add-form/checkselect/checkselect.component';
import { SelectComponent } from './add-form/select/select.component';
import { TextareaComponent } from './add-form/textarea/textarea.component';
import { ChildComponent }   from './add-form/starselect/child.component';
import { ConstraintNameComponent } from './add-form/starselect/constraintname.component'
import { DeadLineInfoComponent } from './add-form/starselect/deadlineinfo.component'
import {TriggerDateComponent} from './add-form/radiobtn/triggerdate.component'
import {ConstaintValueComponent} from './add-form/radiobtn/Constaintvalue.compopnent'


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
    TestscompComponent,
    CheckselectComponent,
    SelectComponent,
    TextareaComponent,
    ChildComponent,
    ConstraintNameComponent,
    DeadLineInfoComponent,
    TriggerDateComponent,
    ConstaintValueComponent,
    
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
