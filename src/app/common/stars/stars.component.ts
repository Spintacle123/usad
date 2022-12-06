import { Component, OnInit, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  faStar = faStar;
  @Input() noOfStar = 5;
  @Input() fontSize = null;
  constructor() { }

  ngOnInit(): void {
  }

}
