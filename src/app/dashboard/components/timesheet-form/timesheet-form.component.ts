import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-timesheet-form',
  templateUrl: './timesheet-form.component.html',
  styleUrls: ['./timesheet-form.component.scss']
})
export class TimesheetFormComponent implements OnInit {
  @Input() isFormShown: boolean;
  @Output() timesheetFormClosed = new EventEmitter<boolean>();
  timesheetCardForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.timesheetCardForm = this.formBuilder.group({
      title: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
    });
  }

  closeForm() {
    this.timesheetFormClosed.emit(false);
  }

}
