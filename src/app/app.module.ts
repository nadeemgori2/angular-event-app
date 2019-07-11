import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EventBookingComponent} from './event-booking/event-booking.component';
import {EventListComponent} from './event-list/components/event-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EventService} from './event.service';

@NgModule({
  declarations: [
    AppComponent,
    EventBookingComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
