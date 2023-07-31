import { Component } from '@angular/core';
import { BingMapsAPILoader } from '../shared/mapsLoader';
import 'bingmaps';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent {

  public searchManager?: any;
  public map?: any;

  constructor(loader: BingMapsAPILoader) {
    loader.load("bingAPIReady").then(() => this.initMap());
  }

  public initMap() {
    const options: Microsoft.Maps.IMapLoadOptions = {
      center: new Microsoft.Maps.Location(47.025317, 28.833093),
      credentials: 'AmWN0I_IbhuZNonEj7vQWN-VIsyOJ6wnt0hU2Dq_sZaaz49FpssaPQ9Hh8DJV7m5'
    }

    this.map = new Microsoft.Maps.Map(document.getElementById('map')!, options);
    const infobox = new Microsoft.Maps.Infobox(this.map.getCenter(), {
      title: 'Map Center',
      description: 'Chisinau'
    });
    infobox.setMap(this.map);
  };


  public searchMap() {
    if (!this.searchManager) {
      Microsoft.Maps.loadModule('Microsoft.Maps.Search', () => {
        this.searchManager = new Microsoft.Maps.Search.SearchManager(this.map);
        this.searchMap()
      }); 
    } else {
        this.map.entities.clear();
        const query = (<HTMLInputElement>document.getElementById('searchTbx')).value;
        // this.geocodeQuery(query);
      }
  };

  // public geocodeQuery(query: string): void {
  //   const searchRequest: Microsoft.Maps.Search.SearchRequestOptions = {
  //       where: query,
  //       callback: (r: Microsoft.Maps.Search.SearchResponse) => {
  //           if (r && r.results && r.results.length > 0) {
  //               let pin: Microsoft.Maps.Pushpin, pins: Microsoft.Maps.Pushpin[] = [], locs: Microsoft.Maps.Location[] = [], output = 'Results:<br/>';

  //               for (let i = 0; i < r.results.length; i++) {
  //                   //Create a pushpin for each result. 
  //                   pin = new Microsoft.Maps.Pushpin(r.results[i].location, {
  //                       text: i + ''
  //                   });
  //                   pins.push(pin);
  //                   locs.push(r.results[i].location);

  //                   output += i + ') ' + r.results[i].name + '<br/>';
  //               }

  //               //Add the pins to the map
  //               this.map.entities.push(pins);

  //               //Display list of results
  //               document.getElementById('output').innerHTML = output;

  //               //Determine a bounding box to best view the results.
  //               let bounds: Microsoft.Maps.LocationRect;

  //               if (r.results.length == 1) {
  //                   bounds = r.results[0].bestView;
  //               } else {
  //                   //Use the locations from the results to calculate a bounding box.
    
  }
