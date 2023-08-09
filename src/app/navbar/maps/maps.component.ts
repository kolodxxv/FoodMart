import { Component, Inject} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { YaReadyEvent, YaGeocoderService, YaEvent } from 'angular8-yandex-maps';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';




@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent {

  // Yandex search-bar settings
  public parameters: ymaps.control.ISearchControlParameters = {
    options: {
      provider: 'yandex#search'
    }
  };

  public currentAddres?: any[] = []
  public selectedAddress: any;

 public userInputGroup = new FormGroup({
  apt: new FormControl(''),
  int: new FormControl(),
  stair: new FormControl(''),
  floor: new FormControl(''),
  comment: new FormControl('')
 })

  constructor(
    private yaGeocoderService: YaGeocoderService,
    public dialogRef: MatDialogRef<MapsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onMapClick(e: YaEvent<ymaps.Map>): void {
    const { target, event } = e;

    if (!target.balloon.isOpen()) {
      const coords = event.get('coords');
      const addrs = this.yaGeocoderService.geocode(`${coords}`, {
        results: 1
      }).subscribe((result: any) => {
        const firstGeoObj = result.geoObjects.get(0).properties.get('name');
        this.selectedAddress = firstGeoObj
      } )

      !target.balloon.open(coords, {
        contentHeader: 'Selected address:',
        contentBody: '' + this.selectedAddress
      });
    } else {
      target.balloon.close()
    }
  }

 onMapReady(event: YaReadyEvent<ymaps.Map>) : void {
  const map = event.target;
  ymaps.geolocation
  .get({
    provider: 'yandex',
    mapStateAutoApply: true,
  })
  .then((result) => {
    result.geoObjects.options.set('preset', 
    'islands#redCircleIcon');
    result.geoObjects.get(0).properties.set({
      ballonContentBody: 'My location',
    });
    map.geoObjects.add(result.geoObjects);
  });

  ymaps.geolocation
  .get({
    provider: 'browser',
    mapStateAutoApply: true,
  })
  .then((result) => {
    result.geoObjects.options.set('preset', 
    'islands#blueCircleIcon');
    map.geoObjects.add(result.geoObjects);
  })
 }

  onSubmit(){
    this.currentAddres?.push(this.userInputGroup.value, this.selectedAddress)
    this.dialogRef.close({data: this.currentAddres});
  }

 


  
  


  


}
