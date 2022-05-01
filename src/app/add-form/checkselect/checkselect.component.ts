import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-checkselect',
  templateUrl: './checkselect.component.html',
  styleUrls: ['./checkselect.component.css']
})
export class CheckselectComponent {

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
 

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
    
    });
  }
}