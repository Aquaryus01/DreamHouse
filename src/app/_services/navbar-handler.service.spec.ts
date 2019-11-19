import { TestBed } from '@angular/core/testing';

import { NavbarHandlerService } from './navbar-handler.service';

describe('NavbarHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavbarHandlerService = TestBed.get(NavbarHandlerService);
    expect(service).toBeTruthy();
  });
});
