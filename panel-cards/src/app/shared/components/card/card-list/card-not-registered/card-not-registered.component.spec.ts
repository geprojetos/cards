import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNotRegisteredComponent } from './card-not-registered.component';

describe('CardNotRegisteredComponent', () => {
  let component: CardNotRegisteredComponent;
  let fixture: ComponentFixture<CardNotRegisteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNotRegisteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNotRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
