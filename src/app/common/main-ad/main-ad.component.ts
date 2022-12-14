import { Component, OnInit } from '@angular/core';
import { StyleService } from 'src/app/services/style.service';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-main-ad',
  templateUrl: './main-ad.component.html',
  styleUrls: ['./main-ad.component.css']
})
export class MainAdComponent implements OnInit {
  faSearch = faMagnifyingGlass;

  constructor(
    public styles: StyleService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  goToGame(id: number) {
    this.router.navigate([`/freelancer/profile`], { queryParams: { userId: id } });
  }

}
