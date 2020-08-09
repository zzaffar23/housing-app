import {Component} from '@angular/core';

@Component(
  {
    selector: 'property-card',
    templateUrl: 'property-card.component.html',
    styleUrls : ['property-card.component.css']
  }
)
export class PropertyCardComponent {
 property : any = {
   "Id": 1,
   "Name": "My House",
   "Type": "Housing",
   "Price" : 12000
 }
};
