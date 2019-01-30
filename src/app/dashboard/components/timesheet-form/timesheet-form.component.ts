import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TimesheetService } from '../../../timesheet/timesheet.service';
import { User } from 'src/app/user/user';
@Component({
  selector: 'app-timesheet-form',
  templateUrl: './timesheet-form.component.html',
  styleUrls: ['./timesheet-form.component.scss']
})
export class TimesheetFormComponent implements OnInit {
  @Input() isFormShown: boolean;
  @Input() currentUser: User;
  @Output() timesheetFormClosed = new EventEmitter<boolean>();
  timesheetForm: FormGroup;
  isLoading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private timesheetService: TimesheetService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.timesheetForm = this.formBuilder.group({
      title: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
    });
  }

  closeForm() {
    this.timesheetFormClosed.emit(false);
  }

  createTimesheet() {
    this.isLoading = true;
    const title = this.timesheetForm.get('title').value;
    this.timesheetService.generateTimesheet(this.currentUser.id , title).then((response) => {
      if ( response === true) {
        this.isLoading = false;
      } else {

      }
    });
  }
}
