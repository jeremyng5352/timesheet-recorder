import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Timesheet } from '../../timesheet';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-timecard-form',
  templateUrl: './timecard-form.component.html',
  styleUrls: ['./timecard-form.component.scss']
})
export class TimecardFormComponent implements OnInit {
  @Input() isFormShown: boolean;
  @Input() currentTimesheet: Timesheet;
  @Output() timecardFormClosed = new EventEmitter<boolean>();
  timecardForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.timecardForm = this.formBuilder.group({
      description: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
      startDateTime: this.formBuilder.control(''),
      endDateTime: this.formBuilder.control(''),
    });
  }

  closeForm() {
    this.timecardFormClosed.emit(false);
  }

}
