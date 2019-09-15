import { FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-personal-form',
  templateUrl: './personal-form.component.html',
  styleUrls: ['./personal-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalFormComponent implements OnInit {
  // Receive FormGroup instance from the parent 'NewContactComponent'
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
