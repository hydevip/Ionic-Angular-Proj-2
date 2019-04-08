import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City.',
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042534/Felix_Warburg_Mansion_007.jpg',
      149.99
    ),
    new Place(
      'p2',
      'L\'Amour Toujours',
      'A romantic place in Paris!',
      'https://theplanetd.com/images/Paris-night-eiffel-tower.jpg',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Place',
      'Not your average city trip!',
      'https://pbs.twimg.com/media/DsTrdcuU0AAwzcc.jpg',
      99.99
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() {}
}
