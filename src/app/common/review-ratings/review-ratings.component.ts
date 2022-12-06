import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-ratings',
  templateUrl: './review-ratings.component.html',
  styleUrls: ['./review-ratings.component.css']
})
export class ReviewRatingsComponent implements OnInit {

  ratings = [
    {
      star: 5,
      percent: 75,
      numberOfRates: 102
    },
    {
      star: 4,
      percent: 90,
      numberOfRates: 208
    },
    {
      star: 3,
      percent: 20,
      numberOfRates: 37
    },
    {
      star: 2,
      percent: 50,
      numberOfRates: 112
    },
    {
      star: 1,
      percent: 5,
      numberOfRates: 10
    }
  ]

  breakdown =[
    {
      label: 'Seller Communication Level',
      star: 4.9,
    },
    {
      label: 'Recommend to a friend',
      star: 4.9,
    },
    {
      label: 'Service as described',
      star: 5,
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
