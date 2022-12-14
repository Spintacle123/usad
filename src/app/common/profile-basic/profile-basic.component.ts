import { Component, OnInit, Input } from '@angular/core';
import { faLocation, faUser, faClock, faArrowRightToCity, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-profile-basic',
  templateUrl: './profile-basic.component.html',
  styleUrls: ['./profile-basic.component.css']
})
export class ProfileBasicComponent implements OnInit {
  faLocation = faLocation;
  faUser = faUser;
  faClock = faClock;
  faArrowRightToCity = faArrowRightToCity;
  faArrowRightLong = faArrowRightLong;
  @Input() profile = {
    imgUrl: 'assets/imgs/dp.jpg',
    name: 'Kevin Santos Dy',
    email: 'kevin@gmail.com',
    rating: 3,
    address: '40 Sgt. Esguera, Quezon City',
    memberSince: 'Sept 2022',
    reponseTime: 3,
    language: [
      {
        dialect: 'English',
        mastery: 'Professional Conversation'
      },
      {
        dialect: 'Filipino',
        mastery: 'Native/Bilingual'
      }
    ],
    skills: [
      "plumbing",
      "carpenting",
      "mechanical skill",
      "log builder",
      "problem solving",
      "industrial",
      "finish carpenter"
    ]
  }

  services = ['plumbing', 'carpenting', 'mechanical skill', 'problem solving', 'log builder', 'industrial', 'finish carpenter']

  constructor(
    private event: EventService
  ) { }

  ngOnInit(): void {
  }

  setModal(bol: boolean){
    this.event.publish('openModal', {isModal:bol,type:'message'})
  }
}
