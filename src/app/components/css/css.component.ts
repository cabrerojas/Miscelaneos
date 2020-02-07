import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
  <p>funciona </p>
  `,
  styles: [ `
  p {

    font-size:20px;
  }
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
