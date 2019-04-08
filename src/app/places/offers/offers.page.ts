import { Place } from './../place.model';
import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss']
})
export class OffersPage implements OnInit {
  offers: Place[];
  constructor(private placeService: PlacesService) {}

  ngOnInit() {
    this.offers = this.placeService.places;
  }
}
