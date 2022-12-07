import { Component, OnInit } from '@angular/core';
import { WindowsScrollService } from 'src/app/services/windows-scroll.service';
import { EventService } from 'src/app/services/event.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isModal = false;
  type = 'modal'

  constructor(
    private scroll: WindowsScrollService,
    private event: EventService
  ) { }

  ngOnInit(): void {
    this.setScroll()
    this.event.subscribe('openModal', (openModal) => {
      this.isModal = openModal.isModal;
      this.type = openModal.type;
      this.setScroll()
   });
  }


  setModal(event: any){
    this.isModal = event;
  }

  setScroll(){
    if(this.isModal){
      this.scroll.disable();
    }else{
      this.scroll.enable();
    }
  }

}
