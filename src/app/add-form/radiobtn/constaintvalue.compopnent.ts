import {Component} from '@angular/core';



@Component({
  selector: 'app-constaintvalue',
  template: `<app-radiobtn [title]="title"></app-radiobtn>`,
  
})
export class ConstaintValueComponent {

title:string = "Constaint Value Known"

}