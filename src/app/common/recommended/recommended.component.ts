import { Component, OnInit, Input } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {
  @Input() title ="Recommended Gigs"
  @Input() self = false
  faPlus = faPlus

  constructor() { }

  ngOnInit(): void {
  }

}
