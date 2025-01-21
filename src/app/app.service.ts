import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private sidenavToggleSubject = new BehaviorSubject<boolean>(false);
  
  sidenavToggle$ = this.sidenavToggleSubject.asObservable();

  private sortSubject = new BehaviorSubject<number>(2);
  
  sort$ = this.sortSubject.asObservable();

  toggle() {
    this.sidenavToggleSubject.next(!this.sidenavToggleSubject.value);
  }

  setSort(value: number) {
    this.sortSubject.next(value);
  }
  
}
