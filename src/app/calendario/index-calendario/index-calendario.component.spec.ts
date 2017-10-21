import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCalendarioComponent } from './index-calendario.component';

describe('IndexCalendarioComponent', () => {
  let component: IndexCalendarioComponent;
  let fixture: ComponentFixture<IndexCalendarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexCalendarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
