import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Material CRUD Forms';

    menu: Array<object> = [
        { name: 'Profile', url: 'https://www.linkedin.com/in/rajankathi/' },
        { name: 'Github', url: 'https://github.com/rjankathi/Angular-Material-Crud-App' },
        { name: 'About me', url: 'https://github.com/rjankathi' }
    ];
}
