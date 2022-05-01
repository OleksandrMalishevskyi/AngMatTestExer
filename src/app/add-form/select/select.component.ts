import { Component } from '@angular/core';

interface Element {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {

  elements: Element[] = [
    {value: '0', viewValue: 'Planned Personal Data transfer to other processing entity '},
    {value: '1', viewValue: 'Personal Data transfer to other processing entity '},
    {value: '2', viewValue: 'Data Collection/Acquisition'},
    {value: '3', viewValue: 'Planned Change or new personal data processing purpose'},
    {value: '4', viewValue: 'Change(d) or new personal data processing purpose'},
    {value: '5', viewValue: 'Purpose/Service start/commencement date -legal/contact start'},
  ];
}
