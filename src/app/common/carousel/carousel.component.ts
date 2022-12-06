import { Component, OnInit, Input } from '@angular/core';
import { faArrowLeft, faArrowRight  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  @Input() type = 'gallery'

  listOfImages = [
    {
      id:0,
      imgUrl: "/assets/imgs/weld1.jpg",
      label: "img1"
    },
    {
      id:1,
      imgUrl: "/assets/imgs/weld2.jpg",
      label: "img2"
    },
    {
      id:2,
      imgUrl: "/assets/imgs/weld3.jpg",
      label: "img3"
    },
  ]

  activeImage = {
    id:0,
    imgUrl: "",
    label: "img1"
  };

  constructor() { }

  ngOnInit(): void {
    this.activeImage = this.listOfImages[0];
  }

  setActiveSlide(img: any){
    this.activeImage = img;
  }

  setActivePage(operator: string){
    let setActive = 0;
    if(operator === 'add'){
      setActive = this.activeImage.id + 1 > 2 ? 0 : this.activeImage.id + 1
      console.log(setActive)
    }else{
      setActive = this.activeImage.id - 1 < 0 ? 2 : this.activeImage.id - 1
      console.log(setActive)
    }

    this.activeImage = this.listOfImages[setActive];
  }

}
