import {Component} from '@angular/core';



@Component({
  selector: 'app-triggername',
  template: `<child-comp [title]="title"></child-comp>`,
  
})
export class TriggerNameComponent {

title:string = "Triger Name"

}