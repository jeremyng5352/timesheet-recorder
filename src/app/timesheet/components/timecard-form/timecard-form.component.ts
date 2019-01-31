import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Timesheet } from '../../timesheet';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TimecardService } from '../../../timecard/timecard.service';

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
  isLoading: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private timecardService: TimecardService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.timecardForm = this.formBuilder.group({
      title: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
      startDateTime: this.formBuilder.control(''),
    });
  }

  closeForm() {
    this.timecardFormClosed.emit(false);
  }

  createTimecard() {
    this.isLoading = true;
    const formValue = this.getFormValue();
    this.timecardService.generateTimecard(
      this.currentTimesheet.id,
      formValue.title,
      formValue.startDateTime,
    ).then((response) => {
      if ( response === true) {
        this.isLoading = false;
        this.isFormShown = false;
      }
    });
  }

  getFormValue() {
    const title = this.timecardForm.get('title').value;
    const startDateTime = this.timecardForm.get('startDateTime').value;
    const value = {
      title: title,
      startDateTime: startDateTime,
    };
    return value;
  }

}
