import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMessageValidateComponent } from './form-message-validate.component';

describe('FormMessageValidateComponent', () => {
  let component: FormMessageValidateComponent;
  let fixture: ComponentFixture<FormMessageValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMessageValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMessageValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
