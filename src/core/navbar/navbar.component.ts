import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  // Receive menu data from the parent 'MainLayoutComponent'
  @Input() menu: Array<object>;
  constructor() { }

  ngOnInit() {
  }

}
