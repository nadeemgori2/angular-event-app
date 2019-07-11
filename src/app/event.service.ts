import {Injectable} from '@angular/core';
import {EventList} from './event-list/models/event-list.model';
import {Observable, Subscriber} from 'rxjs';

@Injectable()
export class EventService {

  public getEventList(): Observable<EventList[]> {
    return Observable.create((subscriber: Subscriber<EventList[]>) => {
      subscriber.next(this.eventList);
      subscriber.complete();
    });
  }

  public getEventById(id: string): EventList {
    return this.eventList.filter((event: EventList) => event.id === id)[0];
  }

  private eventList: EventList[] = [
    {
      id: 'UUID1',
      name: 'Comedy Show',
      dateOfEvent: '12/08/2019',
      numberOfSeatsSvailable: 10,
      imageUrl: '../../../../assets/images/Untitled.png'
    }, {
      id: 'UUID2',
      name: 'Music Show',
      dateOfEvent: '12/08/2019',
      numberOfSeatsSvailable: 2,
      imageUrl: '../../../../assets/images/logoTEMS.jpg'
    },
    {
      id: 'UUID3',
      name: 'Art Show',
      dateOfEvent: '13/08/2019',
      numberOfSeatsSvailable: 5,
      imageUrl: '../../../../assets/images/Art-Show.png'
    }, {
      id: 'UUID4',
      name: 'Comedy Show',
      dateOfEvent: '23/08/2019',
      numberOfSeatsSvailable: 6,
      imageUrl: '../../../../assets/images/Untitled.png'
    },
    {
      id: 'UUID5',
      name: 'Workshops',
      dateOfEvent: '12/08/2019',
      numberOfSeatsSvailable: 200,
      imageUrl: '../../../../assets/images/Untitled.png'
    }, {
      id: 'UUID6',
      name: 'Meetups',
      dateOfEvent: '11/08/2019',
      numberOfSeatsSvailable: 1,
      imageUrl: '../../../../assets/images/zpTI1W5j_400x400.jpg'
    },
    {
      id: 'UUID7',
      name: 'Performances',
      dateOfEvent: '01/08/2019',
      numberOfSeatsSvailable: 3,
      imageUrl: '../../../../assets/images/images (1).jpg'
    }, {
      id: 'UUID8',
      name: 'Screening',
      dateOfEvent: '08/08/2019',
      numberOfSeatsSvailable: 70,
      imageUrl: '../../../../assets/images/Untitled.png'
    }, {
      id: 'UUID9',
      name: 'Music Show',
      dateOfEvent: '12/08/2019',
      numberOfSeatsSvailable: 48,
      imageUrl: '../../../../assets/images/logoTEMS.jpg'
    }, {
      id: 'UUID10',
      name: 'Comedy Show',
      dateOfEvent: '12/08/2019',
      numberOfSeatsSvailable: 123,
      imageUrl: '../../../../assets/images/Untitled.png'
    }, {
      id: 'UUID11',
      name: 'Comedy Show',
      dateOfEvent: '22/08/2019',
      numberOfSeatsSvailable: 23,
      imageUrl: '../../../../assets/images/Untitled.png'
    }, {
      id: 'UUID12',
      name: 'Art Show',
      dateOfEvent: '21/08/2019',
      numberOfSeatsSvailable: 9,
      imageUrl: '../../../../assets/images/Art-Show.png'
    },
    {
      id: 'UUID13',
      name: 'Comedy Show',
      dateOfEvent: '17/08/2019',
      numberOfSeatsSvailable: 2,
      imageUrl: '../../../../assets/images/Untitled.png'
    }, {
      id: 'UUID14',
      name: 'Art Show',
      dateOfEvent: '12/08/2019',
      numberOfSeatsSvailable: 55,
      imageUrl: '../../../../assets/images/Art-Show.png'
    },
    {
      id: 'UUID15',
      name: 'Comedy Show',
      dateOfEvent: '14/08/2019',
      numberOfSeatsSvailable: 100,
      imageUrl: '../../../../assets/images/Untitled.png'
    }, {
      id: 'UUID16',
      name: 'Music Show',
      dateOfEvent: '04/08/2019',
      numberOfSeatsSvailable: 23,
      imageUrl: '../../../../assets/images/logoTEMS.jpg'
    },
    {
      id: 'UUID17',
      name: 'Comedy Show',
      dateOfEvent: '02/08/2019',
      numberOfSeatsSvailable: 29,
      imageUrl: '../../../../assets/images/Untitled.png'
    }, {
      id: 'UUID18',
      name: 'Music Show',
      dateOfEvent: '12/08/2019',
      numberOfSeatsSvailable: 54,
      imageUrl: '../../../../assets/images/logoTEMS.jpg'
    },
    {
      id: 'UUID19',
      name: 'Comedy Show',
      dateOfEvent: '12/08/2019',
      numberOfSeatsSvailable: 8,
      imageUrl: '../../../../assets/images/Untitled.png'
    }, {
      id: 'UUID20',
      name: 'Art Show',
      dateOfEvent: '05/08/2019',
      numberOfSeatsSvailable: 20,
      imageUrl: '../../../../assets/images/Art-Show.png'
    }
  ];

}
