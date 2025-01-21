import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-home',
  imports: [MatInputModule, MatIconModule, MatCardModule, MatExpansionModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
