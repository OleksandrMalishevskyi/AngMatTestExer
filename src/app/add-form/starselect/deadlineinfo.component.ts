import {Component} from '@angular/core';



@Component({
  selector: 'app-deadlineinfo',
  template: `<child-comp [title]="title"></child-comp>`,
  
})
export class DeadLineInfoComponent {

title:string = "Effective Deadline Info"

}