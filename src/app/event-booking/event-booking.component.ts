import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../event.service';
import {EventList} from '../event-list/models/event-list.model';

@Component({
  selector: 'app-booking-list',
  templateUrl: './event-booking.component.html',
  styleUrls: ['./event-booking.css']
})
export class EventBookingComponent implements OnInit {

  private bookingForm: FormGroup;
  private disableSubmit = false;
  private disableCancel = false;
  private attendees: string[];
  private success = false;
  private submitted = false;
  private selectedEvent: EventList;

  constructor(private router: Router,
              private eventService: EventService,
              private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedEvent = this.eventService.getEventById(params['id']);
      this.bookingForm = new FormGroup({
        name: new FormControl(null, [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        phoneNumber: new FormControl(null, [Validators.pattern('^[0][1-9]\\d{9}$|^[1-9]\\d{9}$')]),
        numberOfSeats: new FormControl('1', [Validators.required, Validators.max(this.selectedEvent.numberOfSeatsSvailable)])
      });
    });
  }

  private onCancel(): void {
    console.log('Test1');
    this.router.navigate(['/list']);

  }

  private onSubmit(): void {
    this.submitted = true;
    if (this.bookingForm.valid) {
      this.disableCancel = true;
      this.disableSubmit = true;
      this.success = true;
      // display user data on console please check console
      console.log('User data : ');
      for (const data in this.bookingForm.controls) {
        console.log(data + ' : ' + this.bookingForm.controls[data].value);
      }
    }
  }

  private onSeatSelect(): void {
    this.attendees = [];
    this.removeControls();
    if (this.bookingForm.controls['numberOfSeats'].value > 1) {
      this.addControls();
    } else {
      this.removeControls();
    }
  }

  private addControls(): void {
    for (let num = 1; num <= this.bookingForm.controls['numberOfSeats'].value; num++) {
      const name: string = 'nameOfOtherAttendees' + num;
      this.bookingForm.addControl(name, new FormControl('', Validators.required));
      this.attendees.push(name);
    }
  }

  private removeControls(): void {
    for (let num = 1; num <= 6; num++) {
      const name: string = 'nameOfOtherAttendees' + num;
      delete this.bookingForm.controls[name];
    }
  }

}
