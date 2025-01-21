import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-reward-card',
  imports: [MatCardModule, CommonModule],
  templateUrl: './reward-card.component.html',
  styleUrl: './reward-card.component.scss'
})
export class RewardCardComponent {
 rewardsData = [
  {
      "pk": 989,
      "name": "Chanel",
      "points": 15,
      "display_img_url": "assets/images/logo-1.png",
      "quantity": 20,
      "valid_until": "2024-02-03T00:00:00",
      "low_quantity": 10
  },
  {
      "pk": 987,
      "name": "Versace",
      "points": 10,
      "display_img_url": "assets/images/logo-2.png",
      "quantity": 25,
      "valid_until": "",
      "low_quantity": 10
  },
  {
      "pk": 981,
      "name": "Rolex",
      "points": 1,
      "display_img_url": "assets/images/logo-3.png",
      "quantity": 2,
      "valid_until": "2024-01-31T00:00:00",
      "low_quantity": 10
  },
  
  {
      "pk": 980,
      "name": "Zara",
      "points": 20,
      "display_img_url": "assets/images/logo-4.png",
      "quantity": 27,
      "valid_until": "2024-01-25T00:00:00",
      "low_quantity": 20
  },
  
  {
      "pk": 999,
      "name": "H&M",
      "points": 15,
      "display_img_url": "assets/images/logo-5.png",
      "quantity": 12,
      "valid_until": "",
      "low_quantity": 8
  },
  
  {
      "pk": 909,
      "name": "BRAND",
      "points": 25,
      "display_img_url": "assets/images/logo-6.png",
      "quantity": 30,
      "valid_until": "",
      "low_quantity": 15
  },
  
  {
      "pk": 976,
      "name": "Morgan Maxwell",
      "points": 145,
      "display_img_url": "assets/images/logo-7.png",
      "quantity": 8,
      "valid_until": "2024-04-13T00:00:00",
      "low_quantity": 10
  },
  
  {
      "pk": 954,
      "name": "Chanel",
      "points": 100,
      "display_img_url": "assets/images/logo-1.png",
      "quantity": 3,
      "valid_until": "",
      "low_quantity": 6
  },
  
  {
      "pk": 912,
      "name": "Versace",
      "points": 159,
      "display_img_url": "assets/images/logo-2.png",
      "quantity": 12,
      "valid_until": "2024-12-31T00:00:00",
      "low_quantity": 10
  }
]
}
