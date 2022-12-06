import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
  faqs =[
    {
      id: 0,
      question: "What are the prices for the additional services?",
      answer: 'Sobrang linis ng kanyang pagkakagawa, napakaganda ng disenyo at nasusunod ang aking gusto. Madaling kausap at nakakaintindi talaga! Magpapagawa ako ulit para sa aking kusina. Sa uulitin!',
      isToggled: false
    },
    {
      id: 1,
      question: "What are the prices for the additional services?",
      answer: 'Sobrang linis ng kanyang pagkakagawa, napakaganda ng disenyo at nasusunod ang aking gusto. Madaling kausap at nakakaintindi talaga! Magpapagawa ako ulit para sa aking kusina. Sa uulitin!',
      isToggled: false
    },
    {
      id: 2,
      question: "What are the prices for the additional services?",
      answer: 'Sobrang linis ng kanyang pagkakagawa, napakaganda ng disenyo at nasusunod ang aking gusto. Madaling kausap at nakakaintindi talaga! Magpapagawa ako ulit para sa aking kusina. Sa uulitin!',
      isToggled: false
    },
    {
      id: 3,
      question: "What are the prices for the additional services?",
      answer: 'Sobrang linis ng kanyang pagkakagawa, napakaganda ng disenyo at nasusunod ang aking gusto. Madaling kausap at nakakaintindi talaga! Magpapagawa ako ulit para sa aking kusina. Sa uulitin!',
      isToggled: false
    },
    {
      id: 4,
      question: "What are the prices for the additional services?",
      answer: 'Sobrang linis ng kanyang pagkakagawa, napakaganda ng disenyo at nasusunod ang aking gusto. Madaling kausap at nakakaintindi talaga! Magpapagawa ako ulit para sa aking kusina. Sa uulitin!',
      isToggled: false
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  setToggle(id: number){
    this.faqs.forEach((faq)=>{
      if(faq.id == id) faq.isToggled = !faq.isToggled;
    });
  }

}
