import { Component, OnInit } from '@angular/core';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit {
  faClipboard = faClipboard;
  constructor() { }

  ngOnInit(): void {
  }

}
