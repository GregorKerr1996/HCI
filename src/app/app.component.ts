import { Component, OnInit } from '@angular/core';

import { Marker, EarthInteractions, Coordinates, CoordinateBoundaries, Address, Content, ContentType } from './shared-classes';
import { RestHelperService } from './services/rest-helper.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayCrosshairs = false;
  currentPosition = undefined;
  currentMapBoundaries = undefined;
  showActivities = false;
  markers: Marker[] = [];
  currentAddress: Address = undefined;
  selectedMarker: Marker;

  constructor(
    private restHelperService: RestHelperService,
  ) { }

  // Mock data
  loc1: Marker = new Marker(
    32.752310,
    -117.194640,
    'United States, America',
    '../assets/markers/red.jpg',
    [
      new Content(ContentType.IMAGE, '../assets/images/USA.png'),
    ],
    'Total NCD Mortality Data by country',
  );



  loc2 = new Marker(
    56.071739, -3.452151,
    'United Kingdom',
    '../assets/markers/red.jpg',
    [new Content(ContentType.IMAGE, '../assets/images/UK.png', 'United Kingdom'),
    ],
    'Total NCD Mortality Data by country',
  
  );
  

  loc3 = new Marker(
    -30.0002, 136.2092,
    'Australia',
    '../assets/markers/red.jpg',
    [new Content(ContentType.IMAGE, '../assets/images/Australia.png','Australia'),
    ],
    'Total NCD Mortality Data by country',
  );


  loc4: Marker = new Marker(
    35.8617,104.1954,
    'China',
    '../assets/markers/red.jpg',
    [
      new Content(ContentType.IMAGE, 'assets/images/china.png','China'),
  
    ],
    'Total NCD Mortality Data by country',
  );

  loc5 = new Marker(
    8.7832, 34.5085,
    'Sudan/Africa',
    '../assets/markers/red.jpg',
    [new Content(ContentType.IMAGE, '../assets/images/sudan.png','Sudan'),
    ],
    'Total NCD Mortality Data by country',
  );

  ngOnInit() {
    // Prevent `pinch to zoom` on mobile devices;
    document.addEventListener('gesturechange', (event: Event) => {
      event.preventDefault();
    });
    this.placeMarkers();
  }

  placeMarkers() {
    this.markers = [this.loc1, this.loc2, this.loc3,this.loc4,this.loc5];
  }

  toggleActivities() {
    this.showActivities = !this.showActivities;
  }

  toggleCrosshairs() {
    this.displayCrosshairs = !this.displayCrosshairs;
  }

  clearMarkers() {
    this.markers = [];
  }

  selectMarker(marker: Marker) {
    this.selectedMarker = marker;
    this.showActivities = true;

    console.log('updated marker to', marker);
  }

  deSelectMarker() {
    this.selectedMarker = undefined;
    this.showActivities = false;
  }

  async updateCenterLocation(centerObj: EarthInteractions) {
    if (centerObj.mapCenter) {
      this.currentPosition = new Coordinates(
        centerObj.mapCenter.latitude,
        centerObj.mapCenter.longitude
      );

      // Get address from service
      // this.currentAddress = await this.restHelperService.getAddressAtCoordinates(this.currentPosition);
    } else {
      this.currentPosition = undefined;
    }

    if (centerObj.mapBoundaries) {
      this.currentMapBoundaries = new CoordinateBoundaries(
        centerObj.mapBoundaries.minLatitude,
        centerObj.mapBoundaries.maxLatitude,
        centerObj.mapBoundaries.minLongitude,
        centerObj.mapBoundaries.maxLongitude);
    } else {
      this.currentMapBoundaries = undefined;
    }
  }
}
