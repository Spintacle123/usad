import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  faPlus= faPlus
  cellDesign = "p-5 pt-7 border-r border-b"
  extraServices = [
    {
      isActive: true,
      label:'This Extra Service Number 1 with extra'
    },
    {
      isActive: false,
      label:'This Extra Service Number 2'
    },
    {
      isActive: false,
      label:'This Extra Service Number 4 with extra'
    },
    {
      isActive: false,
      label:'This Extra Service Number 5 with extra'
    }
  ]

  services = [
    {
      label: 'Service 1',
      premium: false,
      basic: false,
      standard: false
    },
    {
      label: 'Service 2',
      premium: false,
      basic: false,
      standard: false
    },
    {
      label: 'Service 3',
      premium: false,
      basic: false,
      standard: false
    },
    {
      label: 'Service 4',
      premium: false,
      basic: false,
      standard: false
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  newExtraService(){
    this.extraServices.push({
      isActive:false,
      label: ""
    })
  }

  newService(){
    this.services.push({
      label: '',
      premium: false,
      basic: false,
      standard: false
    })
  }

}
