import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCalendarioComponent } from './add-calendario.component';

describe('AddCalendarioComponent', () => {
  let component: AddCalendarioComponent;
  let fixture: ComponentFixture<AddCalendarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCalendarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
