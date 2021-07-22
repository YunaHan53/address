import { Component } from '@angular/core';

export interface AddressElement {
  locationId: number;
  streetNumber: number;
  streetName: string;
  city: string;
  state: string;
  zipcode: string;
}

const ELEMENT_DATA: AddressElement[] = [
  {
    locationId: 1,
    streetNumber: 10,
    streetName: 'Main Street',
    city: 'Boston',
    state: 'MA',
    zipcode: '02111',
  },
  {
    locationId: 2,
    streetNumber: 40,
    streetName: 'Longwood Cir',
    city: 'Dedham',
    state: 'MA',
    zipcode: '02026',
  },
  {
    locationId: 3,
    streetNumber: 55,
    streetName: 'Broadway Drive',
    city: 'Peabody',
    state: 'MA',
    zipcode: '01960',
  },
  {
    locationId: 4,
    streetNumber: 121,
    streetName: 'Winter Avenue',
    city: 'Cambridge',
    state: 'MA',
    zipcode: '02114',
  },
  {
    locationId: 5,
    streetNumber: 99,
    streetName: 'Eliot Street',
    city: 'Watertown',
    state: 'MA',
    zipcode: '02472',
  },
];

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent {
  displayedColumns: string[] = [
    'locationId',
    'streetNumber',
    'streetName',
    'city',
    'state',
    'zipcode',
  ];
  dataSource = ELEMENT_DATA;
}
