import { Component, OnInit } from '@angular/core';
import { StyleService } from 'src/app/services/style.service';
import { EventService } from 'src/app/services/event.service';
import { Router,Event, ActivatedRoute, NavigationEnd } from '@angular/router';
import { faBell, faMessage, faStar, faShuffle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faBell = faBell;
  faMessage = faMessage;
  faStar = faStar;
  faShuffle = faShuffle;
  currentRouter = "";
  inFocus = false;
  searchBox = "";

  constructor(
    public styles: StyleService,
    private router: Router,
    public event: EventService,
    private route: ActivatedRoute,
  ) {
    router.events.subscribe((event: Event) => {
      this.getRoute();
    });
  }

  ngOnInit(): void {
  }

  getRoute() {
    this.currentRouter = this.router.url;
  }

  scroll(id:any) {
    let el = document.getElementById(id);
    el?.scrollIntoView({behavior: 'smooth'});
  }

  onFocus(setFocus: boolean){
    this.inFocus = setFocus;
  }

  onKeyUp(event: any){
    this.event.publish('searching', this.searchBox);
  }
}
