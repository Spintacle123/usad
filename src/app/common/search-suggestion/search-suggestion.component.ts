import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { jobList } from 'src/app/services/common';
import { Console } from 'console';
import { filter } from 'rxjs';

@Component({
  selector: 'app-search-suggestion',
  templateUrl: './search-suggestion.component.html',
  styleUrls: ['./search-suggestion.component.css']
})
export class SearchSuggestionComponent implements OnInit {
  @Input() search = "";
  jobList = jobList;
  searchSuggestion: any[] = [];

  constructor(
    public event: EventService
  ) { }

  ngOnInit(): void {
    this.filterOnSearch();
  }

  filterOnSearch(){
    this.event.subscribe('searching', (search) => {
     this.searchSuggestion = this.jobList.filter((str) => str.includes(search))
    });
  }
}
