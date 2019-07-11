import {Component, OnInit} from '@angular/core';
import {EventList} from '../models/event-list.model';
import {Router} from '@angular/router';
import {EventService} from '../../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.css']
})
export class EventListComponent implements OnInit {

  private eventList: EventList[];
  private searchedEventList: EventList[];
  private placeholder = 'SEARCH EVENTS';

  _searchedValue: string;

  set searchedValue(newSearchedValue: string) {
    this._searchedValue = newSearchedValue;
    this.searchEvents();
  }

  get searchedValue(): string {
    return this._searchedValue;
  }

  constructor(private router: Router,
              private eventService: EventService) {
  }

  ngOnInit(): void {
    this.eventService.getEventList().subscribe((eventList: EventList[]) => {
      this.eventList = eventList;
      this.searchEvents();
    });
  }

  private searchEvents(): void {
    if (this.searchedValue) {
      this.searchedEventList = this.eventList.filter((event: EventList) => (<string>event.name).toLowerCase().includes(this.searchedValue.toLowerCase()));
    } else {
      this.searchedEventList = this.eventList;
    }
  }

  private onBooking(eventList: EventList): void {
    this.router.navigate(['/booking', eventList.id]);
  }


}
