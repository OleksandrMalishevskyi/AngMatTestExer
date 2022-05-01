import {Component} from '@angular/core';



@Component({
  selector: 'app-constraintname',
  template: `<child-comp [title]="title"></child-comp>`,
  
})
export class ConstraintNameComponent {

title:string = "Constaint Name"

}