import { Component, OnInit } from '@angular/core';
import { faPlus, faCancel, faXmark } from '@fortawesome/free-solid-svg-icons';
import { EventService } from 'src/app/services/event.service';



@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  faPlus = faPlus
  inFocus = false
  faCancel = faCancel
  faXmark = faXmark

  searchBox = ""
  keyWords = ""
  keys = [
    "carpenter", "masson", "house bulding", "construction"
  ]

  constructor(
    public event: EventService
  ) { }

  ngOnInit(): void {
  }


  onFocus(setFocus: boolean){
    this.inFocus = setFocus;
  }

  onKeyUp(event: any){
    if(event.code === 'Enter'){
      this.keys.push(this.keyWords);
      this.keyWords = ""
    }
    this.event.publish('searching', this.searchBox);
  }

}
