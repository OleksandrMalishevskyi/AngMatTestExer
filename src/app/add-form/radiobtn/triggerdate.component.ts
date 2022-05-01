import {Component} from '@angular/core';



@Component({
  selector: 'app-triggerdate',
  template: `<app-radiobtn [title]="title"></app-radiobtn>`,
  
})
export class TriggerDateComponent {

title:string = "Trigger Date Known"

}