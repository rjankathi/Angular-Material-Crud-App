import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-result-form',
  templateUrl: './result-form.component.html',
  styleUrls: ['./result-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultFormComponent implements OnInit {
  // Receive formData object from the parent 'NewContactComponent'
  @Input() formData: any;

  constructor() { }

  ngOnInit() {
  }

}
