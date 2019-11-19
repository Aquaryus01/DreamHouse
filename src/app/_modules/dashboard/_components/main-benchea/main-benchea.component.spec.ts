import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBencheaComponent } from './main-benchea.component';

describe('MainBencheaComponent', () => {
  let component: MainBencheaComponent;
  let fixture: ComponentFixture<MainBencheaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBencheaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBencheaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
