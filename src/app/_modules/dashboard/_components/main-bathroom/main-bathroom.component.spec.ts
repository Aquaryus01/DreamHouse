import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBathroomComponent } from './main-bathroom.component';

describe('MainBathroomComponent', () => {
  let component: MainBathroomComponent;
  let fixture: ComponentFixture<MainBathroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBathroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBathroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
