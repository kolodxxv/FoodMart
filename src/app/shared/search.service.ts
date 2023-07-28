import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Outlets } from "../outlet/restaurants/shared/models/restaurants-model";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private inputValueSubject = new BehaviorSubject<string>('');
  inputValue$ = this.inputValueSubject.asObservable();

  setInputValue(inputValue: string) {
    this.inputValueSubject.next(inputValue);
  }
  
  constructor(
    
  ) {}


}