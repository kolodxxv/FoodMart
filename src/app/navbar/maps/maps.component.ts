import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, pipe, map, ReplaySubject, } from 'rxjs'
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { YaReadyEvent } from 'angular8-yandex-maps';




@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent {

  public currentAddres?: any[] = []
  public map?: ymaps.Map;

 public userInputGroup = new FormGroup({
  apt: new FormControl(''),
  int: new FormControl(),
  stair: new FormControl(''),
  floor: new FormControl('')
 })

  constructor() {}

  onSubmit(){
    this.currentAddres?.push(this.userInputGroup.value)
    console.log(this.currentAddres)
  }


  
  


  


}
