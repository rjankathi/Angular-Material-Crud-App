import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  // Receive menu object and title from the parent 'AppComponent'
  @Input() title: string;
  @Input() menu: Array<object>;

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor() { }

  toggleSidenav() {
    // trigger the child components 'toggle method'
    this.sidenav.toggle();
  }
}
