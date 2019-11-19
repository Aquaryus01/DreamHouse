import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPlesoComponent } from './main-pleso.component';

describe('MainPlesoComponent', () => {
  let component: MainPlesoComponent;
  let fixture: ComponentFixture<MainPlesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPlesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPlesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
