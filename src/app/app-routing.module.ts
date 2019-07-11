import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EventListComponent} from './event-list/components/event-list.component';
import {EventBookingComponent} from './event-booking/event-booking.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: EventListComponent
  },
  {
    path: 'booking/:id',
    component: EventBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
