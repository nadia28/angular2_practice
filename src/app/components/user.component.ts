import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <h1>Hello {{name}}</h1>
  <p><strong>Email:</strong> {{email}}</p>
  <p><strong>Address:</strong> {{address.street}} {{address.city}}, {{address.state}}</p>
  `,
})
export class UserComponent  {
  name;
  email;
  address = {
street: '14 Sherman Way',
city: 'Los Angeles',
state: 'CA'
  }

  constructor() {
    this.name = 'Nadia Kim';
    this.email = 'kim.nadia@gmail.com';
    this.address = {
      street: '14 Sherman Way',
      city: 'Los Angeles',
      state: 'CA'
  }
}
