import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";


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