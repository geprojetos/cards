import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAddContentComponent } from './card-add-content.component';

describe('CardAddContentComponent', () => {
  let component: CardAddContentComponent;
  let fixture: ComponentFixture<CardAddContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAddContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAddContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
