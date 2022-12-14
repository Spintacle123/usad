import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() result:any = ""
  Title = ""
  subTitle = ""
  label = ""
  img = ''

  constructor() { }

  ngOnInit(): void {
    if(this.result.status === 'passed'){
      this.Title = 'Great, Congratulations you passed the exam'
      this.subTitle = 'By passing the carpentry test, you earned a new badge'
      this.label = `You scored ${this.result.percent}%, your higher than 500 exam taker.`
      this.img = '/assets/imgs/passed.jpg'
    }else{
      this.Title = "Oops!, Unfortunately you didn't passed the exam."
      this.subTitle = 'In 6 months, you’ll get another chance to retake the assessment. In the meantime, <br> Watching Youtube or reading articles can help you prepare.'
      this.label = `Your score is lesser than the passing score percentage 50%. Score more than 50% to earn a badge.`
      this.img = '/assets/imgs/stress.jpg'
    }
  }

}
