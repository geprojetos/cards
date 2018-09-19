import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardButtonMoreCardsComponent } from './card-button-more-cards.component';

describe('CardButtonMoreCardsComponent', () => {
  let component: CardButtonMoreCardsComponent;
  let fixture: ComponentFixture<CardButtonMoreCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardButtonMoreCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardButtonMoreCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
