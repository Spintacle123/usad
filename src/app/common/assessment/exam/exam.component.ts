import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { examQuestions } from 'src/app/services/common';
import { secondToCountdown, correctAnswers } from 'src/app/services/common';
import { ignoreElements } from 'rxjs';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  @Input() type = "exam"
  questions = examQuestions
  correctAnswers = correctAnswers
  activeQuestion = 0
  timer: any = 0;
  timeRemaining= '00:00'
  time:any = null;
  choosenAnswer = ""
  answers:any[] = []
  result:any = null



  constructor(
    private event: EventService
  ) { }

  ngOnInit(): void {
    this.timer = this.questions[this.activeQuestion].timeLimit
    this.time = setInterval(()=> {
      if(this.timer > 0){
        this.timer = this.timer - 1
      }
      this.timeRemaining = this.countDown(this.timer)
    }, 1000);
  }

  nextQuestion(){
    this.activeQuestion = this.activeQuestion + 1
    this.timer = this.questions[this.activeQuestion].timeLimit
    this.answers.push(this.choosenAnswer)
    this.choosenAnswer = ''
  }

  countDown(time: number){
    return secondToCountdown(time);
  }

  computePertentage(currentNo: number, max:number){
    let percent = (currentNo/max) * 100
    return percent.toString()+'%';
  }

  pertentage(currentNo: number, max:number){
    let percent = (currentNo/max) * 100
    return percent;
  }

  submitAnswers(){
    this.answers.push(this.choosenAnswer)
    this.choosenAnswer = ''

    let correctCounter = 0;

    this.answers.forEach((urAnswer: any, ctr: number)=>{
       if(urAnswer === this.correctAnswers[ctr]){
          correctCounter = correctCounter + 1
       }
    })

    let percetAnswer = this.pertentage(correctCounter, this.questions.length)
    if(percetAnswer > 50){
      this.result = {
        status: 'passed',
        percent: percetAnswer
      }
    }else{
      this.result = {
        status: 'failed',
        percent: percetAnswer
      }
    }
  }
}
