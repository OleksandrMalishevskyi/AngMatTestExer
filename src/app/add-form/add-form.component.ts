
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

interface Option {
  name: string;
  }


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  form: FormGroup


  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)
      ]),
      optionTrigger: new FormGroup ({
        optionControl: new FormControl('', Validators.required),
        
        
      })
      
    })
  }



  submit() {
    if (this.form.valid) {
      console.log('Form: ', this.form)
      const formData = {...this.form.value}

      console.log('Form Data:', formData)
    }
  }

  options: Option[] = [
    {name: 'Option 1 '},
    {name: 'Option 2'},
    {name: 'Option 3'},
    {name: 'Option 4'},
  ];
}