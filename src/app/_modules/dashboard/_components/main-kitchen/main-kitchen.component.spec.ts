import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainKitchenComponent } from './main-kitchen.component';

describe('MainKitchenComponent', () => {
  let component: MainKitchenComponent;
  let fixture: ComponentFixture<MainKitchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainKitchenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
