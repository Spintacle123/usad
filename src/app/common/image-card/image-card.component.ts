import { Component, OnInit, Input } from '@angular/core';
import { faStarOfLife, faHamburger, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {
  @Input() slide= "";
  @Input() title= "";
  @Input() desc= "";
  @Input() type="dark"
  faStarOfLife = faStarOfLife;
  faBarsStaggered = faBarsStaggered;

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateTo(id: number) {
    this.router.navigate([`/freelancer/service`], { queryParams: { userId: id } });
  }

}
