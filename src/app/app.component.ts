import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, HomeComponent, MatSidenavModule, CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'rewardz-assessment';
  @ViewChild('sidenav', { static: false }) sidenav!: MatSidenav;
  sortValue: number = 2; // Random list
  constructor(private appService: AppService) {}

  ngAfterViewInit() {
    this.appService.sidenavToggle$.subscribe((isOpen) => {
      if (isOpen) {
        this.sidenav.open();
      } else {
        this.sidenav.close();
      }
    });
  }

  resetSort() {
    this.sortValue = 2;
  }
  sortRewards(value: number) {
    this.sortValue = value;
  }
  applySort() {
    setTimeout(() => {
      this.appService.setSort(this.sortValue);
      this.appService.toggle();
    }, 100);
  }
}
