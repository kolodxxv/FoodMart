import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor() {}
  
  ngOnInit(): void {

  }

  enteredSearchValue: string = '';

  @Output()
  searchedTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchedTextChanged.emit(this.enteredSearchValue)
  }
}
