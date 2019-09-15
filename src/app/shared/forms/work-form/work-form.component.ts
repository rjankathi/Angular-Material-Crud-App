import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-work-form',
  templateUrl: './work-form.component.html',
  styleUrls: ['./work-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkFormComponent implements OnInit {
// Receive FormGroup instance from the parent 'NewContactComponent'
 @Input() form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
