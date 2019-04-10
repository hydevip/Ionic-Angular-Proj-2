import { IonItemSliding } from '@ionic/angular';
import { Booking } from './booking.module';
import { BookingService } from './booking.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  loadedBookings: Booking[];

  constructor(private bookinService: BookingService) { }

  ngOnInit() {
    this.loadedBookings = this.bookinService.bookings;
  }

  onCancelBooking(offerId: string, slidingEl: IonItemSliding) {
    slidingEl.close();
    // cancel booking with id offerId
  }

}
