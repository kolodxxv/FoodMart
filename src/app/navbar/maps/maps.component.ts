import { Component, Inject} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { YaReadyEvent, YaGeocoderService, YaEvent } from 'angular8-yandex-maps';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Utils } from 'src/app/utils/utils';




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
  public selectedCoords: any;
  
  // Input Group
 public userInputGroup = new FormGroup({})

//  Placemark settings
placemarkPropperties: ymaps.IPlacemarkProperties = {
  hintContent: 'Selected address',
}

placemarkOptions: ymaps.IPlacemarkOptions = {
  iconLayout: 'default#image',
  iconImageHref: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
  iconImageSize: [32, 32]

}

  constructor(
    private yaGeocoderService: YaGeocoderService,
    public dialogRef: MatDialogRef<MapsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public utils: Utils
  ) {}

  ngOnInit(): void {
    const formControls: string[] = ['apt', 'int', 'stair', 'floor', 'comment'];
    this.userInputGroup = this.utils.generateFormGroup(formControls)
  }

  onMapClick(e: YaEvent<ymaps.Map>): void {
    const { target, event } = e;

    if (!target.balloon.isOpen()) {
      const coords = event.get('coords');
      this.selectedCoords = coords;
      const addrs = this.yaGeocoderService.geocode(`${coords}`, {
        results: 1
      }).subscribe((result: any) => {
        const firstGeoObj = result.geoObjects.get(0).properties.get('name');
        this.selectedAddress = firstGeoObj
      } )

    // !target.balloon.open(coords, {
    //   // contentHeader: 'Selected address:',
    //   // contentBody: '' + this.selectedAddress
    // });
    } else {
      target.balloon.close()
    }
  }

  public onSubmit(){
    this.currentAddres?.push(this.userInputGroup.value, this.selectedAddress)
    this.dialogRef.close({data: this.currentAddres});
  }

 


  
  


  


}
