import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radiobtn',
  templateUrl: './radiobtn.component.html',
  styleUrls: ['./radiobtn.component.css']
})
export class RadiobtnComponent {
  @Input() title: string = "";


}
