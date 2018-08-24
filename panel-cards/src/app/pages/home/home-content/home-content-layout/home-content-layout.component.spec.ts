import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContentLayoutComponent } from './home-content-layout.component';

describe('HomeContentLayoutComponent', () => {
  let component: HomeContentLayoutComponent;
  let fixture: ComponentFixture<HomeContentLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeContentLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
