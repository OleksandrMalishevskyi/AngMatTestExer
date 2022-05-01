import {Component, Input} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

interface Option {
  name: string;
  sound: string;
  }

      
@Component({
    selector: 'child-comp',
    templateUrl: './starselect.component.html',
    styleUrls: ['./starselect.component.css']
})
export class ChildComponent { 
    @Input() title: string = "";


    optionControl = new FormControl('', Validators.required);
    selectFormControl = new FormControl('', Validators.required);
    options: Option[] = [
      {name: 'Option 1 ', sound: 'Woof!'},
      {name: 'Option 2', sound: 'Meow!'},
      {name: 'Option 3', sound: 'Moo!'},
      {name: 'Option 4', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
    ];
  }