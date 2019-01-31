import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecardFormComponent } from './timecard-form.component';

describe('TimecardFormComponent', () => {
  let component: TimecardFormComponent;
  let fixture: ComponentFixture<TimecardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimecardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimecardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
