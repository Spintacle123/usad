import { Component, OnInit } from '@angular/core';
import { faThumbsUp, faThumbsDown, faThumbTack } from '@fortawesome/free-solid-svg-icons';
import { time2TimeAgo } from 'src/app/services/common';
import * as moment from 'moment';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  time2TimeAgo = time2TimeAgo;

  comments = [
    {
      name: 'Diego Santos',
      email: 'diego@gmail.com',
      ratedStar: 4.7,
      publishedDate: 1667728343,
      comment: 'Sobrang linis ng kanyang pagkakagawa, napakaganda ng disenyo at nasusunod ang aking gusto. Madaling kausap at nakakaintindi talaga! Magpapagawa ako ulit para sa aking kusina. Sa uulitin!',
      isHelpfull: true
    },
    {
      name: 'Diego Santos',
      email: 'diego@gmail.com',
      ratedStar: 4.7,
      publishedDate: 1667728343,
      comment: 'Sobrang linis ng kanyang pagkakagawa, napakaganda ng disenyo at nasusunod ang aking gusto. Madaling kausap at nakakaintindi talaga! Magpapagawa ako ulit para sa aking kusina. Sa uulitin!',
      isHelpfull: false
    },
    {
      name: 'Diego Santos',
      email: 'diego@gmail.com',
      ratedStar: 4.7,
      publishedDate: 1670202790,
      comment: 'Sobrang linis ng kanyang pagkakagawa, napakaganda ng disenyo at nasusunod ang aking gusto. Madaling kausap at nakakaintindi talaga! Magpapagawa ako ulit para sa aking kusina. Sa uulitin!',
      isHelpfull: false
    },
    {
      name: 'Diego Santos',
      email: 'diego@gmail.com',
      ratedStar: 4.7,
      publishedDate: 1670202790,
      comment: 'Sobrang linis ng kanyang pagkakagawa, napakaganda ng disenyo at nasusunod ang aking gusto. Madaling kausap at nakakaintindi talaga! Magpapagawa ako ulit para sa aking kusina. Sa uulitin!',
      isHelpfull: false
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  toAgo(unix: number){
    return moment(unix).fromNow();
  }
}
