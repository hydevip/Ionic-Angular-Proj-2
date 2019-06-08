import { IonItemSliding, LoadingController } from '@ionic/angular';
import { Booking } from './booking.model';
import { BookingService } from './booking.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit, OnDestroy {

  loadedBookings: Booking[];
  isLoading = false;
  private bookingSub: Subscription;

  constructor(
    private bookinService: BookingService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.bookingSub = this.bookinService.bookings.subscribe(bookings => {
      this.loadedBookings = bookings;
    });
  }


  ionViewWillEnter() {
    this.isLoading = true;
    this.bookinService.fetchBookings().subscribe(() => this.isLoading = false);
  }

  onCancelBooking(bookingId: string, slidingEl: IonItemSliding) {
    slidingEl.close();
    this.loadingCtrl.create({ message: 'Cancelling...' }).then(loadingEl => {
      loadingEl.present();
      this.bookinService.cancelBooking(bookingId).subscribe(() => {
        loadingEl.dismiss();
      });
    });

  }

  ngOnDestroy() {
    if (this.bookingSub) {
      this.bookingSub.unsubscribe();
    }
  }
}
