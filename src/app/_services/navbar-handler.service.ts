import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarHandlerService {
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  
  handle(activeToogle: boolean) {
    this.change.emit(activeToogle);
  }

  constructor() { }
}
