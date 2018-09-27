import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddCardComponent } from './form-add-card.component';

describe('FormAddCardComponent', () => {
  let component: FormAddCardComponent;
  let fixture: ComponentFixture<FormAddCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
